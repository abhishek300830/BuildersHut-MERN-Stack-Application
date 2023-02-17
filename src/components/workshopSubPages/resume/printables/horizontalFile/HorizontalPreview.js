import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import builderContext from '../../../../../context/builderContext'
import { CssTextField } from '../../../../orangeTextBox/CssTextField';
import { HorizontalPrevStyleDiv } from './horizontalStyle'

const HorizontalPreview = () => {

    const {fields,personalData,addrData,skillData,projectData,intershipData,othersData, hobbieData, qualifData}=useContext(builderContext);

    console.log(personalData)
  return (
    <HorizontalPrevStyleDiv>
        <div class="Main">
            <NavLink to="/workshop/profile">
                click
            </NavLink>
        <div class="page-y">
            <div class="horizontalPage">
                <h1>Personal data</h1>
                <section>
                    <div>{personalData.name}</div>
                    <CssTextField
                            variant="outlined"
                            disabled
                            type="text"
                            value={
                            personalData.dob.$d.getDate() +
                            " / " +
                            personalData.dob.$d.getMonth() +
                            " / " +
                            personalData.dob.$d.getFullYear()
                            }
                         />
                </section>

                <h1>address Data</h1>
                <section>
                    <div>{addrData.city}</div>
                    <div>{addrData.state}</div>
                    <div>{addrData.pincode}</div>
                    <div>{addrData.mobile}</div>
                    <div>{addrData.email}</div>
                    <div>{addrData.other}</div>
                </section>

                <h2>hobbies</h2>
                {hobbieData.map((val,indx)=>(
                        <div key={indx}>{val.name}</div>
                ))}

                <h1>qualification</h1>
                <section>
                    <div>{qualifData.year1}</div>
                    <div>{qualifData.perc1}</div>
                    <div>{qualifData.inst1}</div>
                    <hr />
                    <div>{qualifData.year2}</div>
                    <div>{qualifData.perc2}</div>
                    <div>{qualifData.inst2}</div>
                    <hr />
                    <div>{qualifData.year3}</div>
                    <div>{qualifData.perc3}</div>
                    <div>{qualifData.inst3}</div>
                </section>

                <h2>skills</h2>
                {skillData.map((val,indx)=>(
                    <section key={indx}>
                        <div key={indx}>{val.name}</div>
                    </section>
                ))}

                <h2>acheivements</h2>
                {fields.map((val,indx)=>(
                    <div key={indx}>{val.name}</div>
                ))}

                <h2>Projects - interships</h2>
                <h3>projects</h3>
                {projectData.map((val,indx)=>(
                    <section key={indx}>
                        <div>{val.type}</div>
                        <div>{val.name}</div>
                        <CssTextField
                            variant="outlined"
                            disabled
                            type="text"
                            value={
                            val.date.$d.getDate() +
                            " / " +
                            val.date.$d.getMonth() +
                            " / " +
                            val.date.$d.getFullYear()
                            }
                         />
                    </section>  
                ))}
              
                <hr />
                <h3>Interships</h3>
                {intershipData.map((val,indx)=>(
                    <section key={indx}>
                        <div>{val.type}</div>
                        <div>{val.name}</div>
                        <CssTextField
                            variant="outlined"
                            disabled
                            type="text"
                            value={
                            val.date.$d.getDate() +
                            " / " +
                            val.date.$d.getMonth() +
                            " / " +
                            val.date.$d.getFullYear()
                            }
                         />
                    </section>  
                ))}
                <hr />
                <h3>others</h3>
                {othersData.map((val,indx)=>(
                    <section key={indx}>
                        <div>{val.type}</div>
                        <div>{val.name}</div>
                        <CssTextField
                            variant="outlined"
                            disabled
                            type="text"
                            value={
                            val.date.$d.getDate() +
                            " / " +
                            val.date.$d.getMonth() +
                            " / " +
                            val.date.$d.getFullYear()
                            }
                         />
                    </section>  
                ))}

            </div>
        </div>
        </div>
    </HorizontalPrevStyleDiv>
  )
}

export default HorizontalPreview