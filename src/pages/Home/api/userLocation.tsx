import { useQuery } from 'react-query';
import axios from "axios";
import { LocationData } from "../models/ipData";

const fetchData = async (): Promise<LocationData> => {
    const { data } = await axios.get<LocationData>(`https://ipapi.co/json`);

    return data;
};

export const useUserLocation = ( enabled?: boolean) => {

    return useQuery({
        queryKey: ['Location'],
        queryFn: () => fetchData(),
        enabled
    })
}