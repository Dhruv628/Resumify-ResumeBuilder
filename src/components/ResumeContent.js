import React, {  useState } from "react";
import Personalinfo from "./Personalinfo";
import Summary from "./Summary";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Course from "./Course";
import Education from "./Education";
import Footer from './Footer'
import Navbar from './Navbar'
import Language from "./Language";
import "../Style/Print.css";
import resumebuild from "./resumebuild.svg"
import { useReactToPrint } from 'react-to-print';
import { useRef } from "react";

const ResumeContent = React.forwardRef(() => {

// P E R S O N A L   I N F O

  //Use States for PERSONAL INFO
  const [parrow, setArrow] = useState("fa-solid fa-angle-down");
  const [name, setName] = useState("Dhruv Sharma");
  const [email, setEmail] = useState("sharmaaniket682@gmail.com");
  const [post, setPost] = useState("Web developer");
  const [phone, setPhone] = useState("+91 9119235690");
  const [address, setAddress] = useState("Uttar Pradesh");

//PERSONAL INFO click button
  const PinfoClick = () => {
    setArrow(parrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
    let e=document.getElementById('Personal')
    if(parrow==="fa-solid fa-angle-down"){
      e.className="xs:w-[21.5rem] mx-10 xs:space-y-3 md:space-y-3 xs:py-3 lg:py-3 px-3 sm:text-[0.8rem] sm:space-y-1 sm:w-[18.5rem] sm:py-[6px] lg:text-base  inline-block shadow-xl rounded-lg border-[3px] border-gray-700  md:w-96"
    }
    else if(parrow==="fa-solid fa-angle-up"){
      e.className="xs:w-[21.5rem] mx-10 space-y-3 py-3 px-3 sm:text-[0.8rem] sm:space-y-1 sm:w-[18.5rem] sm:py-[6px]  hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-96"
    }
  };

  //PERSONAL INFO onchange 
  const handleChangeName = (e) => {
 setName(e.target.value);
   };

  const handleChangePost = (e) => {
 setPost(e.target.value);
   };
  const handleChangeEmail = (e) => {
 setEmail(e.target.value);
   };
  const handleChangePhone = (e) => {
 setPhone(e.target.value);
   };
  const handleChangeAddress = (e) => {
 setAddress(e.target.value);
   };
 
   
//PERSONAL INFO SAVE button
   const PinfoSubmit=(elem)=>{
   elem.preventDefault();

   let e=document.getElementById('Personal')
   if(parrow==="fa-solid fa-angle-down"){
     e.className="mx-10 space-y-3 p-4 inline-block shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
   }
   else if(parrow==="fa-solid fa-angle-up"){
     e.className="mx-10 space-y-3 p-4 hidden shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
   }
   setArrow(parrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
   }


   //  S U M M A R Y

   const [sarrow, setSarrow] = useState("fa-solid fa-angle-down");

   //SUMMARY click button
   const SummaryClick = () => {
    setSarrow(sarrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
    let e=document.getElementById('Summary')
    if(sarrow==="fa-solid fa-angle-down"){
      e.className="mx-10 xs:w-[21.5rem] sm:text-[0.8rem] sm:text-base  space-y-3 py-3 px-3 overflow-y-auto  inline-block shadow-xl rounded-lg border-[3px] border-gray-700  w-96 lg:w-[27rem]"
    }
    else if(sarrow==="fa-solid fa-angle-up"){
      e.className="mx-10 xs:w-[21.5rem] space-y-3 py-3 px-3 hidden overflow-y-auto  shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
    }
  };

  
   //SUMMARY SAVE button
   const SummarySubmit=(elem)=>{
    elem.preventDefault();
    localStorage.setItem("summary",summary)
    let e=document.getElementById('Summary')
    if(sarrow==="fa-solid fa-angle-down"){
      e.className="mx-10 xs:w-[21.5rem] sm:text-[0.4rem] space-y-3 overflow-y-auto  py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
    }
    else if(sarrow==="fa-solid fa-angle-up"){
      e.className="mx-10 xs:w-[21.5rem] space-y-3 overflow-y-auto  py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-96"
    }
    setSarrow(sarrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
   }
   
   const [summary, setSummary] = useState("Enter your summary here")

   const handleChangeSummary = (e) => {
    setSummary(e.target.value);
    
      };


      // S K I L L S

   const [skarrow, setSkarrow] = useState("fa-solid fa-angle-down");
   //SKILL click button
   const SkillsClick = () => {
    setSkarrow(skarrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
    let e=document.getElementById('Skills')
    if(skarrow==="fa-solid fa-angle-down"){
      e.className="mx-10 xs:w-[21.5rem] xs:text-[0.8rem] md:text-base space-y-3 py-3 px-3 md:h-[15.5rem] lg:h-[17rem] xs:h-[14rem] sm:h-[13rem] overflow-y-auto inline-block shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
    }
    else if(skarrow==="fa-solid fa-angle-up"){
      e.className="mx-10 xs:w-[21.5rem] space-y-3 py-3 h-[17.5rem] overflow-y-auto px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
    }
  };
  //To add more SKILL inputs
  const [inputCount, setInputCount] = useState(1);
  const handleAddMoreSkill = (e) => {
    e.preventDefault();
    setInputCount(inputCount + 1);
  };
  //To save the SKILL inputs
  const [inputValues, setInputValues] = useState(["HTML"]);
  //Input onChange function
  const handleInputChange = (e, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

  const handleSkillsSave = (elem) => {
    elem.preventDefault();
    let e=document.getElementById('Skills')
    if(skarrow==="fa-solid fa-angle-down"){
      e.className="mx-10 xs:w-[21.5rem] xs:text-[0.8rem] md:text-base space-y-3 py-3 px-3 md:h-[15.5rem] lg:h-[17rem] xs:h-[14rem] sm:h-[13rem] overflow-y-auto inline-block shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
    }
    else if(skarrow==="fa-solid fa-angle-up"){
      e.className="mx-10 xs:w-[21.5rem] space-y-3 py-3 h-[17.5rem] overflow-y-auto px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
    }
    
    setSkarrow(skarrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
  };
  

// P R O J E C T
const [prjarrow, setPrjarrow] = useState("fa-solid fa-angle-down");
//PROJECT click button
const ProjectClick = () => {
  setPrjarrow(prjarrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
 let e=document.getElementById('Project')
 if(prjarrow==="fa-solid fa-angle-down"){
   e.className="mx-10 xs:w-[21.5rem] md:w-[24rem] lg:w-[26rem] space-y-3 sm:h-[14em] md:h-[16rem] lg:h-[16.5rem] overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700 w-[30rem]"
 }
 else if(prjarrow==="fa-solid fa-angle-up"){
   e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700 w-[30rem]"
 }
};

const [projectCount, setProjectCount] = useState(1);
//ADD MORE PROJECT button
const handleAddMoreProject = (e) => {
  e.preventDefault();
  setProjectCount(prevCount => prevCount + 1);
};
const [pname, setpname] = useState(["NewsMonkey"])
const [pdesc, setpdesc] = useState(["News app made with react js"])

const  handleProjectnameChange = (e, index) => {
  const newInputValues = [...pname];
  newInputValues[index] = e.target.value;
  setpname(newInputValues);
};

const handleIProjectdescChange = (e, index) => {
  const newInputValues = [...pdesc];
  newInputValues[index] = e.target.value;
  setpdesc(newInputValues);
};
//SAVE PROJECT button
const handleProjectSave=(elem)=>{
  elem.preventDefault();
  let e=document.getElementById('Project')
  if(prjarrow==="fa-solid fa-angle-down"){
    e.className="mx-10 xs:w-[21.5rem] md:w-[24rem] lg:w-[26rem] space-y-3 sm:h-[14em] md:h-[16rem] lg:h-[16.5rem] overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700 w-[30rem]"
  }
  else if(prjarrow==="fa-solid fa-angle-up"){
    e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700 w-[30rem]"
  }
  setPrjarrow(prjarrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
}

// E X P E R I E N C E 
const [earrow, setearrow] = useState("fa-solid fa-angle-down");
//EXPERIENCE click button
const JobClick = () => {
  setearrow(earrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
 let e=document.getElementById('Experience')
 if(earrow==="fa-solid fa-angle-down"){
   e.className="mx-10 xs:w-[21.5rem] md:w-[23rem] lg:w-[30rem] space-y-4 h-[17.5rem] sm:h-[14rem] md:h-[16.5rem] overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"
 }
 else if(earrow==="fa-solid fa-angle-up"){
   e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"
 }
};
const [jobcount, setjobCount] = useState(1);
//ADD MORE JOB button
const handleAddMoreJobs = (e) => {
  e.preventDefault();
  setjobCount(prevCount => prevCount + 1);
};
const [jobtitle, setjobtitle] = useState(["Senior web developer"])
const [jobcompany, setjobcompany] = useState(["Google"])
const [jobduration, setjobduration] = useState(["2/15/22-2/16/23"])
const [jobdesc, setjobdesc] = useState(["Worked as a project manager"])
const  jobtitleChange = (e, index) => {
  const newInputValues = [...pname];
  newInputValues[index] = e.target.value;
  setjobtitle(newInputValues);
};
const  jobcompanyChange = (e, index) => {
  const newInputValues = [...pname];
  newInputValues[index] = e.target.value;
  setjobcompany(newInputValues);
};
const  jobdurationChange = (e, index) => {
  const newInputValues = [...pname];
  newInputValues[index] = e.target.value;
  setjobduration(newInputValues);
};
const  jobdescChange = (e, index) => {
  const newInputValues = [...pname];
  newInputValues[index] = e.target.value;
  setjobdesc(newInputValues);
};
//SAVE JOB button
const handleJobSave=(elem)=>{
  elem.preventDefault();
  let e=document.getElementById('Experience')
  if(earrow==="fa-solid fa-angle-down"){
    e.className="mx-10 xs:w-[21.5rem] md:w-[23rem] lg:w-[30rem] space-y-4 h-[17.5rem] sm:h-[14rem] md:h-[16.5rem] overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"
  }
  else if(earrow==="fa-solid fa-angle-up"){
    e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"
  }
  setearrow(earrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
  }

  
// C O U R S E
const [carrow, secarrow] = useState("fa-solid fa-angle-down");
//COURSE click button
const CourseClick = () => {
  secarrow(carrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
 let e=document.getElementById('Course')
 if(carrow==="fa-solid fa-angle-down"){
   e.className="mx-10 xs:w-[21.5rem] space-y-4 md:h-[16.5rem] md:text-base sm:h-[14rem]  overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700 md:w-[26rem] lg:w-[30rem] "
 }
 else if(carrow==="fa-solid fa-angle-up"){
   e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"
 }
};
const [coursecount, setcourseCount] = useState(1);
//ADD MORE COURSE button
const handleAddMoreCourse = (e) => {
  e.preventDefault();
  setcourseCount(prevCount => prevCount + 1);
};
const [coursetitle, setcoursetitle] = useState(["Web development"])
const [coursecompany, setcoursecompany] = useState(["Internshala"])
const [courseduration, setcourseduration] = useState(["7 months"])
//SAVE COURSE button
const  coursetitleChange = (e, index) => {
  const newInputValues = [...coursetitle];
  newInputValues[index] = e.target.value;
  setcoursetitle(newInputValues);
};
const  coursedurationChange = (e, index) => {
  const newInputValues = [...courseduration];
  newInputValues[index] = e.target.value;
  setcourseduration(newInputValues);
};
const  coursecompanyChange = (e, index) => {
  const newInputValues = [...coursecompany];
  newInputValues[index] = e.target.value;
  setcoursecompany(newInputValues);
};
const handleCourseSave=(elem)=>{
  elem.preventDefault();
 let e=document.getElementById('Course')
 if(carrow==="fa-solid fa-angle-down"){
   e.className="mx-10 xs:w-[21.5rem] space-y-4 md:h-[16.5rem] md:text-base sm:h-[14rem]  overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700 md:w-[26rem] lg:w-[30rem] "
 }
 else if(carrow==="fa-solid fa-angle-up"){
   e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"
 }
 secarrow(carrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
  }
  
// E D U C A T I O N
const [edarrow, seedarrow] = useState("fa-solid fa-angle-down");
//EDUCATION click button
const EducationClick = () => {
  seedarrow(edarrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
 let e=document.getElementById('Education')
 if(edarrow==="fa-solid fa-angle-down"){
   e.className="mx-10 xs:w-[21.5rem] space-y-4 h-[17.5rem] sm:h-[14rem] md:h-[16rem] overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700  lg:w-[30rem]"
 }
 else if(edarrow==="fa-solid fa-angle-up"){
   e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"
 }
};
const [educationcount, seteducationcount] = useState(1);
//ADD MORE EDUCATION button
const handleAddMoreEducation= (e) => {
  e.preventDefault();
  seteducationcount(prevCount => prevCount + 1);
};
const [schooldegree, setschooldegree] = useState(["B. Tech with CS"])
const [schoolname, setschoolname] = useState(["SRMS , Bareilly"])
const [schoolduaration, setschoolduaration] = useState(["2/15/17"])
const  schooldegreeChange = (e, index) => {
  const newInputValues = [...schooldegree];
  newInputValues[index] = e.target.value;
  setschooldegree(newInputValues);
};
const  schoolnameChange = (e, index) => {
  const newInputValues = [...schoolname];
  newInputValues[index] = e.target.value;
  setschoolname(newInputValues);
};
const  schooldurationChange = (e, index) => {
  const newInputValues = [...schoolduaration];
  newInputValues[index] = e.target.value;
  setschoolduaration(newInputValues);
};

//SAVE EDUCATION button
const handleEducationSave=(elem)=>{
elem.preventDefault();
let e=document.getElementById('Education')
 if(edarrow==="fa-solid fa-angle-down"){
   e.className="mx-10 xs:w-[21.5rem] space-y-4 h-[17.5rem] sm:h-[14rem] md:h-[16rem] overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700  lg:w-[30rem]"
 }
 else if(edarrow==="fa-solid fa-angle-up"){
   e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"
 }
 seedarrow(edarrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
  }

  
// L A N G U A G E S
const [larrow, setlarrow] = useState("fa-solid fa-angle-down");
//LANGUAGE click button
const LanguageClick = () => {
  setlarrow(larrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
 let e=document.getElementById('Language')
 if(larrow==="fa-solid fa-angle-down"){
   e.className="mx-10 xs:w-[21.5rem] space-y-4 h-[14.5rem] md:h-[16rem] overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700  w-[19rem]"
 }
 else if(larrow==="fa-solid fa-angle-up"){
   e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[14.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[19rem]"
 }
};
const [languagecount, setlanguagecount] = useState(1);
//ADD MORE LANGUAGE button
const handleAddMoreLanguage= (e) => {
  e.preventDefault();
  setlanguagecount(prevCount => prevCount + 1);
};
const [language, setlanguage] = useState(["Hindi"])
const  languageChange = (e, index) => {
  const newInputValues = [...language];
  newInputValues[index] = e.target.value;
  setlanguage(newInputValues);
};

//SAVE LANGUAGE button
const handleLanguageSave=(elem)=>{
 elem.preventDefault();
 let e=document.getElementById('Language')
 if(larrow==="fa-solid fa-angle-down"){
   e.className="mx-10 xs:w-[21.5rem] space-y-4 h-[14.5rem] md:h-[16rem] overflow-y-auto py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700  w-[19rem]"
 }
 else if(larrow==="fa-solid fa-angle-up"){
   e.className="mx-10 xs:w-[21.5rem] space-y-3 h-[14.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[19rem]"
 }
 setlarrow(larrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
  }  

  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <>
    <div className="bg-gray-400">

    
    <div id="navbar">

    <Navbar/>
    </div>
    <div className=" ">
      
    <button onClick={handlePrint} id="printbutton" className="mt-3 block xs:text-[0.6rem] md:text-base float-right mr-4 tracking-wide hover:bg-gray-900 bg-gray-800 px-2  py-2 text-white rounded-lg">Download Resume </button>  
            <img src={resumebuild} alt="" className="hidden lg-xl:block  float-right m-10 w-[20.5rem] h-[20.5rem] " />
      
      <div className="">
        <div id="no-print" className="xs:mx-1 lg:mx-7 lg:my-7">
          <div className="xs:text-lg sm:text-xl md:text-3xl mt-10 font-bold tracking-wide md:[word-spacing:10px] xs:[word-spacing:7px] ">START BUILDING YOUR RESUME </div>

          {/* Header */}
          <div className="my-7 xs:flex xs:text-[0.55rem] xs:space-x-2 sm:flex-col sm:text-[0.8rem] md:text-base bg-gray-700 text-gray-200 space-y-3 sm:inline-block rounded-lg xs:py-2 p-4">
              <div className="flex hover:scale-110 xs:mt-3 sm:mt-0 space-x-1 ">
                <button onClick={PinfoClick} className="">
                  Personal Info.
                  <i className={`${parrow} ml-2 cursor-pointer `}></i>
                </button>
              
              </div>
              <div className="flex hover:scale-105 space-x-1 ">
                <button onClick={SummaryClick} className="">Summary
                <i className={`${sarrow} cursor-pointer ml-2 `}></i>
                </button>
                
              </div>
              <div className="flex hover:scale-105 space-x-1 ">
                <button onClick={SkillsClick} className="">Skills
                 <i className={`${skarrow} cursor-pointer ml-2 `}></i>
                </button>
              </div>
              <div className="flex hover:scale-105 space-x-1 ">
              <button onClick={ProjectClick} className="">Projects
                 <i className={`${prjarrow} cursor-pointer ml-2 `}></i>
                </button>
              </div>
              <div className="flex hover:scale-105 space-x-1 ">
              <button onClick={JobClick} className="">Experience
                 <i className={`${earrow} cursor-pointer ml-2 `}></i>
                </button>
              </div>
              <div className="flex hover:scale-105 space-x-1 ">
              <button onClick={CourseClick} className="">Courses
                 <i className={`${carrow} cursor-pointer ml-2 `}></i>
                </button>
              </div>
              <div className="flex hover:scale-105 space-x-1 ">
              <button onClick={EducationClick} className="">Education
                 <i className={`${edarrow} cursor-pointer ml-2 `}></i>
                </button>
              </div>
              <div className="flex hover:scale-105 space-x-1 ">
              <button onClick={LanguageClick} className="">Languages
                 <i className={`${larrow} cursor-pointer ml-2 `}></i>
                </button>
              </div>
            </div>

            {/* Personal Info */}
            <form action="" onSubmit={PinfoSubmit} className="inline-block "  >
           <div id="Personal"  className="xs:w-[21.5rem] mx-10 space-y-3 py-3 px-3 sm:text-[0.8rem] sm:space-y-1 sm:w-[18.5rem] sm:py-[6px] hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-96"  >
            <div className="flex">
             <div className="w-32">
              <label  htmlFor="" className="font-semibold">Name</label>
             </div>
              <input onChange={handleChangeName} value={name} id="name" className="border-[3px] w-52 border-gray-700 rounded-lg  text-xs px-2 py-1" type="text" />
            </div>
            <div className="flex">
             <div className="w-32">

              <label  htmlFor="" className="font-semibold">Post</label>
             </div>
              <input onChange={handleChangePost} value={post} id="post" className="border-[3px] w-52 border-gray-700 rounded-lg  text-xs px-2 py-1" type="text" />
            </div>
            <div className="flex">
             <div className="w-32">

              <label  htmlFor="" className="font-semibold">Email</label>
             </div>
              <input onChange={handleChangeEmail} value={email} id="email" className="border-[3px] w-52 border-gray-700 rounded-lg  text-xs px-2 py-1" type="text" />
            </div>
            <div className="flex">
             <div className="w-32">

              <label  htmlFor="" className="font-semibold">Phone Number</label>
             </div>
              <input onChange={handleChangePhone} value={phone} id="phone" className="border-[3px] w-52 border-gray-700 rounded-lg  text-xs px-2 py-1" type="text" />
            </div>
            <div className="flex">
             <div className="w-32">

              <label  htmlFor="" className="font-semibold">Address</label>
             </div>
              <input onChange={handleChangeAddress} value={address} id="address" className= "border-[3px] w-52 border-gray-700 rounded-lg  text-xs px-2 py-1" type="text" />
            </div>
            <button  className=" bg-gray-800 hover:bg-gray-900 rounded-lg text-white px-3 py-2">Save</button>
           </div>
           </form>

            {/* Summary */}
            <form action="" onSubmit={SummarySubmit} className="inline-block" >
           <div id="Summary" className="xs:w-[21.5rem] overflow-y-auto  mx-10 space-y-3 py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700   w-96"  >
            <div className="flex ">
             <div className="w-32">
              <label  htmlFor=""  className="font-semibold">Summary</label>
             </div>
              <textarea onChange={handleChangeSummary} value={summary} id="name" className="border-[3px] xs:h-32 sm:h-32 md:h-[9rem]  lg:h-[10.5rem] h-44 w-96 border-gray-700   rounded-lg  text-xs px-2 py-1" type="text" />
            </div>
            <button  className="bg-gray-800 hover:bg-gray-900 rounded-lg text-white px-3 py-2">Save</button>
           </div>
           </form>

            {/* Skills */}
            <form action="" className="inline-block ">
           <div id="Skills" className=" xs:w-[21.5rem] mx-10 space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700   w-96"  >
            <div className="flex">
             <div className="w-32">
              <label  htmlFor=""  className="font-semibold">Skills</label>
              </div>
              <div id="skills" className="flex flex-col space-y-2">
              {[...Array(inputCount)].map((_, index) =>
               ( <input
                key={`skill_${index}`}
                className="border-[3px] w-52 border-gray-700  rounded-lg text-xs px-2 py-1"
                type="text"
                value={inputValues[index]}
                onChange={(e) => handleInputChange(e, index)}
                name={`skill_${index}`}
              />)
               )}
              <button  onClick={handleAddMoreSkill} className="bg-gray-800  text-white px-2 py-1 rounded-lg">Add more </button>
              </div>
            </div>
            <button onClick={handleSkillsSave} className="bg-gray-800  hover:bg-gray-900  rounded-lg text-white px-3 py-2">Save</button>
           </div>
           </form>

           {/* Project */}
           <form action="" className="inline-block ">
           <div id="Project" className="xs:w-[21.5rem] mx-10 space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700   w-[30rem]"  >
            <div className="flex">
             <div className="w-32">
              <label  htmlFor=""  className="font-semibold">Projects</label>
              </div >
              <div id="project" className="flex flex-col space-y-2">
          {Array.from({ length: projectCount }, (_, index) => (
         <div className="space-y-1" id={`project-${index + 1}`} key={`project-${index + 1}`}>
          <input
            id={`projects-${index+1}-name`}
            key={`projects-${index+1}-name`}
            onChange={(e) => handleProjectnameChange(e, index)}
            placeholder="Project name"
            type="text"
            className="border-[3px] w-36 border-gray-700  rounded-lg text-xs px-2 py-1"
          />
          <textarea
           id={`project-${index+1}-desc`}
           key={`project-${index+1}-desc`}
           placeholder="Project description"
           onChange={(e) => handleIProjectdescChange(e, index)}
           className="border-[3px] h-[4.5rem] xs:w-[15rem] md:w-[17rem] lg:w-[20rem] border-gray-700  rounded-lg text-xs px-2 py-1"
          />
        </div>
      ))}
      <button onClick={handleAddMoreProject} className="bg-gray-800  text-white px-2 py-1 rounded-lg">
        Add more
      </button>
    </div>
            </div>
            <button onClick={handleProjectSave} className="bg-gray-800  hover:bg-gray-900  rounded-lg text-white px-3 py-2">Save</button>
           </div>
           </form>
           
           {/* Experience */}
           <form action="" className="inline-block ">
           <div id="Experience" className="xs:w-[21.5rem] mx-10 space-y-4 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-blue-600  w-[30rem]"  >
            <div className="flex">
             <div className="w-32">
              <label  htmlFor=""  className="font-semibold mr-2">Experience</label>
              </div >
              <div id="experience" className="flex flex-col space-y-4">
          {Array.from({ length: jobcount }, (_, index) => (
         <div className="space-y-1" id={`experience-${index + 1}`} key={`experience-${index + 1}`}>
          <input
            id={`job-${index+1}-title`}
            key={`job-${index+1}-title`}
            onChange={(e) => jobtitleChange(e, index)}
            placeholder="Job title"
            type="text"
            className="border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1 block"
          />
          <input
            id={`job-${index+1}-company`}
            key={`job-${index+1}-company`}
            onChange={(e) => jobcompanyChange(e, index)}
            placeholder="Company name"
            type="text"
            className="mr-1 border-[3px] w-36 border-gray-700  rounded-lg text-xs px-2 py-1"
          />
          <input
            id={`job-${index+1}-duration`}
            key={`job-${index+1}-duration`}
            onChange={(e) => jobdurationChange(e, index)}
            placeholder="Work Duration"
            type="text"
            className="border-[3px] w-36 border-gray-700  rounded-lg text-xs px-2 py-1"
          />
          <textarea
           id={`job-${index+1}-desc`}
           key={`job-${index+1}-desc`}
           onChange={(e) => jobdescChange(e, index)}
           placeholder="Job description"
           className="border-[3px]  h-[4.5rem] xs:w-[14rem] lg:w-[18.8rem] border-gray-700  rounded-lg text-xs px-2 py-1"
          />
        </div>
      ))}
      <button onClick={handleAddMoreJobs} className="bg-gray-800  text-white px-2 py-1 rounded-lg">
        Add more
      </button>
    </div>
            </div>
            <button onClick={handleJobSave} className="bg-gray-800  hover:bg-gray-900  rounded-lg text-white px-3 py-2">Save</button>
           </div>
           </form>

           {/* Courses */}
           <form action="" className="inline-block ">
           <div id="Course" className="xs:w-[21.5rem] mx-10 space-y-4 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"  >
            <div className="flex">
             <div className="w-32">
              <label  htmlFor=""  className="font-semibold mr-2">Courses</label>
              </div >
              <div id="course" className="flex flex-col space-y-7">
          {Array.from({ length: coursecount }, (_, index) => (
         <div className="space-y-1" id={`course-${index + 1}`} key={`course-${index + 1}`}>
          <input
            id={`course-${index+1}-title`}
            key={`course-${index+1}-title`}
            onChange={(e) => coursetitleChange(e, index)}
            placeholder="Course title"
            type="text"
            className="border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1 block"
          />
          <input
            id={`course-${index+1}-company`}
            key={`course-${index+1}-company`}
            onChange={(e) => coursecompanyChange(e, index)}
            placeholder="Organization name"
            type="text"
            className="mr-1 border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1"
          />
          <input
            id={`course-${index+1}-duration`}
            key={`course-${index+1}-duration`}
            onChange={(e) => coursedurationChange(e, index)}
            placeholder="Course duration"
            type="text"
            className="border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1"
          />
        </div>
      ))}
      <button onClick={handleAddMoreCourse} className="bg-gray-800 text-white px-2 py-1 rounded-lg">
        Add more
      </button>
    </div>
            </div>
            <button onClick={handleCourseSave} className="bg-gray-800 hover:bg-gray-900 rounded-lg text-white px-3 py-2">Save</button>
           </div>
           </form>
           {/* Education */}
           <form action="" className="inline-block ">
           <div id="Education" className="xs:w-[21.5rem] mx-10 space-y-4 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[30rem]"  >
            <div className="flex">
             <div className="w-32">
              <label  htmlFor=""  className="font-semibold mr-2">Education</label>
              </div >
              <div id="education" className="flex flex-col space-y-7">
          {Array.from({ length: educationcount }, (_, index) => (
         <div className="space-y-1" id={`education-${index + 1}`} key={`education-${index + 1}`}>
          <input
            id={`school-${index+1}-degree`}
            key={`school-${index+1}-degree`}
            onChange={(e) => schooldegreeChange(e, index)}
            placeholder="Course name"
            type="text"
            className="border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1 block"
          />
          <input
            id={`school-${index+1}-name`}
            key={`school-${index+1}-name`}
            onChange={(e) => schoolnameChange(e, index)}
            placeholder="Organization name"
            type="text"
            className="mr-1 border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1"
          />
          <input
            id={`school-${index+1}-duration`}
            key={`school-${index+1}-duration`}
            onChange={(e) => schooldurationChange(e, index)}
            placeholder="Duration"
            type="text"
            className="border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1"
          />
        
        </div>
      ))}
      <button onClick={handleAddMoreEducation} className="bg-gray-800 text-white px-2 py-1 rounded-lg">
        Add more
      </button>
    </div>
            </div>
            <button onClick={handleEducationSave} className="bg-gray-800 hover:bg-gray-900 rounded-lg text-white px-3 py-2">Save</button>
           </div>
           </form>
         
           {/* Language */}
           <form action="" className="inline-block ">
           <div id="Language" className="xs:w-[21.5rem] mx-10 space-y-3 h-[17.5rem] overflow-y-auto py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-[25rem]"  >
            <div className="flex">
             <div className="w-32">
              <label  htmlFor=""  className="font-semibold">Language</label>
              </div >
              <div id="language" className="flex flex-col space-y-2">
          {Array.from({ length: languagecount }, (_, index) => (
         <div className="space-y-1" id={`language-${index + 1}`} key={`language-${index + 1}`}>
          <input
            id={`language-${index+1}-name`}
            key={`language-${index+1}-name`}
            onChange={(e) => languageChange(e, index)}
            placeholder="type here"
            type="Stext"
            className="border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1"
          />
        </div>
      ))}
      <button onClick={handleAddMoreLanguage} className="bg-gray-700 text-white px-2 py-1 rounded-lg">
        Add more
      </button>
    </div>
            </div>
            <button onClick={handleLanguageSave} className="bg-gray-700 hover:bg-gray-700 rounded-lg text-white px-3 py-2">Save</button>
           </div>
           </form>
          
         
        </div>
       <hr className=" border-none h-[0.07rem] text-gray-500 bg-gray-500 xs:text "/>
        <div className=" mt-10 flex justify-center " >
          <div  id="print-only"  ref={resumeRef} className=" min-h-[850px] xs:text xs:mx-[0.2] md:mx-4 border-2 border-black px-4 bg-white py-4 xs:w-[100vw] sm:w-[90vw] md:w-[650px] rounded-lg">
            <Personalinfo  name={name} post={post} email={email} phone={phone} address={address} linkedin={linkedin} />
            <div className="space-y-3">
              <Summary summary={summary} />
              <Skills  skill={inputValues}/>
              <Project pname={pname} pdesc={pdesc} />
              <Experience post={jobtitle} company={jobcompany} date={jobduration} jobdesc={jobdesc}/>
              <Course  title={coursetitle} company={coursecompany} date={courseduration}/>
              <Education title={schooldegree} school={schoolname} date={schoolduaration} />
              <Language languages={language} />
            </div>
          </div>
        </div>

      </div>
      </div> 
      <div className="mt-3" id="footer">
        
      <Footer />
        </div> 
        </div>
         </>
  
  );
});

export default ResumeContent;
