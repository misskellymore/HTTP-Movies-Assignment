import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Form = () => {
    

    return (
        <form>
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