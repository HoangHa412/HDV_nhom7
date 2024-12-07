const cheerio = require('cheerio');
const saveToCollection = require('../services/saveToCollection');

async function crawlConnect($, selector) {
    const values = [];
    $(selector).find('.box-specifi:nth-child(5) aside:nth-child(2)').each((i, element) => {
        const cleanedText = $(element).text();
        values.push({ value: cleanedText });
    });

    const data ={
        mang_di__dong: values[0]?.value || null,
        sim: values[1]?.value || null,
        wifi: values[2]?.value || null,
        gps: values[3]?.value || null,
        bluetooth: values[4]?.value || null,
        cong_ket_noi: values[5]?.value || null,
        jack_tai_nghe: values[6]?.value || null,
        ket_noi_khac: values[7]?.value || null,
    }

    try {
        const response = await saveToCollection('connects', data);
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

module.exports = crawlConnect;