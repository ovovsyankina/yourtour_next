import styles from "./SelectTourSection.module.scss";
import { cardsSelectTour, tabsSelectTour } from "@/utils/data";
import classNames from "classnames";
import BlockHeader from "../BlockHeader/BlockHeader";
import ImageCard from "../ImageCard/ImageCard";

const SelectTourSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.selectTour_window}>
        <BlockHeader title="Выбери свой тур" description={<></>} />
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
          {cardsSelectTour.map((card) => {
            return (
              <ImageCard
                key={card.index}
                srcImg={card.srcImg}
                title={card.title}
                description={card.description}
                // width="370"
                // height="531"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SelectTourSection;
