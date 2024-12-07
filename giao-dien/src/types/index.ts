

export interface Phone {
    id: number
    documentId: string
    phone: string
    createAt: string
    updateAt: string
    publisheddAt: string
    img: string
    link_san_pham: string
    battery_and_charger: BAC
    cam_and_screen: CAS
    config_and_memo: CAM
    connect: connect
    des_and_material: DAM
    feature: feature
}

export interface BAC {
    id: number
    documentId: string
    dung_luong: string
    loai_pin: string
    ho_tro_sac: string
    sac_theo_may: string
    cong_nghe_pin: string
    createAt: string
    updateAt: string
    publisheddAt: string
    locale: string
}

export interface CAS{
    id: number
    documentId: string
    do_phan_giai_cam_sau: string
    quay_phim_cam_sau: string
    flash: string
    tinh_nang_cam_sau: string
    do_phan_giai_cam_truoc: string
    tinh_nang_cam_truoc: string
    man_hinh: string
    do_phan_giai: string
    kich_thuoc: string
    do_sang_max: string
    mat_kinh_cam_ung: string
    createAt: string
    updateAt: string
    publisheddAt: string
}

export interface CAM {
    id: number
    documentId: string
    he_dieu_hanh: string
    chip: string
    cpu: string
    gpu: string
    ram: string
    dung_luong_luu_tru: string
    dung_luong_con_lai: string
    the_nho: string
    danh_ba: string
    createAt: string
    updateAt: string
    publisheddAt: string
}

export interface connect{
    id: number
    documentId: string
    mang_di__dong: string
    sim: string
    wifi: string
    gps: string
    bluetooth: string
    cong_ket_noi: string
    jack_tai_nghe: string
    ket_noi_khac: string
    createAt: string
    updateAt: string
    publisheddAt: string
}

export interface DAM {
    id: number
    documentId: string
    thiet_ke: string
    chat_lieu: string
    kich_thuoc: string
    ra_mat: string
    createAt: string
    updateAt: string
    publisheddAt: string
}

export interface feature{
    id: number
    documentId: string
    bao_mat: string
    tinh_nang_dac_biet: string
    ghi_am: string
    xem_phim: string
    nghe_nhac: string
    createAt: string
    updateAt: string
    publisheddAt: string
}