"use strict";
const models = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const info = await models.Product.bulkCreate(
      [
        {
          category: "televisores",
          brand: "xiaomi",
          name: "tv xiaomi",
          description:
            "El tv xiaomi 43 P1 ofrece resolución 4k para no perderte de ningún detalle que combinado con la compatibilidad Dolby Visión y acompañado de la tecnología memc, podrás disfrutar de imágenes con movimientos fluidos y más naturales, y así disfrutaras tu contenido sin perder detalle alguno. Así mismo, podrás simplificar tú experiencia de entretenimiento gracias a la cómoda interfaz de Android tv 10, además, con el uso del control remoto y su conectividad Bluetooth activado por voz junto con el Asistente de Google, te permitirá obtener experiencias únicas disfrutando tu contenido ¡Ven por el tuyo!",
          stock: 10,
          price: 1500000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119927/EcoShop/Televisor/TV_XIAOMI_43_PULGADAS_UHD_LED_Plano_SmartTV_aoxq9g.jpg",
          Reviews: [
            {
              description: "tv1",
              point: 5,
              id_user: 1,
            },
            {
              description: "",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "memc",
            resolution: "4k uhd",
            screen_size: "43 pulgadas",
            hdmi: "2 hdmi3.0",
          },
        },
        {
          category: "televisores",
          brand: "tcl",
          name: "tv Tcl ",
          description:
            "Tcl eleva tu experiencia audiovisual con su nueva serie C935. Su pantalla mini-led 4k uhd brinda colores increíbles, precisión en el contraste y la mejor imagen. Las certificaciones IMAX Enhanced, Dolby Vision IQ y Atmos, te permitirán vivir una inmersión cinematográfica inigualable. Con modo Game Master, vive tus experiencias de juego con videos mas fluidos, menores latencias y tasas de refrescado superiores. Esta nueva serie cuenta con sistema operativo Google tv, Hands Free Voice Control 2.0 y compatible con Google Meet. Cuenta con 2 Años de Garantía. ¡Compra el tuyo ahora!",
          stock: 6,
          price: 2700000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119911/EcoShop/Televisor/TV_TCL_75_PULGADAS_UHD_MINI_LED_Plano_SmartGoogleTV_y6cem4.jpg",
          Reviews: [
            {
              description: "tv2",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "mini-led 4k uhd",
            screen_size: "75 pulgadas",
            hdmi: "1 hdmi2.0",
          },
        },
        {
          category: "televisores",
          brand: "tcl",
          name: "tv Tcl ",
          description:
            "TCL te ofrece la mejor mezcla de tecnología y entretenimiento Con el tv de 55 serie P635 tendrás asegurada la mejor calidad de imagen y audio gracias a su pantalla 4k compatible con HDR 10, Dolby Audio y su tecnología única y patentada AI-IN & IPQ Engine que permiten optimizar desempeño y maximizar el potencial de tu tv. Aprovecha su conexión hdmi 2.1 y WiFi de doble banda, además de todos los beneficios de su nuevo sistema operativo Google tv con +8000 apps y +300 juegos disponibles en Google Play. Disfruta de TCL y su experiencia en tecnología. ¡Compra el tuyo ahora!",
          stock: 4,
          price: 2890000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119906/EcoShop/Televisor/TV_TCL_55_UHD_KLED_Plano_SmartGoogleTV_nrcyqs.jpg",
          Reviews: [
            {
              description: "tv3",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "lcd",
            resolution: "3840 * 2160 pixels Ultra hd/4k/2160p",
            screen_size: " 55 pulgadas",
            hdmi: "hdmi 2.1",
          },
        },

        {
          category: "televisores",
          brand: "tcl",
          name: "tv Tcl",
          description:
            "¡TCL te ofrece la mejor mezcla de tecnología y entretenimiento! Con el tv 32 serie S60A disfruta de una excelente calidad de imagen y audio gracias a su pantalla hd compatible con HDR10, Dolby Audio y su tecnología única y patentada AI-IN que permiten optimizar desempeño y maximizar el potencial de tu Televisor. Disfruta al máximo las alternativas de su OS Android tv (versión actualizable), con más de 5.000 apps desde el Google Play Store, control total por voz con Google Assistant, interacción con la aplicación Magiconnect. Conecta y sincroniza a traves de la App Google Home tus dispotivios Smart Home y contrólalos desde el tv. Incluye Control Remoto inteligente con micrófono incorporado. 2 años de Garantía.",
          stock: 3,
          price: 3199000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119898/EcoShop/Televisor/TV_TCL_32_PULGADAS_HD_LED_Plano_SmartTV_Android_vvwbti.jpg",
          Reviews: [
            {
              description: "tv4",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "hd 720p",
            screen_size: "32 pulgadas",
            hdmi: " 2 hdmi",
          },
        },

        {
          category: "televisores",
          brand: "Sony",
          name: "tv Sony",
          description:
            "Disfrute de sus contenidos favoritos en un tv SONY BRAVIA , que brinda colores mas reales y naturales, alto nivel de brillo y contraste , imágenes en movimiento mas nítidas y fluidas, una calidad de sonido con mayor claridad y sonidos bajos mas fuertes, con una experiencia de entretenimiento y conectividad que solo Google tv le puede ofrecer.",
          stock: 5,
          price: 7800000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119883/EcoShop/Televisor/TV_SONY_75_PULGADAS_LED_SmarTV_bglvmt.jpg",
          Reviews: [
            {
              description: "tv5",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "full hd 4k",
            screen_size: " 75 pulgadas",
            hdmi: "hdmi 2.0",
          },
        },
        {
          category: "televisores",
          brand: "samsung",
          name: "tv samsung ",
          description:
            "Con el tv Neo QLED 8K QN800B de samsung, disfrutarás la más alta calidad de imagen y sonido como nunca antes has experimentado. Su actualizado procesador Neo Quantum escala la imagen a 8K independiente de la fuente de origen y el resultado es una imagen capaz de mostrar detalles en ciertas escenas que antes eran irreconocibles El sonido 3D+ cuenta con 4.2.2 canales integrados que ofrecen un audio dinámico y realista que te acercan más a la acción de la escena. Con su Control Remoto Eco ya no tendrás que preocuparte por las pilas, ya que cuenta con un panel solar. No esperes más y compra el tv samsung más innovador",
          stock: 6,
          price: 10399000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119877/EcoShop/Televisor/TV_SAMSUNG_85_PULGADAS_NEO_MINI_LED_PLANO_SmarTV_tncn8h.jpg",
          Reviews: [
            {
              description: "tv6",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "fullhd",
            screen_size: " 85 pulgadas",
            hdmi: "hdmi 2.0",
          },
        },

        {
          category: "televisores",
          brand: "samsung",
          name: "tv samsung ",
          description:
            "Transforma tu entretenimiento con el tv BU8000 Crystal uhd 4k de samsung.  Gracias a su diseño fino y perfil de fácil instalación podrás disfrutar de tu contenido favorito en cualquier espacio",
          stock: 3,
          price: 7450000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119870/EcoShop/Televisor/TV_SAMSUNG_70_PULGADAS_Smart_tv_suk0ch.jpg",
          Reviews: [
            {
              description: "tv7",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "fullhd",
            screen_size: "70 pulgadas ",
            hdmi: "hdmi 2.0",
          },
        },

        {
          category: "televisores",
          brand: "samsung",
          name: "tv samsung ",
          description:
            "El tv QN55QN85BA de SAMSUNG, te llevará a vivir la experiencia 4k más avanzada con su procesador Neo Quantum, el cual escala la imagen independiente de la fuente de origen para que disfrutes mayor brillo y contraste en cada escena. Además, cuenta con tecnología Dolby Atmos para que tengas una increíble experiencia de sonido envolvente y multidireccional. Su fino y sofisticado diseño, se adapta a tus espacios y hará que tu tv se vea increíble desde todos los ángulos. Incluye el Control Remoto Eco y ya no tendrás que preocuparte por las pilas pues cuenta con panel solar. ¡Cómpralo aqui y ahora!",
          stock: 3,
          price: 2359000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119863/EcoShop/Televisor/TV_SAMSUNG_55_PULGADAS_NEO_QLED_MINI_LED_wgzzaz.jpg",
          Reviews: [
            {
              description: "tv8",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "mini led",
            resolution: "fullhd",
            screen_size: "55 pulgadas",
            hdmi: "2 hdmi",
          },
        },
        {
          category: "televisores",
          brand: "philip",
          name: "tv philip",
          description:
            "Si deseas ver hoy una película, espectáculos y juegos mañana, y deportes el fin de semana, este televisor Smart Philips 55PUT7406/57 te brindará una imagen vibrante. Obtendrás una imagen y un sonido cinematográfico con Dolby Vision y Dolby Atmos, además Android tv Philips te brinda el contenido que deseas, cuando lo deseas. Puede personalizar la pantalla de inicio para mostrar sus aplicaciones favoritas, lo que facilita comenzar a transmitir las películas y los programas que le encantan.",
          stock: 9,
          price: 3359000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119863/EcoShop/Televisor/TV_SAMSUNG_55_PULGADAS_NEO_QLED_MINI_LED_wgzzaz.jpg",
          Reviews: [
            {
              description: "tv9",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "NEO QLED mini led",
            resolution: "fullhd 4k",
            screen_size: "55 pulgadas",
            hdmi: "hdmi 2.0",
          },
        },

        {
          category: "televisores",
          brand: "Lg",
          name: "tv Lg ",
          description:
            "Con el televisor LG OLED48C2 disfruta tus contenidos favoritos, con máxima calidad de imagen en sus 48 pulgadas. Su diseño ultra delgado complementa tus espacios y gracias a su tecnología OLED y sus pixeles auto luminosos que se prenden y apagan de manera independiente, podrás ver los detalles ocultos  y las imágenes coloridas con una gran semejanza a la realidad. Además, siente como si estuvieras  en tu película favorita con el sonido inmersivo y realista Dolby Atmos, y con el Magic Remote, controla tu televisor sin teclear ¡lleva el tuyo ahora!",
          stock: 7,
          price: 1860000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119835/EcoShop/Televisor/TV_LG_48_PULGADAS_UHD_OLED_Plano_SmartTV_xnldst.jpg",
          Reviews: [
            {
              description: "tv10",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "fullhd 850",
            screen_size: "48 pulgadas",
            hdmi: "2 hdmi 2.0",
          },
        },

        {
          category: "televisores",
          brand: "Lg",
          name: "tv Lg ",
          description:
            "Encuentra alta calidad de imagen con los monitores de tv LG.| Todos los monitores LG cuentan con la tecnología para ofrecerte un brillo excepcional y claridad de imagen increíble gracias a su resolución hd, la cual te brinda una imagen mucho mas realista y precisa. Además puedes ahorrar espacio en tu escritorio ya que puedes instalarlo en la pared. No esperes más y ¡adquiere el tuyo ahora!",
          stock: 3,
          price: 1399000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119819/EcoShop/Televisor/TV_LG_24_PULGADAS_HD_LED_PlanoTV_jpu88q.png",
          Reviews: [
            {
              description: "tv11",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "AMOLED",
            resolution: "hd",
            screen_size: "24 pulgadas",
            hdmi: "1 hdmi",
          },
        },

        {
          category: "televisores",
          brand: "kalley",
          name: "tv kalley ",
          description:
            "¡Disfruta de increíbles colores, calidad de imagen y audio excepcionales con el tv QLED KALLEY 50” serie QW con Sistema Android tv! Podrás experimentar imágenes vibrantes, gracias a los millones de puntos cuánticos y certificación Dolby Vision. Además, vive una experiencia de audio excepcional gracias a su procesamiento de audio Dolby Atmos. Tambien, podrás controlar el tv y todo tu ecosistema Smart Home a través de comandos de voz con el Asistente de Google, gracias al micrófono en el control remoto| Calidad y respaldo con 2 años de garantía más de 15 años de experiencia. ¡Cómpralo ya!",
          stock: 4,
          price: 2199000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119811/EcoShop/Televisor/TV_KALLEY_50_PULGADAS_UHD_QLED_Plano_SmartTV_xbn6o9.jpg",
          Reviews: [
            {
              description: "tv12",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "AMOLED",
            resolution: "Full hd",
            screen_size: "50 pulgadas",
            hdmi: "2 hdmi 2.0",
          },
        },

        {
          category: "televisores",
          brand: "kalley",
          name: "tv kalley ",
          description:
            "La experiencia de uso más versátil, rápida, fácil y completa en un Smart tv! Su SO Android tv versión 11 te permite disfrutar de +8000 apps disponibles en Google Play y +300 juegos. Podrás conectar múltiples dispositivos vía Bluetooth (incluso controles para juegos). Además, podrás controlar el tv y todo tu ecosistema Smart Home a través de comandos de voz con el Asistente de Google, gracias al micrófono en el control remoto. Controla y transmite contenido desde tu Smartphone usando su Chromecast incorporado. Calidad y respaldo con 2 años de garantía más de 15 años de experiencia",
          stock: 6,
          price: 1978000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119803/EcoShop/Televisor/TV_KALLEY_32_PULGADAS_HD_LED_Plano_SmartTV_Android_be7bga.jpg",
          Reviews: [
            {
              description: "tv13",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "Full hd",
            screen_size: "32 pulgadas",
            hdmi: "hdmi 2.0",
          },
        },
        {
          category: "televisores",
          brand: "hyundai",
          name: "tv hyundai",
          description:
            "Con el Sistema operativo WebOS en tú tv HYLED6508W4KM experimentarás sensaciones únicas por su imagen Ultra hd 4k de ocho millones de píxeles y su navegación intuitiva, disfrutarás mucho más fácil de las apps que amas. Además, es para que te diviertas, encuentra rápidamente lo que te gusta: apps, juegos y todo lo que quieras en internet, cambiando de una aplicación a otra de manera sencilla, y así podrás explorar todo lo que te ofrece este nuevo sistema operativo. La red es tuya, ¡Adquiérelo YA!",
          stock: 2,
          price: 4355000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119797/EcoShop/Televisor/TV_HYUNDAI_65_PULGADAS_UHD_LED_Plano_SmartTV_lj3igv.jpg",
          Reviews: [
            {
              description: "tv14",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "fullhd 4k",
            screen_size: "65 pulgadas",
            hdmi: "3 hdmi 2.0",
          },
        },

        {
          category: "televisores",
          brand: "hyundai",
          name: "tv hyundai",
          description:
            "Vive una experiencia inmersiva de color única con el tv QLED de 50 pulgadas HYLED5019QA4KM, el cual te dará imágenes más brillantes, colores más vibrantes y negros más profundos gracias a la tecnología Quantum DOT. Además la inmersión se hace realidad con tecnología 4k y sonido de audio impactante, para disfrutar en tu hogar de una imagen 10 de 10 gracias a la resolución HDR10 y su alta densidad de pixeles que te permitiran vivir cada detalle. Que esperas ¡Compra el tuyo ahora!",
          stock: 10,
          price: 1955000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119792/EcoShop/Televisor/TV_HYUNDAI_50_PULGADAS_UHD_QLED_Plano_SmartTV_orr9qf.jpg",
          Reviews: [
            {
              description: "tv15",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "hd",
            screen_size: "50 pulgadas",
            hdmi: "2 hdmi",
          },
        },

        {
          category: "televisores",
          brand: "hyundai",
          name: "tv hyundai",
          description:
            "Con tu televisor HYLED4022AiM podrás disfrutar de conexión Bluetooth, acceso directo a Netflix, Youtube, Amazon Prime y Google Play, pues cuenta con sistema operativo Android tv. Además, tiene Asistente de Voz desde el Go Control con el que podrás tener acceso a todas las funciones, disfrutarás de series originales, películas o tus shows preferidos con tan solo presionar un botón. Comparte pantalla desde tu celular hacia tu tv por medio de la función Chromecast, en donde podrás compartir tus aplicaciones, películas, programas de tv, música, juegos, deportes y mucho más. ¡Adquiere el tuyo ahora!",
          stock: 5,
          price: 1750000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119789/EcoShop/Televisor/TV_HYUNDAI_40_PULGADAS_FHD_LED_Plano_SmartTV_jrl7gt.jpg",
          Reviews: [
            {
              description: "tv16",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "fullhd",
            screen_size: "40 pulgadas",
            hdmi: "2 hdmi 2.0",
          },
        },

        {
          category: "televisores",
          brand: "challenger",
          name: "tv challenger",
          description:
            "Tú tv CHALLENGER 65LO70BT es un SMART tv 4k-uhd con el cual podrás ver colores más vívidos y negros más opacos gracias a su sistema HDR, es ideal para tus películas favoritas. Cuenta además con sistema operativo Android y aplicaciones pre-cargadas como Youtube, Netflix y Prime Video que facilitarán tu navegación y una App Store para descargar todo lo que necesites | Incluye control remoto con voz integrado, el cual facilitará la interacción con tu Smart tv y te permitirá tener todo al alcance de un click, llegando de forma sencilla y simple a tu contenido favorito ¡No te quedes sin el tuyo!",
          stock: 5,
          price: 1750000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119784/EcoShop/Televisor/TV_CHALLENGER_65_PULGADAS_UHD_LED_Plano_SmartTV_tmu2jc.jpg",
          Reviews: [
            {
              description: "tv17",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "fullhd 4k",
            screen_size: "65 pulgadas",
            hdmi: "3 hdmi 2.0",
          },
        },

        {
          category: "televisores",
          brand: "challenger",
          name: "tv challenger",
          description:
            "Con tu tv challenger de 24” disfruta imágenes de excelente calidad en resolución hd. Adicional, podrás conectar múltiples dispositivos (PC/DVD/Decodificadores/Consolas) a través de puertos hdmi, USB y video para proyectar imágenes, videos o música de alta calidad. Este tv incluye sintonizador TDT para acceder a canales digitales nacionales en hd y cuenta con una memoria USB para grabar los programas para no perder| Guarda el mejor contenido con la opción TimeShift y amplifica el audio de tu tv por medio de los puertos de salida, óptico digital o salida de audífonos. ¡No te quedes sin el tuyo!",
          stock: 9,
          price: 1399000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119779/EcoShop/Televisor/TV_CHALLENGER_24_PULGADAS_HD_LED_Plano_icjpxc.jpg",
          Reviews: [
            {
              description: "tv18",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "fullhd",
            screen_size: "24 pulgadas",
            hdmi: "1 hdmi",
          },
        },

        {
          category: "televisores",
          brand: "panasonic",
          name: "tv panasonic",
          description:
            "La serie de televisores HX de PANASONIC con tecnología Android te permite acceder a tus aplicaciones y plataformas favoritas.| Ingresa fácilmente a Netflix, YouTube, Amazon prime, Disney + y disfruta de tus películas, series y videos favoritos. Ya sea directamente en el tv o transmitiendo desde tu smartphone gracias a que incorpora Chromecast y Bluetooth de 2 vías para que puedas disfrutar una experiencia audiovisual sin igual. Calidad de imagen 4k HDR superior gracias al procesador de imagen Vivid Digital Pro. Una experiencia audiovisual inigualable, ¡adquiere el tuyo ahora!",
          stock: 13,
          price: 2890000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119847/EcoShop/Televisor/TV_PANASONIC_55_PULGADAS_UHD_LED_Plano_SmartTV_Android_tsiqtb.jpg",
          Reviews: [
            {
              description: "tv19",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "AMOLED",
            resolution: "fullhd 4k",
            screen_size: "55 pulgadas",
            hdmi: "2 hdmi 2.0",
          },
        },

        {
          category: "televisores",
          brand: "lg",
          name: "tv Lg",
          description:
            "El televisor LG 50NANO75 trae a tu vida colores más puros e impresionantespor su tecnología Nanocell que filtra las degradaciones de color. En supantalla de 50 pulgadas disfrutarás tus series, deportes y películasfavoritas con una imagen nítida y detallada. Con FILMMAKER MODE™ verás tuscontenidos favoritos como fueron concebidos por el director sin agregar niquitar ningún efecto. Con Magic Remote, controla tu televisor con la voz, sinnecesidad de teclear ¡lleva el tuyo ahora!",
          stock: 3,
          price: 2899000,
          status: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119841/EcoShop/Televisor/TV_LG_50_PULGADAS_UHD_NanoCEll_Plano_SmartTV_uleera.jpg",
          Reviews: [
            {
              description: "tv20",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "led",
            resolution: "fullhd",
            screen_size: "50 pulgadas",
            hdmi: "2 hdmi 2.0",
          },
        },
      ],
      { include: [models.ProductTV, models.Review] }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
    await queryInterface.bulkDelete("ProductTVs", null, {});
    await queryInterface.bulkDelete("Products", null, {});
  },
};
