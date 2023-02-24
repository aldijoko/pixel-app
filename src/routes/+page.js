import { redirect } from '@sveltejs/kit';

export function load() {
	// ...
	throw redirect(302, '/en/home');
}

// export const ssr = true;
export const prerender = true;
