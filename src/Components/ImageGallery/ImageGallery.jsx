import { useState } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { ImageModal } from "../ImageModal/ImageModal";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (x) => {
    setSelectedImg(x);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ul id="gallery" className={css.gallery}>
      {data.map((item) => {
        return (
          <li key={item.id} onClick={() => openModal(item)}>
            <ImageCard imgData={item} />
          </li>
        );
      })}
      {selectedImg && (
        <ImageModal
          isOpened={modalIsOpen}
          close={closeModal}
          imgData={selectedImg}
        />
      )}
    </ul>
  );
};
