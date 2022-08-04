import React from 'react'
import NavigationTabs from './NavigationTab'


export default function Navigation(props) {


    return (
        <div className="block-tabs">

            <NavigationTabs tabs={props.tabs} key={props.tabs.id} changePage={props.changePage} currentPageId={props.currentPageId} />

        </div>
    )
}