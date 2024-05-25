import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/Foto.jpeg")} style={styles.image} />
      <Text style={styles.header}>Vanessa Ramos</Text>
      <Text style={styles.subheader}>
        Analysis and Systems Development Student
      </Text>
      <Text style={styles.paragraph}>
        Hi, I'm Vanessa Carolina Ramos, I'm 21 years old, I live in Recife, 
        Pernambuco and I'm Analysis and Systems Development Student.
      </Text>
      <Text style={styles.paragraph}>
        Experiences:
      </Text>
      <Text style={styles.listItem}>
        • Libraries and Frameworks: React and Flutter.
      </Text>
      <Text style={styles.listItem}>
        • Programming languages: Python, JavaScript, C.
      </Text>
      <Text style={styles.listItem}>• Database: MySQL.</Text>
      <Text style={styles.listItem}>• Development tools: Git, GitHub.</Text>
      <Text style={styles.paragraph}>
      I intend to migrate to the cyber security area,
      but as it is a vast area that requires experience,
      I hope to gain this experience through other positions
      </Text>
      <Text style={styles.paragraph}>
        Explore my work on GitHub at {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/vanecaroll")}
        >
          github.com/vanecaroll
        </Text>
        .
      </Text>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Billing Analyst
      </Text>
      <Text style={styles.paragraph}>• Oct 2023 - Present</Text>
      <Text style={styles.paragraph}>
        • I work with virtual customer service for the public (students 
        or patients) of brands linked to Grupo Ser Educacional and carry
        out the monthly financial closing of some of the main brands.
      </Text>
      <Text style={styles.subheader}>
        Technology Residency at Porto Digital
      </Text>
      <Text style={styles.paragraph}>• Mar 2023 - Present</Text>
      <Text style={styles.paragraph}>
        • During my degree in Analysis and Systems Development, I take part in
        projects for real companies every semester.
      </Text>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Degree in Analysis and Systems Development
      </Text>
      <Text style={styles.paragraph}>
        SENAC Pernambuco College, Mar 2023 - Present.
      </Text>
      <Text style={styles.paragraph}>
        Degree in Digital Security
      </Text>
      <Text style={styles.paragraph}>
        UNINASSAU College, Jan 2024 - Present.
      </Text>
      <Text style={styles.subheader}>Hackers do bem
      </Text>
      <Text style={styles.paragraph}>
        Jan 2024 - Present.
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: "#008080",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#008080",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#008080",
    alignSelf: "center",
    marginBottom: 20,
  },
});
