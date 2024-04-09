'use client';

import { useState } from 'react';
import ReactModal from 'react-modal';
import Viewer from './viewer';

function Info() {
	const [isOpen, setIsOpen] = useState(false);

	const open3D = () => {
		setIsOpen(true)
	}

	return (
		<div className='info-container'>
			<h2>Nike AIR</h2>
			<span>#running</span>
			<p>$ 220</p>
			<button onClick={open3D}>Visualizza 3D</button>
			<ReactModal isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				style={{
					content: {
						padding: '24px',
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: '-20%',
						marginRight: '-50%',
						transform: 'translate(-50%, -50%)'
					}
				}}
			>
				<Viewer></Viewer>
			</ReactModal>
		</div>
	);
}

export default Info;
