import React, { useEffect, useState } from 'react'

export default function Project(props) {
  const [projectname, setProjectname] = useState(['Project 1','Project 2','Project 3'])
  const [projectdesc, setProjectdesc] = useState(['Project 1 desc','Project 2 desc','Project 3 desc'])

  useEffect(() => {
    setProjectname(props.pname);
    setProjectdesc(props.pdesc);
  }, [props.pname, props.pdesc]);

  
  return (
    <div className='flex space-x-28  '>
    <div className='text-xl font-semibold w-[2rem]'>Projects</div>
    <div className='space-y-2 mt-1'>
    {projectname.map((name, index) => (
    <div key={index} className=''>
      <div className='text-sm font-semibold'>{name}</div>
      <div  className='text-xs'>{projectdesc[index]}</div>
    </div>
  ))}
     </div>
</div>
  )
}
