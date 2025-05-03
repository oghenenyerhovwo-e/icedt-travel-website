
// components
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";

// objects, functions and assets
import {
    mopesaLogo,
    discoverLogo,
    visaLogo,
    paypalLogo,
    masterCardLogo,
    usaLogo,
} from "@/assets"

// css
import styles from "./paymentsection.module.css"


const PaymentSection = () => {

  return (
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
  );
}

export default PaymentSection
