import HomeHeader from '@/components/layouts/header/HomeHeader';
import HomeTopHeader from '@/components/layouts/header/HomeTopHeader';
import React from 'react';
import ProductShowcase from './ProductShowcase';
import ShopByCategory from './ShopByCategory';
import HandpickedHighlights from './HandPickedHighlight';

const HomeMainArea = () => {
    return (
        <>
            <HomeTopHeader />
            <HomeHeader />
            <ProductShowcase />
            <ShopByCategory />
            <HandpickedHighlights />
        </>
    );
};

export default HomeMainArea;