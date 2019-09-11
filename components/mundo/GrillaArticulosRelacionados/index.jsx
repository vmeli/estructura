import React from 'react'
import ArticuloRelacionado from '../../../shared/ArticuloRelacionado';
import style from './style.scss';

const GrillaArticulosRelacionados = () => (
    <>
        <div className={style.wrapperGrillaArticulosRelacionados}>
            <h2 className={style.GrillaArticulosRelacionados}>Noticias</h2>
            <div className={style.GrillaArticulos}>
                <ArticuloRelacionado />
                <ArticuloRelacionado />
                <ArticuloRelacionado />
            </div>
        </div>
    </>
)

export default GrillaArticulosRelacionados