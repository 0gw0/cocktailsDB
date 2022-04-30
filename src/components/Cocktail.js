import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, glass, image, type }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{type}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          find out more
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
