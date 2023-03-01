import { cardsImgSelectTour, tabsSelectTour } from "@/utils/data";
import classNames from "classnames";
import Image from "next/image";
import BlockHeader from "../BlockHeader/BlockHeader";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./WindowSelectTour.module.scss";

const WindowSelectTour = () => {
  return (
    <div className={styles.root}>
      <div className={styles.selectTour_window}>
        <BlockHeader title="Выбери свой тур" description="" />
        <div className={styles.tabs_items}>
          {tabsSelectTour.map((tab) => {
            return (
              <div
                key={tab.index}
                className={classNames(styles.tab_item, {
                  [styles.active_button]: tab.isActive,
                })}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div className={styles.image_cards}>
          {cardsImgSelectTour.map((card) => {
            return (
              <ImageCard srcImg={card.srcImg} key={card.index}>
                <div className={styles.card_children}>
                  <div>
                    <p className={styles.name_tour}>Путешествие в горы</p>
                    <p className={styles.prise_tour}>от 80 000 руб</p>
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
              </ImageCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WindowSelectTour;
