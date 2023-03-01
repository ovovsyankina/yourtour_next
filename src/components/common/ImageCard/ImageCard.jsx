import Image from "next/image";
import { string } from "prop-types";
import styles from "./ImageCard.module.scss";

const ImageCard = ({ srcImg, children }) => {
  console.log({ children });
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <div className={styles.img_gradient}></div>
        <Image
          src={srcImg}
          width="370"
          height="531"
          className={styles.img_card}
        />
      </div>
      {children}
    </div>
  );
};

ImageCard.propTypes = {};

export default ImageCard;
