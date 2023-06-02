import { Card } from "react-native-shadow-cards";

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

const Profile = () => {
  const route = useRoute();
  const { restaurantId } = route.params || { restaurantId: null };

  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedRestaurantInfo, setSelectedRestaurantInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        let url = "https://backend-seven-virid.vercel.app/api/restaurants/";
        if (restaurantId) {
          url += "zone/" + restaurantId;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data)) {
          setRestaurants(data);
          console.log();
        } else {
          setRestaurants([data]);
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, [restaurantId]);

  const handlePress = () => {
    navigation.navigate("Map");
  };

  const handleRestaurantPress = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setSelectedRestaurantInfo(restaurant);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {restaurants.map((restaurant) => (
          <Card key={restaurant._id} style={{ padding: 10, marginTop: 70 }}>
            <ScrollView>
              <View style={styles.restaurantContainer}>
                <TouchableWithoutFeedback
                  onPress={() => handleRestaurantPress(restaurant)}
                >
                  <Image
                    source={{
                      uri: restaurant.imagesrc,
                    }}
                    style={styles.image}
                  />
                </TouchableWithoutFeedback>

                <View style={styles.buttonContainer11}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Map", {
                        latitude: restaurant.latitude,
                        longitude: restaurant.longitude,
                      })
                    }
                    style={[styles.button, styles.profileButton]}
                  >
                    <View style={styles.container1}>
                      <Text style={styles.buttonText}>Position</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Filtrage", {
                        latitude: restaurant.latitude,
                        longitude: restaurant.longitude,
                      })
                    }
                    style={[styles.button, styles.profileButton]}
                  >
                    <View style={styles.container1}>
                      <Text style={styles.buttonText}>Filtrage</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
            <Modal
              visible={modalVisible}
              animationType="fade"
              transparent={false}
            >
              <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.modalContainer}>
                  {selectedRestaurantInfo && (
                    <View style={styles.modalContent}>
                      <Text style={styles.modalText}>
                        Name: {selectedRestaurantInfo.name}
                      </Text>
                      <Text style={styles.modalText}>
                        title: {selectedRestaurantInfo.title}
                      </Text>
                      <Text style={styles.modalText}>
                        Category: {selectedRestaurantInfo.category}
                      </Text>
                      <Text style={styles.modalText}>
                        Cuisine: {selectedRestaurantInfo.cuisine}
                      </Text>
                      {/* Ajoutez d'autres informations que vous souhaitez afficher */}
                    </View>
                  )}
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  restaurantContainer: {
    marginBottom: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    pointerEvents: "auto",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    width: 150,
    marginHorizontal: "2%",
  },
  profileButton: {
    backgroundColor: "#5BC0BE", // Remplacez par la couleur souhaitée pour le bouton "Profile"
  },

  buttonText2: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  buttonText: {
    color: "#1C2541",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer11: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10, // Optional: Adjust the spacing between the image and buttons
  },
});
