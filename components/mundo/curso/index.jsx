//componente presentacional o funcional---> se limita a presentar contenido en la interfaz 
//reutilizando una estructura declarada
import React from 'react';
import PropTypes from 'prop-types';
//const {title, image, categoria} = props;
const Curso = ({ title, image, categoria }) => (
    <div className="card">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{categoria}</p>
    </div>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    categoria: PropTypes.string
}

Curso.defaultProps = {
    title: "Valor no definido",
    image: "",
    categoria: "Valor no definido"
}

export default Curso;