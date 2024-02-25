import React from 'react'
import './MapBox.css'

export default function MapBox() {
    return (
        <>
            <div className="main">
                <h2 id="galleryHeading" className="shadowHeading text-white text-center mb-2">Contact Us</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe title='map' width="100%" height="500" id="gmap_canvas"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.00791912345!2d77.32720673457605!3d28.68958738367168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa5397785fe9%3A0x11455fb0396b0f12!2z4KS24KS-4KSy4KWA4KSu4KS-4KSwIOCkl-CkvuCksOCljeCkoeCkqCwg4KSX4KS-4KSc4KS_4KSv4KS-4KSs4KS-4KSmLCDgpIngpKTgpY3gpKTgpLAg4KSq4KWN4KSw4KSm4KWH4KS2!5e0!3m2!1shi!2sin!4v1708846817053!5m2!1shi!2sin"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="phoneNumber bg-black bg-opacity-25 p-2 mb-2">
                                <h3 className="text-white text-center">Phone Number</h3>
                                <p className="text-white text-center"> +91-XXXXXXXXXX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
