import { useLocation } from "@remix-run/react";
import CustomTabs from "app/components/tabbed-navigation";
import path from "path";

export default function Features(){
    const {pathname} = useLocation();
    console.log(pathname)
    return(
        <>
            <CustomTabs />
            <h2>Features</h2>
        </>
    )
}