
import React, { Component } from 'react';
import Head from 'next/head';

import Header from '../../header';
import Footer from '../../footer';

import style from './style.scss';

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: (props.title) ? props.title : 'Titulo Por defecto',
            type: (props.type) ? props.type : 'article',
            url: (props.url) ? props.url : 'https://larepublica.pe',
            image: (props.image) ? props.image : 'http://prod.static.larepublica.pe/assets/images/larepublica/design/sprite/logo-glr-normal-720x405.jpg',
        }
    }

    render() {
        const { title, type, url, image } = this.state;
        return <div className={style.contenedorLayout}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="theme-color" content="#000000" />
                <title>{title}</title>
                <meta property="og:type" content={type} />
                <meta property="og:title" content={title} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={image} />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />
            {this.props.children}
            <Footer />
        </div>
    }
}