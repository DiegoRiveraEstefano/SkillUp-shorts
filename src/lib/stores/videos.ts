import { writable } from 'svelte/store';
import type { Video } from '$lib/types';
import videosData from '$lib/data/videos.json';

export const videos = writable<Video[]>(videosData);
