import styles from "./TravelPhotosSection.module.scss";
import { imgTravelPhoto } from "@/utils/data";
import classNames from "classnames";
import Image from "next/image";
import BlockHeader from "../BlockHeader/BlockHeader";

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
              <div
                key={img.index}
                className={classNames(styles.img_card, {
                  [styles.img_card_small]: img.smallImage,
                  [styles.img_card_Tablenone]: img.noneTablet,
                  [styles.img_card_Mobilenone]: img.noneMobile,
                })}
              >
                <Image
                  src={img.srcImg}
                  alt={img.srcImg}
                  fill
                  className={styles.img}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TravelPhotosSection;
