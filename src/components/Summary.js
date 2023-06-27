import React from 'react'

const Summary=(props)=> {
  return (
    <div className='flex space-x-28 '>
        <div className='text-xl font-semibold w-[2rem]'>Summary</div>
        <div  className='text-xs mt-1'>{props.summary}</div>
    </div>
  )
}
Summary.defaultProps={
  summary:'Write your summary here'
  };
  export default Summary;