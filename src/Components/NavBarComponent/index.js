import React from 'react';   
import styles from './styles.module.css';

const NavBarComponent = () => {
    return (
        <div className={styles.navLinks}>
        <a href="#">Blog</a>
        <a href="#">Articles</a>
        <a href="#">Projects</a>
        </div>
    );

}
    
export default NavBarComponent;  