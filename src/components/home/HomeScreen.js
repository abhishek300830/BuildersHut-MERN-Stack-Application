import React from 'react'
import { HomeStyle } from './homeStyle'
import builder1 from '../../images/builder/builder1.png';
import builder2 from '../../images/builder/builder2.png';
import builder3 from '../../images/builder/builder3.png';
import explore from '../../images/favicon/explore.png'
import { NavLink } from 'react-router-dom';
import icon5 from '../../images/builder icons/resume.png'
import icon3 from '../../images/builder icons/image.png'
import icon1 from '../../images/builder icons/chart.png'
import icon2 from '../../images/builder icons/color.png'
import icon4 from '../../images/builder icons/meme.png'
import icon6 from '../../images/builder icons/task.png'

const HomeScreen = () => {
  return (
    <HomeStyle>
        <div className='home-main'>
            <div className="builder-div">
                <img src={builder1} className='b1' alt="builder1" />
                <img src={builder2} className='b2' alt="builder2" />
                <img src={builder3} className='b3' alt="builder3" />
            </div>

            <div className="text-div">
                <h2>
                    WELCOME TO <br/> <b>BUILDER's HUT !!</b> 
                </h2>

                <div className="t1">
                    <div className="tt1">"WE <br/>&nbsp;TO </div>
                    <div className="tt2">
                        <b>BUILD</b>
                        &nbsp;&nbsp;YOUR FUTURE."
                    </div>
                </div>

                <div className="workshop">
                    <h1>OUR WORKSHOP</h1>

                    {/* change icons   */}
                    <div className="b-icons">
                        <img src={icon1} alt="icon" />
                        <img src={icon2} alt="icon" />
                        <img src={icon3} alt="icon" />
                        <img src={icon4} alt="icon" />
                        <img src={icon5} alt="icon" />
                        <img src={icon6} alt="icon" />
                    </div>
                </div>

            </div>
        </div>
        
        <div className="explore">
            <h4>Explore</h4>
            <NavLink to="workshop">
                <img src={explore} alt="explore" />
            </NavLink>
        </div>

    </HomeStyle>
  )
}

export default HomeScreen