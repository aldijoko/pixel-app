const titleAbout = {
	en: 'About Pixel Group',
	id: 'Tentang Pixel Group'
};
const descAbout = {
	en: 'Pixel combines innovation and professional expertise to ensure your brand and marketing communication reach millions on-the-moe and deliver results.',
	id: 'Pixel menggabungkan inovasi dan keahlian profesional untuk memastikan merek dan komunikasi pemasaran Anda mencapai jutaan orang di jalanan dan menghasilkan hasil yang memuaskan.'
};
const titleExpertise = {
	en: 'Our Expertise',
	id: 'Keahlian Kami'
};
const descExpertise = {
	en: 'We understand our clients comprehensively and offer total OOH solutions with Static Billboards, Digital OOH (DOOH), Experiential Marketing, Non-Traditional Media or Concept-Based OOH such as Signage, Point of Sales Media & Ambient Display. We also conduct research & make appropriate recommendations to maximise eyeballs reach to the target audience.',
	id: 'Kami memahami klien kami secara komprehensif dan menawarkan solusi OOH total dengan Billboard Statik, Digital OOH (DOOH), Pemasaran Eksperimen, Media Non Tradisional atau OOH Berbasis Konsep seperti Signage, Media Point of Sales & Ambient Display. Kami juga melakukan riset dan memberikan rekomendasi yang tepat untuk memaksimalkan jangkauan mata ke target pasar.'
};
const descExpertiseSec = {
	en: 'Operating & managed more than 500 variety of OOH mediums nationwide, including the prestigious Soekarno-Hatta International Airport (Jakarta), I Ngurah Rai International Airport(Bali), Gelora Bung Karno (GBK), Jakarta and more.',
	id: 'Mengoperasikan & mengelola lebih dari 500 jenis media OOH secara nasional, termasuk Bandara Internasional Soekarno-Hatta (Jakarta) yang bergengsi, Bandara Internasional I Ngurah Rai (Bali), Gelora Bung Karno (GBK), Jakarta, dan lainnya.'
};
const descExpertiseThird = {
	en: 'We are also actively expanding our coverage within the region',
	id: 'Kami juga secara aktif memperluas cakupan kami di wilayah sekitarnya'
};
const titleServices = {
	en: 'Our Services',
	id: 'Layanan Kami'
};
const contactUs = {
	en: 'Contact Us',
	id: 'Hubungi Kami'
};

export function load({ params }) {
	return {
		titleAbout: titleAbout[params.lang],
		descAbout: descAbout[params.lang],
		titleExpertise: titleExpertise[params.lang],
		descExpertise: descExpertise[params.lang],
		descExpertiseSec: descExpertiseSec[params.lang],
		descExpertiseThird: descExpertiseThird[params.lang],
		titleServices: titleServices[params.lang],
		contactUs: contactUs[params.lang]
	};
}

// export const prerender = false;
