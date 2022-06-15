import React, { useCallback, useEffect, useState } from "react";
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
// import {  photos } from './joinus.data'
import ReactMarkdown from 'react-markdown';

function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 640) columns = 2;
    if (containerWidth >= 768) columns = 3;
    if (containerWidth >= 1024) columns = 4;
    if (containerWidth >= 1366) columns = 5;
    if (containerWidth >= 1620) columns = 6;
    return columns;
  }

export default function Diversity({ data: {title, description, imagesCollection, toggleShow} }) {
    const [curImg, setCurrentImg] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [photos, setPhotos] = useState([]);

    const openLightBox = useCallback((evt, {photo, index}) => {
        setCurrentImg(index)
        setIsOpen(true)
    }, []);

    const closeLightBox = () => {
        setCurrentImg(0)
        setIsOpen(false)
    }

    useEffect(() => {
        const photoData = [];
        imagesCollection.items && imagesCollection.items.forEach((item) => {
            photoData.push({
                src: item.image.url,
                width: item.width,
                height: item.height
            })
        });
        setPhotos(photoData);  
    }, [])

    return (
        <>
            {toggleShow && 
                <div className="diversity-item text-card pt-5">
                    <h2 className="span-all-columns h2-responsive">{title}</h2>
                    <ReactMarkdown 
                        className="text-card-content pb-4"
                        children={description}
                    />
                    <div className="diversity-photos">
                        <Gallery 
                            photos={photos}
                            direction={"column"}
                            columns={columns}
                            onClick={openLightBox} />
                        <ModalGateway>
                            {isOpen ? (
                            <Modal onClose={closeLightBox}>
                                <Carousel
                                    currentIndex={curImg}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                </div>
            }
        </>
        
    )
}