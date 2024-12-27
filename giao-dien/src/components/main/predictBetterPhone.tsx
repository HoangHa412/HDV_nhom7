import {Phone} from "@/types";

const predictBetterPhone = (phone1: Phone, phone2: Phone): string => {
    let score1 = 0;
    let score2 = 0;

    // Ví dụ: So sánh RAM
    if (phone1.config_and_memo.ram > phone2.config_and_memo.ram) score1++;
    else if (phone1.config_and_memo.ram < phone2.config_and_memo.ram) score2++;

    // So sánh pin
    if (phone1.battery_and_charger.dung_luong > phone2.battery_and_charger.dung_luong) score1++;
    else if (phone1.battery_and_charger.dung_luong < phone2.battery_and_charger.dung_luong) score2++;

    // So sánh camera
    if (phone1.cam_and_screen.do_phan_giai_cam_sau > phone2.cam_and_screen.do_phan_giai_cam_sau) score1++;
    else if (phone1.cam_and_screen.do_phan_giai_cam_sau < phone2.cam_and_screen.do_phan_giai_cam_sau) score2++;

    // Dựa trên điểm số
    if (score1 > score2) return `${phone1.phone} tốt hơn.`;
    if (score2 > score1) return `${phone2.phone} tốt hơn.`;
    return "Hai điện thoại ngang nhau.";
};
export default predictBetterPhone;