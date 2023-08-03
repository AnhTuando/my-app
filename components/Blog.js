import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import { SwiperFlatList } from "react-native-swiper-flatlist";

import Ionicons from "@expo/vector-icons/Ionicons";
const data = [
  {
    id: 1,
    name: "Trung thu Coffee House",
    time: "2/8/2022",
    src: require("../assets/blogs/blog1.png"),
  },
  {
    id: 2,
    name: "Thức uống lành mạnh The Coffe House",
    time: "7/3/2022",
    src: require("../assets/blogs/blog2.png"),
  },
  {
    id: 3,
    name: `Nguồn gốc của " Vay Lạnh "`,
    time: "9/1/2022",
    src: require("../assets/blogs/blog3.png"),
  },
];
export default function Blog() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Coffee Blog</Text>
        <Ionicons name="copy-outline" size={32} color="#000" />
      </View>
      <View style={styles.wrapSwiper}>
        <SwiperFlatList style={styles.swiper}>
          {data.map((item, index) => (
            <View style={styles.item} key={index}>
              <Image style={styles.img} source={item.src} />
              <Image />
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.time}</Text>
            </View>
          ))}
        </SwiperFlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff7e6",
    padding: 10,
  },
  //   title
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
  wrapSwiper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  //   swiper
  swiper: {
    height: 300,
    borderRadius: 10,
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 200,
    width: Dimensions.get("window").width - 20,
  },
  name: {
    fontWeight: "medium",
    marginVertical: 5,
  },
});
