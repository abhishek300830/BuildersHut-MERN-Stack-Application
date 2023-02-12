import builderContext from './builderContext'

import React,{useState} from 'react'

const BuilderState=(props)=>{

    const [themebg, setThemebg] = useState('white');
    const [formbg, setFormbg] = useState('white');
    const [borderbg,setBorderbg]=useState('black');
    
    return(
        <builderContext.Provider
        value={{
            formbg,
            themebg,
            setThemebg,
            setFormbg,
            setBorderbg,
            borderbg
        }}
        >
           { props.children }
        </builderContext.Provider>
    )
}

export default BuilderState