import React, {useState} from 'react'
import NavigationTabs from './NavigationTab'


export default function (props){
    

    return (
        <div className="block-tabs">
        
            <NavigationTabs tabs={props.tabs} key={props.tabs.id} changePage={props.changePage}/>

        </div>
    )
}