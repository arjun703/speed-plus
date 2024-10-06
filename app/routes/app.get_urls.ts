
import { json } from "@remix-run/node"; 
export async function loader() { 
    await (new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 2000);
    }))

    return json(
        {
            urls: [
                {
                    url: 'http://www.faxquote.faxquotefaxquote.comfaxquote.comfaxquote.com',
                    transfer_size: '1 KB',
                    total_cpu_time: '1s',
                    script_evaluation: '2ms',
                },
                {
                    url: 'http://www.comfaxquote.com',
                    transfer_size: '12 KB',
                    total_cpu_time: '14s',
                    script_evaluation: '2ms'
                },
                {
                    url: 'http://www.faxquote.faxquotefaxquote.comfaxquote.comfaxquote.com',
                    transfer_size: '2 KB',
                    total_cpu_time: '12s',
                    script_evaluation: '2ms'
                },                
                {
                    url: 'http://www.faxquote.faxquotefaxquote.comfaxquote.comfaxquote.com',
                    transfer_size: '211 KB',
                    total_cpu_time: '123s',
                    script_evaluation: '0.4ms'
                },
            ],
            meta: {
                total_pages: 3,
            }
        }
    )
}