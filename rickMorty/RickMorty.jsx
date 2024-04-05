import React, { useEffect, useState, useNavigate } from "react";
import { obtainAll, obtainCharacter } from "../../rick-y-morty-api/functions";


function AppR() {
    const navigate = useNavigate
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/?page=1');
    const [next, setNext] = useState(null);
    const [last, setLast] = useState(null);
    const [pages, setPages] = useState(null);
    const [total, setTotal] = useState(null);
    const [characters, setCharacters] = useState(null);
    const [character, setCharacter] = useState(null);
    const [charactersImg, setCharactersImg] = useState(null);

    const goNext = (url) => {
        setUrl(url)
    }

    const goLast = (url) => {
        setUrl(url)
    }


    useEffect(() => {
        obtainAll(url, setNext, setLast, setPages, setTotal, setCharacters, setCharactersImg)
        },[url]);

return (
  <div className="contenedor">
    <div className="header">
        <h2>Rick and Morty Characters</h2>
        <p>Total: { total }</p>
        <p>Pages: { pages }</p>
        { last != null ? (
            <button onClick={() => goLast(last)}>Prev</button>
        )
        :
        ('')}
        { next != null ? (
            <button onClick={() => goNext(next)}>Next</button>
        )
        :
        ('')}
    </div>

        <div className="list">
            {characters != null ? (
                characters.map((character, index) => (
                    <div key={index}>
                    <p onClick={() => {obtainCharacter(character.id, setCharacter)}}>{character.name}</p>
                    <img src={charactersImg[index].image} alt="img"></img>
                    </div>
                ))
            )
            :
            ("")}
        </div>

        <div className="character">
            {character != null ? (
                <div>
                <h2>{ character.name}</h2>
                <h2>{ character.status}</h2>
                <h2>{ character.species}</h2>
                <h2>{ character.gender}</h2>
                </div>
            ) : ('')
            }
        </div>
  </div>
);
}
export default AppR;