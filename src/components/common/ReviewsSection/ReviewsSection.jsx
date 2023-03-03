import styles from "./ReviewsSection.module.scss";
import BlockHeader from "../BlockHeader/BlockHeader";
import ReviewsCard from "../ReviewsCard/ReviewsCard";

const ReviewsSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.reviews_window}>
        <BlockHeader
          title="Отзывы наших путешественников"
          description={
            <>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров
            </>
          }
        />
        <div className={styles.reviews_cards}>
          <ReviewsCard
            author="Мария"
            imgAuthor="/image/svg/review_photo_maria.svg"
            nameTour="Тур: Вдали от дома "
            review={
              <>
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров обеспечивает широкому кругу (специалистов)
                участие в формировании новых предложений. Идейные соображения
                высшего порядка, а также начало повседневной работы по
                формированию позиции позволяет оценить значение модели развития.
              </>
            }
          />
          <ReviewsCard
            author="Павел"
            imgAuthor="/image/svg/review_photo_pavel.svg"
            nameTour="Тур: Путешествие в горы "
            review={
              <>
                Равным образом постоянный количественный рост и сфера нашей
                активности играет важную роль в формировании системы обучения
                кадров, соответствует насущным потребностям.
                <br />
                <br />
                Значимость этих проблем настолько очевидна, что дальнейшее
                развитие различных форм деятельности обеспечивает широкому кругу
                (специалистов) участие в формировании новых предложений.
                Повседневная практика показывает, что реализация намеченных
                плановых заданий в значительной степени обуславливает создание
                модели развития.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
