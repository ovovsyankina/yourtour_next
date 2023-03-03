import { object, string } from "prop-types";
import styles from "./BlockHeader.module.scss";

const BlockHeader = ({ title, description }) => {
  return (
    <div className={styles.block_header}>
      <h2 className={styles.title_block}>{title}</h2>
      {description.props.children !== undefined && (
        <div className={styles.description_block}>{description}</div>
      )}
    </div>
  );
};

BlockHeader.propTypes = { title: string, description: object };

export default BlockHeader;
