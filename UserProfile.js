import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const users = [
  {
    id: '1',
    name: 'Jainendrajeet',
    designation: 'App Developer',
    photoUrl: require('./assets/jainendra.jpg'),
    dateOfBirth: '08 Feb 2006',
    age: 18,
    profession: 'Student',
    country: 'India',
    state: 'Maharashtra',
    height: '5 ft 8 in',
    favoriteFood: 'Paneer Tikka',
    hobby: 'Coding, Travelling',
    Institiute: 'IIT Bombay',
  },
  // Additional users can be added here if needed
];

const UserProfile = ({ user }) => {
  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>User not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image source={user.photoUrl} style={styles.userPhoto} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userDesignation}>{user.designation}</Text>
          <View style={styles.divider} />

          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Date of Birth:</Text>
            <Text style={styles.detailText}>{user.dateOfBirth}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Age:</Text>
            <Text style={styles.detailText}>{user.age} years</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Profession:</Text>
            <Text style={styles.detailText}>{user.profession}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Institiute</Text>
            <Text style={styles.detailText}>{user.Institiute}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Country:</Text>
            <Text style={styles.detailText}>{user.country}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>State:</Text>
            <Text style={styles.detailText}>{user.state}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Height:</Text>
            <Text style={styles.detailText}>{user.height}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Favorite Food:</Text>
            <Text style={styles.detailText}>{user.favoriteFood}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Hobby:</Text>
            <Text style={styles.detailText}>{user.hobby}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Render the first user as an example
export default function App() {
  return <UserProfile user={users[0]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 16,
    justifyContent: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  card: {
    backgroundColor: '#1e3d59',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#3a6073',
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#fddb3a',
    borderWidth: 3,
    marginBottom: 20,
  },
  userName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  userDesignation: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fddb3a',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#fddb3a',
    width: '80%',
    marginVertical: 14,
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#243b55',
    borderRadius: 15,
  },
  detailTitle: {
    fontSize: 16,
    color: '#fddb3a',
    fontWeight: '600',
  },
  detailText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '400',
  },
  notFoundText: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});
