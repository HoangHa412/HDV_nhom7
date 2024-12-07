const cheerio = require('cheerio');
const saveToCollection = require('../services/saveToCollection');



async function crawlCamAndScreen($, selector) {
    const values = [];
    $(selector).find('.box-specifi:nth-child(2) aside:nth-child(2)').each((i, element) => {
        const cleanedText = $(element).text();
        values.push({ value: cleanedText });
    });

    const data = {
        do_phan_giai_cam_sau: values[0]?.value || null,
        quay_phim_cam_sau: values[1]?.value || null,
        flash: values[2]?.value || null,
        tinh_nang_cam_sau: values[3]?.value || null,
        do_phan_giai_cam_truoc: values[4]?.value || null,
        tinh_nang_cam_truoc: values[5]?.value || null,
        man_hinh: values[6]?.value || null,
        do_phan_giai: values[7].value || null,
        kich_thuoc: values[8].value || null,
        do_sang_max: values[9].value || null,
        mat_kinh_cam_ung: values[10]?.value || null
    }

    try {
        const response = await saveToCollection('cam-and-screens', data);
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

module.exports = crawlCamAndScreen;