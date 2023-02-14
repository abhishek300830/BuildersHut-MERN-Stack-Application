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

    
    return(
        <builderContext.Provider
        value={{
            formbg,
            themebg,
            setThemebg,setFormbg,
            setBorderbg,borderbg,
            fields,setFields,
            skillData,setSkillData
        }}
        >
           { props.children }
        </builderContext.Provider>
    )
}

export default BuilderState