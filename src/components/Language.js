import React,{useEffect,useState} from 'react'

export default function Language(props) {
  const [language, setlanguage] = useState(["hindi","english"]);
  useEffect(() => {
    setlanguage(props.languages);
  }, [props.languages]);
  

  return (
    <div className='flex space-x-28'>
      <div className='text-xl font-semibold w-[2rem]'>Language</div>
      <div id='lanugages' className='text-xs mt-1'>
      {language.map((name, index) => (
   <li key={index} id={` lanugage${index}`}>{name}</li>
  ))}
      </div>
    </div>
  );
}
