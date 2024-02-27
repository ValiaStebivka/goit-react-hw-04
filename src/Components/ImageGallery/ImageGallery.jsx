import { useState } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { ImageModal } from "../ImageModal/ImageModal";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImg(image);
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <ul id="gallery" className={css.gallery}>
      {images.map((item) => {
        return (
          <li key={item.id} onClick={() =>  handleOpenModal(item)}>
            <ImageCard imgData={item} />
          </li>
        );
      })}
        <ImageModal
          isOpened={isOpenModal}
          close={onCloseModal}
          imgData={selectedImg}
        />
    </ul>
  );
};
