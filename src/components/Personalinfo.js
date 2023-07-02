import React from 'react'


function Personalinfo(props) {
  const {name,email,phone,post,address,linkedin} = props
  return (
    <>
    <div className='block  '>
      <div className='inline-block space-y-1 mx-1 '>
        <div className="text-[1.35rem] font-bold ">{name}</div>
        <div className='text-sm font-semibold'>{post}</div>
      </div>
      <div className='font-sans space-y-1 mt-4 inline-block float-right '>
        <div className='flex space-x-2'>
          <i className=" text-xs fa-regular fa-envelope"></i>
          <div className='text-[0.62rem]'>{email}</div>
        </div>
        <div className='flex space-x-2'>
        <i className=" text-xs fa-sharp fa-solid fa-phone"></i>
          <div className='text-[0.62rem]'>{phone}</div>
        </div>
        <div className='flex space-x-2'>
        <i className="  text-xs fa-solid fa-location-dot"></i>
          <div className='text-[0.62rem]'>{address}</div>
        </div>
        <div className='flex space-x-2 '>
        <i className=" text-xs fa-brands fa-linkedin"></i>
          <a className='text-[0.62rem]'  target='_blank' href={`${linkedin}`}>{linkedin}</a>
        </div>
        
      </div>
    </div>
    
    <hr className='mt-10 mb-5  border-t-4 border-black border-opacity-200'/>
    </>
  )
}
Personalinfo.defaultProps={
  name:"Dhruv",
  post:'Software developer',
  email:'Dhruv@gmail.com',
  phone:'911920567',
  address:'uttar pradesh',
  linkedin:'wwww.google.com',
};
export default Personalinfo;
