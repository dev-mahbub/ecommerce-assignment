import { IProduct } from '@/interface/product.interface';
import productOne from '../../public/assets/images/product/item1.jpg';
import productTwo from '../../public/assets/images/product/item2.jpg';
import productThree from '../../public/assets/images/product/item3.jpg';
import productFour from '../../public/assets/images/product/item4.jpg';
import productFive from '../../public/assets/images/product/item5.jpg';

const productsData: IProduct[] = [
    {
      id: 1,
      name: 'Macbook pro 13"',
      variants: '2 Variants',
      category: 'Laptop',
      price: '$2399.00',
      status: 'Delivered',
      image: productOne
    },
    {
      id: 2,
      name: 'Apple Watch Ultra',
      variants: '1 Variants',
      category: 'Watch',
      price: '$879.00',
      status: 'Pending',
      image: productTwo
    },
    {
      id: 3,
      name: 'iPhone 15 Pro Max',
      variants: '2 Variants',
      category: 'Smart Phone',
      price: '$1869.00',
      status: 'Delivered',
      image: productThree
    },
    {
      id: 4,
      name: 'iPad Pro 3rd Gen',
      variants: '2 Variants',
      category: 'Electronics',
      price: '$1699.00',
      status: 'Canceled',
      image: productFour
    },
    {
      id: 5,
      name: 'Airpods Pro 2nd Gen',
      variants: '1 Variants',
      category: 'Accessories',
      price: '$240.00',
      status: 'Delivered',
      image: productFive
    },
    {
      id: 6,
      name: 'Airpods Pro 2nd Gen',
      variants: '1 Variants',
      category: 'Accessories',
      price: '$240.00',
      status: 'Delivered',
      image: productFive
    },
    {
      id: 7,
      name: 'Airpods Pro 2nd Gen',
      variants: '1 Variants',
      category: 'Accessories',
      price: '$240.00',
      status: 'Delivered',
      image: productFive
    }
  ];

  export default productsData;