import { writable } from 'svelte/store';
import type { Challenge } from '$lib/types';
import challengesData from '$lib/data/challenges.json';

export const challenges = writable<Challenge[]>(challengesData);
