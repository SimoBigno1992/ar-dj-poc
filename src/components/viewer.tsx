//@ts-nocheck
"use client";
import QRCode from 'react-qr-code';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Viewer() {
    const [message, setMessage] = useState('');
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const modelViewerRef = useRef(null);

    const checkMobile = async () => {
        const res = await axios.get(`${window.location.href}api/checkMobile`)
        const { isMobile } = await res.data;
        setIsMobileDevice(isMobile)
    }

    useEffect(() => { 
        import('@google/model-viewer').catch(console.error);
        checkMobile() 
    }, []);

    const openAR = async () => {
        const res = await axios.get(`${window.location.href}api/checkMobile`);
        const { message, isMobile } = await res.data;

        if (!isMobile) {
            setMessage(message);
        } else {
            if (modelViewerRef.current) {
                const modelViewer = modelViewerRef.current;

                // Inizializza AR.js
                const arToolkitSource = new THREEx.ArToolkitSource({
                    sourceType: 'webcam',
                });

                arToolkitSource.init(() => {
                    // Inizializza ARToolkitContext
                    const arToolkitContext = new THREEx.ArToolkitContext({
                        cameraParametersUrl: 'data/camera_para.dat',
                        detectionMode: 'mono',
                    });

                    arToolkitContext.init(() => {
                        // Aggiungi il canvas AR alla scena di Three.js
                        modelViewer.scene.add(arToolkitContext.arController.canvas);
                    });
                });

                // Aggiungi il marker al rilevatore
                const markerControls = new THREEx.ArMarkerControls(arToolkitContext, modelViewer.scene, {
                    type: 'pattern',
                    patternUrl: 'data/pattern-marker.patt',
                });
            }
        }
    };

    return (
        <>
            <model-viewer
                ref={modelViewerRef}
                className={(isMobileDevice ? 'model-viewer-mobile' : '')}
                src={'/nike.glb'}
                ios-src={'/nike.usdz#callToAction=Browse%20API&checkoutTitle=Kids%20Slide&checkoutSubtitle=Playground%20in%20your%20backyard&price=$145'}
                alt='model name'
                loading='lazy'
                camera-controls
								ar
                autoplay>
                <button onClick={openAR}>
                    Anteprima in AR
                </button>
            </model-viewer>
            {message && (
                <div className='desktop-ar-container'>
                    <QRCode value={`${window.location.href}api/redirect`} size={80} />
                    <span>{message}</span>
                </div>
            )}
        </>
    );
}

export default Viewer;
