'use client';
import Header from "@/components/layout/Header";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ComparisonTable from "@/components/main/CompareTable";
import { Phone } from "@/types";
import phoneService from "@/services/phone";
import Select, { SingleValue } from "react-select";
import Image from "next/image";
import predictBetterPhone from "@/components/main/predictBetterPhone";

const listCompany = [
    { name: 'SamSung' },
    { name: 'Iphone' },
    { name: 'ViVo' },
    { name: 'Xiaomi' },
    { name: 'Realme' },
    { name: 'Tecno' },
    { name: 'Honor' },
];

const companyOptions = listCompany.map((company) => ({
    value: company.name,
    label: company.name,
}));

// Component chọn điện thoại
const CompareBlock = ({
                          onPhoneSelect,
                      }: {
    onPhoneSelect: (phone: Phone | null) => void;
}) => {
    const [isClient, setClient] = useState(false);
    const [phones, setPhones] = useState<Phone[]>([]);
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);

    useEffect(() => {
        setClient(true);
        if (selectedCompany) {
            phoneService
                .fetchByType(selectedCompany)
                .then((response) => {
                    if (Array.isArray(response.data)) {
                        setPhones(response.data);
                    } else {
                        setPhones([]);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching data from API:', error);
                });
        } else {
            setPhones([]);
        }
    }, [selectedCompany]);

    if (!isClient) {
        return null;
    }

    const handlePhoneSelect = (
        selectedOption: SingleValue<{ value: string; label: string }>
    ) => {
        if (selectedOption) {
            const phone = phones.find((p) => p.phone === selectedOption.value) || null;
            setSelectedPhone(phone);
            onPhoneSelect(phone);
        } else {
            setSelectedPhone(null);
            onPhoneSelect(null);
        }
    };

    return (
        <div className="shadow-xl bg-blend-hue border rounded-8 p-4 flex flex-col gap-4">
            <h1 className="font-semibold text-[#001230] text-xl text-center">
                Thêm điện thoại để so sánh
            </h1>
            <div className="relative w-[300px] h-[300px] ">
                {selectedPhone && selectedPhone.img ? (
                    <Image
                        src={selectedPhone.img}
                        alt={selectedPhone.phone}
                        fill
                        className="rounded-8 object-contain"
                    />
                ) : (
                    <Image
                        src="/image (1).png"
                        alt="Default"
                        fill
                        className="rounded-8 object-contain"
                    />
                )}
            </div>
            <Select
                options={companyOptions}
                placeholder="Chọn hãng điện thoại"
                onChange={(option) => setSelectedCompany(option?.value || null)}
                className="border-none w-full rounded-8"
                styles={{
                    control: (base) => ({
                        ...base,
                        borderColor: '#0078C2',
                        boxShadow: '0px 0px 2px 0px rgba(0, 120, 194, 0.2)',
                        borderRadius: '8px',
                    }),
                }}
            />
            <Select
                options={phones.map((phone) => ({
                    value: phone.phone,
                    label: phone.phone,
                }))}
                placeholder="Chọn điện thoại"
                onChange={handlePhoneSelect}
                className="border-none w-full rounded-8"
                styles={{
                    control: (base) => ({
                        ...base,
                        borderColor: '#0078C2',
                        boxShadow: '0px 0px 2px 0px rgba(0, 120, 194, 0.2)',
                        borderRadius: '8px',
                    }),
                }}
            />
        </div>
    );
};

export default function Home() {
    const [block1Phone, setBlock1Phone] = useState<Phone | null>(null);
    const [block2Phone, setBlock2Phone] = useState<Phone | null>(null);
    const [isCompareVisible, setIsCompareVisible] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleCompareClick = () => {
        if (block1Phone && block2Phone) {
            setIsCompareVisible(true);
            setErrors({ ten: '' });
        } else {
            setIsCompareVisible(false);
            setErrors({ ten: 'Vui lòng chọn 2 điện thoại để so sánh' });
        }
    };

    return (
        <div>
            {block1Phone && block2Phone && (
                <Header phone1={block1Phone} phone2={block2Phone} />
            )}
            <div className="w-full">
                <div className="flex pt-[80px] justify-center pb-[50px]">
                    <div className="flex flex-col gap-7">
                        <div className="flex gap-[100px] items-center justify-center">
                            <CompareBlock onPhoneSelect={setBlock1Phone} />
                            <CompareBlock onPhoneSelect={setBlock2Phone} />
                        </div>
                        <div className="flex justify-center flex-col items-center gap-3">
                            {errors.ten && (
                                <span className="text-base text-gray-600">{errors.ten}</span>
                            )}
                            <motion.button
                                aria-label="View more recruitment details"
                                className="bg-gradient-to-r from-[#FFB02D] to-[#EB7B31] text-white h-[48px] w-fit px-[100px] flex gap-2 rounded-[8px] items-center justify-center whitespace-nowrap"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleCompareClick}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <span className="font-medium text-xl leading-[26px]">
                                    So Sánh
                                </span>
                            </motion.button>
                        </div>
                        {isCompareVisible && block1Phone && block2Phone && (
                            <>
                                <ComparisonTable phone1={block1Phone} phone2={block2Phone} />
                                <div className="text-center mt-4">
                                    <h2 className="font-bold text-lg text-[#001230]">Kết quả dự đoán</h2>
                                    <p className="text-base text-gray-700">
                                        {predictBetterPhone(block1Phone, block2Phone)}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
