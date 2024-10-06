import { Badge } from "@shopify/polaris";
import { tabsData, Tab } from "./tab-data";
import { Link, useLocation } from "@remix-run/react";
import { NotificationIcon, MenuHorizontalIcon } from '@shopify/polaris-icons';
import { Icon } from "@shopify/polaris";
import './../../custom-styles/index.css'

export default function CustomTabs(){

    const {pathname} = useLocation()
    
    return(    
        <div className="tabs-container d-flex justify-content-between">
            <div className="d-flex">
                {
                    tabsData.map( (tab, index) => {
                        return(
                            <div className={'tab-item p-15' + (pathname === tab.path ? ' tab-active' : '') }>
                                <Link 
                                    style={{textDecoration:'none' }} 
                                    key={index} 
                                    to={tab.path}
                                >
                                    <div className="d-flex g-5">
                                        <span>{ tab.name }</span>
                                        <span>{ tab?.badge !== undefined && tab.badge > 0 ? <Badge >{tab.badge.toString()}</Badge> : ''  }</span>
                                    </div>
                                </Link>
                            </div>
                        )}
                    )
                }
            </div>
            <div className="d-flex g-5">
                <div style={{position:'relative'}}>
                    <div className="tab-item p-15">
                        <Icon source={NotificationIcon} tone="base" />
                    </div>
                    <div style={{position:'absolute', top:'5px', right: '5px'}}>
                        <Badge tone={'critical-strong'}>2</Badge>
                    </div>
                </div>
                <div className="tab-item p-15">
                    <Icon  source={MenuHorizontalIcon} tone="base" />
                </div>
            </div>
        </div>
    )
}