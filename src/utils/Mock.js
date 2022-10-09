const products = [
  {
    id: 1,
    category: "perifericos",
    title: "MOUSE INALAMBRICO LOGITECH G305 GAMING",
    description:
      "El sensor óptico HERO de 12 000 ppp de próxima generación ofrece un rendimiento de juego, una precisión y una eficiencia energética inigualables",
    price: 196,
    picture:
      "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/g305/g305-white-gallery-1.png",
    stock: 15,
  },
  {
    id: 2,
    category: "monitores",
    title: "MONITOR GAMER FHD 24″ 144Hz 1 MS VA ODYSSEY G3 LS24AG30ANLXPE",
    description:
      "El sensor óptico HERO de 12 000 ppp de próxima generación ofrece un rendimiento de juego, una precisión y una eficiencia energética inigualables",
    price: 707,
    picture:
      "https://images.samsung.com/is/image/samsung/p6pim/pe/ls24ag30anlxpe/gallery/pe-odyssey-g3-g30a-ls24ag30anlxpe-533902787?$720_576_PNG$",
    stock: 22,
  },
  {
    id: 3,
    category: "camaras",
    title: "CAMARA WEB 1920X1080 | 1080P | 2MP",
    description:
      "El sensor óptico HERO de 12 000 ppp de próxima generación ofrece un rendimiento de juego, una precisión y una eficiencia energética inigualables",
    price: 60,
    picture:
      "https://resource.logitech.com/w_800,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/products/logitech/webcams/c930e-business-webcam/c930e-webcam23.png?v=1",
    stock: 35,
  },
  {
    id: 4,
    category: "monitores",
    title: "Monitor Teros TE-2150N 22 IPS Full HD 75HZ 5MS HDMI VGA",
    description:
      "El sensor óptico HERO de 12 000 ppp de próxima generación ofrece un rendimiento de juego, una precisión y una eficiencia energética inigualables",
    price: 409,
    picture:
      "https://oechsle.vteximg.com.br/arquivos/ids/8946429-1500-1500/image-682b6c3279e44495b17b7046d0a97bda.jpg?v=637896580209330000",
    stock: 18,
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log("category",products.filter((prod) => prod.category === category))
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === Number(id)));
    }, 500);
  });
};
