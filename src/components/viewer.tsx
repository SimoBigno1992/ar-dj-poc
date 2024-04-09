//@ts-nocheck
"use client";
import '@google/model-viewer';
import QRCode from 'react-qr-code';
import { useState } from 'react';
import axios from 'axios';

function Viewer() {
	const [message, setMessage] = useState('');
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
			<model-viewer
				src={'/nike.glb'}
				ios-src={'/nike.usdz'}
				alt='model name'
				ar
				loading='lazy'
				camera-controls
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
