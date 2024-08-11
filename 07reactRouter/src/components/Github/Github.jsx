import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    
    const data = useLoaderData();
    console.log(data);
    // const [data, setData] = useState([]);
    // useEffect( () => {
    //     fetch('https://api.github.com/users/prateekbhujel')
    //     .then(res => res.json())
    //     .then(data =>{ 
    //         console.log(data);
    //         setData(data);
    //     })
    // });

    return (
        <div className='bg-gray-600 text-white text-3xl text-center m-4 p-4'>
            GitHub Followers: {data.followers} <br />
            Bio: {data.bio} <br />
           <img src={data.avatar_url} alt="GithubImage" width={300}/>
        </div>
    );
}

export default GitHub;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/prateekbhujel');
    return response.json();
};