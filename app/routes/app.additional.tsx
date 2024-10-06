import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import CustomTabs from "app/components/tabbed-navigation";

export default function AdditionalPage() {
  return (
    <>
      <CustomTabs/>
      <h2>Additional</h2>
    </>
  );
}