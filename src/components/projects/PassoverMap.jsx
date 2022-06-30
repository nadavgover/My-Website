import React, {Fragment} from "react";
import {CardTitle, CardParagraph, CardLink} from "../../design-system/core/CardElements";

const PassoverMap = () => {
  return (
    <Fragment>
      <CardTitle>Seat Map</CardTitle>
      <CardParagraph>
        In the <CardLink href="https://en.wikipedia.org/wiki/Bin_packing_problem" target="_blank">Bin Packing
        Problem</CardLink> items of different volumes must be packed into a finite number of bins or containers each of
        volume V in a way that minimizes the number of bins used. It differs from the <CardLink
        href="https://en.wikipedia.org/wiki/Knapsack_problem">multiple knapsack
        problem</CardLink> in that all items have to be packed to certain bins, whereas, in the multiple knapsack
        problem a subset of items
        can be selected.
      </CardParagraph>
      <CardParagraph>
        The motivation for this project is to optimally place guests in an event with limited amount of tables.
        To make an analogy to the bin packing problem, the tables are the bins and the guests are the items. This
        problem is known to be NP-hard.
        To implement this with a short run time there was a use of <CardLink
        href="https://en.wikipedia.org/wiki/Dynamic_programming" target="_blank">dynamic programming</CardLink>.
        A matrix with rows representing the guests and columns representing the tables was implemented. Each entry
        in the matrix is the amount of guests that could be placed with the current tables set.
      </CardParagraph>
      <CardParagraph>
        Each guest may have a constraint or multiple constraints. For example, a guest can ask to be in a certain table
        or to sit next to some other guest.
        Perhaps the guest requires a wheel chair and not all tables have that option. And many other constraints that
        were not mentioned here.
      </CardParagraph>
      <CardParagraph>
        All of this, the dynamic programming (dp) matrix takes into account and yields the best result
        with run time of <var>O(number of guests + number of tables)</var>.
      </CardParagraph>
      <CardParagraph>
        Bonus fact: This project is actually used in practice to place guests in the passover "seder" of Kibbutz Maagan
        Michael.
      </CardParagraph>
      <CardParagraph>
        <CardLink href="https://github.com/nadavgover/Passover-Map" target="_blank">View code</CardLink> on GitHub
      </CardParagraph>
    </Fragment>
  );
};

export default PassoverMap;
