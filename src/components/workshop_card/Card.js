import React from 'react'
import { CardDiv } from './cardStyle'
import hathoda from '../../images/favicon/hathoda.png'

const Card = ({name,desc,url,index}) => {
  return (
    <CardDiv>
        <div className="card-main">
            <img src={url} alt="builder" />

            <div>
                {index===7?<h2>Coming {name}</h2>:<h2>{name} Builder</h2>}
                {index===7?<p>We will bring up some more Builders. Stay tuned <br /> <br /> </p>: <p>{desc}</p>}    
               
            </div>

            <div className="upward">
              <ul>

                <li>
                   <span>Resume </span>
                   <button>
                      <img src={hathoda} alt="hathoda" />
                      BUILD
                    </button>

                </li>

              </ul>
            </div>
            
        </div>

    </CardDiv>
  )
}

export default Card