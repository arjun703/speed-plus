import { IndexTable, Text } from "@shopify/polaris";
import URLsList from "./url-list";
import { useState } from "react";

export default function AppRow({orderData, index}:any){
    const {id, order, date, customer, total, paymentStatus, fulfillmentStatus} = orderData
    const [URLsVisibility, setURLsVisibility]= useState(false)
    const toggleURLsVisibility = () => setURLsVisibility(!URLsVisibility)
    return(
        <>
            <div onClick={toggleURLsVisibility}>
                <IndexTable.Row id={id} key={id} position={index}>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="bold" as="span">
                        {order}
                        </Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>{date}</IndexTable.Cell>
                    <IndexTable.Cell>{customer}</IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text as="span" alignment="end" numeric>
                        {total}
                        </Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>{paymentStatus}</IndexTable.Cell>
                    <IndexTable.Cell>{fulfillmentStatus}</IndexTable.Cell>
                </IndexTable.Row>   
            </div>
            <IndexTable.Row id={id} key={id} position={index}>
                {
                    URLsVisibility && (
                        <URLsList  />
                    )
                }
            </IndexTable.Row>     
        </>

    )
}