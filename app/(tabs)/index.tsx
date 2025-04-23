import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useRouter } from "expo-router";


export default function HomeScreen({ route }) {
  const router = useRouter();
  const { username = "Francisco Duó" } = route?.params || {};

  const services = [
    { id: 1, title: "Comunicados", icon: require("@/assets/images/partial-react-logo.png"), notificationCount: 5 },
    { id: 2, title: "Destaques", icon: require("@/assets/images/partial-react-logo.png") },
    { id: 3, title: "Gestão de Comunicados", icon: require("@/assets/images/partial-react-logo.png") },
    { id: 4, title: "Agenda", icon: require("@/assets/images/partial-react-logo.png") },
    { id: 5, title: "Conversas", icon: require("@/assets/images/partial-react-logo.png") },
    { id: 6, title: "Solicitações", icon: require("@/assets/images/partial-react-logo.png") },
    { id: 7, title: "Registro Diário", icon: require("@/assets/images/partial-react-logo.png") },
    { id: 8, title: "Verificar Registro Diário", icon: require("@/assets/images/partial-react-logo.png") },
    { id: 9, title: "Notas", icon: require("@/assets/images/partial-react-logo.png") },
  ];

  const handleServicePress = (title) => {
    const path = "/" + title.toLowerCase().replace(/\s+/g, "-");
    console.log(`Navegar para ${path}`);
    router.push(path);
  };


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#001f3f', dark: '#001f3f' }}

      headerImage={
        <Image
          source={require('@/assets/images/banner-cci.png')}
          style={styles.unitHeaderImage}
          resizeMode="cover"
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, {username}</Text>
      </View>
      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceBox}
            onPress={() => handleServicePress(service.title)}
          >
            <Image source={service.icon} style={styles.serviceIcon} />
            {service.notificationCount && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{service.notificationCount}</Text>
              </View>
            )}
            <Text style={styles.serviceText}>{service.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 20,
    color: '#001f3f',
    fontWeight: '500',
  },
  unitHeader: {
    width: '100%',
    backgroundColor: '#001f3f',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  unitHeaderImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  unitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 5,
  },
  serviceBox: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    position: 'relative',
  },
  serviceIcon: {
    width: 36,
    height: 36,
    tintColor: '#A08B1C',
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 14,
    color: '#001f3f',
    textAlign: 'center',
    fontWeight: '500',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
