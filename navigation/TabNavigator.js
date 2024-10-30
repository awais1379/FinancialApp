import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionsStack from "./TransactionsStack";
import SummaryScreen from "../screens/SummaryScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Transactions") {
          iconName = focused ? "list" : "list-outline";
        } else if (route.name === "Summary") {
          iconName = focused ? "stats-chart" : "stats-chart-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#1DA1F2",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Transactions" component={TransactionsStack} />
    <Tab.Screen name="Summary" component={SummaryScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
