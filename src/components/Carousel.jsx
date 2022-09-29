import data from './data.json'
import {useState} from "react";

const Carousel = () => {
    const [images, setImages] = useState([data[0].url])

    const noActive = data.filter(item => item.url !== images[0]);
    const altAttr = data.filter(item=>item.url === images[0])[0].name


    const currentId = +data.filter(item => item.url === images[0])[0].id
    const maxId = Math.max(...data.map(item => item.id))

    const nextImg = () => {
        let nextId;
        currentId !== maxId ? nextId = currentId + 1 : nextId = 1;
        const next = data.filter(item => +item.id === nextId)[0].url
        setImages([next])
    }
    const prevImg = () => {
        let prevId;
        currentId === 1 ? prevId = maxId : prevId = currentId - 1;
        const prev = data.filter(item => +item.id === prevId)[0].url
        setImages([prev])
    }

    return (
        <>
            <div id="carousel " className="carousel slide w-50" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img alt={altAttr} className="d-block w-100" src={images}/>
                    </div>
                    {noActive.map(item=> <div key={item.id+`item`} className="carousel-item">
                        <img alt={item.name} className="d-block w-100" src={item.url}/>
                    </div>)}
                </div>

                {data.length !== 0 && <>
                    <button onClick={prevImg} className="carousel-control-prev" data-bs-target="#carousel" type="button"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button onClick={nextImg} className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </>
                }

            </div>
        </>
    );
};

export default Carousel;
