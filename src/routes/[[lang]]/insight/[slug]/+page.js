export const prerender = false;

const read = {
	en: 'Read More',
	id: 'Baca Selengkapnya'
};
const recommendation = {
	en: 'Recommendation',
	id: 'Rekomendasi'
};

export async function load({ params, fetch, url }) {
	const fetchData = async (id) => {
		const res = await fetch(
			`https://pixelgroup-inventory.com/wp-json/wp/v2/posts/?slug=${id}&_embed`
		);
		const detailblog = await res.json();
		// console.log(detailblog, 'inidata');
		return detailblog;
	};

	return {
		detailBlog: fetchData(params.slug),

		read: read[params.lang],
		recommendation: recommendation[params.lang]
	};
}

export const csr = true;
