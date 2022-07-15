import React from "react";
import Header from "../../components/Header";
import { Box } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Notification from "./Notification";
import Content from "../../components/Content";

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
  return (
    <Content>
      <Box backgroundColor="background">
        <Header
          title="Notifications"
          left={{
            icon: "arrow-left",
            onPress: () => navigation.openDrawer(),
          }}
          right={{ icon: "share", onPress: () => true }}
        />
        <Box padding="m">
          <Notification
            title="Outfit Ideas"
            description="Receive daily notifications"
          />
          <Notification
            title="Discounts & Sales"
            description="Buy the stuff you love for less"
          />
          <Notification
            title="Stock Notification"
            description="If the product you love comes back in stock"
          />
          <Notification
            title="New Stuff"
            description="Hear it first, wear it first"
          />
        </Box>
      </Box>
    </Content>
  );
};

export default Settings;
