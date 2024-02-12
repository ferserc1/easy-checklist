import { useEffect, useState } from 'react';
import './Modal.css';

export default function Modal({ visible, children, title }) {
    return (
        <section className="modal-background" style={{ display: visible ? "" : "none" }}>
            <dialog style={{ display: "block" }}>
                { title && <h2>{title}</h2> }
                {children}
            </dialog>
        </section>
    );
}