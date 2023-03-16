import styles from "./HomePage.module.scss";
import HeaderSection from "components/HeaderSection";
import SelectTourSection from "components/SelectTourSection";
import CollectTourSection from "components/CollectTourSection";
import ReviewsSection from "components/ReviewsSection";
import TravelPhotosSection from "components/TravelPhotosSection";
import HistoryTravelSection from "components/HistoryTravelSection";
import ContactSection from "components/ContactSection";
import FooterSection from "components/FooterSection";
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
