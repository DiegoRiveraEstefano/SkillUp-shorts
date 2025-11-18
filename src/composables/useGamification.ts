import { useUserStore } from '@/stores/userStore'
import { useBadgeStore } from '@/stores/badgeStore'
import { storeToRefs } from 'pinia'

// Define the types of actions that generate rewards
export type GameAction = 'complete_video' | 'daily_login' | 'share_content' | 'complete_course'

// Configuration for XP rewards
const XP_REWARDS: Record<GameAction, number> = {
  complete_video: 50,
  daily_login: 20,
  share_content: 30,
  complete_course: 500,
}

export function useGamification() {
  const userStore = useUserStore()
  const badgeStore = useBadgeStore()
  const { currentUser } = storeToRefs(userStore)

  /**
   * Central function to process any user action.
   * 1. Awards XP.
   * 2. Checks for Badge Unlocks.
   * 3. Checks for Level Ups.
   */
  const processAction = (action: GameAction) => {
    if (!currentUser.value) return

    // 1. Award XP
    const xpAmount = XP_REWARDS[action]
    userStore.addXp(xpAmount)
    console.log(`[Gamification] +${xpAmount} XP awarded for ${action}`)

    // 2. Check Specific Badge Logic
    _checkBadgeRules(action)
  }

  /**
   * Internal Rule Engine for Badges.
   * Matches actions/stats to badge requirements.
   */
  const _checkBadgeRules = (lastAction: GameAction) => {
    if (!currentUser.value) return

    const stats = currentUser.value

    // Rule: "First Step" -> Watch 1 video
    if (lastAction === 'complete_video') {
      badgeStore.unlockBadge('b1') // ID from badgeStore mock
    }

    // Rule: "Team Player" -> Reach 500 XP
    if (stats.xp >= 500) {
      badgeStore.unlockBadge('b2')
    }

    // Rule: "Streak Master" -> 7 day streak
    if (stats.streak >= 7) {
      badgeStore.unlockBadge('b3')
    }
  }

  return {
    processAction,
    // Expose helpers if needed by UI (e.g., "You need 50xp for next level")
    xpToNextLevel: (currentXp: number) => 100 - (currentXp % 100),
  }
}
