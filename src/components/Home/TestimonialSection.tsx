"use client";

// modules
import { useState, useEffect, useRef  } from "react";
import { motion, AnimatePresence } from "framer-motion"

// components
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";

// objects, functions and assets
import {
  testimonials,
} from "@/utils"

// css
import styles from "./testimonial.module.css"


const TestimonialSection = () => {
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

  const next = () => {
    setIndex(prev => (prev + visibleCount > maxIndex ? prev : prev + visibleCount));
  };

  const prev = () => {
    setIndex(prev => (prev - visibleCount < 0 ? prev : prev - visibleCount));
  };

  

  return (
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
  );
}

export default TestimonialSection
