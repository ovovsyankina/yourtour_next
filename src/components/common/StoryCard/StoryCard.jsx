import styles from "./StoryCard.module.scss";
import Image from "next/image";
import { object } from "prop-types";

const StoryCard = ({ card }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <div className={styles.img_gradient} />
        <Image
          src={card.srcImg}
          alt={card.srcImg}
          fill
          className={styles.img_card && styles.size_tour}
        />
      </div>
      <div className={styles.card_children}>
        <div>
          <p className={styles.name_tour}>{card.title}</p>
          <div className={styles.description_tour}>
            {card.description}

            {card.descriptionDop && (
              <ul className={styles.ul_dop}>
                {card.descriptionDop.map((dopInfo, i) => (
                  <li key={i}>{dopInfo}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={styles.bottom_block}>
          <div className={styles.expand}>
            <p className={styles.detailed}>Подробнее</p>
            <Image
              src="/image/svg/arrow_detailed.svg"
              alt="arrow_detailed"
              width="22"
              height="16"
            />
          </div>
          <div>
            {card.socialNetwork && (
              <div className={styles.social_networks}>
                {card.socialNetwork.map((social, i) => (
                  <p key={i} className={styles.social_item}>
                    {social}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

StoryCard.propTypes = {
  card: object,
};

export default StoryCard;
