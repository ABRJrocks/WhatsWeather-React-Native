import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Home from "./screens/Home";

export default function App() {
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={[{ minHeight: Math.round(windowHeight) }]}>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
