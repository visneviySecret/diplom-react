import React, { useState, useEffect } from 'react'
import Panel from './Structures/Panel'
import TabBar from './Structures/Navigation'
import MainBody from './Structures/MainBody'
import Menu from './Structures/Fields/Menu/_Field'
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
  const [progress, setProgress] = useState(70)
  const [currentPageId, setCurrentPageId] = useState(2)
  const [data, setData] = useState([
    [
      { id: 0, title: 'I Концепция', tasks: [{ id: 0, isChecked: false, task: '', term: '', roles: '' }] },
      { id: 1, title: 'II Разработка', tasks: [{ id: 1, isChecked: false, task: '', term: '', roles: '' }] },
      { id: 2, title: 'III Реализация', tasks: [{ id: 2, isChecked: false, task: '', term: '', roles: '' }] },
      { id: 3, title: 'IV Завершение', tasks: [{ id: 3, isChecked: false, task: '', term: '', roles: '' }] }
    ],
    [
      { id: 1, icon: {}, personName: '', role: '' },
      { id: 2, icon: {}, personName: '', role: '' },
    ],
    [
      { id: 1, title: 'Проблема', info: 'без него мы как без рук', textFill: '' },
    ],
    [
      { id: 1, title: 'Цель', info: 'без него мы как без рук', textFill: '' },
    ],
    [
      { id: 1, title: 'MVP', info: 'без него мы как без рук', textFill: '' },
    ],
    [
      { id: 1, title: 'Техническое описание', info: 'без него мы как без рук', textFill: '' },
    ],
    [
      { id: 1, title: '', quantity: 0, price: 0, http: '' },
    ],
    [
      { id: 1, content: '' },
      { id: 2, content: '' },
    ]
  ])

  const [tabs, setTabs] = useState(
    [
      { id: 1, active: true, title: 'Меню', menu: 'menu', page: <Menu data={data} /> },
      { id: 2, active: false, title: 'Команда', menu: '', page: <Team local_data={data} setData={setData} /> },
      { id: 3, active: false, title: 'Проблема', menu: '', page: <Problem data={data} setData={setData} /> },
      { id: 4, active: false, title: 'Цель', menu: '', page: <Goal data={data} setData={setData} /> },
      { id: 5, active: false, title: 'MVP', menu: '', page: <MVP data={data} setData={setData} /> },
      { id: 6, active: false, title: 'Этапы', menu: '', page: <Stages data={data} setData={setData} /> },
      { id: 7, active: false, title: 'ТО', menu: '', page: <TD data={data} setData={setData} /> },
      { id: 8, active: false, title: 'Экономика', menu: '', page: <Economic data={data} setData={setData} /> },
      { id: 9, active: false, title: 'Файлы', menu: '', page: <Files data={data} setData={setData} /> },
    ]
  )

  let [page, setPage] = useState(tabs[2].page)

  useEffect(() => {
    setPage(page = tabs[currentPageId].page)
  }, [currentPageId])

  function newPageId(id) {
    changePage(id)
    setCurrentPageId(id - 1)
  }
  function changePage(id) {
    const newTabs = tabs.map(tab => {
      if (tab.id === id) {
        return { active: true, ...tab }
      } else {
        return { active: false, ...tab }
      }
    })
    setTabs(newTabs)

  }

  function decreaseTab() {
    if (currentPageId === 0) {
      setCurrentPageId(8)
    } else {
      setCurrentPageId(currentPageId - 1)
    }
    changePage(currentPageId)
  }
  function increaseTab() {
    if (currentPageId === 8) {
      setCurrentPageId(0)
    } else {
      setCurrentPageId(currentPageId + 1)
    }
    changePage(currentPageId)
  }
  return (
    <div>
      <Panel progress={progress} />

      <TabBar tabs={tabs} changePage={newPageId} />

      <div className="card">
        <div>
          <button
            className="left-arrow"
            onClick={() => decreaseTab()}
          >
            <img src={imgLeftArrow} alt="Left button" className="arrow" />
          </button>
        </div>

        {page}

        <div>
          <button
            className="right-arrow"
            onClick={() => increaseTab()}
          >
            <img src={imgRightArrow} alt="Right button" className="arrow right-arrow" />
          </button>
        </div>

      </div>


    </div>

  );
}

export default App;
