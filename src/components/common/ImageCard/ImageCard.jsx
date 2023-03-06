import Image from "next/image";
import { string } from "prop-types";
import styles from "./ImageCard.module.scss";

const ImageCard = ({ srcImg, title, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <div className={styles.img_gradient} />
        <Image
          src={srcImg}
          alt={srcImg}
          className={styles.img_card && styles.size_tour}
          sizes="48vw"
          fill
        />
      </div>
      <div className={styles.card_children}>
        <div>
          <p className={styles.name_tour}>{title}</p>
          <div className={styles.prise_tour}>{description}</div>
        </div>
        <div className={styles.expand}>
          <p className={styles.detailed}>Подробнее</p>
          <Image
            src="/image/svg/arrow_detailed.svg"
            alt="arrow_detailed"
            width="22"
            height="16"
          />
        </div>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  srcImg: string,
  title: string,
  description: string,
};

export default ImageCard;
