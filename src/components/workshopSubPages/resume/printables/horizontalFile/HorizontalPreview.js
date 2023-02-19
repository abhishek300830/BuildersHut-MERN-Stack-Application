import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import builderContext from '../../../../../context/builderContext'
import { CssTextField } from '../../../../orangeTextBox/CssTextField';
import { HorizontalPrevStyleDiv } from './horizontalStyle'
import idphoto from '../../../../../images/left out/idcard.jpg'

const HorizontalPreview = () => {


    const {fields,personalData,addrData,skillData,projectData,intershipData,othersData, hobbieData, qualifData,profileInfo,setProfileInfo,languages,setLanguages}=useContext(builderContext);

  return (
    <HorizontalPrevStyleDiv>
        <div class="Main">
            {/* <NavLink to="/workshop/profile">
                click
            </NavLink> */}
        <div class="page-y">
            <div class="horizontalPage">

                {/* left section of resume  */}
                <div className="left-section">

                    <div className="addrs">
                        <img src={idphoto} alt="photo" />
                        
                        <h3>Address</h3>
                        <p>{addrData.city}, {addrData.state}, {addrData.pincode}</p>

                        <h3>Phone</h3>
                        <p>{addrData.mobile}</p>

                        <h3>Email</h3>
                        <p>{addrData.email}</p>

                    </div>
                    
                    <section className="rest">
                        <div className="skills" style={{listStyleType:"none"}}>
                            <h2>SKILLS</h2>
                            {skillData.map((val,indx)=>(
                                <li key={indx}>{val.name}</li>
                            ))}
                        </div>
                        <div className="hobbies" style={{listStyleType:"none"}}>
                            <h2>INTEREST & HOBBIES</h2>
                            {hobbieData.map((val,indx)=>(
                                <li key={indx}>{val.name} </li>
                            ))}
                        </div>
                    </section>


                </div>

                {/* right sectio nof resume  */}
                <div className="right-section">
                    <div className="bio">
                        <h1>{personalData.name}</h1>
                        <h3>PROFILE</h3>
                        <p>{profileInfo}</p>
                        <h3>PERSONAL DETAILS</h3>

                        <div>
                            <b>D.O.B  - </b>
                            {personalData.dob}
                             <br />
                            <b>Languages Known - </b>  
                            {languages.map((val,indx)=>(
                                <span key={indx}>{val} | </span>
                            ))}
                        </div>
                    </div>

                    <div className="qualifications">
                        <h3>QUALIFICATIONS</h3>
                        
                        

                    </div>

                    <div className="projects">
                        <h3>PROEJCTS AND INTERNSHIPS</h3>
                        
                    </div>

                    <div className="acheivements">
                        <h3>CERTIFICATION & ACHIEVEMENTS</h3>
                        {fields.map((val,indx)=>(
                            <li key={indx}>{val.name}</li>
                        ))}
                    </div>

                    <div className="extra">
                        <h3>EXTRA CURRICULAR ACTIVITIES</h3>
                    </div>



                </div>

            
            
          </div>
        </div>
      </div>
    </HorizontalPrevStyleDiv>
  );
};

export default HorizontalPreview;
