import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { videos } from '$lib/stores/videos';
import { get } from 'svelte/store';

export const load: PageLoad = ({ params }) => {
  const video = get(videos).find((v) => v.id === params.id);

  if (!video) {
    throw error(404, 'Video not found');
  }

  return {
    video,
  };
};
