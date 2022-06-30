import React, {Fragment} from "react";
import {CardTitle, CardSubtitle, CardParagraph, CardLink, CardImage} from "../../design-system/core/CardElements";

import trueClustersImage from "../../assets/images/trueClusters.png";
import kmeansClustersImage from "../../assets/images/kmeansClusters.png";
import emClustersImage from "../../assets/images/emClusters.png";

const EMClusters = () => {
  return (
    <Fragment>
      <CardTitle>Unsupervised Learning with K-means and EM Algorithms</CardTitle>
      <CardParagraph>
        In this project you can see the <CardLink href="https://en.wikipedia.org/wiki/K-means_clustering"
                                                  target="_blank">K-means</CardLink> and <CardLink
        href="https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm" target="_blank">Expectation
        Maximization (EM)</CardLink> algorithms in action.
        These two algorithms are applied when unsupervised learning clustering is needed.
        In this project there are two 2-dimensional multivariate gaussian processes.
        The data set was created from the given processes with 2,000 samples (1,000 samples for each process) and is
        shown below:
        <CardImage src={trueClustersImage} alt="true clusters"/>
        In the above image we can see the two clusters created and their centroids (or means).
      </CardParagraph>

      <CardSubtitle>K-means</CardSubtitle>
      <CardParagraph>
        k-means clustering aims to partition <var>n</var> observations into <var>k</var> clusters in which each
        observation belongs to the cluster with the nearest mean.
        The K-means algorithm was implemented with <var>k=2</var> (meaning two clusters) and the Euclidean distance
        metric and was
        run
        for 100 iterations.
        The initialization vectors were chosen randomly to be 2 different samples of the data set.
        The clusters at the end of the run are as follows:
        <CardImage src={kmeansClustersImage} alt="k-means clusters"/>
      </CardParagraph>

      <CardSubtitle>EM</CardSubtitle>
      <CardParagraph>
        The EM iteration alternates between performing an expectation (<var>E</var>) step, which creates a
        function for the expectation of the log-likelihood evaluated using the current estimate for the parameters,
        and a maximization (<var>M</var>) step, which computes parameters maximizing the expected log-likelihood found
        on the <var>E</var> step. These parameter-estimates are then used to determine the distribution of the latent
        variables in the next <var>E</var> step. The model parameters are: centroids (mean vectors), covariance matrices
        and mixing coefficients (how many samples in each cluster) The algorithm was implemented using an iteration
        formula that is consistent with diagonal covariance matrices. The clusters at the end of the run are as follows:
        <CardImage src={emClustersImage} alt="EM algorithm clusters"/>
      </CardParagraph>
      <CardParagraph>
        In both the K-means and EM we got convergence early on. The main difference is in the mean vectors. While the
        mean vector of the cluster with mean <var>μ=(3,3)</var> is similar in both algorithms, the mean
        vector <var>μ=(1,1)</var> is much
        closer on the EM algorithm. This is explained by the difference between the algorithms:
      </CardParagraph>
      <CardParagraph>
        K-means:
        <ol>
          <li>Hard assign a data point to one particular cluster on convergence.</li>
          <li>It makes use of the Euclidian distance</li>
        </ol>
      </CardParagraph>
      <CardParagraph>
        EM:
        <ol>
          <li>Soft assigns a point to clusters (so it gives a probability of any point belonging to any centroid).</li>
          <li>It doesn't depend on the Euclidian distance, but is based on the Expectation, i.e., the probability of the
            point
            belonging to a particular cluster.
          </li>
        </ol>
        This makes k-means biased towards spherical clusters.
      </CardParagraph>
      <CardParagraph>
        In conclusion, the accuracy of the k-means was lower as compared to that of the EM algorithm.The tendency of
        K-means to produce spherical clusters leads to bad results here, while EM benefits from the Gaussian
        distributions present in the data set.
      </CardParagraph>

      <CardParagraph>
        <CardLink href="https://github.com/nadavgover/Unsupervised-Learning-Clustering" target="_blank">View
          code</CardLink>, final results
        and conclusions on GitHub
      </CardParagraph>
    </Fragment>
  )
    ;
};

export default EMClusters;