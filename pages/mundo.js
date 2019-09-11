import React, { Component } from 'react';
import LayoutMaster from '../components/layouts/master';
import Card from '../components/mundo/card';
import Slider from '../components/mundo/slider';
import GrillaArticulosRelacionados from '../components/mundo/GrillaArticulosRelacionados';

export default class PageMundo extends Component {
    render() {
        return <LayoutMaster title="Mundo">
            
                    <GrillaArticulosRelacionados />

                </LayoutMaster>
    }
}