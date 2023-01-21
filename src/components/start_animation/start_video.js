import React from "react";
import vdio from '../../images/builder_hut1.mp4'
import { StartVdioDiv } from "./style";

const BuilderVdioPage=()=>{
    const styling={
        width:"50%",
        marginLeft:"25%"
    }
    return(
        <StartVdioDiv>
        <video autoPlay muted style={styling}>
            <source src={vdio} type="video/webm"/>
        </video>
        </StartVdioDiv>
    )
}

export default BuilderVdioPage;