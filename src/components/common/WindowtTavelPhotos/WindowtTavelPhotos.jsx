import { screenWidth } from "@/utils/data";
import { useEffect, useRef } from "react";
import BlockHeader from "../BlockHeader/BlockHeader";
import styles from "./WindowtTavelPhotos.module.scss";

const WindowtTavelPhotos = () => {
  //   useEffect(() => {
  //     window.addEventListener("resize", () => console.log(window.innerWidth));
  //   }, []);
  return (
    <div className={styles.root}>
      <BlockHeader
        title="Фотографии путешествий"
        description={
          <>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </>
        }
      />
      <div className={styles.tavel_photos}></div>
    </div>
  );
};
export default WindowtTavelPhotos;
