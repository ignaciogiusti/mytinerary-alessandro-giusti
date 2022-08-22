import '../../styles/Carousel.css';

export default function SlideArrow(props) {
    if (!props.click) {
        throw new Error('La propiedad click necesita un funcion')
    }

    return (
            <button className="Arrow-button" onClick={props.click}>
                {props.icon}
            </button>
    )
}
