// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
const urlB64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
    const rawData = atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }
  // saveSubscription saves the subscription to the backend
  const saveSubscription = async subscription => {
    const save_subscription_endpoint = 'https://web-push-nadav.herokuapp.com/save-subscription'
    const response = await fetch(save_subscription_endpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    })
    return response.json()
  }

  self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    try {
      const applicationServerKey = urlB64ToUint8Array(
        'BP2uc_u0fMtHUQwqfX7fiPIqfPin50K6PmYH0_ygoZ9N7wcooEbSvHCYWAtMeUyskZVppBBjl3ITjAfONn7QTj4'
      )
      const options = { applicationServerKey, userVisibleOnly: true }
      const subscription = await self.registration.pushManager.subscribe(options)
      console.log(subscription)
      const response = await saveSubscription(subscription)
      console.log(response)
    } catch (err) {
      console.log('Error', err)
    }
  })

  const updateShownCounter = async () => {
    const shown_notification_endpoint = 'https://web-push-nadav.herokuapp.com/shown-notifications-counter'
    const response = await fetch(shown_notification_endpoint, {
      method: 'post'
    })
    return response.json()
  }

  const updateClickedCounter = async () => {
    const clicked_notification_endpoint = 'https://web-push-nadav.herokuapp.com/clicked-notifications-counter'
    const response = await fetch(clicked_notification_endpoint, {
      method: 'post'
    })
    return response.json()
  }

  const updateClosedCounter = async () => {
    const closed_notification_endpoint = 'https://web-push-nadav.herokuapp.com/dismissed-notifications-counter'
    const response = await fetch(closed_notification_endpoint, {
      method: 'post'
    })
    return response.json()
  }

  self.addEventListener("push", async function(event) {
    if (event.data) {
      console.log("Push event!! ", event.data.text());
      showLocalNotification("Check out this new car!", event.data.text(),  self.registration);
      const response = await updateShownCounter()
    } else {
      console.log("Push event but no data");
    }
  });
  const showLocalNotification = (title, body, swRegistration) => {
    const options = {
      body: body,
      icon: 'https://media.glassdoor.com/sqll/848476/appsflyer-squarelogo-1576132121964.png',
      image: 'https://massets.appsflyer.com/wp-content/uploads/2019/10/26232810/OneLink-logo.png',
      badge: 'https://www.freeiconspng.com/uploads/aotu-car-small-car-transportation-wheel-icon--12.png',
      vibrate: [200, 200, 200, 200, 200, 200, 200],
      actions: [
        {action: 'Ferrari', title: 'Ferrari', icon: 'https://cdn.iconscout.com/icon/free/png-512/ferrari-16-569500.png'},
        {action: 'Ford', title: 'Ford', icon: 'https://image.flaticon.com/icons/png/512/806/806092.png'}]
      
    };
    swRegistration.showNotification(title, options);
  };

  self.addEventListener('notificationclick', async function(event) {
    let url = 'https://nadavgo.onelink.me/DWkr/58a6358b';
    event.notification.close(); // Android needs explicit close.
    
    if (event.action === 'Ferrari' || event.action === 'Ford') {
      console.log(`${event.action} clicked`);
    }
    else {
      console.log('Clicked but not on CTA');
    }

    event.waitUntil(
        clients.matchAll({type: 'window'}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
  const response = await updateClickedCounter();
});

// self.addEventListener('notificationclose', (event) => {
  // console.log('handle close with arrow');
// }, false);

self.addEventListener('notificationclose', async function(event) {
  console.log("closed");
  const response = await updateClosedCounter();
});

// self.onnotificationclose = function(event) {
//   console.log('On notification close: ', event.notification.tag);
// };