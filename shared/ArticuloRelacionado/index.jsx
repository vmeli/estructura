import React, { Component } from 'react';
import style from './style.scss';

export default class ArticuloRelacionado extends Component {
    render() {
        return  <>
        <div className={style.articuloRelacionado}>
            <div className={style.ArticuloRelacionadoImg}>
                <img src={`https://picsum.photos/id/237/359/255`} alt={`imagen`} />
                <span className={style.btnSocial}>twt-fbk</span>
            </div>
            <h3 className={style.DescriptionArticuloTitle}>Un día para el autismo no es suficiente: Aún faltan más acciones</h3>
        </div>    
        </>
    }
}