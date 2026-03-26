import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const slides = Array.from({ length: 5 }).map((_, i) => ({
    id: i.toString(),
    title: `Slide ${i + 1}`,
    image: `https://picsum.photos/800/400?random=${i}`,
}));

const SliderScreen = () => {
    return (
        <View style={styles.container}>
            <Swiper autoplay loop showsPagination style={styles.swiper}>
                {slides.map((item) => (
                    <View key={item.id} style={styles.slide}>
                        <Image source={{ uri: item.image }} style={{ width: "100%", height: "100%" }} />
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    swiper: {
        width: width,
        height: 250,
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 30,
        position: "absolute",
        bottom: 10,
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});

export default SliderScreen;