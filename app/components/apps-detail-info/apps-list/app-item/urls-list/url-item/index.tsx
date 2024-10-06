import { Collapsible } from "@shopify/polaris";
import { useState } from "react";
import { useSelector } from 'react-redux';

export default function URLsListItem({url, app_name, page}:any){

    const [isURLdescriptionOpen,  setIsURLdescriptionOpen] = useState(false)
    const toggleURLsListVisibility = () => setIsURLdescriptionOpen(!isURLdescriptionOpen)
    return (
        <>
            <div 
                className="urls-list-row d-flex align-items-center" 
                style={{ width: '100%', cursor:'pointer' }}
                onClick={toggleURLsListVisibility}
            >
                {/* Fixed width for 3rd Party Apps column */}
                <div className="urls-list-row-item url-link-and-desc">
                    {app_name} - {page} - {url.url}
                </div>
                {/* Flexible columns */}
                <div className="urls-list-row-item flex-1">
                    {url.transfer_size}
                </div>
                <div className="urls-list-row-item flex-1">
                    {url.total_cpu_time}
                </div>
                <div className="urls-list-row-item flex-1">
                    {url.script_evaluation}
                </div>
            </div>
            <Collapsible
                open={isURLdescriptionOpen}
                id="basic-collapsible"
                transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
                expandOnPrint
            >
                <p className="url-description" style={{maxWidth: '80%', paddingLeft:'30px', paddingBottom:'25px', paddingTop:'10px'}}>
                    The soft glow of the morning sun filtered through the curtains, casting a warm, golden hue across the room. Birds chirped cheerfully outside, their melodies blending with the gentle rustle of leaves swaying in the breeze. As the world slowly woke up, the streets remained quiet, a peaceful calm settling over the neighborhood. It was a moment of serenity, where time seemed to slow down, allowing space for reflection and quiet thoughts. The aroma of freshly brewed coffee wafted through the air, inviting the first sip of the day, signaling the start of new possibilities.
                </p>
            </Collapsible>
        </>
    );
}