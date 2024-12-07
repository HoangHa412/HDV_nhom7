const cheerio = require('cheerio');
const saveToCollection = require('../services/saveToCollection');


async function crawlFeatures($, selector) {
    const values = [];
    $(selector).find('.box-specifi:nth-child(4) aside:nth-child(2)').each((i, element) => {
        const cleanedText =$(element).text();
        values.push({ value: cleanedText });
    });

    const data ={
        bao_mat: values[0]?.value || null,
        tinh_nang_dac_biet: values[1]?.value || null,
        ghi_am: values[2]?.value || null,
        xem_phim: values[3]?.value || null,
        nghe_nhac: values[4]?.value || null,
    }

    try {
        const response = await saveToCollection('features', data);
        const documentIds = response?.data?.documentId;
        if (documentIds) {
            // console.log("Saved data ID:", data);
            return documentIds;
        } else {
            console.error("Failed to retrieve document ID from response:", response);
            return null;
        }
    } catch (error) {
        console.error("Error saving data to collection:", error);
        return null;
    }
}

module.exports = crawlFeatures;