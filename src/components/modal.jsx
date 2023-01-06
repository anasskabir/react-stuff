import './modal.css'
import Title from './title';

function Modal({text, removeModal, confirmModal}) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{text}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={removeModal}>Cancel</button>
          <button className="btn" onClick={confirmModal}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}
export default Modal