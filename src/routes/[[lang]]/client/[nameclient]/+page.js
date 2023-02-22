const descClient = {
	samsung:
		'Samsung  Integer lacus dolor, elementum vitae sodales nec, aliquam quis lorem. Sed odio venenatis ac tristique sed, tincidunt in leo. Etiam malesuada mauris tortor.',
	oppo: 'Oppo Integer lacus dolor, elementum vitae sodales nec, aliquam quis lorem. Sed odio venenatis ac tristique sed tincidunt in leo. Etiam malesuada mauris tortor.',
	mandiri:
		'Mandiri Integer lacus dolor, elementum vitae sodales nec, aliquam quis lorem. Sed odio venenatis ac tristique sed, tincidunt in leo. Etiam malesuada mauris tortor.',
	hyundai:
		'Hyundai Integer lacus dolor, elementum vitae sodales nec, aliquam quis lorem. Sed odio venenatis ac tristique sed, tincidunt in leo. Etiam malesuada mauris tortor.'
};
const imgBanner = {
	samsung: '/img/client/samsung/samsung-banner.png',
	oppo: '/img/client/oppo/oppo-banner.png',
	mandiri: '/img/client/mandiri/mandiri-banner.png',
	hyundai: '/img/client/hyundai/hyundai-banner.png'
};
const logoClient = {
	samsung: '/img/client/samsung/samsung-logo.png',
	oppo: '/img/client/oppo/oppo-logo.png',
	mandiri: '/img/client/mandiri/mandiri-logo.png',
	hyundai: '/img/client/hyundai/hyundai-logo.png'
};
const galleryClient = {
	samsung: {
		imgOne: '/img/client/samsung/samsung1.png',
		imgTwo: '/img/client/samsung/samsung2.png',
		imgThree: '/img/client/samsung/samsung3.png',
		imgFirst: '/img/client/samsung/samsungFirst.png'
	},
	oppo: {
		imgOne: '/img/client/oppo/oppo1.png',
		imgTwo: '/img/client/oppo/oppo2.png',
		imgThree: '/img/client/oppo/oppo3.png',
		imgFirst: '/img/client/oppo/oppoFirst.png'
	},
	mandiri: {
		imgOne: '/img/client/mandiri/mandiri1.png',
		imgTwo: '/img/client/mandiri/mandiri2.png',
		imgThree: '/img/client/mandiri/mandiri3.png',
		imgFirst: '/img/client/mandiri/mandiriFirst.png'
	},
	hyundai: {
		imgOne: '/img/client/hyundai/hyundai1.png',
		imgTwo: '/img/client/hyundai/hyundai2.png',
		imgThree: '/img/client/hyundai/hyundai3.png',
		imgFirst: '/img/client/hyundai/hyundai-client.png'
	}
};

export function load({ params }) {
	return {
		descClient: descClient[params.nameclient],
		imgBanner: imgBanner[params.nameclient],
		logoClient: logoClient[params.nameclient],
		galleryClient: galleryClient[params.nameclient]
	};
}

export const prerender = false;
export const ssr = false;
export const csr = false;
