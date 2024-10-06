import { BlockStack, Page } from "@shopify/polaris";
import CustomTabs from "app/components/tabbed-navigation";
import AnalysisOverview from "app/components/analysis-overview";
import AppsDetailInfo from "app/components/apps-detail-info";
import AppAnalysisAtGlance from "app/components/at-glance";
import FeatureRequestForm from "app/components/feature-request-form";
import Counter from "app/components/counter";

export default function Analytics(){

  return(
    <>
      <CustomTabs />
      <Page>
        <BlockStack gap={'500'}>
          <Counter />
          <AnalysisOverview />
          <AppsDetailInfo />
          <AppAnalysisAtGlance /> 
          <FeatureRequestForm />
        </BlockStack>
      </Page>
    </>
  )
}