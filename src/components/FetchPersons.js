import React from 'react'

const FetchPersons = async() => {
    const url='https://frs-apidemo.herokuapp.com/enrolled_persons';
    // const url='https://www.omdbapi.com/?apikey=11fa6d28&s=hello';
    try{
        const resp= await fetch(url,{mode:'no-cors'});
        // const persons=resp.json();
        // return persons;
        return resp;

    }catch(error){
        console.log('Error by fetch Function',error);
    }
}

export default FetchPersons