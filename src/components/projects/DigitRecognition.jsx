import React, {Fragment} from "react";
import {CardTitle, CardParagraph, CardLink, CardImage} from "../../design-system/core/CardElements";
import mnistImage from "../../assets/images/mnistMisclassification.png";

const DigitRecognition = () => {
  return (
    <Fragment>
      <CardTitle>Digit Recognition</CardTitle>
      <CardParagraph>
        This project is divided in to two parts.
        In the first part there was a use of a multi-class perceptron classifier. A multi-class perceptron classifier is
        the extension of the <CardLink href="https://en.wikipedia.org/wiki/Perceptron#Learning_algorithm"
                                       target="_blank">Perceptron Learning Algorithm</CardLink> (PLA) for binary
        classification.
        One-vs-all strategy was used which means each class was trained to identify if the input is from its class or
        not (binary classification).
        The input, in this case (so as in the second part of this project), was the MNIST data set which is constructed
        out of 70,000 images of hand written digits between 0-9. This means that for the multi-class classifier 10
        different classes were trained (1 for each digit).
        To then predict the input image correctly, the label that gets the highest confidence is the prediction.
      </CardParagraph>
      <CardParagraph>
        Since the input data is not linearly separable, PLA will never terminate, and its behavior can become quite
        unstable, and can jump from a good perceptron to a very bad one within one update.
        To overcome this, the <CardLink href="https://en.wikipedia.org/wiki/Perceptron#Variants" target="_blank">pocket
        algorithm</CardLink> was used. This algorithm keeps 'in its pocket' the best weight vector encountered up to
        iteration t in PLA.
        In the end, the best weight vector will be reported as the final hypothesis.
      </CardParagraph>
      <CardParagraph>
        In the second part of the project a <CardLink
        href="https://en.wikipedia.org/wiki/Multinomial_logistic_regression" target="_blank">Softmax
        Regression</CardLink> was applied on the MNIST dataset.
        Softmax regression (or multinomial logistic regression) is a generalization of logistic regression to the case
        where we want to handle multiple classes.
        The cost function is the <CardLink href="https://en.wikipedia.org/wiki/Cross_entropy" target="_blank">cross-entropy
        error</CardLink> but generalized to K classes.
        The composition function is the <CardLink href="https://en.wikipedia.org/wiki/Sigmoid_function"
                                                  target="_blank">sigmoid</CardLink> function. Since zero valued inputs
        can artificially kill weight updates, the inputs were scaled to be between 0.01 to 1 and not 0 to 1.
        The weights were updated using <CardLink href="https://en.wikipedia.org/wiki/Gradient_descent" target="_blank">gradient
        descent</CardLink>.
      </CardParagraph>
      <CardParagraph>
        Just to demonstrate one of the difficulties of this classifier, look at the following image and see how similar
        9 can be to 4, for example:
        <CardImage src={mnistImage} alt="mnist misclassification"/>

        In the above image there is an example of misclassification. The predicted class is 9 and the actual class is 4.
        This image would most likely be interpreted for a human reader as either a 4 or a 9 (perhaps even tending more
        to 9 as classified) and maybe the reader will need a context to understand.
        This image comes to demonstrate the difficulty of a human reader to distinguish between these two classes so all
        the more so to a computer and all the more so to a computer without a context.
      </CardParagraph>
      <CardParagraph>
        <CardLink href="https://github.com/nadavgover/Digit-Recognition/" target="_blank">View code</CardLink>, final
        reults and conclusions on GitHub
      </CardParagraph>
      <CardParagraph>
        <CardLink href="https://repl.it/@NadavGover/Digit-Recognition" target="_blank">Try it yourself</CardLink> just
        press the green run button
      </CardParagraph>
    </Fragment>
  );
};

export default DigitRecognition;