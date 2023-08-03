import { StyleSheet, Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const data = [
  {
    id: 1,
    name: "Bánh mì gà kim quất",
    price: 25000,
    src: require("../assets/snack/banhmiga.png"),
  },
  {
    id: 2,
    name: "Hi-Tea trà vải",
    price: 49000,
    src: require("../assets/hitea/hivai.png"),
  },
  {
    id: 3,
    name: "Bánh mì chà bông phô mai",
    price: 35000,
    src: require("../assets/snack/banhmichabong.png"),
  },
  {
    id: 1,
    name: "Cà phê đen đá hộp",
    price: 58000,
    src: require("../assets/coffee/caphedenda.png"),
  },
];
const firstArr = data.slice(0, 2);
const secondArr = data.slice(2, 4);
export default function BestSeller() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>BEST SELLER</Text>
        <Ionicons name="star-half-outline" size={32} color="#d9a743" />
      </View>
      <View style={styles.productsWrap}>
        {firstArr.map((item, index) => (
          <View style={styles.item} key={index}>
            <Image style={styles.img} source={item.src} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>
              {item.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.productsWrap}>
        {secondArr.map((item, index) => (
          <View style={styles.item} key={index}>
            <Image style={styles.img} source={item.src} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>
              {item.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  //   Title
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  //   Products
  productsWrap: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  item: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  name: {
    marginVertical: 5,
  },
  price: {
    color: "#fc2d2d",
  },
});
