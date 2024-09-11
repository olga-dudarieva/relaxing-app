import cities from '../ukrainianOblastCenters.json'

export const getIsLargeCityLocation = (cityName: string):boolean => !!cities.oblastCentres.find(
    (value) => (value === cityName)
)
