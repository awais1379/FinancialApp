import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name: {transaction.name}</Text>
      <Text style={styles.label}>Amount: ${transaction.amount}</Text>
      <Text style={styles.label}>Date: {transaction.date}</Text>
      <Text style={styles.details}>Additional transaction details...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  details: { fontSize: 14, color: "#666" },
});

export default TransactionDetailScreen;
