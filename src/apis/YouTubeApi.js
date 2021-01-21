import React from 'react'
import axios from 'axios'
const KEY ='AIzaSyCNrDwGhidTCoNfIiIbDVf2QERpq5WC3IE';
export default axios.create(
{
    baseURL:'https://www.googleapis.com/youtube/v3',
    prams:{part:'snoppet',maxResult:5,key:KEY},

}
);

