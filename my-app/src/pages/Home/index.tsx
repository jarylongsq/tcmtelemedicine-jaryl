import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import QuestionContent from "../../content/Questions.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="doctor.svg"
        id="intro"
      />
      <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="about.svg"
        id="about"
      />
      <ContentBlock
        type="left"
        title={QuestionContent.title}
        content={QuestionContent.text}
        section={QuestionContent.section}
        icon="questions.svg"
        id="question"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        link={ProductContent.link}
        icon="product.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
