import styles from "./HeaderSection.module.scss";
import Image from "next/image";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";

const HeaderSection = ({ isFixedMenu }) => {
  console.log(isFixedMenu);
  return (
    <>
      <div className={styles.root}>
        <Image
          className={styles.header_img}
          src="/image/header_img.jpg"
          alt="header_img"
          fill
          priority
        />
        {isFixedMenu ? (
          <Nav srcImg="/image/svg/logoFix_yourTour.svg" isFix />
        ) : (
          <Nav srcImg="/image/svg/logo_yourTour.svg" />
        )}
        <div className={styles.header_bottom}>
          <h1 className={styles.header_slogan}>
            Идеальные путешествия существуют
          </h1>
          <p className={styles.header_description}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>
          <Button
            title="Найти тур"
            type="submit"
            className={styles.button_searchTour}
          />
        </div>
      </div>
    </>
  );
};
export default HeaderSection;
