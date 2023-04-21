"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Brands", [
      {
        id: "hp",
        name: "hp",
        description:
          "HP (Hewlett-Packard) es una marca global de tecnología que se dedica a desarrollar y fabricar una amplia gama de productos electrónicos, como computadoras personales, impresoras, tablets, servidores y otros dispositivos relacionados. La empresa tiene su sede en Palo Alto, California, y fue fundada en 1939. HP es conocida por su enfoque en la innovación y la calidad de sus productos, y ha establecido una sólida reputación en el mercado de la tecnología. Además de sus productos de hardware, HP también ofrece servicios de software y soluciones empresariales para ayudar a sus clientes a mejorar su productividad y eficiencia.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968667/EcoShop/logotipoPc/HP_uchuav.jpg",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "acer",
        name: "acer",
        description:
          "Acer es una marca global de tecnología con sede en Taiwán, que se dedica a la fabricación de una amplia gama de productos electrónicos, como computadoras portátiles, computadoras de escritorio, tabletas, monitores y otros dispositivos relacionados. Fundada en 1976, Acer ha logrado una sólida reputación en el mercado por su enfoque en la innovación y la calidad de sus productos, así como por ofrecer una buena relación calidad-precio. La empresa también se ha comprometido con la sostenibilidad y ha implementado prácticas empresariales responsables en la gestión de sus operaciones y en la fabricación de sus productos. Acer se esfuerza por ofrecer soluciones tecnológicas que sean accesibles para todos y mejoren la vida de las personas en todo el mundo.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968667/EcoShop/logotipoPc/acer_pvdezq.jpg",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "asus",
        name: "asus",
        description:
          "ASUS es una marca de tecnología taiwanesa que se especializa en la fabricación de una amplia gama de productos electrónicos, incluyendo computadoras portátiles, computadoras de escritorio, tabletas, teléfonos inteligentes, tarjetas madre y componentes de hardware. Fundada en 1989, ASUS se ha ganado una sólida reputación en el mercado por su enfoque en la innovación y la calidad de sus productos. La empresa es conocida por su diseño elegante y su atención al detalle, y ha ganado numerosos premios por sus productos. ASUS también se enfoca en la sostenibilidad, y ha adoptado prácticas empresariales responsables en la gestión de sus operaciones y la fabricación de sus productos.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968668/EcoShop/logotipoPc/Asus_vofzqb.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "lenovo",
        name: "lenovo",
        description:
          "Lenovo es una marca global de tecnología con sede en China, que se dedica a la fabricación de una amplia gama de productos electrónicos, como computadoras portátiles, computadoras de escritorio, tabletas, smartphones, servidores y otros dispositivos relacionados. Fundada en 1984, Lenovo es conocida por su enfoque en la innovación y la calidad de sus productos, así como por su diseño elegante y atención al detalle. La empresa ha establecido una sólida reputación en el mercado gracias a su compromiso con la satisfacción del cliente y la excelencia en el servicio. Lenovo también se ha comprometido con la sostenibilidad y ha implementado prácticas empresariales responsables en la gestión de sus operaciones y la fabricación de sus productos. La marca se esfuerza por ofrecer soluciones tecnológicas innovadoras que mejoren la vida de las personas y las empresas en todo el mundo.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/logotipoPc/lenovo_ww7pcd.jpg",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "rog",
        name: "rog",
        description:
          "ROG (Republic of Gamers) es una marca de ASUS que se dedica a la fabricación de productos electrónicos de alta calidad diseñados específicamente para los juegos. La marca ROG se lanzó en 2006 y desde entonces se ha ganado una sólida reputación en el mercado por su enfoque en la innovación, la calidad y el rendimiento. Los productos ROG incluyen computadoras portátiles y de escritorio para juegos, monitores para juegos, tarjetas gráficas, auriculares, teclados, ratones y otros accesorios para juegos. La marca ROG también es conocida por su diseño elegante y su atención al detalle, y ha ganado numerosos premios por sus productos. ROG se esfuerza por ofrecer soluciones tecnológicas innovadoras que proporcionen una experiencia de juego inmersiva y sin interrupciones para los jugadores de todo el mundo.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/logotipoPc/rog_y1nvge.png",
        status: true,
      },



      /*brands TV*/
      {
        id: "xiaomi",
        name: "xiaomi",
        description:
          " Xiaomi es una marca de tecnología china que se dedica a la fabricación de una amplia gama de productos electrónicos, incluyendo smartphones, televisores, dispositivos inteligentes para el hogar, purificadores de aire, computadoras portátiles y otros dispositivos relacionados. Fundada en 2010, Xiaomi ha logrado una gran popularidad en todo el mundo gracias a su enfoque en ofrecer productos tecnológicos de alta calidad a precios asequibles. La empresa también se ha comprometido con la sostenibilidad y ha implementado prácticas empresariales responsables en la gestión de sus operaciones y la fabricación de sus productos. Xiaomi se esfuerza por ofrecer soluciones tecnológicas innovadoras que sean accesibles para todos y mejoren la vida de las personas en todo el mundo. Además, Xiaomi ha desarrollado una gran comunidad de usuarios y ha logrado una fuerte presencia en las redes sociales y en línea.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/LogotipoTV/xiaomi_hrlv7a.jpg",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "philip",
        name: "philip",
        description:
          " Philips es una marca holandesa que se dedica a la fabricación y comercialización de productos electrónicos, electrodomésticos y equipos médicos. La empresa se fundó en 1891 y se ha expandido a nivel mundial, siendo reconocida por su calidad y diseño innovador en una amplia gama de productos. Entre los productos que ofrece Philips se incluyen televisores, equipos de sonido, iluminación, afeitadoras eléctricas, cepillos de dientes eléctricos, equipos médicos, entre otros. Además, Philips se ha destacado por ser una empresa comprometida con el medio ambiente, trabajando en iniciativas de sostenibilidad y reducción de su impacto ambiental. En el sector de los televisores, Philips ha desarrollado una tecnología propia llamada Ambilight, que consiste en una iluminación ambiental en la parte trasera del televisor, generando una experiencia visual más inmersiva para el usuario. Philips también ha desarrollado televisores con resolución 4K, HDR y tecnología OLED para ofrecer una calidad de imagen superior. En resumen, Philips es una marca reconocida a nivel mundial por su calidad y diseño innovador en una amplia gama de productos electrónicos, electrodomésticos y equipos médicos. En el sector de los televisores, Philips ha desarrollado tecnologías propias para mejorar la experiencia del usuario y ofrecer una calidad de imagen superior.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681971866/EcoShop/LogotipoTV/philip_exmesr.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "tcl",
        name: "tcl",
        description:
          "TCL es una marca global de electrónica con sede en China, que se dedica a la fabricación de una amplia gama de productos electrónicos, incluyendo televisores, teléfonos inteligentes, dispositivos inteligentes para el hogar, y otros dispositivos relacionados. Fundada en 1981, TCL se ha ganado una sólida reputación en el mercado gracias a su enfoque en la innovación y la calidad de sus productos, así como por su compromiso con la satisfacción del cliente. La empresa también se ha comprometido con la sostenibilidad y ha implementado prácticas empresariales responsables en la gestión de sus operaciones y la fabricación de sus productos. TCL se esfuerza por ofrecer soluciones tecnológicas innovadoras que sean accesibles para todos y mejoren la vida de las personas en todo el mundo. La marca también ha establecido alianzas estratégicas con otras empresas líderes en la industria, lo que le ha permitido expandirse y ofrecer una amplia variedad de productos y servicios electrónicos.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968667/EcoShop/LogotipoTV/tcl_z6pbzf.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "sony",
        name: "sony",
        description:
          "Sony es una marca japonesa líder en la fabricación de productos electrónicos, incluyendo televisores, smartphones, cámaras, consolas de videojuegos, sistemas de audio y otros dispositivos relacionados. Fundada en 1946, Sony se ha establecido como una de las marcas más reconocidas y respetadas en el mercado gracias a su enfoque en la innovación, la calidad de sus productos y su diseño elegante y atención al detalle. La marca se ha comprometido con la sostenibilidad y ha implementado prácticas empresariales responsables en la gestión de sus operaciones y la fabricación de sus productos. Además, Sony ha sido pionera en tecnologías innovadoras, como la televisión de alta definición, la grabación de discos compactos y la tecnología de audio de alta resolución. Sony también es conocida por su compromiso con la excelencia en el servicio al cliente, y por su amplia variedad de productos y servicios, que atienden a una amplia variedad de necesidades y gustos.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/LogotipoTV/sonyc_ufojt5.jpg",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "samsung",
        name: "samsung",
        description:
          "Samsung es una marca surcoreana líder en la fabricación de productos electrónicos, que incluyen smartphones, televisores, electrodomésticos, cámaras, computadoras portátiles y otros dispositivos relacionados. Fundada en 1938, Samsung se ha ganado una sólida reputación en todo el mundo gracias a su enfoque en la innovación y la calidad de sus productos. La marca es conocida por su diseño elegante y sofisticado, su tecnología de vanguardia y su compromiso con la satisfacción del cliente. Samsung también se ha comprometido con la sostenibilidad y ha implementado prácticas empresariales responsables en la gestión de sus operaciones y la fabricación de sus productos. La empresa se esfuerza por mejorar la vida de las personas a través de soluciones tecnológicas innovadoras que mejoren la forma en que las personas viven, trabajan y se comunican. Además, Samsung tiene una presencia global y una amplia variedad de productos y servicios que satisfacen las necesidades de los consumidores de todo el mundo.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968668/EcoShop/LogotipoTV/Samsung-_ds0pk3.jpg",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "lg",
        name: "lg",
        description:
          "LG es una marca surcoreana de productos electrónicos que se dedica a la fabricación de una amplia gama de productos, que incluyen televisores, electrodomésticos, smartphones, sistemas de audio y otros dispositivos relacionados. Fundada en 1958, LG se ha ganado una sólida reputación en el mercado gracias a su enfoque en la calidad de sus productos, su diseño innovador y su compromiso con la satisfacción del cliente. La empresa también se ha comprometido con la sostenibilidad y ha implementado prácticas empresariales responsables en la gestión de sus operaciones y la fabricación de sus productos. LG se esfuerza por ofrecer soluciones tecnológicas innovadoras que mejoren la vida de las personas en todo el mundo, con un enfoque en la simplicidad y la facilidad de uso. Además, la marca ha establecido alianzas estratégicas con otras empresas líderes en la industria, lo que le ha permitido expandirse y ofrecer una amplia variedad de productos y servicios electrónicos.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/LogotipoTV/lg_hta0hy.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "Hyundai",
        name: "Hyundai",
        description:
          "Hyundai es una marca que se dedica a la fabricación de televisores y otros productos electrónicos. La empresa ofrece una amplia gama de televisores de alta definición, incluyendo modelos LED, LCD y OLED, que van desde tamaños pequeños hasta tamaños de pantalla grande. Hyundai se enfoca en ofrecer televisores con una calidad de imagen superior y una gran variedad de características y funciones, como conectividad a internet, capacidad de pantalla dividida, calidad de sonido mejorada y diseño elegante. La marca también se ha comprometido con la sostenibilidad y ha implementado prácticas empresariales responsables en la gestión de sus operaciones y la fabricación de sus productos. En resumen, Hyundai es una marca que ofrece televisores de alta calidad con una gran variedad de características y funciones a precios competitivos, con un enfoque en la calidad, la innovación y la sostenibilidad.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/LogotipoTV/hyundai_mr0tn8.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "challenger",
        name: "challenger",
        description:
          "Empresa de manufactura Colombiana líder en la fabricación de electrodomésticos, muebles de cocina y carpintería arquitectónica así como uno de los mayores productores en refrigeración, contando con las más altas especificaciones de calidad.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968667/EcoShop/LogotipoTV/challenger_b7ajpe.jpg",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "panasonic",
        name: "panasonic",
        description:
          "Panasonic es una marca japonesa reconocida a nivel mundial que ofrece una amplia gama de productos electrónicos, incluyendo televisores, electrodomésticos, cámaras, sistemas de audio y mucho más. La marca se enfoca en ofrecer productos de alta calidad con tecnología innovadora y características avanzadas.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/LogotipoTV/Panasonic_zkvxsd.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      /*brands cel phone*/

      {
        id: "motorola",
        name: "motorola",
        description:
          "Motorola se ha destacado por sus innovadores dispositivos móviles, con una amplia gama de modelos que incluyen teléfonos inteligentes de alta gama, modelos de gama media y opciones más económicas. La marca se enfoca en ofrecer dispositivos móviles de calidad, con características avanzadas, como cámaras de alta definición, pantallas de gran tamaño y baterías de larga duración.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968667/EcoShop/logotipocel/motorola_ebdnnp.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "iphone",
        name: "iphone",
        description:
          "Los dispositivos iPhone se han destacado por su diseño elegante, durabilidad y tecnología innovadora, incluyendo características avanzadas como pantallas de alta definición, cámaras de alta calidad y procesadores de última generación. Los iPhone también vienen equipados con el sistema operativo iOS de Apple, que ofrece una amplia gama de aplicaciones y funciones integradas",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968667/EcoShop/logotipocel/iphone_pztaba.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "alcatel",
        name: "alcatel",
        description:
          "Alcatel se ha destacado por ofrecer una amplia gama de dispositivos móviles a precios accesibles. La marca ofrece opciones de gama baja, media y alta, incluyendo teléfonos inteligentes, tabletas y otros dispositivos móviles. Alcatel Cell se enfoca en ofrecer productos que sean fáciles de usar y que se adapten a las necesidades de los usuarios.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/logotipocel/alcatel_pwvf5b.jpg",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "huawei",
        name: "huawei",
        description:
          "La marca Huawei ofrece una amplia gama de productos electrónicos, que incluyen teléfonos inteligentes, tabletas, relojes inteligentes, dispositivos de red y más. Huawei se ha destacado por su tecnología innovadora, incluyendo cámaras de alta calidad, pantallas de alta definición y procesadores potentes.Huawei también ha sido pionero en la implementación de tecnología 5G y ha sido un líder en la construcción de infraestructura de redes 5G en todo el mundo. La empresa ha trabajado en colaboración con operadores de telecomunicaciones y otros proveedores de tecnología para impulsar el desarrollo de esta tecnología de próxima generación.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968668/EcoShop/logotipocel/huawei_sangux.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "oppo",
        name: "oppo",
        description:
          "La marca Oppo ofrece una amplia gama de dispositivos móviles, incluyendo teléfonos inteligentes, tabletas y dispositivos de audio. La empresa ha sido conocida por sus diseños atractivos y sus características innovadoras, como cámaras de alta calidad, pantallas de alta resolución y baterías de larga duración. Oppo también ha sido un líder en la tecnología de carga rápida, y ha desarrollado una tecnología llamada SuperVOOC, que permite cargar una batería de 4.000 mAh en tan solo 35 minutos. La marca también ha trabajado en el desarrollo de tecnología de pantalla plegable, lo que ha generado gran interés en el mercado",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/logotipocel/oppo_aedxvp.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "kalley",
        name: "kalley",
        description:
          "Kalley es una marca colombiana de productos electrónicos que ofrece una amplia gama de dispositivos, incluyendo televisores, tablets, smartphones, electrodomésticos y otros dispositivos electrónicos. La marca ha estado en el mercado por más de 25 años y ha ganado popularidad gracias a su enfoque en la innovación y la calidad de sus productos a precios accesibles. Kalley se enfoca en ofrecer soluciones tecnológicas que satisfagan las necesidades de los consumidores en Colombia y otros países de la región, con una amplia variedad de productos y servicios que incluyen garantías extendidas, servicio técnico y asesoría personalizada. La marca también se ha comprometido con la sostenibilidad y ha implementado prácticas empresariales responsables en la gestión de sus operaciones y la fabricación de sus productos. En resumen, Kalley es una marca colombiana que ofrece productos electrónicos de calidad a precios accesibles con un enfoque en la satisfacción del cliente y la sostenibilidad.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681  968667/EcoShop/logotipocel/kalley_dez4mj.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "tecno",
        name: "tecno",
        description:
          "Tecno es una marca china de dispositivos electrónicos móviles fundada en 2006, que se ha expandido a nivel global en los últimos años. Se especializa en la fabricación de smartphones y tablets de gama media y baja, así como en la producción de accesorios y otros dispositivos electrónicos. La marca se ha destacado por ofrecer dispositivos con especificaciones aceptables a precios muy competitivos, lo que le ha permitido ganar popularidad en mercados emergentes como África y Asia. Además, Tecno ha sido reconocida por incorporar características innovadoras en sus productos, como cámaras de alta resolución y baterías de larga duración, para mejorar la experiencia del usuario.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968667/EcoShop/logotipocel/tecno_inomie.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "zte",
        name: "zte",
        description:
          "ZTE es una empresa china que se dedica a la fabricación de dispositivos electrónicos, incluyendo smartphones y tablets. La compañía ha estado en el mercado de los teléfonos móviles desde hace muchos años, y se ha enfocado en ofrecer dispositivos de gama media y alta, con características y especificaciones atractivas a precios competitivos. ZTE se ha destacado por su enfoque en la innovación, y ha introducido diversas características en sus dispositivos, como pantallas grandes y de alta resolución, cámaras avanzadas y tecnología 5G. Además, la empresa ha trabajado en colaboración con varias operadoras de telecomunicaciones para ofrecer dispositivos personalizados para sus clientes.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/logotipocel/zte_sc7wbk.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "realme",
        name: "realme",
        description:
          "Realme es una marca de teléfonos inteligentes fundada en 2018, que ha logrado un rápido crecimiento y reconocimiento en el mercado global en poco tiempo. La marca se ha enfocado en ofrecer dispositivos de gama media y alta con características innovadoras y especificaciones potentes a precios asequibles. Realme ha destacado por su enfoque en la tecnología y la innovación, y ha introducido varias características en sus dispositivos, como pantallas de alta frecuencia de actualización, baterías de larga duración y cámaras avanzadas. Además, la empresa ha trabajado en colaboración con empresas líderes en tecnología, como Qualcomm y Sony, para integrar sus tecnologías en los dispositivos Realme. La marca ha tenido un gran éxito en mercados emergentes, como India y algunos países de Asia y Europa, y ha ganado una base de seguidores leales por su relación calidad-precio, diseño atractivo y rendimiento de alta gama. Además de los teléfonos inteligentes, Realme también ofrece otros productos electrónicos, como auriculares, relojes inteligentes y accesorios para dispositivos móviles",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1681968666/EcoShop/logotipocel/realme_jfu8tq.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};