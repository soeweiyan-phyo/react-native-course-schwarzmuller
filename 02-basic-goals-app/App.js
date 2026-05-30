import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [textInputValue, setTextInputValue] = useState("");
  const [goals, setGoals] = useState([]);

  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  const handleAddGoal = () => {
    if (textInputValue.trim() === "") {
      return; // Don't add empty goals
    }
    setGoals((currentGoals) => [...currentGoals, textInputValue]);
    setTextInputValue("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your goals!"
            value={textInputValue}
            onChangeText={handleTextInputChange}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={handleAddGoal} />
          <Button
            title="Clear Goals"
            onPress={() => setGoals([])}
            color="#ff0000"
          />
        </View>
      </View>

      <View style={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <Text key={index} style={styles.goalItem}>
            {goal}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  inputSection: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
  },
  goalsContainer: {},
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
  },
});
