import styles from "./ReviewsCard.module.scss";
import Image from "next/image";
import { object, string } from "prop-types";

const ReviewsCard = ({ author, imgAuthor, nameTour, review }) => {
  return (
    <div className={styles.root}>
      <div className={styles.review}>{review}</div>
      <div className={styles.review_author}>
        <div className={styles.info_author}>
          <div className={styles.name_author}>{author}</div>
          <div className={styles.name_tour}>{nameTour}</div>
        </div>
        <Image
          src={imgAuthor}
          alt={imgAuthor}
          width="75"
          height="75"
          className={styles.img_author}
        />
      </div>
    </div>
  );
};

ReviewsCard.propTypes = {
  author: string,
  imgAuthor: string,
  nameTour: string,
  review: object,
};

export default ReviewsCard;
