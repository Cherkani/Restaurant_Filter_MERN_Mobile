import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

const Chat = () => {
  const route = useRoute();
  const { latitude, longitude } = route.params || {};

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://backend-seven-virid.vercel.app/api/restaurants"
        );
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <View style={styles.container}>
      {restaurants.length > 0 ? (
        <MapView
          style={styles.map}
          region={{
            latitude: latitude || restaurants[0].latitude,
            longitude: longitude || restaurants[0].longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant._id}
              coordinate={{
                latitude: restaurant.latitude,
                longitude: restaurant.longitude,
              }}
              title={restaurant.name}
            />
          ))}
        </MapView>
      ) : (
        <Text>Loading restaurants...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Chat;
