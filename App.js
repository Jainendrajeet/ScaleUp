

import React, { useRef, useState } from 'react';
import {  Button,StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, TextInput, Alert, FlatList,Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native'; // Add NavigationContainer
import { createStackNavigator } from '@react-navigation/stack'; // Add createStackNavigator
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');

// Sample data for announcements and posts
const announcementsData = [
  { id: '1', name: 'Rohit', image: require('./assets/13.jpg') },
  { id: '2', name: 'Riya', image: require('./assets/15.jpg')},
  { id: '3', name: 'Tara', image: require('./assets/7.jpg') },
  { id: '4', name: 'Utkarsh', image: require('./assets/18.webp') },
  { id: '5', name: 'Sameer', image: require('./assets/16.webp') },
  { id: '6', name: 'Somya', image: require('./assets/24.jpg') },
  { id: '7', name: 'Kritin', image: require('./assets/5.png') }
];

const postsData = [
  { id: '1', name: 'Rohit Sharma', text: 'Winning Momemt', tags: ['Cricket', 'Love','World Cup'], image:  require("./assets/13.jpg") },
  { id: '2', name: 'Priya ', text: 'Nature beauty', tags: ['Design', 'Persona', 'User Flow'], image: require("./assets/5.png") },
  { id: '3', name: 'Riya', text: 'Feeling Happy', tags: [ 'Fashion','2024'], image: require("./assets/15.jpg") },
  { id: '4', name: 'Sonia', text: 'New Here', tags: ['Model', 'Music',], image: require("./assets/7.jpg") },
  { id: '5', name: 'Joe Root', text: 'Playing Cricket', tags: ['Cricket', 'WTC','2024'], image: require("./assets/12.jpg") }
];

const Stack = createStackNavigator();

import QuizMainScreen from './QuizMainScreen';
import UpcomingQuizzesScreen from './UpcomingQuizzesScreen';
import LeaderBoard from './LeaderBoard';
import Search from './Search';
import UserProfile from './UserProfile';
import NotificationScreen from './NotificationScreen';
import ChatScreen from './ChatScreen';


export default function App() {
  const scrollViewRef = useRef(null);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [isLoginWithUsername, setIsLoginWithUsername] = useState(true); // Track login type
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

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

  const handleLoginWithUsername = () => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      Alert.alert('Login Successful', 'Welcome to the app!');
      setIsLoggedIn(true);
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      // Send OTP to mobile number via API call (mocked here)
      setIsOtpSent(true);
      Alert.alert('OTP Sent', 'Please check your phone for the OTP.');
    } else {
      Alert.alert('Invalid Mobile Number', 'Please enter a valid 10-digit mobile number.');
    }
  };

  const handleVerifyOtp = () => {
    if (otp === '1234') { // Replace with actual OTP validation logic
      Alert.alert('Login Successful', 'Welcome to the app!');
      setIsLoggedIn(true);
    } else {
      Alert.alert('Login Failed', 'Incorrect OTP');
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
              <Text style={styles.loginSubtitle}>Unlock Focused, Distraction-free Learning</Text>

              <View style={styles.toggleContainer}>
                <TouchableOpacity onPress={() => setIsLoginWithUsername(true)}>
                  <Text style={[styles.toggleText, isLoginWithUsername && styles.activeToggle]}>Username/Email</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsLoginWithUsername(false)}>
                  <Text style={[styles.toggleText, !isLoginWithUsername && styles.activeToggle]}>Mobile Number</Text>
                </TouchableOpacity>
              </View>

              {isLoginWithUsername ? (
                // Username/Email Login Section
                <View style={styles.inputSection}>
                  <TextInput
                    style={styles.inputField}
                    placeholder="Enter your username/email"
                    value={username}
                    onChangeText={setUsername}
                  />
                  <TextInput
                    style={styles.inputField}
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity style={styles.loginButton} onPress={handleLoginWithUsername}>
                    <Text style={styles.loginButtonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                // Mobile Number Login Section
                <View style={styles.inputSection}>
                  <TextInput
                    style={styles.inputField}
                    placeholder="Enter your mobile number"
                    keyboardType="phone-pad"
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                  />
                  {!isOtpSent ? (
                    <TouchableOpacity style={styles.loginButton} onPress={handleSendOtp}>
                      <Text style={styles.loginButtonText}>Send OTP</Text>
                    </TouchableOpacity>
                  ) : (
                    <>
                      <TextInput
                        style={styles.inputField}
                        placeholder="Enter OTP"
                        keyboardType="numeric"
                        value={otp}
                        onChangeText={setOtp}
                      />
                      <TouchableOpacity style={styles.loginButton} onPress={handleVerifyOtp}>
                        <Text style={styles.loginButtonText}>Verify OTP</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              )}

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
                <Text style={styles.description}>Your journey to focused, distraction-free learning starts here. Discover a platform designed to enhance your knowledge and keep you engaged.</Text>
                <TouchableOpacity onPress={() => handleNext(1)}>
                  <Icon name="arrow-circle-right" size={50} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.screen}>
                <Image source={require("./assets/2.jpg")} style={styles.image} />
                <Text style={styles.title}>Personalized Learning Paths</Text>
                <Text style={styles.description}>Set your goals and intersets to receive tailored course recommendations. We curate content just to help you stay motivated and achieve your objectives.</Text>
                <TouchableOpacity onPress={() => handleNext(2)}>
                  <Icon name="arrow-circle-right" size={50} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.screen}>
                <Image source={require("./assets/3.jpg")} style={styles.image} />
                <Text style={styles.title}>Interactive & Engaging Features</Text>
                <Text style={styles.description}>Dive into a variety of interactive modules, quizzes, and community discussions. We make learning fun and interactive, ensuring you stay on track.</Text>
                <TouchableOpacity onPress={() => handleNext(3)}>
                  <Icon name="arrow-circle-right" size={50} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.screen}>
                <Image source={require("./assets/4.jpg")} style={styles.image} />
                <Text style={styles.title}>Track Your Progress</Text>
                <Text style={styles.description}>Use our analytics tools to monitor your learning journey, get detailed feedback, insights, celebrate your achievements and identity areas for improvement.</Text>
                <TouchableOpacity onPress={() => handleNext(4)}>
                  <Icon name="arrow-circle-right" size={50} color="#fff" />
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </Stack.Screen>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="QuizMainScreen" component={QuizMainScreen} />
        <Stack.Screen name="UpcomingQuizzesScreen" component={UpcomingQuizzesScreen} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const MainScreen = ({ navigation }) => {
  const [likeCounts, setLikeCounts] = useState(postsData.map(() => 0)); // Initial like counts for each post
  const animations = useRef(postsData.map(() => new Animated.Value(1))).current; // Initial animation scale for each post

  const handleLikePress = (index) => {
    const newLikeCounts = [...likeCounts];
    newLikeCounts[index] += 1;
    newLikeCounts[index] = newLikeCounts[index] % 2;
    setLikeCounts(newLikeCounts);

    // Trigger scale animation
    Animated.sequence([
      Animated.timing(animations[index], {
        toValue: 1.3, // Increase scale
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(animations[index], {
        toValue: 1, // Reset scale
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleBookmark = (item) => {
    Alert.alert('Saved', 'Image has been saved to the gallery.');
    // Here, you'd implement actual image saving functionality.
  };

  return (
    <View style={styles.mainContainer}>
      {/* Top Right Icons for Chat and Notifications */}
      <View style={styles.topRightIcons}>
      <YourComponent10 navigation={navigation} />
      <YourComponent11 navigation={navigation} />
      </View>

      {/* Announcements Section */}
      <Text style={styles.announcementTitle}>Announcements</Text>
      <FlatList
        horizontal
        data={announcementsData}
        renderItem={({ item }) => (
          <View style={styles.announcementItem}>
            <Image
              source={typeof item.image === 'string' ? { uri: item.image } : item.image}
              style={styles.announcementImage}
            />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Posts Section */}
      <Text style={styles.postTitle}>Post</Text>
      <FlatList
        data={postsData}
        renderItem={({ item, index }) => (
          <View style={styles.postItem}>
            <Image
              source={typeof item.image === 'string' ? { uri: item.image } : item.image}
              style={styles.postImage}
            />
            <Text>{item.name}</Text>
            <Text>{item.text}</Text>
            <View style={styles.tagContainer}>
              {item.tags.map((tag, i) => (
                <Text key={i} style={styles.tag}>{tag}</Text>
              ))}
            </View>
            <View style={styles.postIcons}>
              <TouchableOpacity onPress={() => handleLikePress(index)}>
                <Animated.View style={{ transform: [{ scale: animations[index] }] }}>
                  <Icon name="thumbs-up" size={20} color="#007AFF" />
                </Animated.View>
              </TouchableOpacity>
              <Text style={styles.likeCount}>{likeCounts[index]}</Text>
              <Icon name="share" size={20} />
              <TouchableOpacity onPress={() => handleBookmark(item)}>
                <Icon name="bookmark" size={20} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="home" size={30} />
        <YourComponent4 navigation={navigation} />
        <YourComponent navigation={navigation} />
        <YourComponent1 navigation={navigation} />
        <YourComponent2 navigation={navigation} />
        <YourComponent3 navigation={navigation} />
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
const YourComponent1 = () => {
  const navigation = useNavigation(); // Access navigation object
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('UpcomingQuizzesScreen')}>
      <Icon name="calendar" size={30} />
    </TouchableOpacity>
  );
};

const YourComponent2 = () => {
  const navigation = useNavigation(); // Access navigation object
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('LeaderBoard')}>
      <Icon name="trophy" size={30} />
    </TouchableOpacity>
  );
};

const YourComponent3 = () => {
  const navigation = useNavigation(); // Access navigation object
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
      <Icon name="user" size={30} />
    </TouchableOpacity>
  );
};

const YourComponent4 = () => {
  const navigation = useNavigation(); // Access navigation object
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Icon name="search" size={30} />
    </TouchableOpacity>
  );
};

const YourComponent10 = () => {
  const navigation = useNavigation(); // Access navigation object
  
  return (
        <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
          <Icon name="comments" size={24} color="#007AFF" style={styles.iconSpacing} />
        </TouchableOpacity>
  );
};

const YourComponent11 = () => {
  const navigation = useNavigation(); // Access navigation object
  
  return (
  <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
    <Icon name="bell" size={24} color="#007AFF" />
  </TouchableOpacity> 
  );
};


// New QuizMainScreen component

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   topRightIcons: {
//     position: 'absolute',
//     top: 16,
//     right: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconSpacing: {
//     marginRight: 20, // Space between chat and notification icons
//   },
//   mainContainer: {
//     flex: 1,
//     padding: 20,
//   },
//   announcementTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   announcementItem: {
//     marginRight: 10,
//   },
//   announcementImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   postTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   postItem: {
//     marginBottom: 20,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#f9f9f9',
//   },
//   postImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//   },
//   tagContainer: {
//     flexDirection: 'row',
//     marginVertical: 10,
//   },
//   tag: {
//     backgroundColor: '#e0e0e0',
//     padding: 5,
//     borderRadius: 5,
//     marginRight: 5,
//   },
//   postIcons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   likeCount: {
//     marginLeft : -130,
//     // marginRight: 15,
//     fontSize: 16,
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//   },
//   loginScreen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   loginImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   loginTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   loginSubtitle: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   toggleText: {
//     fontSize: 18,
//     fontWeight: '600',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     color: '#888',
//     borderBottomWidth: 2,
//     borderColor: 'transparent', // By default, make it transparent
//     marginHorizontal: 10,
//   },
//   activeToggle: {
//     color: '#FFD700', // Highlight color for active toggle (e.g., gold)
//     borderColor: '#FFD700', // Border color for active toggle
//     fontWeight: 'bold',
//   },
//   inputSection: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   inputField: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     fontSize: 16,
//   },
//   loginButton: {
//     backgroundColor: '#333',
//     borderRadius: 5,
//     padding: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   socialLogin: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   scrollView: { flex: 1 },
//   screen: { width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFD700', padding: 20 },
//   image: { width: 300, height: 300, marginBottom: 30 },
//   title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
//   description: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 20 },
//   loginScreen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9' },
//   loginImage: { width: 150, height: 150, marginBottom: 30,borderRadius: 150 },
//   // loginTitle: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 5 },
//   // loginSubtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
//   // inputSection: { width: '80%', marginBottom: 20 },
//   inputLabel: { fontSize: 14, color: '#666', marginBottom: 5,color:'y' },
//   // inputField: { padding: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 15 },
//   // loginButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, alignItems: 'center' },
//   // loginButtonText: { color: '#fff', fontWeight: 'bold' },
//   // socialLogin: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
//   // socialIcons: { flexDirection: 'row', justifyContent: 'space-between', width: 100, marginLeft: 10 },
//   mainContainer: { flex: 1, padding: 10, backgroundColor: '#fff' },
//   announcementTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 ,marginTop:20},
//   announcementItem: { marginRight: 10, alignItems: 'center',marginBottom:'10'},
//   announcementImage: { width: 100, height: 100, borderRadius: 10,marginBottom: '10' },
//   postTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
//   postItem: { padding: 10, backgroundColor: '#FFE4E1', marginBottom: 10, borderRadius: 14 },
//   tagContainer: { flexDirection: 'row', marginTop: 5 },
//   tag: { fontSize: 12, backgroundColor: 'pink', padding: 5, borderRadius: 5, marginRight: 5 },
//   postIcons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
//   bottomNav: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
//   announcementImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   postImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'cover',
//     marginBottom: 10,
//   },
//   quizContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   quizTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   }
// });
const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loginImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  toggleText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  activeToggle: {
    color: 'blue', // or any color to indicate active state
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  socialLogin: {
    marginTop: 20,
    alignItems: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  screen: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  mainContainer: {
    flex: 1,
    padding: 16,
  },
  topRightIcons: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 20, // Space between chat and notification icons
  },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  announcementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  announcementItem: {
    marginRight: 10,
  },
  announcementImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  postItem: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  postIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeCount: {
    marginLeft : -130,
    // marginRight: 15,
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  loginScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loginSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleText: {
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: '#888',
    borderBottomWidth: 2,
    borderColor: 'transparent', // By default, make it transparent
    marginHorizontal: 10,
  },
  activeToggle: {
    color: '#FFD700', // Highlight color for active toggle (e.g., gold)
    borderColor: '#FFD700', // Border color for active toggle
    fontWeight: 'bold',
  },
  inputSection: {
    width: '100%',
    marginBottom: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLogin: {
    alignItems: 'center',
    marginTop: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  scrollView: { flex: 1 },
  screen: { width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFD700', padding: 20 },
  image: { width: 300, height: 300, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  description: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 20 },
  loginScreen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9' },
  loginImage: { width: 150, height: 150, marginBottom: 30,borderRadius: 150 },
  // loginTitle: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  // loginSubtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  // inputSection: { width: '80%', marginBottom: 20 },
  inputLabel: { fontSize: 14, color: '#666', marginBottom: 5,color:'y' },
  // inputField: { padding: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 15 },
  // loginButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, alignItems: 'center' },
  // loginButtonText: { color: '#fff', fontWeight: 'bold' },
  // socialLogin: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
  // socialIcons: { flexDirection: 'row', justifyContent: 'space-between', width: 100, marginLeft: 10 },
  mainContainer: { flex: 1, padding: 10, backgroundColor: '#fff' },
  announcementTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 ,marginTop:20},
  announcementItem: { marginRight: 10, alignItems: 'center',marginBottom:'10'},
  announcementImage: { width: 100, height: 100, borderRadius: 10,marginBottom: '10' },
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