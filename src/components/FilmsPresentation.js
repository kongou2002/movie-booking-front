import React from 'react';
import PropTypes from 'prop-types';

FilmsPresentation.propTypes = {
    films: PropTypes
};

/**
 * It takes in an array of films and returns a div with a bunch of divs inside it
 * @returns An array of JSX elements.
 */
function FilmsPresentation({ films }) {
    return (
        <div className='container'>
            {films.map((film) => (
                <div className='column'>
                    <div className='card'>
                        <img src={film.img} alt=''/>
                        <div className='description'>
                        <h3>{film.title}</h3>
                        <p>{film.year} - {film.nation}</p>
                        <p className='film-button'><button className='booking'>Book now</button> <button className='deatail'>Detail</button></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FilmsPresentation;