import React, { useContext } from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    const style = {
        display:'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: '#575252',
        color: '#f3f3f3'
    }
    return (
        <div style={style}>
            <h3>User</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    );
}

export default Nav;