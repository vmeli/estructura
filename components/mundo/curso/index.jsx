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
        {/* {
            image
            ? <img src={image} alt={title}/>
            : <img src="https://via.placeholder.com/200x300.png?text=Imagen"/> 
        }  */}
        {/* <img src={image ? image : "https://via.placeholder.com/200x300.png?text=Imagen"} alt={title} /> */}
    </div>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    categoria: PropTypes.string
}

Curso.defaultProps = {
    title: "Valor no definido",
    image: "https://via.placeholder.com/200x300.png?text=Imagen",
    categoria: "Valor no definido"
}

export default Curso;