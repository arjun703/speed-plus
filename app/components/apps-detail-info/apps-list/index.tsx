import AppsListHeader from "./app-list-header"
import AppItem from "./app-item"

import { useSelector } from "react-redux"
import { InstalledAppType } from "app/initial-data/installed_apps";

export default function AppsList(){

    const {installed_apps, sort_by_device_type} = useSelector((state:any) => state);

    return(
        <>
            <div>
                <AppsListHeader />
                {installed_apps.map((installed_app:InstalledAppType, index:number) => <AppItem key={index} installed_app={installed_app} />)}
            </div>
        </>
    )
}