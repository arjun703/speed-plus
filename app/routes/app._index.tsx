import { BlockStack, Page } from "@shopify/polaris";
import AppList from "./../components/app-list";
import AppAnalysis from "app/components/analysis-overview";
import AnalysisHeader from "app/components/analysis-header";

export default function Analytics(){
  return(
    <Page>
      <BlockStack gap={'300'}>
        <AnalysisHeader />
        <AppAnalysis />
        <AppList />
      </BlockStack>
    </Page>
  )
}