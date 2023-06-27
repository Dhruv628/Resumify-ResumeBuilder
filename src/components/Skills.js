import React, { useEffect, useState } from 'react';

const  Skills=(props)=> {
  const [skills, setSkills] = useState(["hi","by"]);

  useEffect(() => {
    setSkills(props.skill)
  }, [props.skill])
  

  return (
    <div className='flex space-x-28'>
      <div className='text-xl font-semibold w-[2rem]'>Skills</div>
      <div id='skills' className='text-xs mt-1'>
        {skills.map((e, index) => (
          <li key={index} id={` skill${index}`}>{e}</li>
        ))}
      </div>
    </div>
  );
}
Skills.defaultProps={
skill:['Skill 1','skill 2']
};
export default Skills;
