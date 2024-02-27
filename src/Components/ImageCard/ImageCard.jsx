import Modal from "react-modal";
import css from "./ImageCard.module.css";

export const ImageCard = ({ imgData, openModal }) => {
  return (
    <div className={css.wrapper} onClick={()=>openModal(imgData.urls.regular, imgData.alt_description)}> 
      <img
        className={css.galleryImg}
        alt={imgData.alt_description || "Default image description"}
        src={imgData.urls.small}
      />
    </div>
  );
};
