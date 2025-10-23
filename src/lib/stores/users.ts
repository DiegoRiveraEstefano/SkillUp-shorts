import { writable } from 'svelte/store';
import type { User } from '$lib/types';
import usersData from '$lib/data/users.json';

export const users = writable<User[]>(usersData);
