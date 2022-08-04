import React, { useEffect } from 'react'

export default function NavigationTab(props) {
    let [classes, setClasses] = React.useState([])

    useEffect(() => {
        console.log(props.currentPage)
    }, [props.currentPage])

    function switchTab(target_tab) {
        if (!target_tab.active) {
            setClasses(
                props.tabs.forEach(tab => { if (tab.active) { tab.active = false } }),
                target_tab.active = true)
        }
    }

    return (
        props.tabs.map((tab) => {
            classes = ['tabs']
            if (tab.active) { classes.push('tabs-active') }
            if (tab.menu) { classes = ['menu'] }
            if (tab.menu && tab.active) { classes.push('menu-active') }
            return <p className={classes.join(' ')} key={tab.id} onClick={() => {
                switchTab(tab)
                props.changePage(tab.id)
            }}>{tab.title}</p>;
        })
    )

}