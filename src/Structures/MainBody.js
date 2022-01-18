import React from 'react'
import imgLeftArrow from "../images/Left button.png"
import imgRightArrow from "../images/Right button.png"

export default function MainBody(props){

    return (
        <div className="card">
            <div>
                <a href="Page_files.html" className="left-arrow">
                    <img src={imgLeftArrow} alt="Left button" className="arrow"/>
                </a>
            </div>

            

            <div>
                <a href="Page_problem.html" className="right-arrow">
                    <img src={imgRightArrow} alt="Right button" className="arrow right-arrow"/>
                </a>
            </div>

        </div>
    )
}