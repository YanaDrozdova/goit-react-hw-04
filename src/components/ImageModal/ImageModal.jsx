import Modal from 'react-modal';
import './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Темне фонове забарвлення
  },
  content: {
    top: '10%', // Закріплюємо зверху
    left: '10%', // Закріплюємо зліва
    right: '10%', // Закріплюємо справа
    bottom: '10%', // Закріплюємо знизу
    border: 'none', // Без рамки
    background: 'transparent', // Прозорий фон
    overflow: 'hidden', // Забороняємо прокручування контенту
    display: 'flex', // Використовуємо flexbox
    justifyContent: 'center', // Вирівнюємо по центру
    alignItems: 'center', // Вирівнюємо по центру
    padding: '0',
  },
};

export default function ImageModal({ modalIsOpen, closeModal, src, alt }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Fullscreen image"
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <img src={src} alt={alt} />
    </Modal>
  );
}
