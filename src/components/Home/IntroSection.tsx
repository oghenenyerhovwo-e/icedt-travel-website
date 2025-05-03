"use client";

// modules
import { useState } from "react";
import { motion } from "framer-motion"

// components
import { FaCheck } from "react-icons/fa";

// objects, functions and assets
import {
  interestData,
} from "@/utils"

// css
import styles from "./introsection.module.css"


const IntroSection = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const handleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }
  

  return (
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
  );
}

export default IntroSection
