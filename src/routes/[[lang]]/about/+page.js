const titleAbout = {
	en: 'About Pixel Group',
	id: 'Tentang Pixel Group'
};
const descAbout = {
	en: 'Pixel combines innovation and professional expertise to ensure your brand and marketing communication reach millions on-the-moe and deliver results.',
	id: 'Pixel menggabungkan inovasi dan keahlian profesional untuk memastikan komunikasi pemasaran bisnis Anda menjangkau jutaan orang dan memberikan hasil yang diinginkan.'
};
const titleExpertise = {
	en: 'Our Expertise',
	id: 'Kenapa Harus Pixel Group?'
};
const descExpertise = {
	en: 'We understand our clients comprehensively and offer total OOH solutions with Static Billboards, Digital OOH (DOOH), Experiential Marketing, Non-Traditional Media or Concept-Based OOH such as Signage, Point of Sales Media & Ambient Display. We also conduct research & make appropriate recommendations to maximise eyeballs reach to the target audience.',
	id: 'Pixel Group memahami klien kami secara komprehensif dan menawarkan solusi OOH (Out-of-Home) yang lengkap dengan Billboard Statis, OOH Digital (DOOH), Pemasaran Experiential, Media Non-Tradisional atau OOH Berbasis Konsep seperti Signage, Media Point of Sales & Ambient Display. Kami juga melakukan riset dan memberikan rekomendasi yang tepat untuk memaksimalkan jangkauan pasar target.'
};
const descExpertiseSec = {
	en: 'Operating & managed more than 500 variety of OOH mediums nationwide, including the prestigious Soekarno-Hatta International Airport (Jakarta), I Ngurah Rai International Airport(Bali), Gelora Bung Karno (GBK), Jakarta and more.',
	id: 'Kami mengoperasikan dan mengelola lebih dari 500 medium OOH yang beragam di seluruh Indonesia, termasuk Bandara Internasional Soekarno-Hatta (Jakarta), Bandara Internasional I Ngurah Rai (Bali), Gelora Bung Karno (GBK), Jakarta dan lain-lain.'
};
const descExpertiseThird = {
	en: 'We are also actively expanding our coverage within the region',
	id: ' Kami juga aktif memperluas cakupan kami di bidang ini.'
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
