import { useSelector } from "react-redux";
import SearchAutoComplete from "./search";
import SortBySize from "./sort-by-size";
import { RootState } from "app/initial-data";

export default function SearchAndSortBySize(){

    const  num_installed_apps = useSelector((state:RootState) => state.installed_apps.length)    

    return(
        <>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center g-5">
                    <div className="apps-list-header">
                        Installed Apps
                    </div>
                    <div>
                        ({num_installed_apps})
                    </div>
                </div>
                <div className="d-none d-md-flex align-items-center g-5">
                    <div>
                        <SearchAutoComplete />
                    </div>
                    <div>
                        <SortBySize />
                    </div>                
                </div>
            </div>
        </>
    )
}