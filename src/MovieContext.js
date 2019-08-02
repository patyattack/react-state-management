import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Jumanji',
            price: '$12',
            id: 123
        },
        {
            name: 'Estar Guors',
            price: '$13',
            id: 234
        },
        {
            name: 'Pinocho',
            price: '$15',
            id: 345
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}