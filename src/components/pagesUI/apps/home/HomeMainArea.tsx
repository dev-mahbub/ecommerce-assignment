import HomeHeader from '@/components/layouts/header/HomeHeader';
import HomeTopHeader from '@/components/layouts/header/HomeTopHeader';
import React from 'react';
import ProductShowcase from './ProductShowcase';

const HomeMainArea = () => {
    return (
        <>
            <HomeTopHeader />
            <HomeHeader />
            <ProductShowcase />
        </>
    );
};

export default HomeMainArea;