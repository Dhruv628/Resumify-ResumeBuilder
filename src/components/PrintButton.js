import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ResumeContent from './ResumeContent';
import Personalinfo from './Personalinfo';

const PrintButton = () => {
  let elem=document.getElementById('resume')
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className='bg-gray-200 space-y-7 flex flex-col justify-center items-center h-screen'>
      <div className='text-4xl font-bold flex flex-col justify-center opacity-90 space-y-4 mx-auto max-w-4xl'>
        <div className="text-center">
          The Resume is ready to download!
        </div>
        <div className="text-center">
          You can download the resume by clicking on the button below.
        </div>
      </div>
      <button className='bg-gray-800 hover:bg-gray-950 text-xl rounded-lg px-3 py-2 text-white' onClick={handlePrint}>Download PDF</button>
      <div style={{ display: 'none' }}>
        <ResumeContent ref={resumeRef} id={"resume"} class={""}/>
      </div>
    </div>
  );
};

export default PrintButton;
