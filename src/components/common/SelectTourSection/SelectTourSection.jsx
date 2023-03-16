import styles from "./SelectTourSection.module.scss";
import { cardsSelectTour, tabsSelectTour } from "@/utils/data";
import classNames from "classnames";
import BlockHeader from "../BlockHeader";
import ImageCard from "../ImageCard";

const SelectTourSection = () => {
  return (
    <div className={styles.root} id="selectTour">
      <div className={styles.selectTour_window}>
        <BlockHeader title="Выбери свой тур" description="" />
        <div className={styles.tabs_items}>
          {tabsSelectTour.map((tab) => (
            <div
              key={tab.index}
              className={classNames(styles.tab_item, {
                [styles.active_button]: tab.isActive,
              })}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className={styles.image_cards}>
          {cardsSelectTour.map((card) => (
            <ImageCard key={card.index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SelectTourSection;
