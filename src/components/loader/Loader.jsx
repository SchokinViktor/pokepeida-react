import React from 'react'
import {Rings} from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className='loader'>
        <Rings color='#787D83'height={400} width={400}/>
    </div>
  )
}

export default Loader