import React, {useState, useEffect} from 'react';
import SimpleSlider from "../layouts/SliderHome";
import {Catalog} from "../product/catalogHome/Catalog";
import SliderNew from "../layouts/SliderNew";
import SliderPopular from "../layouts/SliderPopular";

export function Home () {

      return (<>
        <div className='slider-home'>
        <SimpleSlider/></div>
        <div className='container'>
        <SliderNew />
        <Catalog/>
        <SliderPopular />
        </div>
    </>)
}


