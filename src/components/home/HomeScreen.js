import React from 'react'
import { HomeStyle } from './homeStyle'
import builder1 from '../../images/builder1.png';
import builder2 from '../../images/builder2.png';
import builder3 from '../../images/builder3.png';
import icons from '../../images/icons.png'
import explore from '../../images/explore.png'
import { NavLink } from 'react-router-dom';

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
                    <img src={icons} alt="icons" />   
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