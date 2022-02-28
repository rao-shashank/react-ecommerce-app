import React from 'react';
import bannerImage from '../../assets/banner-medicine.jpg';
import HeaderCartButton from './HeaderCartButton';
import { HeaderStyle, BannerImage } from './Header.styled';

const Header = (props) => {
    return <>
        <HeaderStyle>
            <h1>B2B Retail Medicines</h1>
            <HeaderCartButton />
        </HeaderStyle>
        <BannerImage>
            <img src={bannerImage} />
        </BannerImage>
    </>
};

export default Header;