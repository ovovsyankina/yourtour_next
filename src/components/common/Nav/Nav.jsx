import Image from "next/image";
import styles from "./Nav.module.scss";
import Link from "next/link";
import { navLinks } from "@/utils/data";
import { bool, string } from "prop-types";
import classNames from "classnames";

const Nav = ({ srcImg, isFix }) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.fixed_nav]: isFix,
      })}
    >
      <div className={styles.nav}>
        <Image
          src={srcImg}
          className={styles.logo}
          alt="logo"
          width="182"
          height="32"
          priority
        />
        <nav className={styles.nav_items}>
          {navLinks.map((link) => {
            return (
              <Link
                href={link.path}
                key={link.index}
                className={classNames(styles.nav_item, {
                  [styles.nav_item_fix]: isFix,
                })}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/"
          className={classNames(styles.phone_number, {
            [styles.phone_number_fix]: isFix,
          })}
        >
          +7 999 999 99 99
        </Link>
      </div>
    </div>
  );
};

Nav.propTypes = {
  srcImg: string,
  isFix: bool,
};

export default Nav;
