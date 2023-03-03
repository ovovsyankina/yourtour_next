import styles from "./HomePage.module.scss";
import HeaderSection from "@/components/common/HeaderSection/HeaderSection";
import SelectTourSection from "@/components/common/SelectTourSection/SelectTourSection";
import CollectTourSection from "@/components/common/CollectTourSection/CollectTourSection";
import ReviewsSection from "@/components/common/ReviewsSection/ReviewsSection";
import TravelPhotosSection from "@/components/common/TravelPhotosSection/TravelPhotosSection";
import HistoryTravelSection from "@/components/common/HistoryTravelSection/HistoryTravelSection";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <HeaderSection />
      <SelectTourSection />
      <CollectTourSection />
      <ReviewsSection />
      <TravelPhotosSection />
      <HistoryTravelSection />
    </div>
  );
};
export default HomePage;
