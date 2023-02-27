import Image from "next/image";
import styles from "./Nav.module.scss";
import logo_yourTour from "#/public/image/svg/logo_yourTour.svg";
import Link from "next/link";
import { navLinks } from "@/utils/nav_data";

const Nav = () => {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <Image src={logo_yourTour} className={styles.logo} alt="logo" />
        <nav className={styles.nav_items}>
          {navLinks.map((link) => {
            return (
              <Link
                href={link.path}
                key={link.index}
                className={styles.nav_item}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link href="/" className={styles.phone_number}>
          +7 999 999 99 99
        </Link>
      </div>
    </div>
  );
};
export default Nav;