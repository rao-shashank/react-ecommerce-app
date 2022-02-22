import React from 'react';
import bannerImage from '../../assets/banner-medicine.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>B2B Retail Medicines</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['banner-image']}>
            <img src={bannerImage} />
        </div>
    </React.Fragment>
};

export default Header;