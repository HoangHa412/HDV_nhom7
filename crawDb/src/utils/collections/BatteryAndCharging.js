const cheerio = require('cheerio');
const saveToCollection = require('../services/saveToCollection');

async function crawlBatteryAndCharging($, selector) {
    const values = [];
    $(selector).find('.box-specifi:nth-child(3) aside:nth-child(2)').each((i, element) => {
        const cleanedText = $(element).text();
        values.push({ value: cleanedText });
    });

    const data = {
        dung_luong: values[0]?.value || null,
        loai_pin: values[1]?.value || null,
        ho_tro_sac: values[2]?.value || null,
        sac_theo_may: values[2]?.value || null,
        cong_nghe_pin: values[3]?.value || null,
    };

    try {
        const response = await saveToCollection('battery-and-chargers', data);
        const documentIds = response?.data?.documentId;
        if (documentIds) {
            console.log("Saved data ID:", data);
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

module.exports = crawlBatteryAndCharging;
