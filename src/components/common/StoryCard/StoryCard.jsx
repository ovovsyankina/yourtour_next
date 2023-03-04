import Image from "next/image";
import { array, string } from "prop-types";
import styles from "./StoryCard.module.scss";

const StoryCard = ({
  srcImg,
  title,
  description,
  descriptionDop,
  socialNetwork,
  width,
  height,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <div className={styles.img_gradient} />
        <Image
          src={srcImg}
          alt={srcImg}
          width={width}
          height={height}
          className={styles.img_card && styles.size_tour}
        />
      </div>
      <div className={styles.card_children}>
        <div>
          <p className={styles.name_tour}>{title}</p>
          <div className={styles.description_tour}>
            {description}

            {descriptionDop && (
              <ul className={styles.ul_dop}>
                {descriptionDop.map((dopInfo, i) => {
                  return <li key={i}>{dopInfo}</li>;
                })}
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
            {socialNetwork && (
              <div className={styles.social_networks}>
                {socialNetwork.map((social, i) => {
                  return (
                    <p key={i} className={styles.social_item}>
                      {social}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

StoryCard.propTypes = {
  srcImg: string,
  title: string,
  description: string,
  descriptionDop: array,
  width: string,
  height: string,
  socialNetwork: array,
};

export default StoryCard;
