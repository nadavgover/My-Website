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
    const SERVER_URL = 'https://web-push-nadav.herokuapp.com/save-subscription'
    const response = await fetch(SERVER_URL, {
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

  self.addEventListener("push", function(event) {
    if (event.data) {
      console.log("Push event!! ", event.data.text());
      showLocalNotification("Check out this new car!", event.data.text(),  self.registration);
    } else {
      console.log("Push event but no data");
    }
  });
  const showLocalNotification = (title, body, swRegistration) => {
    const options = {
      body
      // here you can add more properties like icon, image, vibrate, etc.
    };
    swRegistration.showNotification(title, options);
  };

  self.addEventListener('notificationclick', function(event) {
    let url = 'https://nadavgo.onelink.me/DWkr/58a6358b';
    event.notification.close(); // Android needs explicit close.
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
});