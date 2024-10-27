import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const UpcomingQuizzesScreen = () => {
  const upcomingQuizzes = [
    { id: '1', name: 'Quiz 1', date: '10/11/2024', time: '10:00 am' },
    { id: '2', name: 'Quiz 2', date: '11/11/2024', time: '10:00 am' },
    { id: '3', name: 'Quiz 3', date: '12/11/2024', time: '10:00 am' },
    { id: '4', name: 'Quiz 4', date: '13/11/2024', time: '10:00 am' },
    { id: '5', name: 'Quiz 5', date: '14/11/2024', time: '10:00 am' },
    { id: '6', name: 'Quiz 6', date: '15/11/2024', time: '10:00 am' },
    { id: '7', name: 'Quiz 7', date: '16/11/2024', time: '10:00 am' },
  ];

  return (
    <View style={styles12.container}>
      {upcomingQuizzes.length > 0 ? (
        <FlatList
          data={upcomingQuizzes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles12.quizItem}>
              <Image source={require('./assets/19.png')} style={styles12.icon} />
              <View style={styles12.quizInfo}>
                <Text style={styles12.quizName}>{item.name}</Text>
                <Text style={styles12.quizDetails}>{item.date} | {item.time}</Text>
                <View style={styles12.row}>
                  <Image source={require('./assets/20.png')} style={styles12.highlightedIcon} />
                  <Text style={styles12.rewardText}>Surprise Rewards for Top 3 Winners 🎉</Text>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles12.noQuizContainer}>
          <Text style={styles12.noQuizText}>No Upcoming Quizzes</Text>
          <Text style={styles12.noQuizSubText}>You're all set for now! Keep exploring and stay sharp!</Text>
        </View>
      )}
    </View>
  );
};

const styles12 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  quizItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3, // Adds a shadow for Android
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50', // Accent border color for quizzes
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  quizInfo: {
    flex: 1,
  },
  quizName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quizDetails: {
    fontSize: 14,
    color: '#777',
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#FFEB3B', // Highlight background color for rewards section
    padding: 5,
    borderRadius: 8,
  },
  highlightedIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    tintColor: '#FF5722', // Makes the reward icon more visible
  },
  rewardText: {
    fontSize: 13,
    color: '#D84315',
    fontWeight: '600',
  },
  noQuizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noQuizText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#757575',
  },
  noQuizSubText: {
    fontSize: 16,
    color: '#757575',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default UpcomingQuizzesScreen;

