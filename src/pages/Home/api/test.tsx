import { useQuery } from 'react-query';
import axios from "axios";

const fetchTest = async () => {
    const { data } = await axios.get(`https://api.api-ninjas.com/v1/city?name=San Francisco`);
    console.log('Test', data)

    return data;
};

export const useGetTest = () => {
    return useQuery({
        queryKey: ['Test'],
        queryFn: () => fetchTest()
    });
};