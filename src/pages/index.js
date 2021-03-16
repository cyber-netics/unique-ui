import React from "react";
import styled from "styled-components";

import Particles from "../components/Particle";
import bgimage from "../img/bg-primary.png";
import Bgsecimg from "../assets/svg/bg.svg";

const Page = styled.div`
  border-color: transparent !important;
  background: #230080;
  background: linear-gradient(135deg, #230080, #a614a3 70%, #e31eb4);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#230080",endColorstr="#e31eb4",GradientType=1);
  z-index: 0;
`;

const PageBackground = styled.div`
  background-image: url(${bgimage});
  background-attachment: scroll;
  background-clip: border-box;
  background-origin: padding-box;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  bottom: 0;
  content: "";
  opacity: 0.5;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const IndexPage = () => {
  return (
    <Page>
      <PageBackground />
      <Particles />
      <Bgsecimg />
    </Page>
  );
};

export default IndexPage;
