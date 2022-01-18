import React from 'react'
import Panel from './Structures/Panel'
import Navigation from './Structures/Navigation'
import MainBody from './Structures/MainBody'
import Team from './Structures/Fields/Team/_Field'
import Problem from './Structures/Fields/Problem/_Field'
import Goal from './Structures/Fields/Goal/_Field'
import MVP from './Structures/Fields/MPV/_Field'
import Stages from './Structures/Fields/Stages/_Field'
import TD from './Structures/Fields/TD/_Field'
import Economic from './Structures/Fields/Economic/_Field'
import Files from './Structures/Fields/Files/_Field'
import imgLeftArrow from "./images/Left button.png"
import imgRightArrow from "./images/Right button.png"

function App() {

  const [tabs, setTabs] = React.useState (
    [
        {id: 1, active: false, title: 'Меню', menu: 'menu'},
        {id: 2, active: true, title: 'Команда', menu: '', page: <Team />},
        {id: 3, active: false, title: 'Проблема', menu: '', page: <Problem />},
        {id: 4, active: false, title: 'Цель', menu: '', page: <Goal />},
        {id: 5, active: false, title: 'MVP', menu: '', page: <MVP />},
        {id: 6, active: false, title: 'Этапы', menu: '', page: <Stages />},
        {id: 7, active: false, title: 'ТО', menu: '', page: <TD />},
        {id: 8, active: false, title: 'Экономика', menu: '', page: <Economic />},
        {id: 9, active: false, title: 'Файлы', menu: '', page: <Files />},
    ]
)  

let [page, setPage] = React.useState(tabs[1].page)

function newPageId (id){
  tabs.map(tab => tab.id === id ? tab.active != tab.active : '')
  setPage(page = tabs[id-1].page)
}
  return (
    <div>
      <Panel />

      <Navigation tabs={tabs} changePage={newPageId}/>

        <div className="card">
            <div>
                <a href="Page_files.html" className="left-arrow">
                    <img src={imgLeftArrow} alt="Left button" className="arrow"/>
                </a>
            </div>

            {page}

            <div>
                <a href="Page_problem.html" className="right-arrow">
                    <img src={imgRightArrow} alt="Right button" className="arrow right-arrow"/>
                </a>
            </div>

        </div>
    

    </div>
  );
}

export default App;
