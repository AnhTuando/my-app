import { SwiperFlatList } from "react-native-swiper-flatlist";
import SlideOne from "../assets/slides/slideone.png";
import SlideTwo from "../assets/slides/slidetwo.png";
import SlideThree from "../assets/slides/slidethree.png";
import { StyleSheet, Image, Dimensions, View } from "react-native";

export default function Slider() {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        style={styles.swiper}
        autoplay
        autoplayDelay={2}
        autoplayLoop
      >
        <Image source={SlideOne} style={styles.image} resizeMode="contain" />
        <Image source={SlideTwo} style={styles.image} resizeMode="contain" />
        <Image source={SlideThree} style={styles.image} resizeMode="contain" />
      </SwiperFlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  swiper: {
    width: Dimensions.get("window").width,
    height: 300,
    borderRadius: 10,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});
