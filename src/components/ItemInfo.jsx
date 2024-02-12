import { useState } from "react";
import Modal from './Modal.jsx';
import "./ItemInfo.css";
import ImageGallery from "./ImageGallery.jsx";
import { sequence } from "astro:middleware";

export default function ItemInfo({ title, description, zone, hintImage, sequenceImages }) {
    const [showHint, setShowHint] = useState(false);

    const images = sequenceImages?.length > 0 && hintImage ? [hintImage, ...sequenceImages] :
        hintImage ? [hintImage] :
        sequenceImages;

    return (
        <>
        <button className="item-info" onClick={() => setShowHint(hint => !hint)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
            </svg>
        </button>

        <Modal visible={showHint} title={title} onClose={() => setShowHint(false)} >
            { zone && <h3>Ubicación: {zone}</h3>}
            { description && <p>{description}</p>}
            {
                images?.length > 1 
                    ? <ImageGallery images={images} />
                    : images?.length === 1 ? <img src={hintImage} alt={`Hint image for ${title}`} />
                    : null                    
            }
        </Modal>
        </>
    );
}

