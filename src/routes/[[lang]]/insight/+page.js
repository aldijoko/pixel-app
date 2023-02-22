const titleInsight = {
	en: 'Your Business Increases, Due to the Right Strategy!',
	id: 'Bisnis Anda Bertambah, Karena Strategi yang Tepat!'
};
const descInsight = {
	en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	id: 'Lorem Ipsum adalah teks contoh industri percetakan dan penataan huruf atau typesetting.'
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
			`https://pixelgroup-inventory.com/wp-json/wp/v2/posts?_embed=&per_page=50&page=1`
		);

		const blogs = await res.json();
		blogsList = blogs;
	} else {
		const res = await fetch(
			`https://pixelgroup-inventory.com/wp-json/wp/v2/posts?_embed=&per_page=50&page=1&categories=${categoryId}`
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
