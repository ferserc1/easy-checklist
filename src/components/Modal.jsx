import './Modal.css';
import { CloseIcon } from './icons';

export default function Modal({ visible, children, title, onClose }) {
    return (
        <section className={`${ visible ? "" : "hidden "}modal-background`} >
            <dialog>
                <button onClick={() => onClose()}>
                    <CloseIcon />
                </button>
                { title && <h2>{title}</h2> }
                {children}
            </dialog>
        </section>
    );
}