import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function App() {
  return (
    <View>
      <TouchableOpacity>
        <Text className="text-3xl text-green-100  ">k me</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}
