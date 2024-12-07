const phoneUrls = [
    {
        url: "https://www.dienmayxanh.com/dien-thoai/honor-90",
        image: "https://cdn.tgdd.vn/Products/Images/42/325793/honor-90-lite-170524-111055-600x600.jpg",
        thongsoSelector: "#specification-item-325793",
        name: "Honor 90 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/honor-200-12gb-256gb",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329133/honor-200-den-1-638612358629167213-750x500.jpg",
        thongsoSelector: "#specification-item-329133",
        name: "Honor 200 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/honor-x5-plus",
        image: "https://cdn.tgdd.vn/Products/Images/42/313306/honor-x5-plus-xanh-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-313306",
        name: "Honor X5 plus",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/honor-x6a",
        image: "https://cdn.tgdd.vn/Products/Images/42/325794/honor-x6a-thumb-600x600.jpg",
        thongsoSelector: "#specification-item-325794",
        name: "Honor X6a",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/honor-x6b-6gb-128gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/327258/honor-x6b-tim-1-750x500.jpg",
        thongsoSelector: "#specification-item-327258",
        name: "HONOR X6b",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/honor-x7c",
        image: "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/fc/3f/fc3fa12cb59353e236034fed249926a9.png",
        thongsoSelector: "#specification-item-331512",
        name: "HONOR X7c",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/honor-x8b",
        image: "https://cdn.tgdd.vn/Products/Images/42/324893/honor-x8b-green-1-750x500.jpg",
        thongsoSelector: "#specification-item-324893",
        name: "HONOR X8b",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-11",
        image: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-1-2-750x500.jpg",
        thongsoSelector: "#specification-item-153856",
        name: "Iphone 11",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-12",
        image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-213031",
        name: "Iphone 12",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-13",
        image: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2-750x500.jpg",
        thongsoSelector: "#specification-item-223602",
        name: "Iphone 13",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-14",
        image: "https://cdn.tgdd.vn/Products/Images/42/240259/Kit/iphone-14-bbh-org.jpg",
        thongsoSelector: "#specification-item-240259",
        name: "Iphone 14",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-14-plus",
        image: "https://cdn.tgdd.vn/Products/Images/42/245545/iphone-14-plus-xanh-1-750x500.jpg",
        thongsoSelector: "#specification-item-245545",
        name: "Iphone 14 plus",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-15",
        image: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-128gb-hong-2-750x500.jpg",
        thongsoSelector: "#specification-item-281570",
        name: "Iphone 15",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-15-plus",
        image: "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-den-2-750x500.jpg",
        thongsoSelector: "#specification-item-303891",
        name: "Iphone 15 plus",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-15-pro-256gb",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/303831/iphone-15-pro-titan-den-2-638629422334738686-750x500.jpg",
        thongsoSelector: "#specification-item-303831",
        name: "Iphone 15 pro",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-15-pro-max",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/305658/iphone-15-pro-max-titan-den-2-638629415797228950-750x500.jpg",
        thongsoSelector: "#specification-item-305658",
        name: "Iphone 15 pro max",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-16",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329135/iphone-16-xanh-luu-ly-8-638639088326414739-750x500.jpg",
        thongsoSelector: "#specification-item-329135",
        name: "Iphone 16",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-16-plus",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329138/iphone-16-plus-black-4_0-638630286209512464-750x500.jpg",
        thongsoSelector: "#specification-item-329138",
        name: "Iphone 16 plus",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-16-pro",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329143/iphone-16-pro-titan-sa-mac-2-638638979074194078-750x500.jpg",
        thongsoSelector: "#specification-item-329143",
        name: "Iphone 16 pro",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/iphone-16-pro-max",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-4_0-638630300847179843-750x500.jpg",
        thongsoSelector: "#specification-item-329149",
        name: "Iphone 16 pro max",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-a18",
        image: "https://cdn.tgdd.vn/Products/Images/42/313153/oppo-a18-xanh-64gb-1-750x500.jpg",
        thongsoSelector: "#specification-item-313153",
        name: "OPPO A18",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-a3-8gb-128gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/328454/oppo-a3-black-1-750x500.jpg",
        thongsoSelector: "#specification-item-328454",
        name: "OPPO A3",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-a38-6gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/313154/oppo-a38-vang-1-2-750x500.jpg",
        thongsoSelector: "#specification-item-320836",
        name: "OPPO A38",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-a3x-4gb-64gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/328449/oppo-a3x-do-1-750x500.jpg",
        thongsoSelector: "#specification-item-328449",
        name: "OPPO A3x",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-a58",
        image: "https://cdn.tgdd.vn/Products/Images/42/311354/oppo-a58-xanh-8gb-1-750x500.jpg",
        thongsoSelector: "#specification-item-275435",
        name: "OPPO A58",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-a60-128gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/323544/oppo-a60-blue-1-750x500.jpg",
        thongsoSelector: "#specification-item-323543",
        name: "OPPO A60",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-a79-5g",
        image: "https://cdn.tgdd.vn/Products/Images/42/316776/oppo-a79-tim-1-750x500.jpg",
        thongsoSelector: "#specification-item-316776",
        name: "OPPO A79 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-find-n3",
        image: "https://cdn.tgdd.vn/Products/Images/42/302953/oppo-find-n3-vang-1-750x500.jpg",
        thongsoSelector: "#specification-item-302953",
        name: "OPPO Find N3 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-find-n3-flip-hong",
        image: "https://cdn.tgdd.vn/Products/Images/42/309835/oppo-n3-flip-vang-1-750x500.jpg",
        thongsoSelector: "#specification-item-317981",
        name: "OPPO Find N3 Flip 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-reno10-pro-plus",
        image: "https://cdn.tgdd.vn/Products/Images/42/306980/oppo-reno-10-pro-plus-tim-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-306980",
        name: "OPPO Reno 10 Pro Plus 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-reno11-f-5g-phien-ban-chuan",
        image: "https://cdn.tgdd.vn/Products/Images/42/321895/oppo-reno-11f-tim-1-750x500.jpg",
        thongsoSelector: "#specification-item-321894",
        name: "OPPO Reno 11F 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-reno11-pro",
        image: "https://cdn.tgdd.vn/Products/Images/42/314210/oppo-reno-11-pro-1-750x500.jpg",
        thongsoSelector: "#specification-item-314210",
        name: "OPPO Reno 11 Pro 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-reno12-f-5g-12gb-256gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/327190/oppo-reno12-f-5g-cam-1-750x500.jpg",
        thongsoSelector: "#specification-item-327190",
        name: "OPPO Reno 12F 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-reno12-5g-12gb-256gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/321892/oppo-reno12-5g-hong-1-750x500.jpg",
        thongsoSelector: "#specification-item-327191",
        name: "OPPO Reno 12 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/oppo-reno12-pro",
        image: "https://cdn.tgdd.vn/Products/Images/42/322124/oppo-reno12-pro-5g-xam-1-750x500.jpg",
        thongsoSelector: "#specification-item-322124",
        name: "OPPO Reno 12 Pro 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-12",
        image: "https://cdn.tgdd.vn/Products/Images/42/319466/realme-12-xanh-la-1-750x500.jpg",
        thongsoSelector: "#specification-item-319466",
        name: "Realme 12",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-c51-6-256gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/322991/realme-c51-xanh-1-750x500.jpg",
        thongsoSelector: "#specification-item-322991",
        name: "Realme C51",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-c53",
        image: "https://cdn.tgdd.vn/Products/Images/42/306785/realme-c53-gold-1-750x500.jpg",
        thongsoSelector: "#specification-item-306785",
        name: "Realme C53",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-c60",
        image: "https://cdn.tgdd.vn/Products/Images/42/322919/realme-c60-blue-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-322919",
        name: "Realme C60",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-c61-6gb-128gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/327976/realme-c61-xanh-1-750x500.jpg",
        thongsoSelector: "#specification-item-327976",
        name: "Realme C61",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-c65-8-128",
        image: "https://cdn.tgdd.vn/Products/Images/42/323000/realme-c65-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-323000",
        name: "Realme C65",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-c65s",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/328605/realme-c65s-xanh-1-638603520210646089-750x500.jpg",
        thongsoSelector: "#specification-item-328605",
        name: "Realme C65s",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-c67",
        image: "https://cdn.tgdd.vn/Products/Images/42/319658/realme-c67-xanh-1-750x500.jpg",
        thongsoSelector: "#specification-item-319658",
        name: "Realme C67",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-note-50-64gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/321434/realme-note-50-xanh-1-750x500.jpg",
        thongsoSelector: "#specification-item-321434",
        name: "Realme Note 50",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/realme-note-60-4gb-64gb",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329328/realme-note-60-den-1-638618431980020061-750x500.jpg",
        thongsoSelector: "#specification-item-329328",
        name: "Realme Note 60",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-z-flip6",
        image: "https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-blue-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-320722",
        name: "Samsung Galaxy Z Flip 6 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-z-fold6",
        image: "https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-xam-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-320721",
        name: "Samsung Galaxy Z Fold 6 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-a05s-6gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/317530/samsung-galary-a05s-bac-glr-1-750x500.jpg",
        thongsoSelector: "#specification-item-317530",
        name: "Samsung Galaxy A05s",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-a06-4gb-64gb",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/328752/samsung-galay-a06-xanh-duong-1-638618399446558854-750x500.jpg",
        thongsoSelector: "#specification-item-328752",
        name: "Samsung Galaxy A06",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-a15-128gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/316075/samsung-galaxy-a15-vang-1-750x500.jpg",
        thongsoSelector: "#specification-item-319901",
        name: "Samsung Galaxy A15",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-a15-5g",
        image: "https://cdn.tgdd.vn/Products/Images/42/319584/samsung-galaxy-a15-5g-xanh-duong-1-750x500.jpg",
        thongsoSelector: "#specification-item-319584",
        name: "Samsung Galaxy A15 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-a25-8gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/310056/samsung-galaxy-a25-vang-1-750x500.jpg",
        thongsoSelector: "#specification-item-319904",
        name: "Samsung Galaxy A25 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-a35-5g-128gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/321778/samsung-galaxy-a35-5g-vang-1-750x500.jpg",
        thongsoSelector: "#specification-item-321778",
        name: "Samsung Galaxy A35 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-m15-5g-4gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/320964/samsung-galaxy-m15-1-750x500.jpg",
        thongsoSelector: "#specification-item-325073",
        name: "Samsung Galaxy M15 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-m35-5g",
        image: "https://cdn.tgdd.vn/Products/Images/42/323563/samsung-galaxy-m35-5g-xanh-dam-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-323563",
        name: "Samsung Galaxy M35 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-m54",
        image: "https://cdn.tgdd.vn/Products/Images/42/275953/samsung-galaxy-m54-den-1-750x500.jpg",
        thongsoSelector: "#specification-item-275953",
        name: "Samsung Galaxy M54 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-m55",
        image: "https://cdn.tgdd.vn/Products/Images/42/327372/samsung-galaxy-m55-5g-black-1-750x500.jpg",
        thongsoSelector: "#specification-item-321891",
        name: "Samsung Galaxy M55 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-s23-fe",
        image: "https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-xanh-1-750x500.jpg",
        thongsoSelector: "#specification-item-306994",
        name: "Samsung Galaxy S23 FE 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-s23-ultra",
        image: "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-xanh-1-750x500.jpg",
        thongsoSelector: "#specification-item-249948",
        name: "Samsung Galaxy S23 Ultra 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-s24-256gb-5g",
        image: "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-vang-1-750x500.jpg",
        thongsoSelector: "#specification-item-319665",
        name: "Samsung Galaxy S24 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-s24-plus-5g",
        image: "https://cdn.tgdd.vn/Products/Images/42/319666/samsung-galaxy-s24-plus-tim-1-750x500.jpg",
        thongsoSelector: "#specification-item-307172",
        name: "Samsung Galaxy S24 Plus 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-s24-ultra-5g",
        image: "https://cdn.tgdd.vn/Products/Images/42/319667/samsung-galaxy-s24-ultra-xam-1-750x500.jpg",
        thongsoSelector: "#specification-item-307174",
        name: "Samsung Galaxy S24 Ultra 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/tecno-spark-20c",
        image: "https://cdn.tgdd.vn/Products/Images/42/325155/tecno-spark-20c-1-750x500.jpg",
        thongsoSelector: "#specification-item-325155",
        name: "Tecno Spark 20C",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/tecno-spark-go-1",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329865/tecno-spark-go-1-white-1-638663995081338084-750x500.jpg",
        thongsoSelector: "#specification-item-329865",
        name: "Tecno Spark GO 1",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/tecno-spark-go-2024",
        image: "https://cdn.tgdd.vn/Products/Images/42/325154/tecno-spark-go-2024-yellow-1-750x500.jpg",
        thongsoSelector: "#specification-item-325154",
        name: "Tecno Spark Go 2024",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-v30",
        image: "https://cdn.tgdd.vn/Products/Images/42/319214/vivo-v30-xanh-1-750x500.jpg",
        thongsoSelector: "#specification-item-319214",
        name: "Vivo V30 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-v30e",
        image: "https://cdn.tgdd.vn/Products/Images/42/323567/vivo-v30e-nau-do-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-323567",
        name: "Vivo V30e 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-v40-lite-8gb-256gb",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329959/vivo-v40-lite-bac-1-638631652324926803-750x500.jpg",
        thongsoSelector: "#specification-item-329959",
        name: "Vivo V40 Lite",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-y03-64gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/323005/vivo-y03-den-1-750x500.jpg",
        thongsoSelector: "#specification-item-323005",
        name: "Vivo Y03",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-y03t-4gb-128gb",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329005/vivo-y03t-black-1-638616629418699383-750x500.jpg",
        thongsoSelector: "#specification-item-329005",
        name: "Vivo Y03T",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-y100-8-128",
        image: "https://cdn.tgdd.vn/Products/Images/42/323014/vivo-y100-xanh-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-323014",
        name: "Vivo Y100",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-y17s-4-64",
        image: "https://cdn.tgdd.vn/Products/Images/42/314975/vivo-y17s-xanh-duong-1-750x500.jpg",
        thongsoSelector: "#specification-item-318906",
        name: "Vivo Y17s",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-y18-4gb-128gb",
        image: "https://cdn.tgdd.vn/Products/Images/42/327254/vivo-y18-nau-1-750x500.jpg",
        thongsoSelector: "#specification-item-327254",
        name: "Vivo Y18",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-y18s",
        image: "https://cdn.tgdd.vn/Products/Images/42/325810/vivo-y18s-trang-xanh-1-750x500.jpeg",
        thongsoSelector: "#specification-item-325810",
        name: "Vivo Y18S",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-y28",
        image: "https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-cam-1-750x500.jpg",
        thongsoSelector: "#specification-item-326016",
        name: "Vivo Y28",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/vivo-y36",
        image: "https://cdn.tgdd.vn/Products/Images/42/307203/vivo-y36-xanh-1-2-750x500.jpg",
        thongsoSelector: "#specification-item-307203",
        name: "Vivo Y36",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-14t-5g",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329938/xiaomi-14t-xam-1-638635700973443455-750x500.jpg",
        thongsoSelector: "#specification-item-329938",
        name: "Xiaomi 14T 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-14t-pro-5g-12gb-256gb",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329940/xiaomi-14t-pro-blue-1-638660517348794541-750x500.jpg",
        thongsoSelector: "#specification-item-329940",
        name: "Xiaomi 14T Pro 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-14-5g-256",
        image: "https://cdn.tgdd.vn/Products/Images/42/322526/xiaomi-14-den-1-750x500.jpg",
        thongsoSelector: "#specification-item-322526",
        name: "Xiaomi 14 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-14-ultra",
        image: "https://cdn.tgdd.vn/Products/Images/42/313889/xiaomi-14-ultra-1-750x500.jpg",
        thongsoSelector: "#specification-item-313889",
        name: "Xiaomi 14 Ultra 5G",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-poco-m6?utm_flashsale=1",
        image: "https://cdn.tgdd.vn/Products/Images/42/327343/xiaomi-poco-m6-black-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-327343",
        name: "Xiaomi POCO M6",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-redmi-13?utm_flashsale=1",
        image: "https://cdn.tgdd.vn/Products/Images/42/325799/xiaomi-redmi-13-4g-yellow-1-2-750x500.jpg",
        thongsoSelector: "#specification-item-325799",
        name: "Xiaomi Redmi 13",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-redmi-14c-4gb-128gb-xanh-la",
        image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329007/redmi-14c-den-1-638618468017839063-750x500.jpg",
        thongsoSelector: "#specification-item-329079",
        name: "Xiaomi Redmi 14C",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-redmi-a3",
        image: "https://cdn.tgdd.vn/Products/Images/42/320734/xiaomi-redmi-a3-xanh-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-320734",
        name: "Xiaomi Redmi A3",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-redmi-note-13",
        image: "https://cdn.tgdd.vn/Products/Images/42/309831/xiaomi-redmi-note-13-vang-1-1-750x500.jpg",
        thongsoSelector: "#specification-item-309831",
        name: "Xiaomi Redmi Note 13",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-redmi-note-13-pro",
        image: "https://cdn.tgdd.vn/Products/Images/42/314206/redmi-note-13-pro-xanh-la-1-750x500.jpg",
        thongsoSelector: "#specification-item-314206",
        name: "Xiaomi Redmi Note 13 Pro",
    },
    {
        url: "https://www.dienmayxanh.com/dien-thoai/xiaomi-redmi-note-13-pro-5g",
        image: "https://cdn.tgdd.vn/Products/Images/42/319670/xiaomi-redmi-note-13-pro-5g-xanhla-1-750x500.jpg",
        thongsoSelector: "#specification-item-319670",
        name: "Xiaomi Redmi Note 13 Pro 5G",
    },
];

module.exports = phoneUrls;
