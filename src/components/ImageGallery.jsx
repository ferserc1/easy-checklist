
import { useRef } from "react";
import "./ImageGallery.css";

const NextIcon = () =>  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 6l6 6l-6 6" fill="none"/>
</svg>

const PrevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 6l-6 6l6 6" fill="none"/>
</svg>

export default function ImageGallery ({ images }) {
    const listRef = useRef();

    const handleNext = (evt) => {
        evt.stopPropagation();
        listRef.current.scrollBy(100, 0);
    }

    const handlePrev = (evt) => {
        evt.stopPropagation();
        listRef.current.scrollBy(-100, 0);
    }

    return  images?.length > 0 ? 
        <article className="image-gallery">
            <button onClick={handlePrev}><PrevIcon /></button>
            <ul ref={listRef}>
                {images.map((img, i) => <li key={i}><img src={img} alt={`Image ${i+1}`} /></li>)}
            </ul>
            <button onClick={handleNext}><NextIcon /></button>
        </article>
        : null;
}