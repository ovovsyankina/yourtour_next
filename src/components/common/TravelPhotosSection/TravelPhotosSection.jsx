import { imgTravelPhoto } from "@/utils/data";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useRef } from "react";
import BlockHeader from "../BlockHeader/BlockHeader";
import styles from "./TravelPhotosSection.module.scss";

const TravelPhotosSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.travelPhoto_window}>
        <BlockHeader
          title="Фотографии путешествий"
          description={
            <>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров
            </>
          }
        />
        <div className={styles.travel_photos}>
          {imgTravelPhoto.map((img) => {
            return (
              <Image
                src={img.srcImg}
                alt={img.srcImg}
                key={img.index}
                width="442"
                height="301"
                className={classNames(styles.img_card, {
                  [styles.img_card_small]: img.smallImage,
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TravelPhotosSection;
