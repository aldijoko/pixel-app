const career = {
	en: 'Career',
	id: 'Karir'
};
const descCareer = {
	en: 'Contact us to find out more information.',
	id: 'Hubungi kami untuk mengetahui informasi lebih lanjut.'
};
const prepare = {
	en: 'Prepare Yourself With Us',
	id: 'Persiapkan Diri Anda Bersama Kami'
};

export function load({ params }) {
	return {
		career: career[params.lang],
		descCareer: descCareer[params.lang],
		prepare: prepare[params.lang]
	};
}

export const prerender = false;
export const ssr = false;
export const csr = false;
