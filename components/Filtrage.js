import React, { useEffect, useState } from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";

import { useNavigation } from "@react-navigation/native";

const Filtrage = () => {
  //aymen
  const navigation = useNavigation();

  //
  //const [villeData, setVilleData] = useState([]);
  const [villeData, setVilleData] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [ville, setVille] = useState(null);
  const [zone, setZone] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [villeName, setVilleName] = useState(null);
  const [zoneName, setZoneName] = useState(null);
  const [restaurantName, setRestaurantName] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  ////////////

  const handlePress = async () => {
    try {
      const response = await fetch(
        `https://backend-seven-virid.vercel.app/api/restaurants/${selectedRestaurant}`
      );
      const data = await response.json();

      // Do something with the fetched restaurant data
      console.log(data);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
    }
  };
  /////////////pour vider combo box
  const resetRestaurant = () => {
    setRestaurant(null);
    setRestaurantData([]);
  };

  //////////
  useEffect(() => {
    var config = {
      method: "get",
      url: `https://backend-seven-virid.vercel.app/api/cities`,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;

        let villeArray = [];
        for (var i = 0; i < count; i++) {
          // console.log(response.data[i]._id);
          villeArray.push({
            value: response.data[i]._id,
            label: response.data[i].name,
          });
        }
        setVilleData(villeArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleZone = (villeCode) => {
    var config = {
      method: "get",
      url: `https://backend-seven-virid.vercel.app/api/zones/city/${villeCode}`,
    };

    axios(config)
      .then(function (response) {
        var count = Object.keys(response.data).length;
        let zoneArray = [];
        for (var i = 0; i < count; i++) {
          zoneArray.push({
            value: response.data[i]._id,
            label: response.data[i].name,
          });
        }
        setZoneData(zoneArray);

        // Clear zone field if no zones available
        if (count === 0) {
          setZone(null);
          setZoneName(null);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleRestaurant = (zoneCode) => {
    var config = {
      method: "get",
      url: `https://backend-seven-virid.vercel.app/api/restaurants/zone/${zoneCode}`,
    };

    axios(config)
      .then(function (response) {
        var count = Object.keys(response.data).length;
        let restaurantArray = [];
        for (var i = 0; i < count; i++) {
          console.log(response.data[i].category);
          restaurantArray.push({
            value: response.data[i]._id,
            label: response.data[i].name,
            longitude: response.data[i].longitude,
            latitude: response.data[i].latitude,
            category: response.data[i].category,
            cuisine: response.data[i].cuisine,
            title: response.data[i].title,
          });
        }
        setRestaurantData(restaurantArray);
        console.log(restaurantData);

        // Clear restaurant field if no restaurants available
        if (count === 0) {
          setRestaurant(null);
          setRestaurantName(null);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 15 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#0353a4" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={villeData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select City" : "..."}
          searchPlaceholder="Search..."
          value={ville}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setVille(item.value);
            handleZone(item.value);
            setVilleName(item.label);
            setIsFocus(false);
            resetRestaurant(); // Réinitialiser le restaurant sélectionné  aymen  c est une fonftion ajoute en haut
          }}
        />

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#0353a4" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={zoneData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Zone" : "..."}
          searchPlaceholder="Search..."
          value={zone}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setZone(item.value);
            handleRestaurant(item.value);
            setZoneName(item.label);
            setIsFocus(false);
          }}
        />

        {/* <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#0353a4" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={restaurantData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select restaurent" : "..."}
          searchPlaceholder="Search..."
          value={restaurant}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setRestaurant(item.value);
            setRestaurantName(item.label);
            setIsFocus(false);
          }}
        /> */}

        {/* <TouchableOpacity
          style={{
            backgroundColor: "#0F3460",
            padding: 20,
            borderRadius: 15,
            alignItems: "center",
          }}
          onPress={() => Alert.alert(`  ${restaurant}`)}
        >
          <Text
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{
            backgroundColor: "#5BC0BE",
            padding: 20,
            borderRadius: 15,
            alignItems: "center",
          }}
          onPress={() => {
            if (zoneData.length === 0 ) {
              console.log(
                zone +
                  "--------------------------------------------------------------------------------"
              );
              console.log(
          ville +
                  "--------------------------------------------------------------------------------"
              );
              // Afficher votre message ici
              alert("Aucun restaurant disponible");
            } else {
              navigation.navigate("Profile", { restaurantId: zone  });
            }
            console.log(
              zone +
                "--------------------------------------------------------------------------------"
            );
          }}
        >
          <Text
            style={{
              color: "#0B132B",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filtrage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    justifyContent: "center",
    alignContent: "center",
  },
  dropdown: {
    height: 50,
    borderColor: "#0B132B",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color:"#0B132B",
  },
  selectedTextStyle: {
    fontSize: 16,
    color:"#5BC0BE",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});