import { writable } from 'svelte/store';
import type { Achievement } from '$lib/types';
import achievementsData from '$lib/data/achievements.json';

export const achievements = writable<Achievement[]>(achievementsData);
