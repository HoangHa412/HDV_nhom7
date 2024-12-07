const axiosInstance = require('./axiosInstance')


async function saveToCollection(collection, payload){
    try{
        const response = await axiosInstance.post(`${collection}`, {
            data: payload
        });
        // console.log("Data saved successfully:", response.data);
        console.log("Data saved successfully:");
        return response.data;
    }catch(error){
        console.error(`Lỗi saveToCollection collection ${collection}:`, error)
    }
}

module.exports = saveToCollection;