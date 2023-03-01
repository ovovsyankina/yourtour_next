import { string } from "prop-types";
import styles from "./BlockHeader.module.scss";

const BlockHeader = ({ title, description }) => {
  return (
    <div className={styles.block_header}>
      <h2 className={styles.title_block}>{title}</h2>
      <div className={styles.description_block}>{description}</div>
    </div>
  );
};

BlockHeader.propTypes = { title: string, description: string };

export default BlockHeader;
