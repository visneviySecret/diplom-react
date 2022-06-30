import React, { useEffect } from 'react'
import Team from './_Team'
import Stages from './_StagesItems'
import Problem from './_Problem'
import Goal from './_Goal'
import MVP from './_MVP'
import TD from './_TD'
import Economic from './_Economic'
import Files from './_Files'

export default function Menu({ data }) {

    return (
        <div className="card-pack">
            <div className="project-status">
                <div className="fill-project">
                    Заполнить проект
                </div>
                <div className="indicators">
                    <div className="indicator stages-check"></div>
                    <div className="indicator team-check"></div>
                    <div className="indicator problem-check"></div>
                    <div className="indicator goal-check"></div>
                    <div className="indicator MVP-check"></div>
                    <div className="indicator TD-check"></div>
                    <div className="indicator economic-check"></div>
                    <div className="indicator files-check"></div>
                </div>
            </div>
            <div className="container">
                <Stages data={data} />

                <Team data={data} />
            </div>

            <div className="container">
                <Problem data={data} />

                <Goal data={data} />

                <MVP data={data} />
            </div>

            <div className="container">
                <TD data={data} />
            </div>

            <div className="container">
                <Economic data={data} />

                <Files data={data} />
            </div>

        </div>
    )
}