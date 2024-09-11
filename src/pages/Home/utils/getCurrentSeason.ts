import { SeasonType } from '../models'

export const getCurrentSeason = (): SeasonType => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth()

    switch (currentMonth + 1) {
        case 1 || 2 || 12:
            return SeasonType.WINTER
        case 3 || 4 || 5:
            return SeasonType.SPRING
        case 6 || 7 || 8:
            return SeasonType.SUMMER
        case 9 || 10 || 11:
            return SeasonType.AUTUMN
        default:
            return SeasonType.SUMMER
    }
}