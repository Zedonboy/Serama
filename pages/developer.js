import Contact from "../components/Contact";
import BlogSection from "../components/developer_page_component/BlogSection";
import ContactMap from "../components/developer_page_component/ContactMap";
import Faq from "../components/developer_page_component/Faq";
import Features from "../components/developer_page_component/Features";
import DHero from "../components/developer_page_component/Hero";
import WhyUs from "../components/developer_page_component/WhyUs";
import Footer from "../components/Footer";

export default function Developer() {
  return (
    <>
      <DHero />
      {/* <Contact /> */}
      <ContactMap/>
      <WhyUs/>
      <Features/>
      <BlogSection/>
      <Faq/>
      <Footer/>
    </>
  );
}
