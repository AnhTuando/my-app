import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import BestSeller from "../components/BestSeller";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <View style={styles.container}>
      <Navigation />
      <ScrollView>
        <Slider />
        <BestSeller />
        <Blog />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
