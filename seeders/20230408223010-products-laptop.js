"use strict";
const models = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const info = await models.Product.bulkCreate(
      [
        {
          category: "computadores",
          brand: "hp",
          name: "computador HP pavilion",
          description:
            "Permanece conectado y productivo con el espectacular portátil HP Pavilion! Increíble desempeño para que puedas hacer más y disfrutar del entretenimiento donde quiera que vayas. Entretenimiento excepcional que te proporciona su pantalla con microbordes y audio de B&O. Modo de espera moderno conectado para que estés actualizado con tu correo electrónico, notificaciones de calendario y mucho más, incluso si no usas el equipo. La larga duración de la batería y la tecnología HP Fast Charge te permiten trabajar, ver contenido y permanecer conectado durante todo el día. ¡Encuentra el tuyo aquí!",
          stock: 7,
          price: 2049900,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680836148/Portatiles/Computador_Port%C3%A1til_HP_Pavilion_15_lnwq5t.webp",
          Reviews: [
            {
              description: "pc1",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "intel",
            cpu_model: "i5-1135G7",
            graphics_coprocessor: "",
            storage: "Disco SSD 256 GB",
            ram: "8 gb",
            operating_system: "Windows",
            screen_size: "15.6 pulgadas",
            resolution: "1366 x 768 (HD)",
          },
        },
        {
          category: "computadores",
          brand: "asus",
          name: "computador Portatil ASUS",
          description:
            "Ya sea para trabajar o jugar, El ASUS X415 plateado es el portátil que ofrece un gran rendimiento y efectos visuales envolventes. Su pantalla NanoEdge cuenta con amplios ángulos de visión de 178 ° y un revestimiento antirreflejos para una experiencia verdaderamente atractiva. Con un peso total de solo 1,6 kg, el ASUS X415 es extremadamente portátil, tan ligero que se adapta a su estilo de vida. El ASUS X415 está equipado con el puerto USB-C 3.2 reversible, diseñado para que la conexión de dispositivos sea lo más fácil posible. ¡Llévalo ya!",
          stock: 3,
          price: 1459099,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835692/Portatiles/Computador_Port%C3%A1til_ASUS_14_Pulgadas_X415JA_vsq5em.jpg",
          Reviews: [
            {
              description: "pc2",
              point: 5,
              id_user: 1,
            },
            {
              description: "X415JA-EK1831W",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "intel",
            cpu_model: "CORE I3-1115G4",
            graphics_coprocessor: "",
            storage: "256 SSD M.2 Pcie",
            ram: "4 gb",
            operating_system: "Windows",
            screen_size: "14 pulgadas",
            resolution: "FHD",
          },
        },

        {
          category: "computadores",
          brand: "hp",
          name: "HP Laptop 14-dq2510la",
          description:
            "Con el portátil HP 14-dq2510la, mantente productivo y entretenido desde cualquier lugar gracias a la batería de larga duración y la pantalla con microbordes. Aprecia más en la pantalla gracias al bisel con microborde de 6,5 mm. Un diseño fino y ligero te permite llevar este portátil a cualquier lugar con facilidad. Supera los días de mayor actividad gracias al desempeño de su procesador eficiente y gran capacidad de almacenamiento. Completa tus tareas con rapidez gracias al alto desempeño, la capacidad de respuesta y la conectividad que te ofrece su excelente configuración. ¡Lleva el tuyo ya!",
          stock: 9,
          price: 1750000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680836068/Portatiles/Computador_Port%C3%A1til_HP_14_Pulgadas_dq2510la_jujktn.jpg",
          Reviews: [
            {
              description: "pc3",
              point: 5,
              id_user: 1,
            },
            {
              description: "dq2510la",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "intel",
            cpu_model: "CORE I3-1115G4",
            graphics_coprocessor: "",
            storage: "256 SSD M.2",
            ram: "8 gb",
            operating_system: "Windows 11 Home",
            screen_size: "14 pulgadas",
            resolution: "1366 x 768",
          },
        },
        {
          category: "computadores",
          brand: "acer",
          name: "Computador Portatil Gamer ACER",
          description:
            "Acer te invita a disfrutar la Nitro 5 diseñada para sacarle el máximo provecho a los procesadores INTEL. Contaras con un sonido más nítido gracias a sus altavoces que pueden emitir un entorno sonoro espacial en 3D, que te permitirá escuchar de dónde vienen tus oponentes con una excelente precisión. Sumado a esto podrás contar con una abundante gama de puertos, como HDMI y el más reciente estándar USB 3.1 con compatibilidad para la primera y segunda generación, de igual manera contaras con una Pantalla FHD tecnologia IPS colores mas vibrantes y video de alta calidad. Consíguelo aquí en Alkosto",
          stock: 7,
          price: 3699000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835764/Portatiles/Computador_Port%C3%A1til_Gamer_ACER_15.6_Pulgadas_504Y_cdfld8.jpg",
          Reviews: [
            {
              description: "pc4",
              point: 5,
              id_user: 1,
            },
            {
              description: "504Y",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "INTEL CI5 11400",
            graphics_coprocessor: "GeForce® GTX 1650",
            storage: "DISCO SSD 1TB",
            ram: "8 gb",
            operating_system: "Windows",
            screen_size: "15.6 pulgadas",
            resolution: "FHD",
          },
        },
        {
          category: "computadores",
          brand: "lenovo",
          name: "Computador Portatil Gamer LENOVO Legión 5",
          description:
            "Con el portátil gamer LENOVO Legión 5 color gris, disfruta de un rendimiento para Juegos de élite en un dispositivo delgado y liviano con una duración de la batería increíble gracias a los nuevos procesadores Intel, disfruta del máximo rendimiento gracias a su gráficos NVIDIA GeForce RTX para gamer y creadores. ofrece los imágenes más realistas, con nuevas funciones de vanguardia y el poder de la inteligencia artificial es la opción ideal para ascender en tu juegos y proyectos, lleva el tuyo ahora!",
          stock: 2,
          price: 8199900,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835860/Portatiles/Computador_Port%C3%A1til_Gamer_LENOVO_15.6_Pulgadas_Legi%C3%B3n_5_fn9qhh.jpg",
          Reviews: [
            {
              description: "pc5",
              point: 5,
              id_user: 1,
            },
            {
              description: "Legion 5",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "AMD Ryzen™ 7 5800H Processor ",
            graphics_coprocessor: "NVIDIA® GeForce RTX™",
            storage: "512 GB SSD",
            ram: "8 gb",
            operating_system: "Windows 11 Home Single Language 64",
            screen_size: "15.6 pulgadas",
            resolution: "2560 x 1600",
          },
        },
        {
          category: "computadores",
          brand: "lenovo",
          name: "Computador Portatil Gamer LENOVO IdeaPad Gaming 3",
          description:
            "Con LENOVO Ideapad Gaming 3 color blanco, es hora de llevar su experiencia de juego más allá del ámbito de normal, destacara entre su círculo de juegos, proyecta una confianza serena con imágenes nítidas y una jugabilidad fluida que se mantiene fresca ya que cuenta con un sistema térmico perfecto para soportar altas temperaturas mientras vives una experiencia de juego más silenciosa. Además, cuenta con la función Q Control, que permite a los usuarios ajustar la velocidad del ventilador del modo silencioso al modo equilibrado, asegurándote que disfrutes de tus juegos favoritos como nunca, lleva el tuyo ahora",
          stock: 10,
          price: 6759000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835764/Portatiles/Computador_Port%C3%A1til_Gamer_ACER_15.6_Pulgadas_504Y_cdfld8.jpg",
          Reviews: [
            {
              description: "pc6",
              point: 5,
              id_user: 1,
            },
            {
              description: "IdeaPad Gaming 3",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "AMD",
            cpu_model: "AMD R7 5800H ",
            graphics_coprocessor: "NVIDIA® GeForce® RTX 3060",
            storage: "512 GB SSD",
            ram: "8 gb",
            operating_system: "Windows 11 Home Single Language 64",
            screen_size: "15.6 pulgadas",
            resolution: "FHD",
          },
        },
        {
          category: "computadores",
          brand: "hp",
          name: "Computador Portatil VICTUS Gamer HP",
          description:
            "Portátil Victus HP, Juega al máximo con una frecuencia de actualización rápida y disfruta de una experiencia visual ultra nítida! Aprovecha la intensidad de cada partida con un sistema de refrigeración que evita el sobrecalentamiento, podrás jugar muchas horas. No pares! sigue incluso en salas con iluminación tenue o en vuelos nocturnos, con el teclado iluminado podrás seguir escribiendo cómodamente. Memoria de doble canal, dos canales funcionan simultáneamente, se duplica la velocidad de comunicación entre el controlador de memoria y la RAM, aumentando el rendimiento del sistema.",
          stock: 1,
          price: 7399000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680836353/Portatiles/Computador_Port%C3%A1til_VICTUS_Gamer_HP_16.1_Pulgadas_d0510la_ysvlrd.jp",
          Reviews: [
            {
              description: "pc7",
              point: 5,
              id_user: 1,
            },
            {
              description: "d0510la",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "Intel® Core™ i7-11800H",
            graphics_coprocessor: "NVIDIA® GeForce® RTX 3060",
            storage: "512 GB SSD",
            ram: "16 gb",
            operating_system: "Windows 11 ",
            screen_size: "16.1 pulgadas",
            resolution: "Full HD (1920x1080)",
          },
        },

        {
          category: "computadores",
          brand: "asus",
          name: "Computador Portatil Gamer ROG Strix Scar SE",
          description:
            "Compite al más alto nivel de juegos con el ROG Strix SCAR 17. Acepta cualquier desafío con la potente CPU Intel Core i9 12950HX y la GPU GeForce RTX 3080 Ti. Sumérjase en detalles exuberantes con su pantalla WQHD de 240Hz de alta resolución. El compuesto de metal líquido en la CPU y sus cuatro disipadores expulsan rápidamente el calor. Sus 4 altavoces permiten un sonido envolvente virtual de 5.1.2 canales con tecnología Dolby Atmos. Además, el Keystone II ofrece una forma versátil de personalizar su máquina y proteger sus datos personales. Atrévete a batir a los mejores. Llévalo ya!",
          stock: 11,
          price: 7600900,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835948/Portatiles/Computador_Port%C3%A1til_Gamer_ROG_Strix_Scar_SE_17.3_Pulgadas_G733CX_hga9sq.jpg",
          Reviews: [
            {
              description: "pc8",
              point: 5,
              id_user: 1,
            },
            {
              description: "G513RC-HN057W",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "AMD",
            cpu_model: "AMD RYZEN R7",
            graphics_coprocessor: "NVIDIA GEFORCE RTX 3050",
            storage: "512 GB SSD",
            ram: "16 gb",
            operating_system: "Windows 11 home",
            screen_size: "17.3 Pulgadas",
            resolution: "Full HD (1920x1080)",
          },
        },

        {
          category: "computadores",
          brand: "hp",
          name: "Computadora Escritorio Gamer Victus HP ",
          description:
            "Potente y espectacular Torre gaming Victus! Juega a tu máximo nivel con un procesador eficiente y gráficos impresionantes. Experimenta juegos llenos de acción con la pantalla FHD IPS de 23.8 , diseñada para ofrecer un color más uniforme, excelente imagen y ángulos de visión ultra amplios, que te sumerje en un mundo de victorias ganadas. Aprovecha los puertos USB y el gran espacio de almacenamiento que te ofrece este moderno equipo. Con OMEN Gaming Hub puedes estar a cargo de todo, desde aspectos fundamentales del sistema hasta controles del hardware. ¿Que esperas? ¡Lleva la tuya aquí!",
          stock: 15,
          price: 4349000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835582/Portatiles/Computador_Escritorio_Gamer_Victus_HP_23.8_Pulgadas_TG02-0002lam_chq9qp.jpg",
          Reviews: [
            {
              description: "pc9",
              point: 5,
              id_user: 1,
            },
            {
              description: "TG02-0002lam",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "Intel Core i5 12400F",
            graphics_coprocessor: "Nvidia GeForce GTX 1650 4GB",
            storage: "512 GB SSD",
            ram: "8 gb",
            operating_system: "Windows 11",
            screen_size: "23.8 Pulgadas",
            resolution: "Full HD",
          },
        },

        {
          category: "computadores",
          brand: "hp",
          name: "Computador All In One HP ",
          description:
            "Desempeño confiable y actualización sencilla. El HP All in One 22-dd2020la combina la potencia de un equipo de escritorio con la belleza de una pantalla moderna y delgada en un dispositivo confiable que está diseñado para crecer contigo. Consigue hacer más con un procesador confiable y mantén actualizado tu computador gracias a un panel posterior fácil de retirar. Podrás disfrutar de un espacio de uso despejado gracias a su diseño elegante, puertos estratégicamente situados, pantalla con microbordes y cámara emergente ¡Este es el momento de llevarlo! ¡Adquiere el tuyo aquí!",
          stock: 6,
          price: 3479000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680834995/Portatiles/Computador_All_in_One_HP_21.5_Pulgadas_dd2020la_oxfd17.jpg",
          Reviews: [
            {
              description: "pc10",
              point: 5,
              id_user: 1,
            },
            {
              description: "dd2020la",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "Intel Core i3-1215U",
            graphics_coprocessor: "No tiene tarjeta de video Grafica",
            storage: "512 GB SSD",
            ram: "8 gb",
            operating_system: "Windows 11",
            screen_size: "21.5 pulgadas",
            resolution: "Full HD",
          },
        },

        {
          category: "computadores",
          brand: "hp",
          name: "Computador All in One HP",
          description:
            "Desempeño confiable y actualización sencilla. El HP All in One 22-dd2020la combina la potencia de un equipo de escritorio con la belleza de una pantalla moderna y delgada en un dispositivo confiable que está diseñado para crecer contigo. Consigue hacer más con un procesador confiable y mantén actualizado tu computador gracias a un panel posterior fácil de retirar. Podrás disfrutar de un espacio de uso despejado gracias a su diseño elegante, puertos estratégicamente situados, pantalla con microbordes y cámara emergente ¡Este es el momento de llevarlo! ¡Adquiere el tuyo aquí!",
          stock: 4,
          price: 1999000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835088/Portatiles/Computador_All_in_One_HP_23.8_Pulgadas_cb0003la_e5sltz.jpg",
          Reviews: [
            {
              description: "pc11",
              point: 5,
              id_user: 1,
            },
            {
              description: "cb0003la",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "AMD",
            cpu_model: "AMD Ryzen 3",
            graphics_coprocessor: "No tiene tarjeta de video Grafica",
            storage: "256 GB SSD",
            ram: "8 gb",
            operating_system: "Windows 11",
            screen_size: "23.8 Pulgadas",
            resolution: "Full HD",
          },
        },

        {
          category: "computadores",
          brand: "lenovo",
          name: "Computador All In One LENOVO ",
          description:
            "El Aio LENOVO Idea Centre A340 color negro con su elegante y moderno soporte y su fino bisel, seguramente llamará la atención. Ya sea para trabajar, ver tus videos o hacer una videollamada, solo tienes que recurrir a este impresionante todo en uno. Con un diseño elegante e inteligente podrás disponer de más espacio y quedará genial en cualquier habitación. realiza tus tareas básicas gracias la capacidad de su procesador Intel Celeron y su almacenamiento en estado solido. Funcionalidad y simplicidad ¡lleva el tuyo ahora!",
          stock: 2,
          price: 2898000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835470/Portatiles/Computador_All_In_One_LENOVO_23.8_Pulgadas_A340_g2rkjj.webp",
          Reviews: [
            {
              description: "pc12",
              point: 5,
              id_user: 1,
            },
            {
              description: "A340",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "Intel Pentium J5040",
            graphics_coprocessor: "No tiene tarjeta de video Grafica",
            storage: "256 GB SSD",
            ram: "4 gb",
            operating_system: "Windows 11 home",
            screen_size: "23.8 Pulgadas",
            resolution: "Full HD",
          },
        },

        {
          category: "computadores",
          brand: "lenovo",
          name: "Computador All In One LENOVO AIO 3",
          description:
            "LENOVO todo en uno AIO 3 cuenta con procesadores Ryzen 3 y grafica integrada AMD Radeon para rendimiento de multimedia optimo para las tareas diarias. Su diseño de pantalla FHD y bordes minimalistas que hacer sea ideal para trabajos y videos que requieran detalle , su acabado mate impide se refleje la luz exterior lo cual genera menos cansancio y cuida tus ojos. Su sistema de audio HD permite se que disfrute de su música y llamadas con claridad y junto a su cámara 720p permite hacer videollamadas de claridad y calidad. Lleva el tuyo ahora!",
          stock: 9,
          price: 4359000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835135/Portatiles/Computador_All_In_One_LENOVO_21_5_Pulgadas_AIO_3_izlhzz.jpg",
          Reviews: [
            {
              description: "pc13",
              point: 5,
              id_user: 1,
            },
            {
              description: "AIO 3",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "Intel Core I5 1240P",
            graphics_coprocessor: "No tiene tarjeta de video Grafica",
            storage: "512 GB SSD",
            ram: "8 gb",
            operating_system: "Windows 11 home",
            screen_size: "21.5 Pulgadas",
            resolution: "Full HD",
          },
        },

        {
          category: "computadores",
          brand: "lenovo",
          name: "Computadora All In One LENOVO AIO 3 Version 2",
          description:
            "El Aio LENOVO Idea Centre AIO 3 Color blanco fue creado para un rendimiento eficiente y con una ingeniería verdaderamente elegante. el balance justo entre procesador, memoria y capacidad de almacenamiento para que desarrolles variedad de tareas. su moderno diseño cuenta con un soporte que te ayuda a optimizar espacio en tu escritorio y una pantalla casi sin bordes con gran resolución para disfrutes de imágenes sorprendentes, No pierdas esta oportunidad, lleva el tuyo ahora!",
          stock: 7,
          price: 3099000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835232/Portatiles/Computador_All_In_One_LENOVO_23_8_Pulgadas_AIO_3_zgszf8.webp",
          Reviews: [
            {
              description: "pc14",
              point: 5,
              id_user: 1,
            },
            {
              description: "AIO 3",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "AMD",
            cpu_model: "AMD R5 5500U",
            graphics_coprocessor: "No tiene tarjeta de video Grafica",
            storage: "512 GB SSD",
            ram: "8 gb",
            operating_system: "Windows 11 home, español",
            screen_size: "23.8 Pulgadas",
            resolution: "Full HD",
          },
        },

        {
          category: "computadores",
          brand: "asus",
          name: "Computador All In One ASUS Vivo ",
          description:
            "El ASUS Vivo AiO 24 V241 negro tiene un marco imperceptible de 2 mm que aprovecha el 88% de la superficie disponible y permite que la imagen se extienda de borde a borde. Con una pantalla LED Full HD de 23,8 y un avanzado sistema de audio ASUS SonicMaster con tecnología bass reflex, el ASUS V241 ofrece una experiencia de entretenimiento de calidad. La tecnología Wide-View permite compartir fotos o vídeos con amigos y familiares. Disfrutarás de juegos y películas con todo lujo de detalles, colores increíbles y un contraste sorprendente. Adquiere el tuyo ya!",
          stock: 20,
          price: 2689000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680834868/Portatiles/Computador_All_in_One_ASUS_Vivo_23.8_Pulgadas_V241EAK_ubyxwz.jpg",
          Reviews: [
            {
              description: "pc15",
              point: 5,
              id_user: 1,
            },
            {
              description: "V241EAK",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "Intel Pentium Gold 7505 Processor 2.0 GHz",
            graphics_coprocessor: "No tiene tarjeta de video Grafica",
            storage: "512 GB SSD",
            ram: "8 gb",
            operating_system: "Windows 11 home",
            screen_size: "23.8 Pulgadas",
            resolution: "Full HD",
          },
        },

        {
          category: "computadores",
          brand: "asus",
          name: "Computador All In One ASUS Zen AIO ",
          description:
            "ASUS Zen AIO 24 negro es un PC hermoso, funcional y potente adaptado totalmente a todo tipo de tus necesidades diarias. Gracias a su memoria de estado sólido y su procesador AMD Ryzen serie 5000, te brinda el más alto rendimiento junto con una estética elegante. La elegante apariencia se acentúa con un soporte de metal adecuado para maximizar tu espacio, junto con altavoces frontales potentes certificados con Harman ,Kardon. Su pantalla impecable ,Nanoedge ,tiene 23,8 pulgadas y una relación cuerpo pantalla del 93%, ofreciéndote una visualización magnífica y una interacción única. ,Cómpralo ya!",
          stock: 14,
          price: 5299000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680834936/Portatiles/Computador_All_in_One_ASUS_Zen_AiO_23_8_Pulgadas_M5401WUAK_k6kvxg.webp",
          Reviews: [
            {
              description: "pc16",
              point: 5,
              id_user: 1,
            },
            {
              description: "M5401WUAK",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "AMD",
            cpu_model: "AMD Ryzen 7 5700U Processor 1.8GHz ",
            graphics_coprocessor: "No tiene tarjeta de video Grafica",
            storage: "512 GB SSD",
            ram: "16 gb",
            operating_system: "Windows 11",
            screen_size: "23.8 Pulgadas",
            resolution: "Full HD",
          },
        },

        {
          category: "computadores",
          brand: "lenovo",
          name: "Computador All In One LENOVO AIO 5",
          description:
            "El Aio LENOVO Idea Centre AIO 5 Color gris ofrece un rendimiento sorprendente para ejecutar sus aplicaciones y desarrollar trabajos exigentes, Experimente una capacidad de respuesta ultrarrápida gracias a la tecnología líder en la industria y obtenga una experiencia inolvidable gracias su sonido que atrapa con sus altavoces de alta definición JBL y una imagen clara y sin distracciones visuales desde la perspectiva de una pantalla con biseles estrechos de gran resolución, la solución perfecta para cualquier proyecto",
          stock: 7,
          price: 5099000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835294/Portatiles/Computador_All_In_One_LENOVO_23_8_Pulgadas_AIO_5_kxgpk1.jpg",
          Reviews: [
            {
              description: "pc17",
              point: 5,
              id_user: 1,
            },
            {
              description: "AIO 5",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "Intel Core i5",
            graphics_coprocessor: "No tiene tarjeta de video Grafica",
            storage: "512 GB SSD",
            ram: "16 gb",
            operating_system: "Windows 11",
            screen_size: "23.8 Pulgadas",
            resolution: "Full HD",
          },
        },

        {
          category: "computadores",
          brand: "hp",
          name: "Computador All In One Pavilion HP",
          description:
            "Elegancia y potencia. ,All ,in ,One ,Pavilion de HP. Libera tu creatividad con su pantalla UHD 4K con gama de color DCI-P3, imágenes sensacionales de calidad cinematográfica, con espectaculares gráficos NVIDIA RTX 3050 y un potente procesador que te brinda un desempeño superior para multitareas. Disfruta de un audio fantástico gracias a su barra de sonido integrada con 6 altavoces calibrados por expertos de B&,O. Conecta un dispositivo de ,streaming ,o una consola de videojuegos para relajarte y disfrutar del entretenimiento que te fascina al alcance de un solo clic. No esperes más ¡Lleva el tuyo ya!",
          stock: 10,
          price: 7999000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835527/Portatiles/Computador_All_in_One_Pavilion_HP_31.5_Pulgadas_b0001la_hmyrgt.jpg",
          Reviews: [
            {
              description: "pc18",
              point: 5,
              id_user: 1,
            },
            {
              description: "b0001la",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "Intel Core i7-12700T ",
            graphics_coprocessor: "NVIDIA GeForce RTX 3050",
            storage: "512 GB SSD",
            ram: "16 gb",
            operating_system: "Windows 11",
            screen_size: "31.5 Pulgadas",
            resolution: "4k Ultra HD",
          },
        },

        {
          category: "computadores",
          brand: "lenovo",
          name: "Computador All In One LENOVO AIO 5 Version 2",
          description:
            "El IdeaCentre AIO 5 ofrece un rendimiento supremo para ejecutar sus aplicaciones más exigentes a la vez, Experimente una capacidad de respuesta ultrarrápida gracias a la tecnología líder en la industria. Enriquezca su experiencia de sonido a través de los altavoces Dolby Audio™ Premium sobre Harman® certificado JBL®. Dos tweeters de 3W y un woofer de 5W. Haga frente a menos distracciones visuales desde la perspectiva de la pantalla a través de los biseles estrechos de la pantalla FHD de 24, que cuentan con una relación pantalla-cuerpo de hasta el 93%. la solución perfecta para cualquier proyecto.",
          stock: 2,
          price: 6399000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680835416/Portatiles/Computador_All_In_One_LENOVO_23_8_Pulgadas_AIO_5_kxe4i8.jpg",
          Reviews: [
            {
              description: "pc19",
              point: 5,
              id_user: 1,
            },
            {
              description: "AIO 5",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "AMD",
            cpu_model: "AMD R7 5700U",
            graphics_coprocessor: "No tiene tarjeta grafica",
            storage: "512 GB SSD",
            ram: "12 gb",
            operating_system: "Windows 11 Home 64, español ",
            screen_size: "23.8 Pulgadas",
            resolution: "FHD",
          },
        },

        {
          category: "computadores",
          brand: "lenovo",
          name: "Computador Portatil LENOVO  IdeaPad 3",
          description:
            "En el portátil LENOVO IdeaPad 3 color azul, encuentra todo el rendimiento que necesitas, un portátil accesible que cubre tus necesidades, su combinación generosa de memoria Ram y almacenamiento en estado solido es perfecto para tus tareas diarias, con un diseño extraordinario, este equipo superará tus expectativas. Así mismo, te brindará un entretenimiento superior gracias a su sonido Dolby Audio, y te sentirás seguro gracias a su obturador de privacidad en su cámara, cuando termines tus reuniones o videollamadas solo tienes que cerrarlo. Aprovecha ¡lleva el tuyo ahora!",
          stock: 15,
          price: 1299000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680836202/Portatiles/Computador_Port%C3%A1til_LENOVO_14_Pulgadas_IdeaPad_3_itiwb3.jpg",
          Reviews: [
            {
              description: "pc20",
              point: 5,
              id_user: 1,
            },
            {
              description: "IdeaPad 3",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "Intel",
            cpu_model: "Intel Core I3 1115G4",
            graphics_coprocessor: "No tiene tarjeta grafica",
            storage: "256 GB SSD",
            ram: "4 gb",
            operating_system: "Windows 11 ",
            screen_size: "14 Pulgadas",
            resolution: "FHD",
          },
        },
      ],
      { include: [models.ProductLaptop, models.Review] }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
    await queryInterface.bulkDelete("ProductLaptops", null, {});
    await queryInterface.bulkDelete("Products", null, {});
  },
};
