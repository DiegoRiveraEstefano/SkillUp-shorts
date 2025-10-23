export interface Achievement {
	id: string;
	title: string;
	description: string;
	icon_url: string;
	criteria: string;
}

export interface Challenge {
	id: string;
	title: string;
	description: string;
	related_course_id: string;
	reward_points: number;
	is_active: boolean;
	end_date: string;
}

export interface Course {
	id: string;
	title: string;
	description: string;
}

export interface LeaderboardEntry {
	rank: number;
	user_id: string;
	full_name: string;
	points: number;
	avatar_url: string;
}

export interface User {
	id: string;
	username: string;
	password_demo: string;
	full_name: string;
	avatar_url: string;
	points: number;
	completed_videos: string[];
	unlocked_achievements: string[];
}

export interface Video {
	id: string;
	course_id: string;
	title: string;
	duration: number;
	video_url: string;
	description: string;
}
