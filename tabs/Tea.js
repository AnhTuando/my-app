import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import data from "../data";

export default function Tea({ navigation }) {
  const coffeeData = data.tea;
  const HandleClick = (id) => {
    const item = coffeeData.find((item) => item.id === id);
    navigation.navigate("Checkout", { item });
  };
  return (
    <SafeAreaProvider>
      <Navigation />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapItems}>
            {coffeeData.map((item) => (
              <View style={styles.item} key={item.id}>
                <TouchableOpacity onPress={() => HandleClick(item.id)}>
                  <Image style={styles.img} source={item.src} />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>
                    {item.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 50,
  },
  wrapItems: {
    width: Dimensions.get("window").width,
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  item: {
    width: Dimensions.get("window").width / 2,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  name: {
    marginVertical: 5,
  },
  price: {
    color: "#fc2d2d",
  },
});
