const titleClient = {
	en: 'Move Forward Together',
	id: 'Bergerak Maju Bersama'
};
const descClient = {
	en: 'Established since 2003, Pixel Group has built its reputation as a trusted partner in Indonesia OOH media by delivering premium, professional and efficient integrated services for our clients. A comprehensive OOH company with a variety of effective solutions.',
	id: 'Didirikan sejak tahun 2003, Pixel Group telah membangun reputasinya sebagai mitra tepercaya di media OOH Indonesia dengan memberikan layanan terintegrasi yang premium, profesional, dan efisien untuk klien kami. Perusahaan OOH yang komprehensif dengan beragam solusi efektif.'
};
const project = {
	en: 'Some of Our Projects',
	id: 'Beberapa Proyek Kami'
};
const descTrustOne = {
	en: 'Trusted by businesses',
	id: 'Dipercaya oleh bisnis'
};
const descTrustTwo = {
	en: 'in all types of industries',
	id: 'dalam semua jenis industri'
};
const lets = {
	en: 'Let’s',
	id: 'Mari'
};

export function load({ params }) {
	return {
		titleClient: titleClient[params.lang],
		descClient: descClient[params.lang],
		project: project[params.lang],
		descTrustOne: descTrustOne[params.lang],
		descTrustTwo: descTrustTwo[params.lang],
		lets: lets[params.lang]
	};
}

export const prerender = false;
export const ssr = false;
export const csr = false;
