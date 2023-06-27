import React, {  useState } from "react";
import Personalinfo from "./Personalinfo";
import Summary from "./Summary";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Course from "./Course";
import Education from "./Education";
import Language from "./Language";
import "../Style/Print.css";
import { useNavigate } from "react-router-dom";

const ResumeContent = React.forwardRef((props, ref) => {
  let skillcount=0;
  const navigate = useNavigate();
  // Navigating to download
  const handleclick = () => {
    console.log(projectnamearray)
    console.log(projectdescarray)
    console.log(languages)
  navigate("/download");
  };

// P E R S O N A L   I N F O

  //Use States for PERSONAL INFO
  const [parrow, setArrow] = useState("fa-solid fa-angle-down");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [linkedin, setLinkedin] = useState("");

//PERSONAL INFO click button
  const PinfoClick = () => {
    setArrow(parrow==="fa-solid fa-angle-up"?"fa-solid fa-angle-down": "fa-solid fa-angle-up")
    let e=document.getElementById('Personal')
    if(parrow==="fa-solid fa-angle-down"){
      e.className="xs:w-[21.5rem] mx-10 xs:space-y-3 md:space-y-3 lg:py-3 px-3 sm:text-[0.8rem] sm:space-y-1 sm:w-[18.5rem] sm:py-[6px] lg:text-base  inline-block shadow-xl rounded-lg border-[3px] border-gray-700  md:w-96"
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
  const handleChangeLinkedin = (e) => {
 setLinkedin(e.target.value);
   };
   
//PERSONAL INFO SAVE button
   const PinfoSubmit=()=>{
   localStorage.setItem("name",name)
   localStorage.setItem("post",post)
   localStorage.setItem("email",email)
   localStorage.setItem("phone",phone)
   localStorage.setItem("address",address)
   localStorage.setItem("linkedin",linkedin)
   console.log(localStorage.getItem("name"))
   let e=document.getElementById('Personal')
   if(parrow==="fa-solid fa-angle-down"){
     e.className="mx-10 space-y-3 p-4 inline-block shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
   }
   else if(parrow==="fa-solid fa-angle-up"){
     e.className="mx-10 space-y-3 p-4 hidden shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
   }
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
   const SummarySubmit=()=>{
    localStorage.setItem("summary",summary)
    let e=document.getElementById('Summary')
    if(sarrow==="fa-solid fa-angle-down"){
      e.className="mx-10 xs:w-[21.5rem] sm:text-[0.4rem] space-y-3 overflow-y-auto  py-3 px-3 inline-block shadow-xl rounded-lg border-[3px] border-gray-700   w-96"
    }
    else if(sarrow==="fa-solid fa-angle-up"){
      e.className="mx-10 xs:w-[21.5rem] space-y-3 overflow-y-auto  py-3 px-3 hidden shadow-xl rounded-lg border-[3px] border-gray-700  w-96"
    }
   }
   
   const [summary, setSummary] = useState("")

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
  const [inputValues, setInputValues] = useState(Array(3).fill(""));


  //Input onChange function
  const handleInputChange = (e, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

 
 //SKILL Save button
  const handleSkillsSave = (e) => {
    for (let i = 0; i < inputValues.length; i++) {
      const skill = inputValues[i];
      localStorage.setItem(`skill_${i}`, skill);
      skillcount++;
    }
    localStorage.setItem("skillcount",skillcount)
    for(let i=0;i<localStorage.getItem('skillcount');i++){
      arr.push(localStorage.getItem(`skill_${i}`))
     }
  };
  
  const arr=[];
  for(let i=0;i<localStorage.getItem('skillcount');i++){
 arr[i]=localStorage.getItem(`skill_${i}`)
  }  

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
//SAVE PROJECT button
const handleProjectSave=()=>{
for (let index = 0; index < projectCount; index++) {
localStorage.setItem(`projects-${index+1}-name`,document.getElementById(`projects-${index+1}-name`).value)  
localStorage.setItem(`project-${index+1}-desc`,document.getElementById(`project-${index+1}-desc`).value)  
localStorage.setItem(`projectcount`,projectCount)  
}
}
const  projectnamearray=[];
const  projectdescarray=[];
for(let i=0;i<localStorage.getItem('projectcount');i++){
projectnamearray[i]=localStorage.getItem(`projects-${i+1}-name`)
projectdescarray[i]=localStorage.getItem(`project-${i+1}-desc`)
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
//SAVE JOB button
const handleJobSave=()=>{
  for (let index = 0; index < jobcount; index++) {
  localStorage.setItem(`job-${index+1}-title`,document.getElementById(`job-${index+1}-title`).value)  
  localStorage.setItem(`job-${index+1}-company`,document.getElementById(`job-${index+1}-company`).value)  
  localStorage.setItem(`job-${index+1}-duration`,document.getElementById(`job-${index+1}-duration`).value)  
  localStorage.setItem(`job-${index+1}-desc`,document.getElementById(`job-${index+1}-desc`).value)  
  localStorage.setItem(`jobcount`,jobcount)  
  }
  }
  const  jobtitle=[];
  const  jobcompany=[];
  const  jobduration=[];
  const  jobdescription=[];

  for(let i=0;i<localStorage.getItem('jobcount');i++){
  jobtitle[i]=localStorage.getItem(`job-${i+1}-title`)
  jobcompany[i]=localStorage.getItem(`job-${i+1}-company`)
  jobduration[i]=localStorage.getItem(`job-${i+1}-duration`)
  jobdescription[i]=localStorage.getItem(`job-${i+1}-desc`)
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
//ADD MORE JOB button
const handleAddMoreCourse = (e) => {
  e.preventDefault();
  setcourseCount(prevCount => prevCount + 1);
};
//SAVE JOB button
const handleCourseSave=()=>{
  for (let index = 0; index < coursecount; index++) {
  localStorage.setItem(`course-${index+1}-title`,document.getElementById(`course-${index+1}-title`).value)  
  localStorage.setItem(`course-${index+1}-company`,document.getElementById(`course-${index+1}-company`).value)  
  localStorage.setItem(`course-${index+1}-duration`,document.getElementById(`course-${index+1}-duration`).value)  
  localStorage.setItem(`coursecount`,coursecount)  
  }
  }
  const  coursetitle=[];
  const coursecompany=[];
  const  courseduration=[];


  for(let i=0;i<localStorage.getItem('coursecount');i++){
  coursetitle[i]=localStorage.getItem(`course-${i+1}-title`)
  coursecompany[i]=localStorage.getItem(`course-${i+1}-company`)
  courseduration[i]=localStorage.getItem(`course-${i+1}-duration`)
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
//SAVE EDUCATION button
const handleEducationSave=()=>{
  for (let index = 0; index < educationcount; index++) {
  localStorage.setItem(`school-${index+1}-degree`,document.getElementById(`school-${index+1}-degree`).value)  
  localStorage.setItem(`school-${index+1}-name`,document.getElementById(`school-${index+1}-name`).value)  
  localStorage.setItem(`school-${index+1}-duration`,document.getElementById(`school-${index+1}-duration`).value)  
  localStorage.setItem(`educationcount`,educationcount)  
  }
  }
  const  schooldegree=[];
  const schoolname=[];
  const  schoolduaration=[];


  for(let i=0;i<localStorage.getItem('educationcount');i++){
  schooldegree[i]=localStorage.getItem(`school-${i+1}-degree`)
  schoolname[i]=localStorage.getItem(`school-${i+1}-name`)
  schoolduaration[i]=localStorage.getItem(`school-${i+1}-duration`)
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
//SAVE LANGUAGE button
const handleLanguageSave=()=>{
  for (let index = 0; index < languagecount; index++) {
  localStorage.setItem(`language-${index+1}-name`,document.getElementById(`language-${index+1}-name`).value)  
  localStorage.setItem(`languagecount`,languagecount)  
  }
  }
  const languages=[];
  for(let i=0;i<localStorage.getItem('languagecount');i++){
  languages[i]=localStorage.getItem(`language-${i+1}-name`)
  }  
  

  return (
    <>
    <div className="">
    <button onClick={handleclick} className="mt-3 block xs:text-[0.6rem] md:text-base float-right mr-4 tracking-wide hover:bg-gray-900 bg-gray-800 px-2  py-2 text-white rounded-lg">Download Resume </button>  
      <div className="">
        <div className="xs:mx-1 mx-7 my-7">
          <div className="xs:text-lg sm:text-xl md:text-3xl mt-10 font-bold tracking-wide font-mono ">CREATE YOUR RESUME </div>

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
            <div className="flex">
             <div className="w-32">

              <label  htmlFor="" className="font-semibold">Linkedin</label>
             </div>
              <input onChange={handleChangeLinkedin} value={linkedin} id="linkedin" className="border-[3px] w-52 border-gray-700 rounded-lg  text-xs px-2 py-1" type="text" />
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
          
            placeholder="Project name"
            type="text"
            className="border-[3px] w-36 border-gray-700  rounded-lg text-xs px-2 py-1"
          />
          <textarea
           id={`project-${index+1}-desc`}
           key={`project-${index+1}-desc`}
           placeholder="Project description"
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
          
            placeholder="Job title"
            type="text"
            className="border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1 block"
          />
          <input
            id={`job-${index+1}-company`}
            key={`job-${index+1}-company`}
          
            placeholder="Company name"
            type="text"
            className="mr-1 border-[3px] w-36 border-gray-700  rounded-lg text-xs px-2 py-1"
          />
          <input
            id={`job-${index+1}-duration`}
            key={`job-${index+1}-duration`}
          
            placeholder="Work Duration"
            type="text"
            className="border-[3px] w-36 border-gray-700  rounded-lg text-xs px-2 py-1"
          />
          <textarea
           id={`job-${index+1}-desc`}
           key={`job-${index+1}-desc`}
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
          
            placeholder="Course title"
            type="text"
            className="border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1 block"
          />
          <input
            id={`course-${index+1}-company`}
            key={`course-${index+1}-company`}
          
            placeholder="Organization name"
            type="text"
            className="mr-1 border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1"
          />
          <input
            id={`course-${index+1}-duration`}
            key={`course-${index+1}-duration`}
          
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
          
            placeholder="Course name"
            type="text"
            className="border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1 block"
          />
          <input
            id={`school-${index+1}-name`}
            key={`school-${index+1}-name`}
          
            placeholder="Organization name"
            type="text"
            className="mr-1 border-[3px] w-36 border-gray-700 rounded-lg text-xs px-2 py-1"
          />
          <input
            id={`school-${index+1}-duration`}
            key={`school-${index+1}-duration`}
          
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
        <div className=" mt-10 flex justify-center " ref={ref}>
          <div id={props.id} className={props.class}>
            <Personalinfo  name={localStorage.getItem("name")} post={localStorage.getItem("post")} email={localStorage.getItem("email")} phone={localStorage.getItem("phone")} address={localStorage.getItem("address")} linkedin={localStorage.getItem("linkedin")} />
            <div className="space-y-3">
              <Summary summary={localStorage.getItem("summary")} />
              <Skills  skill={arr}/>
              <Project pname={projectnamearray} pdesc={projectdescarray} />
              <Experience post={jobtitle} company={jobcompany} date={jobduration} jobdesc={jobdescription}/>
              <Course  title={coursetitle} company={coursecompany} date={courseduration}/>
              <Education title={schooldegree} school={schoolname} date={schoolduaration} />
              <Language languages={languages} />
            </div>
          </div>
        </div>

      </div>
      </div>  
    </>
  );
});
ResumeContent.defaultProps = {
  id: "",
  class: "xs:mx-[0.2] md:mx-4 border-2 border-black px-4 bg-white py-4 xs:w-[100vw] sm:w-[90vw] md:w-[42.125rem] rounded-lg",
};
export default ResumeContent;
