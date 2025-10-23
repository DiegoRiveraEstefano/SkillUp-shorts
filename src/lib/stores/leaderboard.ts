import { writable } from 'svelte/store';
import type { LeaderboardEntry } from '$lib/types';
import leaderboardData from '$lib/data/leaderboard.json';

export const leaderboard = writable<LeaderboardEntry[]>(leaderboardData);
