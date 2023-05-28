import React from "react";
import Carousel from "react-elastic-carousel";

import vueLogo from "../../../assets/imagens/vue-logo.png"
import nodeLogo from "../../../assets/imagens/node-logo.png";
import githubLogo from "../../../assets/imagens/github-logo.png";
import angularLogo from "../../../assets/imagens/angular-logo.png";
import bitbucketLogo from "../../../assets/imagens/bucket-logo.jpg";

import "./BannerCarousel.scss"

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 4, itemsToScroll: 4 },
	{ width: 768, itemsToShow: 6 },
	{ width: 1200, itemsToShow: 10 }
];

export const BannerCarousel = () => {

	return (
		<div className="banner-carousel">
			<Carousel breakPoints={breakPoints}>
				<img src={vueLogo} alt="minibaner-topo" />
				<img src={nodeLogo} alt="minibaner-topo" />
				<img src={githubLogo} alt="minibaner-topo" />
				<img src={angularLogo} alt="minibaner-topo" />
				<img src={bitbucketLogo} alt="minibaner-topo" />

				<img src={vueLogo} alt="minibaner-topo" />
				<img src={nodeLogo} alt="minibaner-topo" />
				<img src={githubLogo} alt="minibaner-topo" />
				<img src={angularLogo} alt="minibaner-topo" />
				<img src={bitbucketLogo} alt="minibaner-topo" />
			</Carousel>
		</div>
	);
}
