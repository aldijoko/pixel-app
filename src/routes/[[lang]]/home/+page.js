//First Section
const homeFirstOne = {
	en: 'Provides Comprehensive Media Solutions With',
	id: 'Memberikan Solusi Media Komprehensif Dengan'
};
const homeFirstTwo = {
	en: 'Guaranteed Experiences',
	id: 'Pengalaman Terjamin'
};
const homeFirstThree = {
	en: 'Innovations',
	id: 'Inovasi'
};
const homeFirstDesc = {
	en: 'Deliver effective advertising and quality branding campaigns to reach our clients’ target market and generate conversions.',
	id: 'Memberikan iklan yang efektif dan kampanye branding yang berkualitas untuk menjangkau target pasar klien kami dan menghasilkan konversi.'
};

//Second Section
const homeSecOne = {
	en: 'The Answer to All Your Marketing Needs',
	id: 'Jawaban untuk Semua Kebutuhan Pemasaran Anda'
};
const homeSecTwo = {
	en: 'Our comprehensive media solutions are well-equipped with a suite of intelligent digital tools and mediums.',
	id: 'Solusi media komprehensif kami dilengkapi dengan kumpulan alat dan media digital pintar.'
};

//Third Section
const homeThirdOne = {
	en: 'Brighten Your Businesses with Simple Solutions',
	id: 'Terangkan Bisnis Anda dengan Solusi Sederhana'
};
const homeThirdTwo = {
	en: 'Established since 2003, Pixel Group has built its reputation as a trusted partner in Indonesia OOH media Management, Digital Printing Production, Digital Marketing, and Business Innovation by delivering premium, professional and efficient integrated services for our clients.',
	id: 'Didirikan sejak 2003, Pixel Group telah membangun reputasinya sebagai mitra yang dapat dipercaya dalam pengelolaan media luar ruang Indonesia, produksi cetak digital, pemasaran digital, dan inovasi bisnis dengan menyediakan layanan terintegrasi premium, profesional dan efisien untuk klien kami.'
};
const homeThirdThree = {
	en: 'A comprehensive company with a variety of effective solutions.',
	id: 'Perusahaan yang komprehensif dengan berbagai solusi yang efektif.'
};
const homeThirdFour = {
	en: 'Move Forward Together',
	id: 'Bergerak Maju Bersama'
};

//Fourth Section
const homeFourthOne = {
	en: 'Increase your efficiency, productivity and business performance with Pixel Indonesia.',
	id: 'Tingkatkan efisiensi, produktivitas dan kinerja bisnis Anda dengan Pixel Indonesia.'
};
const homeFourthTwo = {
	en: 'Your Business Increases, Due to the Right Strategy!',
	id: 'Bisnis Anda Bertambah, Karena Strategi yang Tepat!'
};

//Others
const and = {
	en: 'and',
	id: 'dan'
};
const lets = {
	en: 'Let’s',
	id: 'Mari'
};
const about = {
	en: 'About',
	id: 'Tentang'
};
const contactUs = {
	en: 'Contact Us',
	id: 'Hubungi Kami'
};
const learnMore = {
	en: 'Learn More',
	id: 'Pelajari Lebih Lanjut'
};
const ourClient = {
	en: 'Our Client',
	id: 'Klien Kami'
};
const viewPhoto = {
	en: 'View Photo',
	id: 'Lihat Foto'
};

//Tab Section
//Media Management
const titleMedia = {
	en: 'We own & manage extensive OOH Medium within Indonesia',
	id: 'Kami memiliki & mengelola media luar ruang yang luas di Indonesia'
};
const descMedia = {
	en: 'From conventional roadside Static & Digital Billboard, Transit to Airport Advertising, which are located at premium areas & key major Indonesian airports.',
	id: 'Mulai dari Billboard statis & digital konvensional di pinggir jalan, Transit hingga Iklan Bandara, yang terletak di daerah-daerah premium dan bandara besar di Indonesia.'
};
const descMediaTwo = {
	en: 'Execute marketing activities from start to finish',
	id: 'Melaksanakan kegiatan pemasaran dari awal hingga akhir'
};

//Digital Printing
const titlePrint = {
	en: 'We are your one-stop solutions provider production house',
	id: 'Kami adalah solusi satu pintu untuk kebutuhan produksi Anda'
};
const descPrint = {
	en: 'We do provide manufacturing, warehousing, distribution, designing, installation, printing and maintenance to our partners.',
	id: 'Kami menyediakan layanan manufaktur, gudang, distribusi, desain, instalasi, cetak dan perawatan untuk mitra kami.'
};
const descPrintTwo = {
	en: 'Execute marketing activities from start to finish',
	id: 'Melaksanakan kegiatan pemasaran dari awal hingga akhir'
};

//Digital Marketing
const titleMarket = {
	en: 'Enhance Influencer Marketing Campaign With No Hassle',
	id: 'Meningkatkan Kampanye Pemasaran Influencer Tanpa Ribet'
};
const descMarket = {
	en: `It's time to improve your marketing for the better. Make and use the popularity of influencers as a platform to achieve your business goals.`,
	id: `Sekarang saatnya meningkatkan pemasaran Anda untuk lebih baik. Buat dan gunakan popularitas influencer sebagai platform untuk mencapai tujuan bisnis Anda.`
};
const descMarketTwo = {
	en: 'Execute marketing activities from start to finish',
	id: 'Melaksanakan kegiatan pemasaran dari awal hingga akhir'
};

//Business Innovation
const titleInnov = {
	en: 'Innovesting In Innovation',
	id: 'Inovasi Investasi'
};
const descInnov = {
	en: 'Everyone can innovate, including you. We help people and organizations to innovate in the era of Industrial Revolution 4.0',
	id: 'Semua orang bisa berinovasi, termasuk Anda. Kami membantu orang dan organisasi untuk berinovasi di era Revolusi Industri 4.0'
};
const descInnovTwo = {
	en: 'Many reasons you can trust us to help you and your organizations to innovate.',
	id: 'Banyak alasan mengapa Anda dapat mempercayai kami untuk membantu Anda dan organisasi Anda untuk berinovasi.'
};

export function load({ params }) {
	return {
		homeFirstOne: homeFirstOne[params.lang],
		homeFirstTwo: homeFirstTwo[params.lang],
		homeFirstThree: homeFirstThree[params.lang],
		homeFirstDesc: homeFirstDesc[params.lang],
		homeSecOne: homeSecOne[params.lang],
		homeSecTwo: homeSecTwo[params.lang],
		homeThirdOne: homeThirdOne[params.lang],
		homeThirdTwo: homeThirdTwo[params.lang],
		homeThirdThree: homeThirdThree[params.lang],
		homeThirdFour: homeThirdFour[params.lang],
		homeFourthOne: homeFourthOne[params.lang],
		homeFourthTwo: homeFourthTwo[params.lang],

		//Others
		and: and[params.lang],
		lets: lets[params.lang],
		about: about[params.lang],
		contactUs: contactUs[params.lang],
		learnMore: learnMore[params.lang],
		ourClient: ourClient[params.lang],
		viewPhoto: viewPhoto[params.lang],

		//Tab Section
		titleMedia: titleMedia[params.lang],
		descMedia: descMedia[params.lang],
		descMediaTwo: descMediaTwo[params.lang],
		titlePrint: titlePrint[params.lang],
		descPrint: descPrint[params.lang],
		descPrintTwo: descPrintTwo[params.lang],
		titleMarket: titleMarket[params.lang],
		descMarket: descMarket[params.lang],
		descMarketTwo: descMarketTwo[params.lang],
		titleInnov: titleInnov[params.lang],
		descInnov: descInnov[params.lang],
		descInnovTwo: descInnovTwo[params.lang]
	};
}
