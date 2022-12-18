import './modal.css'
import Title from './title';

function Modal({text}) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{text}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={(event) => {
            console.log("cancel")
          }}>Cancel</button>
          <button className="btn" onClick={(event) => {
            console.log("confirm")
          }}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}
export default Modal