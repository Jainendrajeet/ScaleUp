import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

const QuizMainScreen = () => {
  const [showQuizList, setShowQuizList] = useState(false); // State to toggle views

  const worldRanking = 20;
  const pointsEarned = 12000;
  const lastQuizTitle = 'UI/UX Design';
  const lastQuizPoints = 150;

  const quizzes = [
    { id: '1', title: 'General Knowledge', date: 'Nov 1, 2024' },
    { id: '2', title: 'Science Quiz', date: 'Nov 5, 2024' },
    { id: '3', title: 'Math Challenge', date: 'Nov 10, 2024' },
    // Add more quizzes as needed
  ];

  return (
    <View style={styles.container}>
      {showQuizList ? (
        // Quiz List View
        <View style={styles.quizListContainer}>
          <Text style={styles.heading}>All Quizzes</Text>
          <FlatList
            data={quizzes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.quizItem}>
                <Text style={styles.quizTitle}>{item.title}</Text>
                <Text style={styles.quizDate}>{item.date}</Text>
              </View>
            )}
          />
          <TouchableOpacity style={styles.backButton} onPress={() => setShowQuizList(false)}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Main Quiz View
        <View>
          {/* World Ranking and Points Earned */}
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Image source={require('./assets/21.png')} style={styles.icon} />
              <Text style={styles.statText}>{worldRanking} World Ranking</Text>
            </View>
            <View style={styles.stat}>
              <Image source={require('./assets/22.png')} style={styles.icon} />
              <Text style={styles.statText}>{pointsEarned} Points Earned</Text>
            </View>
          </View>

          {/* Last Quiz Result */}
          <View style={styles.lastQuizContainer}>
            <Text style={styles.lastQuizTitle}>Last Quiz</Text>
            <Text style={styles.quizDetails}>{lastQuizTitle}</Text>
            <Text style={styles.quizDetails}>Points: {lastQuizPoints}</Text>
          </View>

          {/* Featured Section */}
          <View style={styles.featuredContainer}>
            <Text style={styles.featuredText}>Amazing Quizzes lined up for you all in Upcoming Months</Text>
            <Text style={styles.stayTuned}>Stay Tuned..!</Text>
          </View>

          {/* View All Quizzes Button */}
          <TouchableOpacity style={styles.viewQuizzesButton} onPress={() => setShowQuizList(true)}>
            <Text style={styles.viewQuizzesText}>View All Quizzes</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  stat: { alignItems: 'center' },
  icon: { width: 30, height: 30 },
  statText: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  lastQuizContainer: { padding: 15, backgroundColor: '#e0f7fa', borderRadius: 8, marginBottom: 20 },
  lastQuizTitle: { fontSize: 18, fontWeight: 'bold', color: '#00796b' },
  quizDetails: { fontSize: 16, color: '#004d40' },
  featuredContainer: { padding: 15, backgroundColor: '#ffeb3b', borderRadius: 8, marginBottom: 20 },
  featuredText: { fontSize: 16, color: '#f57f17', textAlign: 'center' },
  stayTuned: { fontSize: 16, fontWeight: 'bold', color: '#bf360c', marginTop: 5, textAlign: 'center' },
  viewQuizzesButton: { backgroundColor: '#4caf50', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  viewQuizzesText: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
  quizListContainer: { flex: 1 },
  heading: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  quizItem: { padding: 15, backgroundColor: '#e1bee7', borderRadius: 8, marginBottom: 10 },
  quizTitle: { fontSize: 16, fontWeight: 'bold', color: '#6a1b9a' },
  quizDate: { fontSize: 14, color: '#4a148c' },
  backButton: { backgroundColor: '#2196f3', padding: 10, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  backButtonText: { color: '#FFF', fontWeight: 'bold' },
});

export default QuizMainScreen;
