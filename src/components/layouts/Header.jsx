import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../img/logo.png';
import {Autocomplete} from "../product/autocomplete/Autocomplete";
import {MenuCategoryButton} from "../product/menuCategory/MenuCategoryButton";

export function Header () {

        return (
            <header>
                <section className='section-header'>
                    <div className='logo'>
                    <Link to='/'><img src={Logo} alt="logo"/></Link></div>
                    <ul className='menu-header'>
                        <li><a href="!#"> Доставка и оплата</a></li>
                        <li><a href="!#">Сервис-центр</a></li>
                        <li><a href="!#">Контакты</a></li>
                        <li><a href="!#">Акции</a></li>
                    </ul>
                    <ul className='header-contact'>
                        <li className='phone'>+38 (050) 194 51 16</li>
                        <li><a href="!#">Войти</a></li>
                    </ul>
                </section>
                <section className='section-header'>
                <MenuCategoryButton/>
                <Autocomplete/>
                <div className='icons-header'>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-cart3"></i>
                </div>
                </section>
            </header>
        );

}
