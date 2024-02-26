import Modal from "react-modal";
import css from "./ImageCard.module.css";

export const ImageCard = ({ imgData }) => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.galleryImg}
        alt={imgData.alt_description || "Default image description"}
        src={imgData.urls.small}
      />
    </div>
  );
};
