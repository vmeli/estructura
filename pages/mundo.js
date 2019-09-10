import React, { Component } from 'react';
import LayoutMaster from '../components/layouts/master';
import Card from '../components/mundo/card';
import Slider from '../components/mundo/slider';

export default class PageMundo extends Component {
    render() {
        return <LayoutMaster title="Mundo">
            <Card />
            <Slider />
        </LayoutMaster>
    }
}