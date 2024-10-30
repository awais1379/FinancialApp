import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const TransactionsListScreen = () => {
  const navigation = useNavigation();
  const [transactions] = useState([
    { id: "1", name: "Groceries", amount: 50, date: "2024-10-01" },
    { id: "2", name: "Transport", amount: 20, date: "2024-10-02" },
  ]);

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigation.navigate("TransactionDetail", { transaction: item })
          }
        >
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.amount}>${item.amount}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: { padding: 20, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  name: { fontSize: 16, fontWeight: "bold" },
  amount: { fontSize: 14, color: "#555" },
  date: { fontSize: 12, color: "#888" },
});

export default TransactionsListScreen;
