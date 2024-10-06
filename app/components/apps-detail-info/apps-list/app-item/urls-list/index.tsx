import URLsListItem from "./url-item";
import URLsListHeader from "./urls-list-header";

export default function URLSlist(){
    return(
        <>
            <URLsListHeader />
            {
                [1,2,3,4].map((value, index) => {
                    return(<URLsListItem />)
                })
            }
        </>
    )
}