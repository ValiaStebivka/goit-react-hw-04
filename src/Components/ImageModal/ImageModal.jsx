import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");
export const ImageModal = ({ isOpened, close, url, alt }) => {
  // Видалила оператор console.log
  return (
    <Modal
      isOpen={isOpened}
      onRequestClose={close}
      style={{
        overlay: { zIndex: 11 },
      }}
      className={css.modal}
      overlayClassName={css.overlay}
    >
    
      {/* Додано перевірку на наявність imgData та imgData.urls перед використанням */}
        <img
          className={css.mainImg}
          src={url} 
          alt={alt}
        />
      
    </Modal>
  );
};
