import React, {Fragment} from "react";
import {CardTitle, CardSubtitle, CardParagraph, CardCode, CardImage, CardLink} from "../../design-system/core/CardElements";
import splitwiseImage from "../../assets/images/fordFelkerson.png";

const Splitwise = () => {
  return (
    <Fragment>
      <CardTitle>Split Expenses With Ford-Fulkerson</CardTitle>
      <CardSubtitle>Background</CardSubtitle>
      <CardParagraph>
        You are Dan. You live in an appartment with 3 roommates. Alice is paying the electricity bill, Bob is paying the
        water bill,
        Carol is paying for the new lights in your balcony and you just went and got groceries for dinner.
        The end of the month is here and you want everyone to pay equally so everything will be fair. Unfortunately not
        everybody paid the same
        amount and it could be pretty annoying to calculate how much someone needs to pay to somebody else. Worry not!
        This is what this app is for! We will
        split the expenses equally, and in a pretty cool way. Actuallt this problem is NP-complete, so check out how it
        is done.
      </CardParagraph>

      <CardSubtitle>How Do You Split the Expenses?</CardSubtitle>
      <CardParagraph>
        Great question. In the big picture we build a graph where each node is a person and each edge is the amount he
        needs to pay/get. Then apply the
        Ford-Fulkerson algorithm to find the max flow and the way that money flows through the graph. And that's it.
        Are you ready to dive to the small picture? Here we go.
        So how to build the graph exactly? Let's explain that with an example. So let's assume Alice paid 50$, Bob paid
        30$, Carol 15$ and Dan paid 5$.
        So in order to build the graph we need to:
        <ol>
          <li>
            Calculate the total amount paid.
            <CardCode> Amount = 50 + 30 + 15 + 5 = 100</CardCode>
          </li>
          <li>
            Calculate how much money each person should have paid.
            <CardCode> DuePerPerson = Amount / #people = 100 / 4 = 25</CardCode>
          </li>
          <li>
            Calculate the difference between the amount paid by each person and the DuePerPerson.
            <CardCode> diff(Alice) = 50 - 25 = 25 </CardCode>
            <CardCode> diff(Bob) = 30 - 25 = 5 </CardCode>
            <CardCode> diff(Carol) = 15 - 25 = -10 </CardCode>
            <CardCode> diff(Dan) = 5 - 25 = -20 </CardCode>
          </li>
          <li>
            Create a node in the graph for each person.
          </li>
          <li>
            Create an edge with infinte capacity that connects each person to the other people in the graph.
          </li>
          <li>
            For each diff calculated (at stage 3), if the value is negative, it means the person still needs to
            reimburse someone: we add an inward
            edge to the person with the capacity equall to diff (absolute value of diff). This represents an inward flow
            of money into the network. Else,
            we create an outward edge with capacity equal to diff. This will represent the outward flow of money from
            the graph. That way we make sure
            each person pays the right amount.
          </li>
          <li>
            Applying the Ford-Fulkerson algorithm will result in multiple paths that represent the flow of money from
            one person to another,
            which is equivalent to dividing the expenses equally between everybody.
            But (!), the Ford-Fulkerson algorithm works with one source node and one sink node, and here we may have
            more than one person who owes money
            (multiple sources), and more than one person who needs to get money back (multiple sinks). In order to solve
            that we create one big source that connects
            to all the small original sources (people who owe money), and similarly we create one big sink that connects
            to all other small sinks
            (people who need to get money back).
          </li>
        </ol>

        And the results are pretty cool:

        <CardImage src={splitwiseImage} alt="Split expenses with Ford-Fulkerson"/>

        Alice gets 15$ from Dan and 10$ from Carol, Bob gets 5$ from Dan.
        Nice!
      </CardParagraph>

      <CardParagraph>
        <CardLink href="https://github.com/nadavgover/Splitwise" target="_blank">View code</CardLink> on GitHub.
      </CardParagraph>
    </Fragment>
  );
};

export default Splitwise;
