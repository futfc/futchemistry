import Head from "next/head";

import {
  ContactSection,
  FaqSection,
  FooterSection,
  HeaderSection,
} from "../components";
import {
  Faqs,
  FooterNavigation,
  FooterSocials,
  HeaderNavigation,
  Links,
} from "../data";

function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ &#8211; FUT Chemistry | Boost FUT Squad, optimizer FUT Squad</title>
      </Head>
      <HeaderSection navigation={HeaderNavigation} />
      <FaqSection faqs={Faqs} />
      <ContactSection mailLink={Links.mail} />
      <FooterSection navigation={FooterNavigation} socials={FooterSocials} />
    </>
  );
}

export default FAQ;
