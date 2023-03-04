import styles from "./ContactSection.module.scss";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contact_window}>
        <Image
          src="/image/contact_foto.jpg"
          alt="contact_foto"
          width="370"
          height="370"
          className={styles.contact_img}
        />
        <div className={styles.contact_info}>
          <div className={styles.contact_header}>
            Пора в путешествие вместе с нами!
          </div>
          <div className={styles.contact_email}>
            Напиши на почту и узнай подробности на{" "}
            <span className={styles.contact_email_black}>
              yourtour@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
