export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  xp: number
  streak: number
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string // emoji or svg path
  requiredXp: number
  isUnlocked: boolean
}

export interface VideoContent {
  id: string
  title: string
  url: string
  durationSeconds: number
  thumbnailUrl: string
}

export interface Course {
  id: string
  title: string
  description: string
  category: 'Communication' | 'Leadership' | 'Teamwork'
  modules: VideoContent[]
  progress: number
}
