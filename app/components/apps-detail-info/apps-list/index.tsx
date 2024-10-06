import AppsListHeader from "./app-list-header"
import AppItem from "./app-item"

import { useSelector } from "react-redux"
import { InstalledAppType } from "app/initial-data/installed_apps";
import { RootState } from "app/initial-data";

export default function AppsList(){

    const { installed_apps, sort_by_device_type, search_query } = useSelector((state:RootState) => ({
        installed_apps: state.installed_apps,
        sort_by_device_type: state.sort_by_device_type,
        search_query:state.search_query
    }));

    const apps_filtered_by_device_type_and_search_query = installed_apps
        .sort((a:InstalledAppType, b:InstalledAppType) => {
            const aLoadTime = a.average_load_time[sort_by_device_type].value;
            const bLoadTime = b.average_load_time[sort_by_device_type].value;
            // Sort in descending order (slowest first)
            return bLoadTime - aLoadTime;
        })
        .filter((installed_app:InstalledAppType) => {
            if(search_query === '') return  true 
            return installed_app.app_name.match(new RegExp(search_query, 'i'))        
        });

    return(
        <>
            <div>
                <AppsListHeader />
                {apps_filtered_by_device_type_and_search_query.map((installed_app:InstalledAppType, index:number) => <AppItem key={index} installed_app={installed_app} />)}
            </div>
        </>
    )
}