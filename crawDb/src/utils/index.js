const axios = require('axios');
const cheerio = require('cheerio');

const crawlConfigAndMemo = require('./collections/ConfigAndMemo')
const crawlCamAndScreen = require('./collections/CamAndScreen')
const crawlBatteryAndCharger = require('./collections/BatteryAndCharging')
const crawlConnect = require('./collections/Connect');
const crawlFeatures = require('./collections/Features');
const crawlDesAndMaterials = require('./collections/DesAndMaterials');
const phoneUrls = require("./services/phoneUrls")
const {load} = require("cheerio");

async function saveToStrapi() {
    for (const phoneUrl of phoneUrls) {

        try {
            const {data} = await axios.get(phoneUrl.url)
            const $ = load(data);
            if (!$) {
                console.log(`Không tìm thấy trang web ${phoneUrl.name}.`);
                continue;
            }

            const thongso = $(phoneUrl.thongsoSelector).first();
            if (!thongso.length) {
                console.log(`Không tìm thấy dữ liệu cho ${phoneUrl.name}.`);
                continue;
            }

            const configAndMemoIds = await crawlConfigAndMemo($, thongso);
            const camAndScreenIds = await crawlCamAndScreen($, thongso);
            const batteryAndChargerIds = await crawlBatteryAndCharger($, thongso);
            const connectIds = await crawlConnect($, thongso);
            const featuresIds = await crawlFeatures($, thongso);
            const desAndMaterialsIds = await crawlDesAndMaterials($, thongso);

            const phoneData = {
                phone: phoneUrl.name,
                img: phoneUrl.image,
                link_san_pham: phoneUrl.url,
                battery_and_charger: batteryAndChargerIds,
                feature: featuresIds,
                cam_and_screen: camAndScreenIds,
                connect: connectIds,
                des_and_material: desAndMaterialsIds,
                config_and_memo: configAndMemoIds
            }
            console.log(phoneData);
            const response = await axios.post(
                `http://localhost:1337/api/phones`,
                {
                    data: phoneData
                });

            if (response.status === 200 || response.status === 201) {
                console.log(`Dữ liệu cho ${phoneUrl.name} đã được lưu thành công vào Strapi!`);
            } else {
                console.log(`Lỗi khi lưu dữ liệu vào Strapi cho ${phoneUrl.name}:`, response.status, response.statusText);
            }
        } catch (error) {
            console.error(`Lỗi khi crawl hoặc lưu dữ liệu cho ${phoneUrl.name}:`, error);
        }
    }
}

saveToStrapi();