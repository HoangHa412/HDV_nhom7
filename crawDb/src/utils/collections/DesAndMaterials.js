const cheerio = require('cheerio');
const saveToCollection = require('../services/saveToCollection');

async function crawlDesAndMaterials($, selector) {
    const values = [];
    $(selector).find('.box-specifi:nth-child(6) aside:nth-child(2)').each((i, element) => {
        const cleanedText = $(element).text();
        values.push({ value: cleanedText });
    });

    const data ={
        thiet_ke: values[0]?.value || null,
        chat_lieu: values[1]?.value || null,
        kich_thuoc: values[2]?.value || null,
        ra_mat: values[3]?.value || null
    }

    try {
        const response = await saveToCollection('des-and-materials', data);
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

module.exports = crawlDesAndMaterials;