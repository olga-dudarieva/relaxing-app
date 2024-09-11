import React, {useMemo} from 'react';
import {useUserLocation} from "../api";
import {getCurrentSeason, getIsLargeCityLocation} from "../utils";
import citySummer from "../images/city-summer.png";
import {SeasonType} from "../models";
import cityWinter from "../images/city-winter.png";
import citySpring from "../images/city-spring.png";
import cityAutumn from "../images/city-autumn.png";
import villageWinter from "../images/village-winter.png";
import villageSpring from "../images/village-spring.jpg";
import villageSummer from "../images/village-summer.png";
import villageAutumn from "../images/village-autumn.png";
import styles from "../index.module.scss";

const MainImage= () => {
    const { data: location, isLoading, isError}  = useUserLocation()

    const getMainImage: (React.JSX.Element | null) = useMemo(() => {
        if (!location) return null

        const season: SeasonType = getCurrentSeason()
        const isLargeCityLocation: boolean = getIsLargeCityLocation(location.city)

        let image = <img src={citySummer} alt="City Summer"/>

        if(isLargeCityLocation) {
            if(season === SeasonType.WINTER) image = <img src={cityWinter} alt="City Winter"/>
            if(season === SeasonType.SPRING) image = <img src={citySpring} alt="City Spring"/>
            if(season === SeasonType.AUTUMN) image = <img src={cityAutumn} alt="City Autumn"/>
        } else {
            if(season === SeasonType.WINTER) image = <img src={villageWinter} alt="Village Winter"/>
            if(season === SeasonType.SPRING) image = <img src={villageSpring} alt="Village Spring"/>
            if(season === SeasonType.SUMMER) image = <img src={villageSummer} alt="Village Summer"/>
            if(season === SeasonType.AUTUMN) image = <img src={villageAutumn} alt="Village Autumn"/>
        }

        return image

    }, [location])


    if (isLoading) {
        return <h3>Loading</h3>
    }

    if (isError) {
        return <h3>Error</h3>
    }

    if (!location) {
        return <h3>No data</h3>
    }

    return <div className={styles.mainImage}>{getMainImage}</div>
};

export default MainImage;