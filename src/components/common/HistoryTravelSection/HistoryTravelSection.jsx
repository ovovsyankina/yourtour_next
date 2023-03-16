import styles from "./HistoryTravelSection.module.scss";
import { cardsHistoryTour } from "@/utils/data";
import BlockHeader from "../BlockHeader";
import StoryCard from "../StoryCard";

const HistoryTravelSection = () => {
  return (
    <div className={styles.root} id="historyTravel">
      <div className={styles.historyTravel_window}>
        <BlockHeader
          title="Истории путешествий"
          description="
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров
          "
        />
        <div className={styles.image_cards}>
          {cardsHistoryTour.map((card) => (
            <StoryCard key={card.index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTravelSection;
