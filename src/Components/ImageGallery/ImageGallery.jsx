import { useState } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { ImageModal } from "../ImageModal/ImageModal";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images, openModal }) => {

  return (
    <ul id="gallery" className={css.gallery}>
      {images.map((item) => {
        return (
          <li key={item.id} >
            <ImageCard imgData={item} openModal={openModal} />
          </li>
        );
      })}
        
    </ul>
  );
};
