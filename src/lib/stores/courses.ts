import { writable } from 'svelte/store';
import type { Course } from '$lib/types';
import coursesData from '$lib/data/courses.json';

export const courses = writable<Course[]>(coursesData);
