import React, { useState, useEffect } from 'react';
import "./Pika.css";
import { MdSearch } from "react-icons/md";


export const Pika = () => {
    const [ pokemon, setPokemon ] = useState({});
    const [ search, setSearch ] = useState("");
    const [ id, setId ] = useState(1);


    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => setPokemon({
            name: data.name,
            image: data.sprites.front_default,
            id: data.id
        }))


    }, [id])

    const nextHandler = () => {
        setId(id + 1);
    }

    const prevHandler = () => {
        if( id > 1 ) setId(id - 1);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(response => response.json())
        .then(data => {
            setPokemon({
                name: data.name,
                image: data.sprites.front_default,
                id: data.id
            })
            setId(data.id)
        })

    }
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='pika'>
            <h1>Pika</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={search} onChange={ onChangeHandler } />
                <button type="submit"><MdSearch /></button>                   
            </form>
            <hr />
            <h3>{pokemon.id} - {pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} />
            <br />
            <button onClick={ prevHandler }>Anterior</button>
            <button onClick={ nextHandler }>Siguiente</button>
        </div>
  );
}