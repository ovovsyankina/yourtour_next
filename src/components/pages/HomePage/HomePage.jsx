import styles from "./HomePage.module.scss";
import Header from "@/components/common/Header/Header";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Header />
    </div>
  );
};
export default HomePage;
