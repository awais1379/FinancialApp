import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SummaryScreen = () => {
  const totalExpenses = 70;

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  total: { fontSize: 24, fontWeight: "bold" },
});

export default SummaryScreen;
