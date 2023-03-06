import { useEffect, useState } from "react";
import HomePage from "./HomePage";

const HomePageContainer = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 450) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return <HomePage isFixedMenu={scrolled} />;
};
export default HomePageContainer;
