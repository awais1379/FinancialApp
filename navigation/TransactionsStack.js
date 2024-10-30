import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionsListScreen from "../screens/TransactionsListScreen";
import TransactionDetailScreen from "../screens/TransactionDetailScreen";

const Stack = createStackNavigator();

const TransactionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TransactionsList"
      component={TransactionsListScreen}
      options={{ title: "Transactions List" }}
    />
    <Stack.Screen
      name="TransactionDetail"
      component={TransactionDetailScreen}
      options={{ title: "Transaction Detail" }}
    />
  </Stack.Navigator>
);

export default TransactionsStack;
