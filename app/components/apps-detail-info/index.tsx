import { BlockStack, Card } from "@shopify/polaris"
import SortByDeviceType from "./sort-by-device-type"
import SearchAndSortBySize from "./search-search-by-size"
import AppsList from "./apps-list"

export default function AppsDetailInfo(){
    return(
        <Card>
            <BlockStack gap={'300'}>
                <BlockStack gap={'200'}>
                    <SortByDeviceType />
                    <SearchAndSortBySize />
                </BlockStack>
                <AppsList />
            </BlockStack>
        </Card>
    )
}