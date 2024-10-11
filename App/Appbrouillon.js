import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, TextInput, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import styles from './styles'; // Importation des styles

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="logo-whatsapp" size={30} color="#007AFF" />
        <Text style={styles.username}>John Doe</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="ellipsis-vertical" size={30} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.featureList}>
        <Text style={styles.headerText}>Fonctionnalités</Text>
        <Text style={styles.descriptionText}>
          Découvrez les fonctionnalités de notre application, telles que la réservation en ligne, l'historique des rendez-vous et le système de fidélité.
        </Text>
        <WebView
          source={{ uri: 'https://example.com/teaser-video' }}
          style={styles.webview}
        />
      </View>
      <View style={styles.ctaSection}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://calendar.google.com')}>
          <Text style={styles.buttonText}>Réserver sans compte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Naviguer vers la page de connexion')}>
          <Text style={styles.buttonText}>Connexion/Inscription</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.testimonials}>
        <Text style={styles.headerText}>Témoignages</Text>
        {/* Vous pouvez ajouter une liste de témoignages ici */}
      </View>
    </View>
  );
};

const ReservationScreen = () => {
  const [isWebViewVisible, setWebViewVisible] = useState(false);

  const handlePress = () => {
    setWebViewVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="logo-whatsapp" size={30} color="#007AFF" />
        <Text style={styles.username}>John Doe</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="ellipsis-vertical" size={30} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.featureList}>
        {!isWebViewVisible ? (
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Réserver maintenant</Text>
          </TouchableOpacity>
        ) : (
          <WebView
            source={{ uri: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_ais8IOCaO4WOKXZ2CbwgVVF7Ois1Yqrs9k5IZxAR3VhsvQd2xrP46SIEcWheUM2yN6-ndNVI?gv=true' }}
            style={styles.webview}
          />
        )}
      </View>
    </View>
  );
};

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="logo-whatsapp" size={30} color="#007AFF" />
        <Text style={styles.username}>John Doe</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="ellipsis-vertical" size={30} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.featureList}>
        <Text style={styles.descriptionText}>
          Voici votre historique des rendez-vous. Vous pouvez voir les photos, vidéos, dates et stylistes.
        </Text>
        {/* Vous pouvez ajouter une liste d'historique ici */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Réserver un nouveau rendez-vous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="logo-whatsapp" size={30} color="#007AFF" />
        <Text style={styles.username}>John Doe</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="ellipsis-vertical" size={30} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.featureList}>
        {isSignUp ? (
          <View>
            <Text style={styles.headerText}>Inscription</Text>
            <TextInput placeholder="Nom" style={styles.input} />
            <TextInput placeholder="Prénom" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
            <TextInput placeholder="Numéro de téléphone" style={styles.input} keyboardType="phone-pad" />
            <Button title="S'inscrire" onPress={() => alert('Inscription')} />
          </View>
        ) : (
          <View>
            <Text style={styles.headerText}>Connexion</Text>
            <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
            <TextInput placeholder="Numéro de téléphone" style={styles.input} keyboardType="phone-pad" />
            <Button title="Se connecter" onPress={() => alert('Connexion')} />
          </View>
        )}
        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)} style={styles.button}>
          <Text style={styles.buttonText}>{isSignUp ? 'Déjà un compte ? Connectez-vous' : 'Pas encore de compte ? Inscrivez-vous'}</Text>
        </TouchableOpacity>
        <Text style={styles.descriptionText}>Contactez-nous : support@example.com</Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = 'home';
            } else if (route.name === 'Réservation') {
              iconName = 'calendar';
            } else if (route.name === 'Historique') {
              iconName = 'list';
            } else if (route.name === 'Profil') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // Enlève le titre de la page
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Réservation" component={ReservationScreen} />
        <Tab.Screen name="Historique" component={HistoryScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
