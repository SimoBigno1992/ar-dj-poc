import { userAgent } from 'next/server';

export async function GET(req: Request) {
	const { device } = userAgent(req);
	const isMobile = device.type === 'mobile' || device.type === 'tablet';

	if (!isMobile) {
		return Response.json({ message: 'Scansiona il QR da mobile.', isMobile: false });
	}

	return Response.json({ message: 'Apertura AR in corso.', isMobile: true });
}
