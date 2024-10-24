

import React, { useRef, useState } from 'react';
import {  Button,StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native'; // Add NavigationContainer
import { createStackNavigator } from '@react-navigation/stack'; // Add createStackNavigator
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');

// Sample data for announcements and posts
const announcementsData = [
  { id: '1', name: 'Riya', image: require('./assets/15.jpg')},
  { id: '2', name: 'Rohit', image: require('./assets/13.jpg') },
  { id: '3', name: 'Tara', image: require('./assets/7.jpg') },
  { id: '4', name: 'Utkarsh', image: require('./assets/18.webp') },
  { id: '5', name: 'Sameer', image: require('./assets/16.webp') },
  { id: '6', name: 'Somya', image: require('./assets/15.jpg') },
  { id: '7', name: 'Kritin', image: require('./assets/5.png') }
];

const postsData = [
  { id: '1', name: 'Rohan', text: 'Nature beauty', tags: ['Design', 'Persona', 'User Flow'], image: require("./assets/5.png") },
  { id: '2', name: 'Rohit Sharma', text: 'Winning Momemt', tags: ['Cricket', 'Love','World Cup'], image: require("./assets/13.jpg") },
  { id: '3', name: 'Riya', text: 'Feeling Happy', tags: [ 'Fashion','2024'], image: require("./assets/15.jpg") },
  { id: '4', name: 'Sonia', text: 'New Here', tags: ['Model', 'Music',], image: require("./assets/7.jpg") },
  { id: '5', name: 'Joe Root', text: 'Playing Cricket', tags: ['Cricket', 'WTC','2024'], image: require("./assets/12.jpg") }
];

// Create Stack Navigator
const Stack = createStackNavigator();



const QuizMainScreen = () => {
  // Example values for leaderboard and last quiz data
  const worldRanking = 20;
  const pointsEarned = 12000;
  const lastQuizTitle = 'UI/UX Design';
  const lastQuizPoints = 150;
  const lastQuizRank = 1;

  return (
    <View style={styles1.quizContainer}>
      {/* World Ranking and Points Earned */}
      <View style={styles1.statsContainer}>
        <View style={styles1.stat}>
          <Image
            source={{ uri: 'https://example.com/rank-image.png' }} // Replace with your leaderboard image URL
            style={styles1.icon}
          />
          <Text style={styles1.statText}>{worldRanking} World Ranking</Text>
        </View>
        <View style={styles1.stat}>
          <Image
            source={{ uri: 'https://example.com/points-icon.png' }} // Replace with your points icon URL
            style={styles1.icon}
          />
          <Text style={styles1.statText}>{pointsEarned} Points Earned</Text>
        </View>
      </View>

      {/* Last Quiz Result */}
      <View style={styles1.lastQuizContainer}>
        <Text style={styles1.lastQuizTitle}>Last Quiz</Text>
        <Text style={styles1.quizDetails}>{lastQuizTitle}</Text>
        <Text style={styles1.quizDetails}>Points: {lastQuizPoints}</Text>
        <Text style={styles1.quizDetails}>Rank: {lastQuizRank}</Text>
      </View>

      {/* Featured Section */}
      <View style={styles1.featuredContainer}>
        <Text style={styles1.featuredText}>Amazing Quizzes lined up for you all in</Text>
        <Text style={styles1.featuredText}>Upcoming Months</Text>
        <Text style={styles1.stayTuned}>Stay Tuned..!</Text>
      </View>

      {/* View All Quizzes Button (without actual navigation logic) */}
      <TouchableOpacity style={styles1.viewQuizzesButton}>
        <Text style={styles1.viewQuizzesText}>View All Quizzes</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles1 = StyleSheet.create({
  quizContainer: {
    flex: 1,
    backgroundColor: '#F2C94C',
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  statText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastQuizContainer: {
    backgroundColor: '#FFD166',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  lastQuizTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quizDetails: {
    fontSize: 14,
    color: '#555',
  },
  featuredContainer: {
    backgroundColor: '#073B4C',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  featuredText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  stayTuned: {
    fontSize: 16,
    color: '#FFD166',
    marginTop: 10,
  },
  viewQuizzesButton: {
    backgroundColor: '#FFD166',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  viewQuizzesText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});





export default function App() {
  const scrollViewRef = useRef(null); 
  const [showLogin, setShowLogin] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 

  const hardcodedUsername = 'user123';
  const hardcodedPassword = 'pass123';

  const handleNext = (index) => {
    if (scrollViewRef.current) {
      if (index === 4) {
        setShowLogin(true); 
      } else {
        scrollViewRef.current.scrollTo({ x: width * index, animated: true });
      }
    }
  };

  const handleLogin = () => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      Alert.alert('Login Successful', 'Welcome to the app!');
      setIsLoggedIn(true); // Mark as logged in
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" options={{ headerShown: false }}>
          {() => isLoggedIn ? <MainScreen /> : showLogin ? (
            <View style={styles.loginScreen}>
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/e1b2/bb5d/593ee9f75ad9c9ef3b8bd3114bd0f088?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXKiN2Uhd56-KmshGmuovfSl0XgYkRz1hBPDq5P5hGuXlYWbTNUKOFCH77E0BfV3qqn2EXiKnc4K6qeFvB~Lv16cT~EJrrTidBRSxsMltibmevx-WUiraVLovcDTz2s985Fq9s1gLxawR7VvIWI-c0AsEwNWDJXx1TCzjluke7WTEeok5lSUX0H5WzKS-5mZZMn6-zZpYDDKP0X9RSjROaAYwRGFW1~fjMknEtjcS6JzdK0A5gQC~F2G0aeMuwcWk5O9DPwLbkULEWgjbEraNGQjeuMC7621hUhYr1jwsMCuKhPtPAG~O1Z9qruGDEQBC2azo1vs1KDrkQO3yDk8Aw__' }} 
                style={styles.loginImage}
              />
              <Text style={styles.loginTitle}>Welcome Back..!</Text>
              <Text style={styles.loginSubtitle}>Unlock Focused, Distraction-free Learning Login now</Text>
              
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Username/Email</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your username"
                  value={username}
                  onChangeText={setUsername} 
                />
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true} 
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.socialLogin}>
                <Text>Or continue with</Text>
                <View style={styles.socialIcons}>
                  <Icon name="google" size={30} />
                  <Icon name="apple" size={30} />
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView 
              horizontal 
              pagingEnabled 
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView}
              ref={scrollViewRef}
            >
              <View style={styles.screen}>
                <Image source={require("./assets/1.jpg")} style={styles.image} />
                <Text style={styles.title}>Welcome to ScaleUp!</Text>
                <Text style={styles.description}>Your journey to focused, distraction-free learning starts here.</Text>
                <TouchableOpacity onPress={() => handleNext(1)}>
                  <Icon name="arrow-circle-right" size={50} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.screen}>
                <Image source={require("./assets/2.jpg")} style={styles.image} />
                <Text style={styles.title}>Personalized Learning Paths</Text>
                <Text style={styles.description}>Set your goals and receive tailored course recommendations.</Text>
                <TouchableOpacity onPress={() => handleNext(2)}>
                  <Icon name="arrow-circle-right" size={50} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.screen}>
                <Image source={require("./assets/3.jpg")} style={styles.image} />
                <Text style={styles.title}>Interactive & Engaging Features</Text>
                <Text style={styles.description}>Dive into a variety of interactive modules and quizzes.</Text>
                <TouchableOpacity onPress={() => handleNext(3)}>
                  <Icon name="arrow-circle-right" size={50} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.screen}>
                <Image source={require("./assets/4.jpg")} style={styles.image} />
                <Text style={styles.title}>Track Your Progress</Text>
                <Text style={styles.description}>Use our analytics tools to monitor your learning journey.</Text>
                <TouchableOpacity onPress={() => handleNext(4)}>
                  <Icon name="arrow-circle-right" size={50} color="#fff" />
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </Stack.Screen>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="QuizMainScreen" component={QuizMainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {/* Announcements Section */}
      <Text style={styles.announcementTitle}>Announcements</Text>
      <FlatList
        horizontal
        data={announcementsData}
        renderItem={({ item }) => (
          <View style={styles.announcementItem}>
            {/* Display image in announcements */}
            <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image 
            }
            style={styles.announcementImage} />
            <Text>{ item.name }</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      
      {/* Posts Section */}
      <Text style={styles.postTitle}>Post</Text>
      <FlatList
        data={postsData}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            {/* Display image in posts */}
            <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image } style={styles.postImage} /> 
            <Text>{item.name}</Text>
            <Text>{item.text}</Text>
            <View style={styles.tagContainer}>
              {item.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>{tag}</Text>
              ))}
            </View>
            <View style={styles.postIcons}>
              <Icon name="thumbs-up" size={20} />
              <Icon name="share" size={20} />
              <Icon name="bookmark" size={20} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="home" size={30} />
        <Icon name="search" size={30} />
        <YourComponent navigation={navigation} />
        <Icon name="user" size={30} />
      </View>
    </View>
  );
};



const YourComponent = () => {
  const navigation = useNavigation(); // Access navigation object
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('QuizMainScreen')}>
      <Icon name="question-circle" size={30} />
    </TouchableOpacity>
  );
};


// New QuizMainScreen component

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  screen: { width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFD700', padding: 20 },
  image: { width: 300, height: 300, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  description: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 20 },
  loginScreen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9' },
  loginImage: { width: 150, height: 150, marginBottom: 30,borderRadius: 150 },
  loginTitle: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  loginSubtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  inputSection: { width: '80%', marginBottom: 20 },
  inputLabel: { fontSize: 14, color: '#666', marginBottom: 5 },
  inputField: { padding: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 15 },
  loginButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, alignItems: 'center' },
  loginButtonText: { color: '#fff', fontWeight: 'bold' },
  socialLogin: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
  socialIcons: { flexDirection: 'row', justifyContent: 'space-between', width: 100, marginLeft: 10 },
  mainContainer: { flex: 1, padding: 10, backgroundColor: '#fff' },
  announcementTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  announcementItem: { marginRight: 10, alignItems: 'center'},
  announcementImage: { width: 100, height: 100, borderRadius: 10 },
  postTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  postItem: { padding: 10, backgroundColor: '#FFE4E1', marginBottom: 10, borderRadius: 14 },
  tagContainer: { flexDirection: 'row', marginTop: 5 },
  tag: { fontSize: 12, backgroundColor: 'pink', padding: 5, borderRadius: 5, marginRight: 5 },
  postIcons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  announcementImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});