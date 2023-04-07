import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
          <h2>Father</h2>
          <section className='flex'>
            <Myself></Myself>
            <Sister></Sister>
            <Brother></Brother>
            </section>  
        </div>
    );
};

export default Father;