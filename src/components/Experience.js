import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Experience(props) {
  const [jobpost, setjobpost] = useState(['Job 1','Job 2','Job 3'])
  const [company, setcompany] = useState(['company1','company2','company3'])
  const [date, setdate] = useState(['date1','date2','date3'])
  const [jobdesc, setjobdesc] = useState(['desc1','desc2','desc3'])

  useEffect(() => {
    setjobpost(props.post);
    setcompany(props.company);
    setdate(props.date);
    setjobdesc(props.jobdesc);
  }, [props.pname,props.company,props.date,props.jobdesc]);


  return (
    <div className='flex space-x-28 '>
    <div className='text-xl font-semibold w-[2rem]'>Experience</div>
    <div className='space-y-2 mt-1'>
    {jobpost.map((name, index) => (
     <div className=''>
     <div className='text-md  font-semibold'>{name}</div>
     <div className='flex space-x-4'>
         <div className='text-xs font-semibold'>{company[index]}</div>
         <div className='text-[0.7rem] italic'>{date[index]}</div>
     </div>
     <div className='text-xs mt-1'>{jobdesc[index]}</div>
  </div>
  ))}
     </div>
</div>
  )
}
