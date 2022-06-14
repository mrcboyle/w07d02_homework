import React from 'react';
import Film from "./Film";

const FilmList = ({ films }) => {

    const filmNodes = films.map((film) => {
        return (
            <Film key={film.id} movie={film} />
        )
    });

    return (
        <>
            <ul>

                {filmNodes}
            </ul>

        </>
    );

};

export default FilmList;