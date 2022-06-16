import React, { useCallback, useEffect, useState } from "react";
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import ReactMarkdown from 'react-markdown';
import { fetchContent } from '../../../utils/contentful';
import { query_getHolidayByTitle } from '../joinus/career/query';

function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 640) columns = 2;
    if (containerWidth >= 768) columns = 3;
    if (containerWidth >= 1024) columns = 4;
    if (containerWidth >= 1366) columns = 5;
    if (containerWidth >= 1620) columns = 6;
    return columns;
  }

export default function Diversity({ title }) {
    const [curImg, setCurrentImg] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [holiday, setHoliday] = useState(null);

    useEffect(() => {
        let holidayData = null;
        let photoData = [];

        fetchContent(query_getHolidayByTitle(title))
        .then((data) => {
            data.holiday.items && (holidayData = data.holiday.items[0])
        })
        .then(() => {
            if (holidayData && holidayData.images.items) {
                holidayData.images.items.forEach((item) => {
                    photoData.push({
                        src: item.image.url,
                        width: item.width,
                        height: item.height
                    })
                });

                console.log(photoData);
                setHoliday(holidayData);
                setPhotos(photoData);
            }
        });
    }, []);

    const openLightBox = useCallback((evt, {photo, index}) => {
        setCurrentImg(index)
        setIsOpen(true)
    }, []);

    const closeLightBox = () => {
        setCurrentImg(0)
        setIsOpen(false)
    }

    return (
        <>
            {holiday && holiday.toggleShow && 
                <div className="diversity-item text-card pt-5">
                    <h2 className="span-all-columns h2-responsive">{holiday.title}</h2>
                    <ReactMarkdown 
                        className="text-card-content pb-4"
                        children={holiday.description}
                    />
                    {
                        (photos && photos.length) > 0 &&
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
                    }
                    
                </div>
            }
        </>
        
    )
}