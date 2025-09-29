import ProductImgOne from '../../public/assets/images/highlight-product/product1.png';
import ProductImgTwo from '../../public/assets/images/highlight-product/product2.png';
import ProductImgThree from '../../public/assets/images/highlight-product/product3.png';
import ProductImgFour from '../../public/assets/images/highlight-product/product4.png';

const highLightProductsData = [
    {
      id: 1,
      name: "White Jacket",
      price: "$249.00",
      description: "Lightweight & water-resistant",
      image: ProductImgOne,
      hot: false,
      favorite: false,
    },
    {
      id: 2,
      name: "Tote Bag",
      price: "$249.00",
      description: "Spacious & stylish",
      image: ProductImgTwo,
      hot: true,
      favorite: false,
    },
    {
      id: 3,
      name: "Beige Cap",
      price: "$249.00",
      description: "Soft breathable fabric",
      image: ProductImgThree,
      hot: false,
      favorite: true,
    },
    {
      id: 4,
      name: "Qua Watch",
      price: "$249.00",
      description: "Modern rubber sole",
      image:ProductImgFour,
      hot: false,
      favorite: false,
    },
  ];

  export default highLightProductsData;