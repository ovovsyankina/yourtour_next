import styles from "./HomePage.module.scss";
import HeaderSection from "@/components/common/HeaderSection/HeaderSection";
import SelectTourSection from "@/components/common/SelectTourSection/SelectTourSection";
import CollectTourSection from "@/components/common/CollectTourSection/CollectTourSection";
import ReviewsSection from "@/components/common/ReviewsSection/ReviewsSection";
import TravelPhotosSection from "@/components/common/TravelPhotosSection/TravelPhotosSection";
import HistoryTravelSection from "@/components/common/HistoryTravelSection/HistoryTravelSection";
import ContactSection from "@/components/common/ContactSection/ContactSection";
import FooterSection from "@/components/common/FooterSection/FooterSection";
import { bool } from "prop-types";

const HomePage = ({ isFixedMenu }) => {
  return (
    <div className={styles.root}>
      <HeaderSection isFixedMenu={isFixedMenu} />
      <SelectTourSection />
      <CollectTourSection />
      <ReviewsSection />
      <TravelPhotosSection />
      <HistoryTravelSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

HomePage.propTypes = { isFixedMenu: bool };

export default HomePage;
