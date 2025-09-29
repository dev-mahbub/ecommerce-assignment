import HomeHeader from '@/components/layouts/header/HomeHeader';
import HomeTopHeader from '@/components/layouts/header/HomeTopHeader';
import React from 'react';
import ProductShowcase from './ProductShowcase';
import ShopByCategory from './ShopByCategory';

const HomeMainArea = () => {
    return (
        <>
            <HomeTopHeader />
            <HomeHeader />
            <ProductShowcase />
            <ShopByCategory />
        </>
    );
};

export default HomeMainArea;