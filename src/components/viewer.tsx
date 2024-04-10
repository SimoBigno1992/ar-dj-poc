//@ts-nocheck
"use client";
import {Entity, Scene } from 'aframe-react';
import QRCode from 'react-qr-code';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Viewer() {
	
	const checkMobile = async () => {
		const res = await axios.get(`${window.location.href}api/checkMobile`)
		const { isMobile } = await res.data;
		setIsMobileDevice(isMobile)
	}

	useEffect(() => { 
		import('@google/model-viewer').catch(console.error);
		checkMobile() 
	}, []);

	const [message, setMessage] = useState('');
	const [isMobileDevice, setIsMobileDevice] = useState(false);
	
	const openAR = async () => {
		const res = await axios.get(`${window.location.href}api/checkMobile`);
		const { message, isMobile } = await res.data;

		if (!isMobile) {
			setMessage(message);
		} else {
			window.location.replace(`${window.location.href}api/redirect`);
		}
	};

	return (
		<>
			<Scene>
				<Entity plane visible="false" geometry={{ primitive: 'plane' }} /> {/* Plane for detection */}
				<model-viewer
					className={(isMobileDevice ? 'model-viewer-mobile' : '')}
					src={'/nike.glb'}
					ios-src={'/nike.usdz#callToAction=Browse%20API&checkoutTitle=Kids%20Slide&checkoutSubtitle=Playground%20in%20your%20backyard&price=$145'}
					alt='model name'
					ar
					loading='lazy'
					camera-controls
					autoplay>
						<button onClick={openAR}>
								Anteprima in AR
						</button>
				</model-viewer>
			</Scene>
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
