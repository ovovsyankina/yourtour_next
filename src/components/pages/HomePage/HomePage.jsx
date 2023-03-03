import styles from "./HomePage.module.scss";
import Header from "@/components/common/Header/Header";
import WindowSelectTour from "@/components/common/WindowSelectTour/WindowSelectTour";
import WindowCollectTour from "@/components/common/WindowCollectTour/WindowCollectTour";
import WindowReviews from "@/components/common/WindowReviews/WindowReviews";
import WindowtTavelPhotos from "@/components/common/WindowtTavelPhotos/WindowtTavelPhotos";
import WindowHistoryTravel from "@/components/common/WindowHistoryTravel/WindowHistoryTravel";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <WindowSelectTour />
      <WindowCollectTour />
      <WindowReviews />
      <WindowtTavelPhotos />
      {/* <WindowHistoryTravel /> */}
    </div>
  );
};
export default HomePage;
