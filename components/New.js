import React, { useState } from "react";
import { Button, StyleSheet, TouchableOpacity, Text, View, ScrollView } from "react-native";


export default function New({ navigation }) {
  const [currentParagraph, setCurrentParagraph] = useState(1);
  const totalParagraphs = 4;
  const titles = {
    1: " Nos valeurs ",
    2: "La satisfaction",
    3: "L'accompagnement ",
    4: "La qualité",
     
  };

  const handleNextParagraph = () => {
    setCurrentParagraph(currentParagraph === totalParagraphs ? 1 : currentParagraph + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{titles[currentParagraph]}</Text>
      {currentParagraph === 1 && (
        <TouchableOpacity onPress={handleNextParagraph}>
          <View style={styles.rectangle}>
            <Text style={styles.paragraph}>Chez FoodieFinder, la satisfaction de nos clients est notre priorité absolue. Nous sommes passionnés par la nourriture et croyons fermement en la qualité et l'accompagnement pour assurer leur satisfaction. Nous travaillons sans relâche pour offrir des expériences culinaires exceptionnelles en sélectionnant soigneusement nos partenaires et en utilisant les meilleurs ingrédients. Chez FoodieFinder, vous êtes au cœur de nos préoccupations pour une expérience gastronomique mémorable.</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      )}

      {currentParagraph === 2 && (
        <TouchableOpacity onPress={handleNextParagraph}>
          <View style={styles.rectangle}>
            <Text style={styles.paragraph}>
            Chez FoodieFinder, la satisfaction de nos clients est notre principale préoccupation. Nous sommes fiers de leur offrir une expérience culinaire de qualité supérieure, et nous nous engageons à répondre rapidement et efficacement à toutes leurs demandes. Leur feedback est extrêmement important pour nous, et nous sommes constamment à l'écoute afin d'améliorer notre service et répondre à leurs besoins de manière optimale. Notre objectif est de dépasser leurs attentes et de leur offrir une expérience exceptionnelle à chaque fois qu'ils font appel à nous.
            </Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      )}
      {currentParagraph === 3 && (
        <TouchableOpacity onPress={handleNextParagraph}>
          <View style={styles.rectangle}>
            <Text style={styles.paragraph}>
            Chez FoodieFinder, nous sommes là pour accompagner nos clients à chaque étape de leur parcours culinaire. Notre objectif est de les aider à trouver le restaurant idéal pour chaque occasion, en leur offrant des recommandations personnalisées adaptées à leurs goûts et préférences. De plus, nous les tenons informés des dernières tendances culinaires, afin qu'ils puissent prendre les meilleures décisions pour eux-mêmes et leur famille. Nous sommes dévoués à fournir un service attentif et attentif, pour que nos clients puissent profiter pleinement de leur expérience culinaire avec nous.            </Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      )}

      {currentParagraph === 4 && (
        <TouchableOpacity onPress={handleNextParagraph}>
          <View style={styles.rectangle}>
            <Text style={styles.paragraph}> 
            Nous sommes fiers de la qualité de nos restaurants partenaires et de notre service. Nous travaillons en étroite collaboration avec nos restaurants partenaires pour garantir que seuls les meilleurs ingrédients sont utilisés pour chaque plat, que les normes de sécurité alimentaire sont respectées et que les clients reçoivent toujours un service de qualité. Nous sommes également engagés à fournir un service de qualité supérieure à tous nos clients, en veillant à ce que chaque commande soit livrée rapidement et en toute sécurité.
          </Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :"white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color:"#5BC0BE",
    marginBottom: 20,
  },
  rectangle: {
    width: "100%",
    marginTop:50,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C2541",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  
  arrow: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
});

//     <ScrollView >
//       <Text style={styles.heading}>Nos Valeurs et Principes d'Engagement</Text>
//       <Text style={styles.paragraph}>
//         Chez FoodieFinder, la satisfaction de nos clients est notre priorité
//         absolue. Nous sommes passionnés par la nourriture et croyons fermement
//         en la qualité, l'accompagnement et la satisfaction de nos clients.
//       </Text>
//       <Text style={styles.paragraph}>
//         Nous nous engageons à répondre rapidement et efficacement aux demandes
//         de nos clients, en écoutant attentivement leurs commentaires et en
//         améliorant constamment notre service pour répondre à leurs besoins.
//       </Text>
//       <Text style={styles.paragraph}>
//         Nous sommes là pour accompagner nos clients à chaque étape de leur
//         parcours culinaire. Que ce soit en les aidant à trouver le restaurant
//         idéal, en offrant des recommandations personnalisées ou en les tenant
//         informés des dernières tendances culinaires.
//       </Text>
//       <Text style={styles.paragraph}>
//         Nous travaillons en étroite collaboration avec nos restaurants
//         partenaires pour garantir la qualité de nos plats. Nous utilisons
//         uniquement les meilleurs ingrédients, respectons les normes de sécurité
//         alimentaire et assurons une livraison rapide et sécurisée.
//       </Text>
//       <Button
//         onPress={() => navigation.navigate("Signup")}
//         title="Besoin d'un compte ?"
//       />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   paragraph: {
//     width: '80%', // Définir une largeur fixe pour chaque paragraphe
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//     textAlign: 'center',
//     color: 'blue',
//   },
// });




