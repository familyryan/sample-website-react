import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({title, imgsrc}) => {
    return ( 
        <>
        <div className='col-md-4 col-10 mx-auto'>
            <div className='card'>
                <img src={imgsrc} className="card-img-top" alt="..."/>
                <div className='card-body'>
                    <h5 className='card-title'>
                        {title}
                    </h5>
                    <p className='card-text'>
                        Some Quick example text to build on the card title and make up
                    </p>
                    <NavLink to="/contact" className="btn btn-primary">
                        Get Qoute
                    </NavLink>
                </div>
            </div>
        </div>
        
        
        </>
     );
}

export default Card;{}