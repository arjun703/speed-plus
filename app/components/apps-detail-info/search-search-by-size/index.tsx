import SearchAutoComplete from "./search";
import SortBySize from "./sort-by-size";

export default function SearchAndSortBySize(){
    return(
        <>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center g-5">
                    <div className="apps-list-header">
                        Installed Apps
                    </div>
                    <div>
                        (10)
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