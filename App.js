import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform, ScrollView, Dimensions, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { WebView } from 'react-native-webview';

const { height } = Dimensions.get('window');
const aspectRatio = 9 / 16;

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <Text style={styles.headerText}>💈 LmPlanner 💈</Text>
      </View>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.featureList}>
          <Text style={styles.centeredText}>
            {'\n'}{'\n'}
            <Text style={{ fontWeight: 'bold' }}>Réserve ton rendez-vous en un clin d'œil ! </Text> ⚡
          </Text>
          <Text style={styles.descriptionText}>
            <Text style={{ fontWeight: 'bold' }}>Trouve le créneau idéal pour toi.</Text> 🗓️
          </Text>
          <Text style={styles.descriptionText}>
            <Text style={{ fontWeight: 'bold' }}>Confirme ta réservation et reçois ta confirmation par mail.</Text> ✅
          </Text>
          <Text style={styles.centeredText}>
            <Text style={{ fontWeight: 'bold' }}>Bientôt disponible :</Text> 🚀
          </Text>
          <Text style={styles.descriptionText}>
            - <Text style={{ fontWeight: 'bold' }}>Historique de tes rendez-vous avec photos/vidéos de la prestation.</Text> 📸
          </Text>
          <Text style={styles.descriptionText}>
            - <Text style={{ fontWeight: 'bold' }}>Paiement sécurisé en ligne.</Text> 🔒
          </Text>
          <Text style={styles.descriptionText}>
            - <Text style={{ fontWeight: 'bold' }}>Programme de fidélité avantageux.</Text> 🎉
          </Text>
          <Text style={styles.descriptionText}>
            - <Text style={{ fontWeight: 'bold' }}>Compte personnel pour un suivi personnalisé et des réservations encore plus rapides.</Text> 👤
          </Text>
        </View>

        <View style={[styles.videoContainer, { width: '100%', height: height * 0.3 }]}>
          <iframe
            src="https://storage.googleapis.com/lmplanner/videoh264.mp4"
            title="Video"
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none',
              borderRadius: 8,
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
            allow="autoplay; fullscreen"
          />
        </View>

        <View style={styles.ctaSection}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Réservation')}>
            <Text style={styles.buttonText}>Réserver maintenant !</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.instagramButton}
          onPress={() => Linking.openURL('https://www.instagram.com/7lm.barber/')}
        >
          <Ionicons name="logo-instagram" size={24} color="#fff" />
          <Text style={styles.instagramButtonText}>@7Lm.Barber</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const ReservationScreen = () => {
  const isWeb = Platform.OS === 'web';

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <Text style={styles.headerText}>🗓️ Réservation en ligne 🗓️</Text>
      </View>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.iframeContainer}>
          {isWeb ? (
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_ais8IOCaO4WOKXZ2CbwgVVF7Ois1Yqrs9k5IZxAR3VhsvQd2xrP46SIEcWheUM2yN6-ndNVI?gv=true"
              style={styles.iframe}
              frameBorder="0"
              title="Réservation"
            />
          ) : (
            <WebView
              source={{ uri: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_ais8IOCaO4WOKXZ2CbwgVVF7Ois1Yqrs9k5IZxAR3VhsvQd2xrP46SIEcWheUM2yN6-ndNVI?gv=true' }}
              style={styles.webview}
              javaScriptEnabled={true}
              injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'); document.getElementsByTagName('head')[0].appendChild(meta);`}
              scalesPageToFit={false}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const App = () => {
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
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: '#1C2233',
            height: 70,
            paddingVertical: 10,
            borderTopWidth: 0,
            elevation: 5,
          },
          tabBarActiveTintColor: '#ff6347',
          tabBarInactiveTintColor: '#8a2be2',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Réservation" component={ReservationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
