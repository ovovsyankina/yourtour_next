import styles from "./HomePage.module.scss";
import Header from "@/components/common/Header/Header";
import WindowSelectTour from "@/components/common/WindowSelectTour/WindowSelectTour";
import WindowCollectTour from "@/components/common/WindowCollectTour/WindowCollectTour";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <WindowSelectTour />
      <WindowCollectTour />
    </div>
  );
};
export default HomePage;
