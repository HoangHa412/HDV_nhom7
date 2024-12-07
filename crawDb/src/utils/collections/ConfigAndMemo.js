const cheerio = require('cheerio');
const saveToCollection = require('../services/saveToCollection');


async function crawlConfigAndMemo($, selector) {
    const values = [];
    $(selector).find('.box-specifi:nth-child(1) aside:nth-child(2)').each((i, element) => {
        const cleanedText = $(element).text();
        values.push({ value: cleanedText });
    });

    const data ={
        he_dieu_hanh: values[0]?.value || null,
        chip: values[1]?.value || null,
        cpu: values[2]?.value || null,
        gpu: values[3]?.value || null,
        ram: values[4]?.value || null,
        dung_luong_luu_tru: values[5]?.value || null,
        dung_luong_con_lai: values[6]?.value || null,
        the_nho: values[7]?.value || null,
        danh_ba: values[8]?.value || null,
    }

    try {
        const response = await saveToCollection('config-and-memos', data);
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

module.exports = crawlConfigAndMemo;