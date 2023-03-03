import { cardsImgHistoryTour } from "@/utils/data";
import Image from "next/image";
import BlockHeader from "../BlockHeader/BlockHeader";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./WindowHistoryTravel.module.scss";

const WindowHistoryTravel = () => {
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
          {cardsImgHistoryTour.map((card) => {
            return (
              <ImageCard srcImg={card.srcImg} key={card.index}>
                <div>
                  <div className={styles.card_children}>
                    <p className={styles.name_tour}>Автостопом в Стамбул</p>
                    <p className={styles.prise_tour}>
                      Идейные соображения высшего порядка, а также рамки и место
                      обучения кадров обеспечивает широкому кругу (специалистов)
                      участие в формировании новых предложений: вкусная еда
                      дешевый транспорт красивый город.
                    </p>
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

export default WindowHistoryTravel;
