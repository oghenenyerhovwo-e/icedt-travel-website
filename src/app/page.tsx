
// components
import {
  IntroSection,
  TestimonialSection,
  FooterSection,
  PaymentSection,
  CopyrightSection,
} from "@/components"

// css
import styles from "./home.module.css"


const Home = () => {

  return (
    <div>
      <div className={`${styles.home} content-grid`}>

        <IntroSection />

        <TestimonialSection />

        <FooterSection />

        <PaymentSection />

        <CopyrightSection />
        
      </div>
    </div>
  );
}

export default Home
