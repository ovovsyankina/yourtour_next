import styles from "./BlockHeader.module.scss";
import { object, string } from "prop-types";

const BlockHeader = ({ title, description }) => {
  return (
    <div className={styles.block_header}>
      <h2 className={styles.title_block}>{title}</h2>
      {description && (
        <div
          className={styles.description_block}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

BlockHeader.propTypes = { title: string, description: string };

export default BlockHeader;
