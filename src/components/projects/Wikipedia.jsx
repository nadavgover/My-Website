import React, {Fragment} from "react";
import {CardTitle, CardParagraph, CardLink} from "../../design-system/core/CardElements";

const Wikipedia = () => {
  return (
    <Fragment>
      <CardTitle variant="h1">Wikipedia Game</CardTitle>
      <CardParagraph variant="h3">
        The rules of the wikipepdia game are simple. Players start on a randomly selected Wikipedia page and must
        navigate to another given page only, by clicking links in the current article.
        The goal is to arrive at the destination page with the fewest number of clicks (steps) and in the least amount
        of time.
      </CardParagraph>
      <CardParagraph variant="h3">
        This project is all about winning this game. Given a source page and a destination page, the program yields
        the shortest path between them.
        And when you say shortest path, you say <CardLink href="https://en.wikipedia.org/wiki/Breadth-first_search"
                                                          target="_blank">Breadth-First Search
        (BFS)</CardLink> algorithm.
        And indeed this project was implemented with the BFS algorithm and using linked lists with Python.
      </CardParagraph>
      <CardParagraph variant="h3">
        The BFS algorithm finds the shortest path from a node in a tree to another node. For that we need a tree and
        to define what each node is.
        So each node in the tree is a wikipedia page, the root of the tree being the source page, and the descendents
        of each node are the links in its wikipedia page.
        Also, in BFS there is a use of queue, so the queue was implemented with a linked list.
        The algorithm guarentees to yield the shortest path but there might be more than one path with the same
        length.
      </CardParagraph>
      <CardParagraph variant="h3">
        <CardLink href="https://github.com/nadavgover/Wikipedia-Game" target="_blank">View code</CardLink> on GitHub
      </CardParagraph>
      <CardParagraph variant="h3">
        <CardLink href="https://repl.it/@NadavGover/Wikipedia-Game" target="_blank">Try it yourself</CardLink>, just
        press the
        green
        run button
      </CardParagraph>
    </Fragment>
  );
};

export default Wikipedia;