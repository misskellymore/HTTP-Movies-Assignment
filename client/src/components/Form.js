import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Form = (props) => {

    const handleSubmit = e => {
        event.preventDefault();
        axios.put('http://localhost:5000/api/movies/${movie.id}', movie)
             .then(res => {
                 console.log(res);
                 props.history.push('/')
             })
             
             .catch(err => console.log(err.response));
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input  type="text"
                    name="title"
                    placeholder="Title"
                    value={}
                    onChange={} />

            <input  type="text"
                    name="director"
                    placeholder="Director"
                    value={}
                    onChange={} />

            <input  type="text"
                    name="metascore"
                    placeholder="Metascore"
                    value={}
                    onChange={} />

            <input  type="text"
                    name="stars"
                    placeholder="Stars"
                    value={}
                    onChange={} />

                    <button>Update</button>
        </form>
    );
};


export const Form;