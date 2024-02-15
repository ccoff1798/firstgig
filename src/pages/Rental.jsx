import React, { useState } from 'react';

// Import your images
import RV1 from '../assets/images/rvPhotos/rv1.jpg';
import RV2 from '../assets/images/rvPhotos/rv2.jpg';
import RV3 from '../assets/images/rvPhotos/rv3.jpg';
import RV4 from '../assets/images/rvPhotos/rv4.jpg';
import RV5 from '../assets/images/rvPhotos/rv5.jpg';
import RV6 from '../assets/images/rvPhotos/rv6.jpg';

const Rentals = () => {
    const images = [RV1, RV2, RV3, RV4, RV5, RV6];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
    const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

    return (
        <div className="container mt-3">
            <h1 className="text-center mb-4">Now offering Fully furnished on site RV's for Daily or Weekly Rental!</h1>
            <div className="row">
                <div className="col-md-8 d-flex justify-content-center flex-column align-items-center">
                    <div>
                        <div style={{ width: '31.25rem', height: '20rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src={images[currentImage]} alt={`RV ${currentImage + 1}`} className="img-fluid shadow-black" />
                        </div>
                        {/* Navigation Buttons */}
                        <div className="d-flex justify-content-between mt-2" style={{ width: '31.25rem' }}>
                            <button className="btn btn-secondary shadow-black" onClick={prevImage}>Prev</button>
                            <button className="btn btn-secondary shadow-black" onClick={nextImage}>Next</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex flex-column align-items-start">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Thumbnail ${index + 1}`} 
                                 className={`img-thumbnail my-1 ${index === currentImage ? 'border-primary' : ''}`} 
                                 onClick={() => setCurrentImage(index)} 
                                 style={{ maxWidth: '6.25rem', cursor: 'pointer' }} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <h2>Interested In Booking Your Stay?</h2>
                <p>Email: <a href="mailto:Info@BlueMesaPoint.com">Info@BlueMesaPoint.com</a></p>
            </div>
        </div>
    );
};

export default Rentals;
