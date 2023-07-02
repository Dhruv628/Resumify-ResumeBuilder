import React,{useState,useEffect} from 'react'

export default function Education(props) {
  const [title, settitle] = useState(['Job 1','Job 2','Job 3'])
  const [school, setschool] = useState(['company1','company2','company3'])
  const [date, setdate] = useState(['date1','date2','date3'])
  useEffect(() => {
    settitle(props.title);
    setschool(props.school);
    setdate(props.date);
  }, [props.title,props.company,props.date]);
 
  return (
    <div className='flex space-x-28 '>
    <div className='text-xl font-semibold w-[2rem]'>Education</div>
    <div className='space-y-2 mt-1'>
    {title.map((name, index) => (
    <div className=''>
    <div className='text-md  font-semibold'>{name}</div>
    <div className='flex space-x-8'>
        <div className='text-xs font-semibold'>{school[index]}</div>
        <div className='text-xs italic'>{date[index]}</div>
    </div>
 </div>
  ))}
     </div>
</div>
  )
}
