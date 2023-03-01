import styles from "./HomePage.module.scss";
import Header from "@/components/common/Header/Header";
import WindowSelectTour from "@/components/common/WindowSelectTour/WindowSelectTour";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <WindowSelectTour />
    </div>
  );
};
export default HomePage;
