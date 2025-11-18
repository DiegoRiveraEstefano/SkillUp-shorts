import type { Course } from '@/types'

export const courses: Course[] = [
  {
    id: '1',
    title: 'Effective Communication',
    description: 'Learn the fundamentals of clear and effective communication.',
    duration: 360,
    videos: [],
  },
  {
    id: '2',
    title: 'Introduction to Leadership',
    description: 'Discover the key traits of successful leaders.',
    duration: 480,
    videos: [],
  },
  {
    id: '3',
    title: 'Teamwork & Collaboration',
    description: 'Enhance your ability to work effectively in a team.',
    duration: 420,
    videos: [],
  },
]

export const feedItems: FeedItem[] = [
  {
    id: '1',
    type: 'new_course',
    title: 'New Course Available!',
    description: 'A new course "Teamwork & Collaboration" has been added.',
    courseId: '3',
  },
  {
    id: '2',
    type: 'recommendation',
    title: "We think you'll like this",
    description: 'Based on your interests, we recommend "Introduction to Leadership".',
    courseId: '2',
  },
]
