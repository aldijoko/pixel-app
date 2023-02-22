const contactUs = {
	en: 'Contact Us',
	id: 'Hubungi Kami'
};
const descContactUs = {
	en: 'Contact us to find out more information.',
	id: 'Hubungi kami untuk mengetahui informasi lebih lanjut.'
};
const must = {
	en: 'must be filled',
	id: 'harus diisi'
};
const office = {
	en: 'Office Address',
	id: 'Alamat Kantor'
};
const service = {
	en: 'Our Service',
	id: 'Layanan Kami'
};
const phone = {
	en: 'Phone',
	id: 'Telepon'
};
const submitIn = {
	en: 'Submit Inquiry',
	id: 'Kirim Pertanyaan'
};
const discuss = {
	en: 'Discuss & Grow With Us',
	id: 'Bicarakan & Berkembang Bersama Kami'
};
const chat = {
	en: 'Live Chat on Whatsapp',
	id: 'Live Chat di Whatsapp'
};
const chatNow = {
	en: 'Chat Now',
	id: 'Chat Sekarang'
};
const inputName = {
	en: 'Enter Name',
	id: 'Masukkan Nama'
};
const inputEmail = {
	en: 'Enter Email',
	id: 'Masukkan Email'
};
const inputCompany = {
	en: 'Company Name',
	id: 'Nama Perusahaan'
};
const inputInterest = {
	en: 'Interest Business',
	id: 'Bisnis yang Diminati'
};
const inputMessage = {
	en: 'Your message',
	id: 'Pesan Anda'
};

export function load({ params }) {
	return {
		contactUs: contactUs[params.lang],
		descContactUs: descContactUs[params.lang],
		must: must[params.lang],
		office: office[params.lang],
		service: service[params.lang],
		phone: phone[params.lang],
		submitIn: submitIn[params.lang],
		discuss: discuss[params.lang],
		chat: chat[params.lang],
		chatNow: chatNow[params.lang],
		inputName: inputName[params.lang],
		inputEmail: inputEmail[params.lang],
		inputCompany: inputCompany[params.lang],
		inputInterest: inputInterest[params.lang],
		inputMessage: inputMessage[params.lang]
	};
}
