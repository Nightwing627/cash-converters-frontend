import React, { useCallback, useState } from "react";
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import {  photos } from './joinus.data'

function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 640) columns = 2;
    if (containerWidth >= 768) columns = 3;
    if (containerWidth >= 1024) columns = 4;
    if (containerWidth >= 1366) columns = 5;
    if (containerWidth >= 1620) columns = 6;
    return columns;
  }

export default function Diversity({ data }) {
    const [curImg, setCurrentImg] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const openLightBox = useCallback((evt, {photo, index}) => {
        setCurrentImg(index)
        setIsOpen(true)
    }, []);

    const closeLightBox = () => {
        setCurrentImg(0)
        setIsOpen(false)
    }

    return (
        <div className="diversity-item text-card pt-5" key={data.id}>
            <h2 className="span-all-columns h2-responsive">{data.title}</h2>
            <div 
                className="text-card-content pb-4"
                dangerouslySetInnerHTML={{__html: data.summary}}></div>
            <div className="diversity-photos">
                <Gallery photos={photos} direction={"column"} columns={columns} onClick={openLightBox} />
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
    )
}