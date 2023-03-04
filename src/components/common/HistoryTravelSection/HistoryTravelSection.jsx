import styles from "./HistoryTravelSection.module.scss";
import { cardsHistoryTour } from "@/utils/data";
import BlockHeader from "../BlockHeader/BlockHeader";
import StoryCard from "../StoryCard/StoryCard";

const HistoryTravelSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.historyTravel_window}>
        <BlockHeader
          title="Истории путешествий"
          description={
            <>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров
            </>
          }
        />
        <div className={styles.image_cards}>
          {cardsHistoryTour.map((card) => {
            return (
              <StoryCard
                key={card.index}
                srcImg={card.srcImg}
                title={card.title}
                description={card.description}
                descriptionDop={card.descriptionDop}
                socialNetwork={card.socialNetwork}
                width="1170"
                height="567"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HistoryTravelSection;
