
// components
import Image from "next/image";

// objects, functions and assets
import {
    group14,
} from "@/assets"

// css
import styles from "./footer.module.css"


const FooterSection = () => {

  return (
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
  );
}

export default FooterSection
