import builderContext from './builderContext'

import React,{useState} from 'react'

const BuilderState=(props)=>{

    const [themebg, setThemebg] = useState('white');
    const [formbg, setFormbg] = useState('#faf6f6');
    const [borderbg,setBorderbg]=useState('black');

    // acheivement state (all fields data)
    const [fields,setFields]=useState([]);
    
    // skills state (all fields data)
    const [skillData,setSkillData]=useState([]);

    // projects and internships data
    const [projectData,setProjectData]=useState([]);
    const [intershipData,setIntershipData]=useState([]);
    const [othersData,setOthersData] = useState([]);

    // interests and hobbies data
    const [hobbieData,setHobbieData]=useState([]);
    

    // qualification data
    const [qualifData,setQualifData]=useState(
       {
        year1:"",
        perc1:"",
        inst1:"",
        year2:"",
        perc2:"",
        inst2:"",
        year3:"",
        perc3:"",
        inst3:""
       });

    return(
        <builderContext.Provider
        value={{
            formbg,
            themebg,
            setThemebg,setFormbg,
            setBorderbg,borderbg,
            fields,setFields,
            skillData,setSkillData,
            projectData,setProjectData,
            intershipData,setIntershipData,
            othersData,setOthersData,
            hobbieData,setHobbieData,
            qualifData,setQualifData
        }}
        >
           { props.children }
        </builderContext.Provider>
    )
}

export default BuilderState