import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const ProductsScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
            fetchProducts();
        }, 
    []);
}

return (
    <View>
        <Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Image source={{ uri: item.image }} resizeMode="contain"/>
                            <View>
                                <Text numberOfLines={2}>{item.title}</Text>
                                <Text>${item.price.toFixed(2)}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </Text>
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 16,
        paddingTop: 40,
        backgroundColor: "#f8f8f8",
    },
    listContent: {
        padding: 16,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 12,
        padding: 12,
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: "center",
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        color: "#333",
        marginBottom: 6,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3a9d8f",
    },
});


export default ProductsScreen;

