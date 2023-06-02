import dataImage from "./dataImage.js";

const data = [
    {
        id: 1,
        score: 9.8,
        info: {
            company: 'MSI',
            name: 'MSI Gaming Katana 15 B13VFK-676VN',
            image: dataImage[0],
            madeIn: 'Ameria'
        },
        design: {
            width: 359,
            weight: 2.25,
            thickness: 18.9,
            os: 'Window 11 Home'
        },
        rating: {
            rating: 4.9,
            num_of_rating: '15k',
        },
        screen: {
            resolution: '1980 x 1080',
            type: 'IPS',
            frequency: 144,
            inch: 15.6
        },
        chip: {
            company: 'Intel',
            name: 'Core i7',
            type: '13620H',
            core_speed: 5
        },
        ram: {
            capacity: 32,
            type: 'DDR5',
            speed: 5200
        },
        disk: {
            capacity: 1024,
            type: 'SSD'
        },
        connect: {
            USB: 3,
            LAN: 2,
            external_memory: 2
        },
        graphic: {
            company: 'Nvidia',
            name: "RTX 4060",
            type: "GeForce",
            capacity: 8,
        },
        battery: {
            capacity: 5300,
            slot: 2
        },
        outstanding: {
            cpu: {
                name: 'Intel UHD Graphics for 11th Gen Intel Processors',
                image: 'i7',
                core: 2,
                thread: 4,
                clock_speed: 2.7,
                turbo_speed: 4.5,
                TDP_down: 35,
                typical_TDP: 45
            },
            graphic: {
                name: 'NVIDIA GeForce GTX 4060 8GB',
                image: 'gtx-1650',
                memory: 8,
                core_clock: 1485,
                memory_clock: 800,
                directX: 12,
                openGL: 4.6,
                max_TCP: 75
            }
        },
        store_price: [{
                name: 'Amazon',
                img: 'amazon-pay',
                price: 1200,
            },
            {
                name: 'Wallmart',
                img: 'wallmart',
                price: 1250,
            },
            {
                name: 'Best Buy',
                img: 'best-buy',
                price: 1252,
            },
            {
                name: 'App Store',
                img: 'app-store',
                price: 1258,
            },
            {
                name: 'Phi Long',
                img: 'philong',
                price: 1260,
            },
            {
                name: 'The gioi di dong',
                img: 'thegioididong',
                price: 1265,
            },
        ]
    }, 
    {
        id: 2,
        score: 8.6,
        info: {
            company: 'Lenovo',
            name: 'Lenovo Gaming Legion 5 15IAH7H',
            image: dataImage[1],
            madeIn: 'China'
        },
        design: {
            width: 358.8,
            weight: 2.35,
            thickness: 20,
            os: 'Window 11 Home'
        },
        rating: {
            rating: 4.5,
            num_of_rating: '12k',
        },
        screen: {
            resolution: '1980 x 1080',
            type: 'IPS LCD',
            frequency: 165,
            inch: 15.6
        },
        chip: {
            company: 'Intel',
            name: 'Core i7',
            type: '12700H',
            core_speed: 4.7
        },
        ram: {
            capacity: 16,
            type: 'DDR5',
            speed: 4800
        },
        disk: {
            capacity: 512,
            type: 'SSD'
        },
        connect: {
            USB: 2,
            LAN: 2,
            external_memory: 2
        },
        graphic: {
            company: 'Nvidia',
            name: "RTX 3060",
            type: "GeForce",
            capacity: 6,
        },
        battery: {
            capacity: 5000,
            slot: 2
        },
        outstanding: {
            cpu: {
                name: 'Intel Core i7 Graphics for 11th Gen Intel Processors',
                image: 'intel',
                core: 14,
                thread: 20,
                clock_speed: 2.3,
                turbo_speed: 4.7,
                TDP_down: 35,
                typical_TDP: 45
            },
            graphic: {
                name: 'NVIDIA GeForce GTX 3060 6GB',
                image: 'gtx',
                memory: 6,
                core_clock: 1485,
                memory_clock: 800,
                directX: 12,
                openGL: 4.6,
                max_TCP: 75
            }
        },
        store_price: [{
                name: 'Amazon',
                img: 'amazon-pay',
                price: 1300,
            },
            {
                name: 'Wallmart',
                img: 'wallmart',
                price: 1325,
            },
            {
                name: 'Best Buy',
                img: 'best-buy',
                price: 1370,
            },
            {
                name: 'App Store',
                img: 'app-store',
                price: 1400,
            },
            {
                name: 'Phi Long',
                img: 'philong',
                price: 1440,
            },
            {
                name: 'The gioi di dong',
                img: 'thegioididong',
                price: 1450,
            },
        ]
    }, 
    {
        id: 3,
        score: 8.2,
        info: {
            company: 'Apple',
            name: 'MacBook Pro M2 2022',
            image: dataImage[2],
            madeIn: 'China'
        },
        design: {
            width: 304,
            weight: 1.4,
            thickness: 15.6,
            os: 'MacOS 12'
        },
        rating: {
            rating: 4.3,
            num_of_rating: '11k',
        },
        screen: {
            resolution: '2560 x 1600',
            type: 'LED',
            frequency: 120,
            inch: 13.3
        },
        chip: {
            company: 'Apple',
            name: 'M2',
            type: '8 Core',
            core_speed: 2.4
        },
        ram: {
            capacity: 16,
            type: 'DDR4',
            speed: 3200
        },
        disk: {
            capacity: 256,
            type: 'SSD'
        },
        connect: {
            USB: 2,
            LAN: 2,
            external_memory: 2
        },
        graphic: {
            company: 'Apple',
            name: "M2 GPU",
            type: "10 Core",
            capacity: 4,
        },
        battery: {
            capacity: 5000,
            slot: 2
        },
        outstanding: {
            cpu: {
                name: 'Apple M1 CPU 8 core',
                image: 'cpu-m2',
                core: 2,
                thread: 4,
                clock_speed: 2.7,
                turbo_speed: 4.5,
                TDP_down: 35,
                typical_TDP: 45
            },
            graphic: {
                name: 'Apple M1 GPU 8 core',
                image: 'gpu-m2',
                memory: 4,
                core_clock: 1485,
                memory_clock: 800,
                directX: 12,
                openGL: 4.6,
                max_TCP: 75
            }
        },
        store_price: [{
                name: 'Amazon',
                img: 'amazon-pay',
                price: 1100,
            },
            {
                name: 'Wallmart',
                img: 'wallmart',
                price: 1150,
            },
            {
                name: 'Best Buy',
                img: 'best-buy',
                price: 1190,
            },
            {
                name: 'App Store',
                img: 'app-store',
                price: 1200,
            },
            {
                name: 'Phi Long',
                img: 'philong',
                price: 1260,
            },
            {
                name: 'The gioi di dong',
                img: 'thegioididong',
                price: 1265,
            },
        ]
    }, 
    {
        id: 4,
        score: 7.5,
        info: {
            company: 'Lenovo',
            name: 'Lenovo ThinkPad P15s G2 T500',
            image: dataImage[3],
            madeIn: 'China'
        },
        design: {
            width: 329,
            weight: 1.5,
            thickness: 17.9,
            os: 'Window 11'
        },
        rating: {
            rating: 4.3,
            num_of_rating: '12k',
        },
        screen: {
            resolution: '1920 x 1080',
            type: 'IPS',
            frequency: 75,
            inch: 15.6
        },
        chip: {
            company: 'Intel',
            name: 'Core i5',
            type: '1135G7',
            core_speed: 2
        },
        ram: {
            capacity: 16,
            type: 'DDR4',
            speed: 3200
        },
        disk: {
            capacity: 512,
            type: 'SSD'
        },
        connect: {
            USB: 2,
            LAN: 2,
            external_memory: 2
        },
        graphic: {
            company: 'Nvidia',
            name: "Quadro",
            type: "T500",
            capacity: 4,
        },
        battery: {
            capacity: 5000,
            slot: 3
        },
        outstanding: {
            cpu: {
                name: 'Intel UHD Graphics for 11th Gen Intel Processors',
                image: 'intel',
                core: 2,
                thread: 4,
                clock_speed: 2.7,
                turbo_speed: 4.5,
                TDP_down: 35,
                typical_TDP: 45
            },
            graphic: {
                name: 'NVIDIA GeForce GTX 1650 4GB',
                image: 'gtx',
                memory: 4,
                core_clock: 1485,
                memory_clock: 800,
                directX: 12,
                openGL: 4.6,
                max_TCP: 75
            }
        },
        store_price: [{
                name: 'Amazon',
                img: 'amazon-pay',
                price: 1100,
            },
            {
                name: 'Wallmart',
                img: 'wallmart',
                price: 1120,
            },
            {
                name: 'Best Buy',
                img: 'best-buy',
                price: 1140,
            },
            {
                name: 'App Store',
                img: 'app-store',
                price: 1180,
            },
            {
                name: 'Phi Long',
                img: 'philong',
                price: 1260,
            },
            {
                name: 'The gioi di dong',
                img: 'thegioididong',
                price: 1265,
            },
        ]
    }, 
    {
        id: 5,
        score: 7.1,
        info: {
            company: 'HP',
            name: 'HP Gaming Victus 16-e1107AX',
            image: dataImage[4],
            madeIn: 'China'
        },
        design: {
            width: 370,
            weight: 2.4,
            thickness: 23.5,
            os: 'Window 11 Home Single Language'
        },
        rating: {
            rating: 4.5,
            num_of_rating: '9k',
        },
        screen: {
            resolution: '1920 x 1080',
            type: 'IPS',
            frequency: 144,
            inch: 16.1
        },
        chip: {
            company: 'AMD',
            name: 'Ryzen 5',
            type: '6600H',
            core_speed: 2
        },
        ram: {
            capacity: 8,
            type: 'DDR5',
            speed: 4800
        },
        disk: {
            capacity: 512,
            type: 'SSD'
        },
        connect: {
            USB: 2,
            LAN: 2,
            external_memory: 2
        },
        graphic: {
            company: 'Nvidia',
            name: "RTX 3050",
            type: "GeForce",
            capacity: 4,
        },
        battery: {
            capacity: 5000,
            slot: 2
        },
        outstanding: {
            cpu: {
                name: 'Intel UHD Graphics for 11th Gen Intel Processors',
                image: 'intel',
                core: 2,
                thread: 4,
                clock_speed: 2.7,
                turbo_speed: 4.5,
                TDP_down: 35,
                typical_TDP: 45
            },
            graphic: {
                name: 'NVIDIA GeForce GTX 1650 4GB',
                image: 'gtx',
                memory: 4,
                core_clock: 1485,
                memory_clock: 800,
                directX: 12,
                openGL: 4.6,
                max_TCP: 75
            }
        },
        store_price: [{
                name: 'Amazon',
                img: 'amazon-pay',
                price: 1200,
            },
            {
                name: 'Wallmart',
                img: 'wallmart',
                price: 1250,
            },
            {
                name: 'Best Buy',
                img: 'best-buy',
                price: 1252,
            },
            {
                name: 'App Store',
                img: 'app-store',
                price: 1258,
            },
            {
                name: 'Phi Long',
                img: 'philong',
                price: 1260,
            },
            {
                name: 'The gioi di dong',
                img: 'thegioididong',
                price: 1265,
            },
        ]
    }, 
    {
        id: 6,
        score: 6.8,
        info: {
            company: 'Asus',
            name: 'Asus Vivobook Pro M6500QC-MA005W',
            image: dataImage[5],
            madeIn: 'China'
        },
        design: {
            width: 360,
            weight: 1.8,
            thickness: 19,
            os: 'Window 11 Home'
        },
        rating: {
            rating: 4.3,
            num_of_rating: '8k',
        },
        screen: {
            resolution: '2880 x 1620',
            type: 'OLED',
            frequency: 120,
            inch: 15.6
        },
        chip: {
            company: 'AMD',
            name: 'Ryzen 7',
            type: '5800H',
            core_speed: 2
        },
        ram: {
            capacity: 16,
            type: 'DDR4',
            speed: 3200
        },
        disk: {
            capacity: 512,
            type: 'SSD'
        },
        connect: {
            USB: 2,
            LAN: 2,
            external_memory: 2
        },
        graphic: {
            company: 'Nvidia',
            name: "RTX 3050",
            type: "GeForce",
            capacity: 4,
        },
        battery: {
            capacity: 5000,
            slot: 2
        },
        outstanding: {
            cpu: {
                name: 'Intel UHD Graphics for 11th Gen Intel Processors',
                image: 'intel',
                core: 2,
                thread: 4,
                clock_speed: 2.7,
                turbo_speed: 4.5,
                TDP_down: 35,
                typical_TDP: 45
            },
            graphic: {
                name: 'NVIDIA GeForce GTX 1650 4GB',
                image: 'gtx',
                memory: 4,
                core_clock: 1485,
                memory_clock: 800,
                directX: 12,
                openGL: 4.6,
                max_TCP: 75
            }
        },
        store_price: [{
                name: 'Amazon',
                img: 'amazon-pay',
                price: 1000,
            },
            {
                name: 'Wallmart',
                img: 'wallmart',
                price: 1050,
            },
            {
                name: 'Best Buy',
                img: 'best-buy',
                price: 1052,
            },
            {
                name: 'App Store',
                img: 'app-store',
                price: 1058,
            },
            {
                name: 'Phi Long',
                img: 'philong',
                price: 1160,
            },
            {
                name: 'The gioi di dong',
                img: 'thegioididong',
                price: 1165,
            },
        ]
    }, 
    {
        id: 7,
        score: 5.5,
        info: {
            company: 'Lenovo',
            name: 'Lenovo IdeaPad 1 15AMN7',
            image: dataImage[6],
            madeIn: 'China'
        },
        design: {
            width: 360,
            weight: 1.58,
            thickness: 17.9,
            os: 'Window 11 Home Single Language'
        },
        rating: {
            rating: 4.0,
            num_of_rating: '6k',
        },
        screen: {
            resolution: '1980 x 1080',
            type: 'FHD',
            frequency: 60,
            inch: 15.6
        },
        chip: {
            company: 'AMD',
            name: 'Ryzen',
            type: '7520U',
            core_speed: 2
        },
        ram: {
            capacity: 8,
            type: 'DDR5',
            speed: 5500
        },
        disk: {
            capacity: 512,
            type: 'SSD'
        },
        connect: {
            USB: 2,
            LAN: 2,
            external_memory: 2
        },
        graphic: {
            company: 'AMD',
            name: "Radeon",
            type: "610",
            capacity: 2,
        },
        battery: {
            capacity: 5000,
            slot: 2
        },
        outstanding: {
            cpu: {
                name: 'Intel UHD Graphics for 11th Gen Intel Processors',
                image: 'intel',
                core: 2,
                thread: 4,
                clock_speed: 2.7,
                turbo_speed: 4.5,
                TDP_down: 35,
                typical_TDP: 45
            },
            graphic: {
                name: 'NVIDIA GeForce GTX 1650 4GB',
                image: 'gtx',
                memory: 4,
                core_clock: 1485,
                memory_clock: 800,
                directX: 12,
                openGL: 4.6,
                max_TCP: 75
            }
        },
        store_price: [{
                name: 'Amazon',
                img: 'amazon-pay',
                price: 1150,
            },
            {
                name: 'Wallmart',
                img: 'wallmart',
                price: 1190,
            },
            {
                name: 'Best Buy',
                img: 'best-buy',
                price: 1200,
            },
            {
                name: 'App Store',
                img: 'app-store',
                price: 1258,
            },
            {
                name: 'Phi Long',
                img: 'philong',
                price: 1260,
            },
            {
                name: 'The gioi di dong',
                img: 'thegioididong',
                price: 1365,
            },
        ]
    }, 
    {
        id: 8,
        score: 4.9,
        info: {
            company: 'MSI',
            name: 'MSI Modern 15 A11MU-1022VN',
            image: dataImage[7],
            madeIn: 'China'
        },
        design: {
            width: 356,
            weight: 1.6,
            thickness: 16.9,
            os: 'Window 11 Home Single Language'
        },
        rating: {
            rating: 4.1,
            num_of_rating: '5k',
        },
        screen: {
            resolution: '1980 x 1080',
            type: 'IPS',
            frequency: 60,
            inch: 15.6
        },
        chip: {
            company: 'Intel',
            name: 'core i5',
            type: '1155G7',
            core_speed: 2
        },
        ram: {
            capacity: 8,
            type: 'DDR4',
            speed: 3200
        },
        disk: {
            capacity: 512,
            type: 'SSD'
        },
        connect: {
            USB: 2,
            LAN: 2,
            external_memory: 2
        },
        graphic: {
            company: 'Intel',
            name: "Iris",
            type: "Xe",
            capacity: 2,
        },
        battery: {
            capacity: 5000,
            slot: 2
        },
        outstanding: {
            cpu: {
                name: 'Intel UHD Graphics for 11th Gen Intel Processors',
                image: 'intel',
                core: 2,
                thread: 4,
                clock_speed: 2.7,
                turbo_speed: 4.5,
                TDP_down: 35,
                typical_TDP: 45
            },
            graphic: {
                name: 'NVIDIA GeForce GTX 1650 4GB',
                image: 'gtx',
                memory: 4,
                core_clock: 1485,
                memory_clock: 800,
                directX: 12,
                openGL: 4.6,
                max_TCP: 75
            }
        },
        store_price: [{
                name: 'Amazon',
                img: 'amazon-pay',
                price: 1500,
            },
            {
                name: 'Wallmart',
                img: 'wallmart',
                price: 1550,
            },
            {
                name: 'Best Buy',
                img: 'best-buy',
                price: 1652,
            },
            {
                name: 'App Store',
                img: 'app-store',
                price: 1658,
            },
            {
                name: 'Phi Long',
                img: 'philong',
                price: 1760,
            },
            {
                name: 'The gioi di dong',
                img: 'thegioididong',
                price: 1265,
            },
        ]
    }, 
];

export default data;