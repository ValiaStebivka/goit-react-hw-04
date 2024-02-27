import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");
export const ImageModal = ({ isOpened, close, imgData }) => {
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
      <button className={css.closeBtn} onClick={() => close()}>
        Close
      </button>
      {/* Додано перевірку на наявність imgData та imgData.urls перед використанням */}
      {imgData && imgData.urls && (
        <img
          className={css.mainImg}
          src={imgData.urls.regular || imgData.urls.small} 
          alt={imgData.alt_description || "Default image description"}
        />
      )}
    </Modal>
  );
};
