import { socialNetwork } from "@/utils/data";
import Image from "next/image";
import styles from "./FooterSection.module.scss";

const FooterSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.footer_window}>
        <div className={styles.footer_name}>Наши социальные сети</div>
        <div className={styles.social_networks}>
          {socialNetwork.map((network) => {
            return (
              <div key={network.index} className={styles.network_item}>
                <Image
                  src={network.srcImg}
                  alt={network.srcImg}
                  width="26"
                  height="26"
                  className={styles.network_icon}
                />
                <div className={styles.network_title}>{network.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
