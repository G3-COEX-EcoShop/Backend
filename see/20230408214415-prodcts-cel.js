"use strict";
const models = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const info = await models.Product.bulkCreate(
      [
        {
            category: "celulares",
            brand: "xiaomi",
            name: "redmi 11",
            description:
              "Con el REDMI Note 11 tendrás un rendimiento único y un gran ahorro de batería gracias a sus 6 nm, esto significa que tendrás la posibilidad de utilizarlo sin demora mientras que el equilibrio energético te hará sentir que su energía no tiene fin. Además, su batería de 5000 mAh posee un sistema de carga rápida que permite que lo cargues de 0 a 100% en aprox 58 minutos, sumérgete en una experiencia audiovisual magnifica gracias a su pantalla AMOLED que te ofrece colores vivos y naturales junto con su altavoz doble que te permitirá disfrutar de contenidos con una calidad optima ¡Ven por el tuyo!",
            stock: 10,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680103924/EcoShop/xiaomi_redmi_note_11_color_blanco_naldwy.jpg",
            price: 800000,
            status: 1,
            Reviews: [
              {
                description: "celular 1",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "android",
              storage: "64GB/128GB",
              ram: "4GB/6GB",
              processor: "Snapdragon 680 2.4GHz",
              screen_size: "6.2 pulgadas",
              resolution: "1080 x 2400 pixels",
              main_camera: "50mpx",
              front_camera: "20mpx",
              battery: "4000mAh",
            },
          },
          {
            category: "celulares",
            brand: "motorola",
            name: "MOTOROLA G52 128GB Blanco",
            description:
              "Disfruta al máximo de tu contenido de entretenimiento favorito con el moto G52. Observa el contraste infinito de la pantalla OLED de 6.6 y aprovecha al maximo su taza de refresco de 90 Hz. Siente el sonido multidimensional que ofrece el audio Dolby Atmos con el que cuenta el moto G52. ¡Compra el tuyo ahora!.",
            stock: 6,
            price: 899900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680108644/EcoShop/MOTOROLA_G52_128GB_Blanco_j2pgya.jpg",
            Reviews: [
              {
                description: "celular2",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "android",
              storage: "128gb",
              ram: "4gb",
              processor: "Snapdragon 720 2.4GHz",
              screen_size: "6.5 pulgadas",
              resolution: "1440x2400 pxl",
              main_camera: "64mpx",
              front_camera: "16mpx",
              battery: "5,000 mAh + TurboPower™ 302",
            },
          },
  
          {
            category: "celulares",
            brand: "motorola",
            name: "MOTOROLA G22 128GB Negro ",
            description:
              "Mira cómo tu visión cobra vida con el Moto G22 Azul. Captura cada uno de los momentos con un brillante sistema de cámara cuádruple de 50MPX. Míralo todo en una pantalla Max Visión fluida de 6,5 y tasa de refresco de 90Hz. Descubre todo lo que es posible. ¡Consigue el tuyo acá!",
            stock: 8,
            price: 659900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680112323/EcoShop/MOTOROLA_G22_128GB_Negro_rde7uf.jpg",
            Reviews: [
              {
                description: "celular3",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "android 12",
              storage: "128gb",
              ram: "4gb",
              processor: "Snapdragon 720 2.4GHz",
              screen_size: "6.5 pulgadas",
              resolution: "720x1400 pxl",
              main_camera: "50mpx",
              front_camera: "16mpx",
              battery: "5,000 mAh + TurboPower™ 302",
            },
          },
  
          {
            category: "celulares",
            brand: "xiaomi",
            name: "XIAOMI Redmi 10 2022 128GB Gris",
            description:
              "Con el XIAOMI Redmi 10 2022 128GB Gris captura tus momentos especiales con su cámara principal con alta resolución de 50MP, junto a 3 cámaras para que no pierdas detalle alguno. Disfruta tus contenidos favoritos en su gran pantalla de 6.5 con resolución FHD+ junto a una tasa de refresco de 90Hz. Cuenta con un procesador MediaTek Helio G88 que te permite usar cualquier aplicación tranquilamente. La batería de 5000 mAh con carga rápida de 18W te permitirá llegar hasta el final del día. Adicional, cuenta con sonido estéreo gracias a sus dos altavoces ¡Lleva el tuyo!",
            stock: 6,
            price: 749900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680114340/EcoShop/XIAOMI_Redmi_10_2022_128GB_Gris_nw7hr2.jpg",
            Reviews: [
              {
                description: "celular4",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "android 12",
              storage: "128gb",
              ram: "4gb",
              processor: "MediaTek G88 90Hz",
              screen_size: "6.5 pulgadas",
              resolution: "720x1400 pxl",
              main_camera: "50mpx",
              front_camera: "16mpx",
              battery: "5,000 mAh con carga rápida de 18W",
            },
          },
          {
            category: "celulares",
            brand: "iphone",
            name: "iPhone 11 64 GB Blanco",
            description:
              "El iPhone 11 Blanco tiene un sistema de dos cámaras que te permite tomar fotos con ultra gran angular, capturar excelentes fotos nocturnas con el modo Noche y grabar videos con una calidad sorprendente. Además, es resistente al agua y al polvo,* tiene una batería de larga duración y viene en seis colores diferentes. Disfruta la espectacular experiencia de tener un iPhone 11.¡Encuentra el iPhone ideal para ti acá!",
            stock: 9,
            price: 2369000,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680132314/EcoShop/iPhone_11_64_GB_Blanco_pecexy.jpg",
            Reviews: [
              {
                description: "celular5",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "iOS",
              storage: "64gb",
              ram: "4gb",
              processor: "iOs 13 ",
              screen_size: "6.5 pulgadas",
              resolution: "720x1400 pxl",
              main_camera: "12  Mpx",
              front_camera: "12  Mpx",
              battery: "5,000 mAh con carga rápida de 18W",
            },
          },
  
          {
            category: "celulares",
            brand: "iphone",
            name: "iPhone 14 Pro Max 128 GB Morado Oscuro",
            description:
              "El iPhone 14 Pro Max te permite captar detalles increíbles gracias a su cámara gran angular de 48 MP. Además, trae la Dynamic Island y una pantalla siempre activa, para que puedas interactuar con tu iPhone de una forma completamente nueva. Y viene con Detección de Choques, una funcionalidad de seguridad que pide ayuda cuando no estás en condiciones de hacerlo.",
            stock: 8,
            price: 6849000,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680132632/EcoShop/iPhone_14_Pro_Max_128_GB_Morado_Oscuro_m5seg0.jpg",
            Reviews: [
              {
                description: "celular6",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "iOS",
              storage: "128gb",
              ram: "4gb",
              processor: "iOs 16",
              screen_size: "6.7  Pulgadas",
              resolution: "2796 x 1290 ",
              main_camera: "48MP",
              front_camera: "12  Mpx",
              battery: "5,100 mAh ",
            },
          },
          {
            category: "celulares",
            brand: "alcatel",
            name: "ALCATEL 1 32GB Negro",
            description:
              "El Alcatel 1 te ofrece una pantalla FullView de 5 pulgadas para que te dejes llevar con su calidad de imagen. Por otro lado, su acabado metálico garantiza un aspecto de primera estés donde estés. En su versión 2022 cuenta con un procesador de cuatro núcleos de 1.28 GHz para que tengas una experiencia más ágil, 32GB de almacenamiento, cámaras de 5MP y 2MP, batería de 2000 mAh, y maneja el sistema operativo Android 11 Go Edition. Además, puedes expandir su memoria hasta 64GB GB para que tengas más espacio en tu smartphone y lo mejor es DUAL SIM. ¡Adquiere el tuyo acá!",
            stock: 2,
            price: 269900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680132915/EcoShop/ALCATEL_1_32GB_Negro_q1oiwa.jpg",
            Reviews: [
              {
                description: "celular7",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "android",
              storage: "32gb",
              ram: "1gb",
              processor: "Mediatek",
              screen_size: "5  Pulgadas",
              resolution: "FWVGA+(480X960)",
              main_camera: "5MP",
              front_camera: "2 pxl",
              battery: "2,000 mAh ",
            },
          },
          {
            category: "celulares",
            brand: "alcatel",
            name: "ALCATEL 3 2020 - 64GB Verde",
            description:
              "El Alcatel 1 te ofrece una pantalla FullView de 5 pulgadas para que te dejes llevar con su calidad de imagen. Por otro lado, su acabado metálico garantiza un aspecto de primera estés donde estés. En su versión 2022 cuenta con un procesador de cuatro núcleos de 1.28 GHz para que tengas una experiencia más ágil, 32GB de almacenamiento, cámaras de 5MP y 2MP, batería de 2000 mAh, y maneja el sistema operativo Android 11 Go Edition. Además, puedes expandir su memoria hasta 64GB GB para que tengas más espacio en tu smartphone y lo mejor es DUAL SIM. ¡Adquiere el tuyo acá!",
            stock: 6,
            price: 798000,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680133203/EcoShop/ALCATEL_3_2020_-_64GB_Verde_laeg1k.jpg",
            Reviews: [
              {
                description: "celular8",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "android",
              storage: "64gb",
              ram: "4gb",
              processor: "android 10",
              screen_size: "6.22  Pulgadas",
              resolution: "HD+",
              main_camera: "13MP",
              front_camera: "5 pxl",
              battery: "4,000 mAh ",
            },
          },
          {
            category: "celulares",
            brand: "huawei",
            name: "HUAWEI Nova 10 SE 8G + 128GB Negro",
            description:
              "HUAWEI nova 10 SE tiene un diseño innovador, su Anillo de Órbita Estelar y nuevos colores de moda te brinda diseños elegantes y con estilo para la generación Z, orientada a la confianza y a la actitud! Visualiza más de 1 billón de colores únicos y naturales logrando imágenes con una claridad asombrosa en la pantalla OLED de 90Hz y 270 Hz de Tasa de Muestreo Táctil para una respuesta rápida en los videojuegos. No te pierdas un solo detalle de tus fotografias, gracias a la triple cámara de 108MP, ultra gran angular de 112° y macro de 4cm, capturas todo lo que ves y lo que no ves. ¡Lleva el tuyo!",
            stock: 10,
            price: 1799900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680133459/EcoShop/HUAWEI_Nova_10_SE_8G_128GB_Negro_tq47cc.jpg",
            Reviews: [
              {
                description: "celular9",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "EMUI 12 ",
              storage: "128gb",
              ram: "8gb",
              processor: "EMUI 12",
              screen_size: "6.67  Pulgadas",
              resolution: "FHD",
              main_camera: "60MP",
              front_camera: "50pxl",
              battery: "4,000 mAh ",
            },
          },
          {
            category: "celulares",
            brand: "huawei",
            name: "HUAWEI Y9A 128GB Rosado - Sakura Pink",
            description:
              "Déjate seducir por el inigualable HUAWEI Y9a y sus exquisitos matices que se mueven entre la luz y las sombras, Descubre su increíble diseño Halo en el que conviven las espectaculares cuatro cámaras traseras con sensor de 64 MP para que no pares de sorprender y sorprenderte con fotos fantásticas y pon a prueba su inigualable carga rápida de 40 W, para que explores sin pensar más que en divertirte",
            stock: 11,
            price: 785900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680133661/EcoShop/HUAWEI_Y9A_128GB_Rosado_-_Sakura_Pink_mo5qem.jpg",
            Reviews: [
              {
                description: "celular10",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "Android ",
              storage: "128gb",
              ram: "8gb",
              processor: "Kirin",
              screen_size: "6.75  Pulgadas",
              resolution: "LCD",
              main_camera: "48MP",
              front_camera: "8pxl",
              battery: "6,000 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "huawei",
            name: "HUAWEI Mate 50 Pro 256GB",
            description:
              "Huawei Mate 50 Pro una nueva era de la fotografía en Smartphones! Con una apertura de f/1.4 que brinda una claridad de imagen más significativa. Por otro lado, gracias a las tecnología de profundidad y de algoritmo del software, el efecto bokeh es mucho más preciso y natural. Asimismo, se puede autoajustar la apertura de forma inteligente en el modo predeterminado, mientras que el modo profesional te ofrece 10 tamaños de apertura diferentes para capturar fotografías increíbles y en todos los ambientes porque es resistente al polvo y agua ya que cuenta con la certificación IP68. Compra el tuyo!",
            stock: 7,
            price: 5999900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680133850/EcoShop/HUAWEI_Mate_50_Pro_256GB_hhyedt.jpg",
            Reviews: [
              {
                description: "celular11",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "Android",
              storage: "256gb",
              ram: "8gb",
              processor: "Snapdragon 8+ Gen 1 4G",
              screen_size: "OLED 6,74 pulgadas",
              resolution: "2.616 × 1.212 píxeles",
              main_camera: "50MP",
              front_camera: "13pxl",
              battery: "4,700 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "oppo",
            name: "OPPO A57 128GB Negro",
            description:
              "",
            stock: 3,
            price: 873924,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680134720/EcoShop/OPPO_A57_128GB_Negro_c3ixy5.jpg",
            Reviews: [
              {
                description: "celular12",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "ColorOS 12.1",
              storage: "128gb",
              ram: "4gb",
              processor: "MediaTek Helio G35",
              screen_size: "6.75  Pulgadas",
              resolution: "1612 x 720 (HD+)",
              main_camera: "13MP",
              front_camera: "8pxl",
              battery: "6,000 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "oppo",
            name: "OPPO Reno 7 Azul ",
            description:
              "El Oppo Reno 7 con su cámara microscópica con Orbit light es capaz de capturar hasta el más pequeño detalle del mundo, además de su exclusiva colaboración SONY-OPPO integrando el primer Ultra sensor IMX709 en cámara frontal, asegurando fotos y videos increíbles incluso en condiciones de poca luz. Su tecnología de diseño OPPO GLOW, evita la marcación de huellas dactilares y disminuye daños por rayones o arañazos. Brinda super carga rápida SUPERVOOC de 33W y 5 capas de seguridad de carga. Alto rendimiento y funciones exclusivas para el usuario. ¡Lleva el tuyo ahora!",
            stock: 15,
            price: 1999900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680134890/EcoShop/OPPO_Reno_7_Azul_hr703l.jpg",
            Reviews: [
              {
                description: "celular13",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "ColorOS 13",
              storage: "128/256gb",
              ram: "6/8gb",
              processor: "Snapdragon™ 680",
              screen_size: "6.75  Pulgadas",
              resolution: "2400 x 1080",
              main_camera: "64MP",
              front_camera: "32pxl",
              battery: "6,000 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "kalley",
            name: "KALLEY Silver Max Pro 32GB Verde",
            description:
              "Déjate cautivar con el color verde con efecto 3D del KALLEY Silver Max Pro.| Tiene una pantalla 6,5” IPS desarrollado para los que disfrutan de los mejores detalles, con Android 11 y sus mejores funciones. Tiene el Chipset A25 de MTK, cámara con Inteligencia Artificial y más grandes funciones para que tener la mejor experiencia. Accesorios incluidos cargador tipo C, audífonos, protector de silicona y vidrio templado. Conectividad 4GLTE conexión estable y rápida, Bluetooth V5.0 menor consumo energético y fluidez, Wifi Dual Band 2,4Ghz/5Ghz conexión más versátil y rápida. ¡lleva el tuyo ahora!",
            stock: 2,
            price: 374900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680135371/EcoShop/KALLEY_Silver_Max_Pro_32GB_Verde_xqdc1s.jpg",
            Reviews: [
              {
                description: "celular14",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "Android ",
              storage: "32gb",
              ram: "3gb",
              processor: "Mediatek A25 Octa-Core",
              screen_size: "6.5”HD+ IPS",
              resolution: "720X1600 ",
              main_camera: "13MP",
              front_camera: "8pxl",
              battery: "5,000 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "motorola",
            name: "MOTOROLA E22I 64GB Blanco",
            description:
              "El Moto E22i Blanco busca brindar un valor excepcional y características esenciales a los consumidores a un precio accesible, cuenta con parlantes estéreo y una fluida pantalla HD+ ultra ancha de 6.5 y 90 Hz brindarán una experiencia audiovisual mejorada.¡Lleva el tuyo ahora!",
            stock: 20,
            price: 499900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680135492/EcoShop/MOTOROLA_E22I_64GB_Blanco_rvoyot.jpg",
            Reviews: [
              {
                description: "celular15",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "Android ",
              storage: "128gb",
              ram: "8gb",
              processor: "Mediatek 12 GO",
              screen_size: "6.5  Pulgadas",
              resolution: "720 x 1600",
              main_camera: "16MP",
              front_camera: "5pxl",
              battery: "4,000 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "tecno",
            name: " TECNO POVA 4 8+256GB Azul",
            description:
              "TECNO POVA 4 y Su batería gran de 6000 mAh es imbatible en el mercado y prueba de ello es que cuenta con una duración máxima de 12,5 horas jugando videojuegos como MOBILE LEGENDS, carga rápida de 18 Watts, hasta 28,75 horas usando constantemente GOOGLE MAPS, 61.96 horas en llamadas 4G, lo hace el smartphone indispensable para grandes consumidores de juegos y contenido en la red. Esto sumado a su diseño innovador, pantalla de 6,9 (refresco de 90 Hz) pulgadas y chip de alta velocidad, lo hacen el equipo para juegos y comunidad por excelencia.",
            stock: 12,
            price: 932.900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680135622/EcoShop/TECNO_POVA_4_8_256GB_Azul_djnyi5.jpg",
            Reviews: [
              {
                description: "celular16",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "Android ",
              storage: "128gb",
              ram: "8gb",
              processor: "Spreadtrum",
              screen_size: "65.6  Pulgadas",
              resolution: "HD",
              main_camera: "16MP",
              front_camera: "8pxl",
              battery: "5,000 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "iphone",
            name: "iPhone 13 128GB Azul Medianoche",
            description:
              "Diseñamos una arquitectura completamente nueva y giramos los lentes 45 grados. De esta manera, pudimos incluir nuestro sistema de dos cámaras más avanzado y un sensor de cámara gran angular más grande. Además, hicimos lugar para nuestra estabilización óptica de imagen por desplazamiento de sensor. Y equipamos la cámara ultra gran angular con un sensor más rápido.",
            stock: 6,
            price: 4209000,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680135792/EcoShop/iPhone_13_128GB_Azul_Medianoche_jwsfmo.jpg",
            Reviews: [
              {
                description: "celular17",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "iOS",
              storage: "128gb",
              ram: "8gb",
              processor: "iOs 15",
              screen_size: "6.1  Pulgadas",
              resolution: "2532 x 1170",
              main_camera: "12MP",
              front_camera: "12pxl",
              battery: "6,000 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "ZTE",
            name: "ZTE BLADE L210 - 32GB Azul",
            description:
              "Diseño clásico, confortable y accesible. Conoce el ZTE BLADE L210.| Celular alimentado por el chipset Spreadtrum SC7731E, 1 GB de RAM y 32 GB de almacenamiento interno para que guardes todos tus recuerdos y contenidos multimedia. Viene con una batería de Li-Ion 2000 mAh. Cuenta con una pantalla de 6, una cámara trasera de 8MP y una frontal de 5MP para retratar esos momentos importantes en tu vida. Diviértete y mantente siempre conectado, ¡lleva el tuyo ahora!",
            stock: 8,
            price: 259900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680136018/EcoShop/ZTE_BLADE_L210_-_32GB_Azul_aeahjw.jpg",
            Reviews: [
              {
                description: "celular18",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "Android",
              storage: "64gb",
              ram: "2gb",
              processor: "Unisoc 11Go",
              screen_size: "6.52  Pulgadas",
              resolution: "720*1600",
              main_camera: "13MP",
              front_camera: "5pxl",
              battery: "5,000 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "ZTE",
            name: "ZTE BLADE A52 64GB DS Azul",
            description:
              "Experimenta lo mejor del entretenimiento en un solo equipo!!",
            stock: 9,
            price: 479.900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680136257/EcoShop/ZTE_BLADE_A52_64GB_DS_Azul_rd2hn2.jpg",
            Reviews: [
              {
                description: "celular19",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "Android ",
              storage: "64gb",
              ram: "2gb",
              processor: "KUnisoc 11go",
              screen_size: "6.52  Pulgadas",
              resolution: "720*1600",
              main_camera: "13MP",
              front_camera: "5pxl",
              battery: "5,000 mAh ",
            },
          },
  
          {
            category: "celulares",
            brand: "realme",
            name: "REALME C33 128GB Azul",
            description:
              "Disfruta del realme C33 Azul, el producto más elegante del nivel entrada. Junto con un excelente diseño ultra delgado podrás aprovechar de una gran pantalla de 6,5 pulgadas y unas cámaras de 50 Mpx + 8 Mpx harán que tomes fotografías de otro nivel, con calidad impresionante. Cuenta con una batería de 5000 mAh que permite tener un tiempo de uso sin estar recargando constantemente. ¡Atrévete al salto y lleva el tuyo ahora!",
            stock: 5,
            price: 699.900,
            status: 1,
            img_url:
              "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680136556/EcoShop/REALME_C33_128GB_Azul_avhbwe.jpg",
            Reviews: [
              {
                description: "celular20",
                point: 5,
                id_user: 1,
              },
              {
                description: "Cillum voluptate elit aliqua sit ullamco amet.",
                point: 2,
                id_user: 1,
              },
            ],
            ProductCel: {
              operating_system: "Android ",
              storage: "128gb",
              ram: "4gb",
              processor: "Unisoc 12",
              screen_size: "6.5  Pulgadas",
              resolution: "HD+",
              main_camera: "50MP",
              front_camera: "5pxl",
              battery: "5,000 mAh ",
            },
          },
      ],
      {
        include: [models.ProductCel, models.Review],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
    await queryInterface.bulkDelete("ProductCels", null, {});
    await queryInterface.bulkDelete("Products", null, {});
  },
};
