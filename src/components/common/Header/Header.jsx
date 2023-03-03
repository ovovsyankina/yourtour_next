import styles from "./Header.module.scss";
import Image from "next/image";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.header_img}
        src="/image/header_img.png"
        alt="header_img"
        fill
        priority
      />
      <Nav />
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
  );
};
export default Header;
