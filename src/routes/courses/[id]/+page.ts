import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { courses } from '$lib/stores/courses';

export const load: PageLoad = ({ params }) => {
	const course = courses.find((c) => c.id === params.id);

	if (course) {
		return {
			title: course.title,
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	error(404, 'Not found');
};