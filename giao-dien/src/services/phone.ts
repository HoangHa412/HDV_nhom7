import axiosInstance from "@/utils/axiosInstance";

const  fetch = async () =>{
    try {

    const response = await axiosInstance.get('/phones',
        {
            params:{
                populate: '*',
            }
        })
    return response.data;
    }catch (err) {
        console.error('Error fetching phones:', err);
        throw err;
    }
}

const fetchByType = async (phone: string) =>{
    try{
        const response = await axiosInstance.get('/phones',
            {
                params:{
                    'filters[phone][$startsWith]': phone,
                    populate: '*',
                }
            })
        return response.data;
    }catch (err) {
        console.error('Error fetching by type:', err);
        throw err;
    }
}

const phoneService ={
    fetch,
    fetchByType,
}

export default phoneService;