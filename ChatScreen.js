import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import for navigation

const ChatScreen = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const navigation = useNavigation(); // Initialize navigation

  // Sample data for Active and Completed quizzes
  const activeQuizzes = [
    { id: '1', title: 'Math Quiz - Algebra', date: 'Oct 30, 2024' },
    { id: '2', title: 'Science Quiz - Physics', date: 'Nov 1, 2024' },
  ];

  const completedQuizzes = [
    { id: '1', title: 'History Quiz - Ancient Civilizations', date: 'Oct 15, 2024' },
    { id: '2', title: 'Geography Quiz - World Capitals', date: 'Oct 18, 2024' },
  ];

  const renderQuizItem = ({ item }) => (
    <View style={styles.quizItem}>
      <Text style={styles.quizTitle}>{item.title}</Text>
      <Text style={styles.quizDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab('Upcoming')}>
          <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTab]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Active')}>
          <Text style={[styles.tabText, activeTab === 'Active' && styles.activeTab]}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Completed')}>
          <Text style={[styles.tabText, activeTab === 'Completed' && styles.activeTab]}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {activeTab === 'Upcoming' && (
          <View style={styles.noQuizzesContainer}>
            <Image
              source={require('./assets/50.png')}  // Replace with actual image path
              style={styles.illustration}
            />
            <Text style={styles.noQuizzesText}>No Upcoming Quizzes</Text>
            <Text style={styles.description}>
              You're all set for now! No quizzes are scheduled. Keep exploring and stay sharp!
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => setActiveTab('Completed')}>
              <Text style={styles.buttonText}>Explore Content</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'Active' && (
          <FlatList
            data={activeQuizzes}
            renderItem={renderQuizItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.quizList}
          />
        )}

        {activeTab === 'Completed' && (
          <FlatList
            data={completedQuizzes}
            renderItem={renderQuizItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.quizList}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#888',
    paddingBottom: 5,
  },
  activeTab: {
    color: '#FFD700',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  mainContent: {
    alignItems: 'center',
    flex: 1,
  },
  noQuizzesContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  illustration: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  noQuizzesText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quizList: {
    paddingHorizontal: 20,
  },
  quizItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  quizTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  quizDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default ChatScreen;
