import { fail } from '@sveltejs/kit';
export const prerender = false;
const contactUs = {
	en: 'Contact Us',
	id: 'Hubungi Kami'
};
const descContactUs = {
	en: 'Contact us to find out more information.',
	id: 'Tim Kami siap untuk menjawab pertanyaan Anda.'
};
const must = {
	en: 'must be filled',
	id: 'harus diisi'
};
const office = {
	en: 'Office Address',
	id: 'Alamat Kantor'
};
const descOffice = {
	en: 'Contact us to find out more information.',
	id: 'Hubungi kami untuk mengetahui informasi lebih lanjut.'
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

let contactData = [
	{
		id: 1,
		name: 'Rizky',
		email: 'rizky@gmail.com',
		company: 'PT. Rizky',
		job: 'CEO'
	}
];

export function load({ params }) {
	return {
		contactUs: contactUs[params.lang],
		descContactUs: descContactUs[params.lang],
		must: must[params.lang],
		office: office[params.lang],
		service: service[params.lang],
		descOffice: descOffice[params.lang],
		phone: phone[params.lang],
		submitIn: submitIn[params.lang],
		discuss: discuss[params.lang],
		chat: chat[params.lang],
		chatNow: chatNow[params.lang],
		inputName: inputName[params.lang],
		inputEmail: inputEmail[params.lang],
		inputCompany: inputCompany[params.lang],
		inputInterest: inputInterest[params.lang],
		inputMessage: inputMessage[params.lang],
		contactData
	};
}
// export const actions = {
// 	kontak: async ({ request }) => {
// 		const formData = Object.fromEntries(await request.formData());
// 		// const name = res.get('name');
// 		// const email = res.get('email');
// 		// const message = res.get('message');
// 		// console.log(formdata);
// 		return {
// 			success: true,
// 			formData
// 		};
// 	}
// };

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const name = formData.get('name');
		const email = formData.get('email');
		const messageData = formData.get('message');

		//validation
		if (name.length < 3) {
			return fail(400, {
				error: true,
				message: 'Name must be at least 3 characters',
				email,
				messageData
			});
		}

		if (messageData.length < 10) {
			return fail(400, {
				error: true,
				message: 'Message must be at least 10 characters',
				name,
				email
			});
		}

		const res = await fetch(
			`https://docs.google.com/forms/d/e/1FAIpQLSehCkgLjldnP7NhX7XjCFY4XByZdhhHTJVvVil_KGEcjq8E-g/formResponse?usp=pp_url&entry.877318661=${name}&entry.983452390=${email}&entry.1093574914=${messageData}&submit=Submit`
		)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {});

		console.log(res), ' res';

		// const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSehCkgLjldnP7NhX7XjCFY4XByZdhhHTJVvVil_KGEcjq8E-g/formResponse?usp=pp_url&entry.877318661=${name}&entry.983452390=${email}&entry.1093574914=${messageData}&submit=Submit`;
		// const res = await fetch(prefilledLink, {
		// 	method: 'POST',
		// 	body: formData
		// });
		// return {
		// 	success: true,
		// 	status: 'Data telah Terkirim'
		// };
	}
};
