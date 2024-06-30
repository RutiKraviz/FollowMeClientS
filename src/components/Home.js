
import home from '../images/homeimg.jpg';
import * as React from 'react';

export default function Home() {

    return (
        <>
            <img src={home} alt='' style={{ 
                width: '50%', 
                height: '70%',
                alignContent: 'center',
                position: 'center',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                margin: 'auto'}}/>
        </>
    )
}