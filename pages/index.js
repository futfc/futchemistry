import Head from "next/head";

import {
  ContactSection,
  FeatureSection,
  FooterSection,
  HeaderSection,
  HeroSection,
} from "../components";
import {
  Features,
  FooterNavigation,
  FooterSocials,
  HeaderNavigation,
  Links,
} from "../data";

function Home() {
  return (
    <>
      <Head>
        <title>FUT Chemistry, FUT 24, FC 24 chemistry optimizer </title>
      </Head>
      <HeaderSection navigation={HeaderNavigation} />
      <HeroSection downloadLink={Links.download} />
      <FeatureSection downloadLink={Links.download} features={Features} />
      <ContactSection mailLink={Links.mail} />
      <FooterSection navigation={FooterNavigation} socials={FooterSocials} />
    </>
  );
}

export default Home;
