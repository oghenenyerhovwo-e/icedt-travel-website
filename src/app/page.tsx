"use client";

// modules
import { useState, useEffect, useRef  } from "react";
import { motion, AnimatePresence } from "framer-motion"

// components
import { FaCheck, FaAngleLeft, FaAngleRight, FaAngleDown } from "react-icons/fa";
import Image from "next/image";

// objects, functions and assets
import {
  interestData,
  testimonials,
} from "@/utils"
import {
    group14,
    mopesaLogo,
    discoverLogo,
    visaLogo,
    paypalLogo,
    masterCardLogo,
    usaLogo,
} from "@/assets"

// css
import styles from "./home.module.css"


const Home = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const [visibleCount, setVisibleCount] = useState(1);
  const maxIndex = testimonials.length - visibleCount;

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
  
    handleResize();
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  
    const max = testimonials.length - (isLargeScreen ? 2 : 1);
  
    const next = () => {
      setIndex((prev) => (prev + 1 > max ? 0 : prev + 1));
    };
  
    if (testimonials.length > (isLargeScreen ? 2 : 1)) {
      autoplayRef.current = setInterval(() => {
        next();
      }, 5000);
    }
  
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isLargeScreen, index]);
  

  useEffect(() => {
    const updateSize = () => {
      setVisibleCount(window.innerWidth >= 768 ? 2 : 1);
    };

    updateSize(); // call once on mount

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);



  const handleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const next = () => {
    setIndex(prev => (prev + visibleCount > maxIndex ? prev : prev + visibleCount));
  };

  const prev = () => {
    setIndex(prev => (prev - visibleCount < 0 ? prev : prev - visibleCount));
  };

  

  return (
    <div>
      <div className={`${styles.home} content-grid`}>
        <section className={styles.introSection}>
          <div className={styles.introSectionTexts}>
            <h1>Find An Experience</h1>
            <p>To find you the best experiences, we will ask you a few questions to and show you experiences basd on your preferences.</p>
            <div>
              <p className="spacing-xs">How much time do you have?</p>
              <div>
                <p>A Weekend.</p>
                <p>A Week.</p>
                <p>A month.</p>
                <p>A few days, specify.</p>
              </div>
            </div>
            <p>What are your Interests?</p>
          </div>
          <div className={styles.interestSection}>
            {interestData.map((item, index) => {
              const isSelected = selectedIds.includes(item.id)

              return (
                <motion.div
                  key={item.id}
                  className={`${styles.gridItem} ${styles[item.bg]} ${isSelected ? styles.orangeOverlay : ""}`}
                  onClick={() => handleSelect(item.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {isSelected && (
                    <FaCheck className={styles.checkIcon} />
                  )}                  
                  <span>{item.label}</span>
                </motion.div>
              )
            })}
          </div>

          <div className={styles.setButton}>
            <button>Set</button>
          </div>
        </section>
        <section className={`${styles.testimonialsSection} full-width`}>
          <div className={`${styles.testimonialsSectionContainer}`}>
            <div className={styles.testimonialTitle}>
              <p>TESTIMONIALS</p>
              <h2>
                What customers <span className={styles.orangeText}>say about us.</span>
              </h2>
              <div className={styles.testimonialsControl}>
                <button 
                  onClick={prev} 
                  disabled={index === 0}
                  className={`${styles.controlBtn} ${index === 0 ? styles.disabled : ''}`}
                >
                    <FaAngleLeft />
                </button>
                <button 
                  onClick={next} 
                  disabled={index >= maxIndex}
                  className={`${styles.controlBtn} ${
                    index + visibleCount >= testimonials.length ? styles.disabled : ''
                  }`}
                >
                    <FaAngleRight />
                </button>
              </div>
            </div>

            <div className={styles.testimonialGrid}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className={styles.testimonialGroup}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  {[...Array(visibleCount)].map((_, i) => {
                    const t = testimonials[index + i];
                    if (!t) return null;
                    return (
                      <div key={t.id} className={styles.testimonialCard}>
                        <div>
                          <h4>{t.title}</h4>
                          <p className={styles.comment}>{t.comment}</p>
                        </div>
                        <div className={styles.person}>
                          <Image
                            src={t.img}
                            alt={t.name}
                            width={40}
                            height={40}
                            className={styles.avatar}
                          />
                          <span>{t.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
        <section className={styles.footer}>
          <div className={styles.contact}>
              <div className={styles.footerLinksSection}>
                <h4>Need Travelsy Help?</h4>
                <div className={styles.footerLinksContainer}>
                  <p className={styles.footerLink}>Got Questions? Call us 24/7!</p>
                  <p className={styles.footerLink}>Call Us: +254 716909 815</p>
                  <p className={styles.footerLink}>Email Us: info@travelsy.com </p>
                </div>
              </div>
              <div className={styles.footerLinksSection}>
                <h4>Contact Info:</h4>
                <div className={styles.footerLinksContainer}>
                  <p className={styles.footerLink}>2nd Floor, Fedha Plaza <br /> Westlands <br /> Nairobi, Kenya.</p>
                  <p className={styles.footerLink}>P.O Box 7231-00300 <br /> Nairobi, Kenya</p>
                </div>
              </div>
          </div>
          <div className={styles.footerLinksSection}>
              <h4>Company</h4>
              <div className={styles.footerLinksContainer}>
                <p className={styles.footerLink}>About Us</p>
                <p className={styles.footerLink}>Careers</p>
                <p className={styles.footerLink}>Terms Of Use</p>
                <p className={styles.footerLink}>Privacy Statement</p>
                <p className={styles.footerLink}>Give Us Feedback</p>
                <p className={styles.footerLink}>Partner With Us</p>
              </div>
          </div>
          <div className={styles.footerLinksSection}>
              <h4>Other Services & <br /> Support</h4>
              <div className={styles.footerLinksContainer}>
                <p className={styles.footerLink}>Rewards Program</p>
                <p className={styles.footerLink}>Partners</p>
                <p className={styles.footerLink}>Legal</p>
                <p className={styles.footerLink}>Privacy Policy</p>
                <p className={styles.footerLink}>Customer Service Help</p>
              </div>
          </div>
          <div className={styles.footerLinksSection}>
              <h4>Quick Links</h4>
              <div className={styles.footerLinksContainer}>
                <p className={styles.footerLink}>Your Account</p>
                <p className={styles.footerLink}>Camping Locations</p>
                <p className={styles.footerLink}>Activities</p>
                <p className={styles.footerLink}>Hire Equipment</p>
                <p className={styles.footerLink}>Blogs</p>
              </div>
          </div>
          <div className={styles.footerLinksSection}>
              <h4>Mailing List</h4>
              <div className={styles.footerLinksContainer}>
                <p className={`${styles.footerLink} ${styles.mailText}`}>Sign Up for our mailing lists  and get the latest
                offers and promotions  straight in your inbox.</p>
              </div>
              <div className={styles.mail}>
                <input placeholder="Your Email" />
                <button>Subscribe</button>
              </div>
          </div>
          <div>
            <Image
                src={group14}
                alt={"group14"}
                className={styles.group14Pic}
              />
          </div>
        </section>
        <section className={`${styles.paymentSection} full-width`}>
          <div className={styles.paymentSectionContainer}>
              <h2>Travelsy</h2>
              <div className={styles.paymentLogoContainer}>
                <div className={styles.paymentLogos}>
                  <Image
                    src={mopesaLogo}
                    alt={"mopesaLogo"}
                    width={50}
                    height={25}
                  />
                  <Image
                    src={discoverLogo}
                    alt={"discoverLogo"}
                    width={76}
                    height={16}
                  />
                  <Image
                    src={visaLogo}
                    alt={"visaLogo"}
                    width={42}
                    height={13}
                  />
                  <Image
                    src={paypalLogo}
                    alt={"paypalLogo"}
                    width={70}
                    height={20}
                  />
                  <Image
                    src={masterCardLogo}
                    alt={"masterCardLogo"}
                    width={34}
                    height={27}
                  />
                </div>
                <div className={styles.paymentCurrency}>
                    <div>
                        <Image
                        src={usaLogo}
                        alt={"usaLogo"}
                        width={34}
                        height={27}
                        className={styles.usaLogo}
                      />
                      <p>English (United Staes)</p>
                      <FaAngleDown />
                    </div>
                    <div>
                      <p>KES</p>
                      <FaAngleDown />
                    </div>
                </div>
              </div>
          </div>
        </section>
        <section className={styles.copyrightSection}>
          <p>Copyright © 2019 Travelsy Ltd. All rights reserved</p>
          <p>Made in Kenya by Ralak</p>
        </section>
      </div>
    </div>
  );
}

export default Home
