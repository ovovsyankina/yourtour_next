import Image from "next/image";
import { object, string } from "prop-types";
import styles from "./ImageCard.module.scss";

const ImageCard = ({ srcImg, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <div className={styles.img_gradient}></div>
        <Image
          src={srcImg}
          alt={srcImg}
          width="370"
          height="531"
          className={styles.img_card}
        />
      </div>
      {children}
    </div>
  );
};

ImageCard.propTypes = { srcImg: string, children: object };

export default ImageCard;
