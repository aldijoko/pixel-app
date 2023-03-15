export const prerender = false;

const titleInsight = {
	en: 'Your Business Increases, Due to the Right Strategy!',
	id: 'Informasi Terlengkap untuk Meningkatkan Kualitas Bisnis Anda!'
};
const descInsight = {
	en: `Don't miss the opportunity to find the latest tips and strategies that can help you improve the quality of your business! Get the most complete information here.`,
	id: 'Jangan lewatkan kesempatan untuk menemukan tips dan strategi terbaru yang dapat membantu Anda meningkatkan kualitas bisnis Anda! Dapatkan informasi terlengkap di sini.'
};
const read = {
	en: 'Read Article',
	id: 'Baca Artikel'
};
const all = {
	en: 'All',
	id: 'Semua'
};

export async function load({ params, fetch, url }) {
	const categoryId = url.searchParams.get('category') || '1';
	let blogsList = [];

	if (categoryId === 'all') {
		const res = await fetch(
			`https://blog.pixelgroup-inventory.com/wp-json/wp/v2/posts?_embed=&per_page=50&page=1`
		);

		const blogs = await res.json();
		blogsList = blogs;
	} else {
		const res = await fetch(
			`https://blog.pixelgroup-inventory.com/wp-json/wp/v2/posts?_embed=&per_page=50&page=1&categories=${categoryId}`
		);
		const blogs = await res.json();
		blogsList = blogs;
	}

	return {
		blogsList: blogsList,
		titleInsight: titleInsight[params.lang],
		descInsight: descInsight[params.lang],
		read: read[params.lang],
		all: all[params.lang]
	};
}

export const csr = true;
