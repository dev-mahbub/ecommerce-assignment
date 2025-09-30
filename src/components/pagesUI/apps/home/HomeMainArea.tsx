import HomeHeader from '@/components/layouts/header/HomeHeader';
import HomeTopHeader from '@/components/layouts/header/HomeTopHeader';
import React from 'react';
import ProductShowcase from './ProductShowcase';
import ShopByCategory from './ShopByCategory';
import HandpickedHighlights from './HandPickedHighlight';
import Testimonials from './Testimonials';
import PromoBanner from './PromoBanner';
import FooterOne from '@/components/layouts/footer/FooterOne';

const HomeMainArea = () => {
    return (
        <>
            <HomeTopHeader />
            <HomeHeader />
            <ProductShowcase />
            <ShopByCategory />
            <HandpickedHighlights />
            <Testimonials />
            <PromoBanner />
            <FooterOne />
        </>
    );
};

export default HomeMainArea;