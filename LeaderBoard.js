// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// const LeaderBoard = () => {
//   // Sample data for leaderboard
//   const topThree = [
//     { id: '1', name: 'Rohit Sharms', points: 2000, rank: 1,image: require('./assets/13.jpg') },
//     { id: '2', name: 'Virat Kohli', points: 1800, rank: 2, image: require('./assets/24.jpg') },
//     { id: '3', name: 'MS Dhoni', points: 1600, rank: 3, image: require('./assets/25.jpg') },
//   ];

//   const otherUsers = [
//     { id: '4', name: 'KL Rahul', designation: 'Designation', points: 1500 },
//     { id: '5', name: 'Rishabh Pant', designation: 'Designation', points: 1400 },
//     { id: '6', name: 'Jasprit Bumrah', designation: 'Designation', points: 1300 },
//     { id: '7', name: 'Surya Kumar Yadav', designation: 'Designation', points: 1200 },
//     { id: '8', name: 'Md Shami', designation: 'Designation', points: 1100 },
//     { id: '9', name: 'R jadeja', designation: 'Designation', points: 1000 },
//     { id: '10', name: 'Hardik Pandya', designation: 'Designation', points: 900 },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.header}>Leaderboard</Text>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         <TouchableOpacity style={styles.tab}>
//           <Text style={styles.tabText}>Today</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.tab}>
//           <Text style={styles.tabText}>Weekly</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.tab}>
//           <Text style={styles.tabText}>All Time</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Podium for Top 3 */}
//       <View style={styles.podiumContainer}>
//         {topThree.map((user, index) => (
//           <View key={user.id} style={styles.podiumItem}>
//             <Image source={typeof user.image === 'string' ? { uri: user.image } : user.image 
//             }
//             style={styles.userImage} />
//             <Text style={styles.rankBadge}>{user.rank}</Text>
//             <Text style={styles.userName}>{user.name}</Text>
//             <Text style={styles.userPoints}>{user.points} Points</Text>
//           </View>
//         ))}
//       </View>

//       {/* Other Ranked Users */}
//       <FlatList
//         data={otherUsers}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.otherUserContainer}>
//             <Text style={styles.rankText}>{item.id}</Text>
//             <Image source={{ uri: 'https://example.com/user.png' }} style={styles.smallUserImage} />
//             <View style={styles.userInfo}>
//               <Text style={styles.userName}>{item.name}</Text>
//               <Text style={styles.userDesignation}>{item.designation}</Text>
//             </View>
//             <Text style={styles.userPoints}>{item.points} Points</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#F2C94C',
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   tab: {
//     paddingVertical: 5,
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   podiumContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 20,
//   },
//   podiumItem: {
//     alignItems: 'center',
//     padding: 10,
//   },
//   userImage: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     marginBottom: 5,
//   },
//   rankBadge: {
//     backgroundColor: '#F2C94C',
//     borderRadius: 15,
//     paddingHorizontal: 5,
//     position: 'absolute',
//     top: 0,
//     alignSelf: 'center',
//     fontWeight: 'bold',
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   userPoints: {
//     fontSize: 14,
//     color: '#999',
//   },
//   otherUserContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEE',
//   },
//   rankText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     width: 30,
//     textAlign: 'center',
//   },
//   smallUserImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   userDesignation: {
//     fontSize: 12,
//     color: '#777',
//   },
// });

// export default LeaderBoard;



import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LeaderBoard = () => {
  // Sample data for leaderboard
  const topThreeToday = [
    { id: '1', name: 'Rohit Sharma', points: 2000, rank: 1, image: require('./assets/13.jpg'),rank :'1' },
    { id: '2', name: 'Virat Kohli', points: 1800, rank: 2, image: require('./assets/24.jpg'),rank :'2' },
    { id: '3', name: 'MS Dhoni', points: 1600, rank: 3, image: require('./assets/25.jpg'),rank :'3' },
  ];

  const topThreeWeekly = [
    { id: '4', name: 'KL Rahul', points: 3000, rank: 1, image: require('./assets/26.jpg'),rank :'1' },
    { id: '5', name: 'Rishabh Pant', points: 2800, rank: 2, image: require('./assets/27.jpg'),rank :'2' },
    { id: '6', name: 'Jasprit Bumrah', points: 2600, rank: 3, image: require('./assets/28.jpg'),rank :'3' },
  ];

  const topThreeAllTime = [
    { id: '7', name: 'Sachin Tendulkar', points: 50000, rank: 1, image: require('./assets/29.jpg') ,rank :'1'},
    { id: '8', name: 'Brian Lara', points: 48000, rank: 2, image: require('./assets/30.jpg'),rank :'2' },
    { id: '9', name: 'Viv Richards', points: 47000, rank: 3, image: require('./assets/31.jpg'),rank :'3' },
  ];

  const otherUsersToday = [
    { id: '10', name: 'Surya Kumar Yadav', designation: 'Designation', points: 1500,rank :'4', image: require('./assets/41.webp')  },
    { id: '11', name: 'Md Shami', designation: 'Designation', points: 1400 ,rank :'5', image: require('./assets/33.jpg') },
    { id: '12', name: 'Hardik Pandya', designation: 'Designation', points: 1300,rank :'6' , image: require('./assets/34.png') },
  ];

  const otherUsersWeekly = [
    { id: '13', name: 'Shikhar Dhawan', designation: 'Designation', points: 1200,rank :'4' , image: require('./assets/35.jpg') },
    { id: '14', name: 'Bhuvneshwar Kumar', designation: 'Designation', points: 1100 ,rank :'5', image: require('./assets/36.png') },
    { id: '15', name: 'Yuzvendra Chahal', designation: 'Designation', points: 1000 ,rank :'6', image: require('./assets/37.jpg') },
  ];

  const otherUsersAllTime = [
    { id: '16', name: 'AB de Villiers', designation: 'Designation', points: 9900,rank :'4' , image: require('./assets/38.png') },
    { id: '17', name: 'Kane Williamson', designation: 'Designation', points: 9500 ,rank :'5', image: require('./assets/39.jpg') },
    { id: '18', name: 'Joe Root', designation: 'Designation', points: 9200,rank :'6' , image: require('./assets/12.jpg') },
  ];

  const [activeTab, setActiveTab] = useState('today'); // Default to 'today'
  const [displayedUsers, setDisplayedUsers] = useState(otherUsersToday); // Default displayed users

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'today':
        setDisplayedUsers(otherUsersToday); // Display today’s leaderboard
        break;
      case 'weekly':
        setDisplayedUsers(otherUsersWeekly); // Display weekly leaderboard
        break;
      case 'allTime':
        setDisplayedUsers(otherUsersAllTime); // Display all-time leaderboard
        break;
      default:
        break;
    }
  };

  const renderTopThree = () => {
    switch (activeTab) {
      case 'today':
        return topThreeToday;
      case 'weekly':
        return topThreeWeekly;
      case 'allTime':
        return topThreeAllTime;
      default:
        return [];
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Leaderboard</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab} onPress={() => handleTabChange('today')}>
          <Text style={[styles.tabText, activeTab === 'today' && styles.activeTabText]}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => handleTabChange('weekly')}>
          <Text style={[styles.tabText, activeTab === 'weekly' && styles.activeTabText]}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => handleTabChange('allTime')}>
          <Text style={[styles.tabText, activeTab === 'allTime' && styles.activeTabText]}>All Time</Text>
        </TouchableOpacity>
      </View>

      {/* Podium for Top 3 */}
      <View style={styles.podiumContainer}>
        {renderTopThree().map((user) => (
          <View key={user.id} style={styles.podiumItem}>
            <Image source={user.image} style={styles.userImage} />
            <Text style={styles.rankBadge}>{user.rank}</Text>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userPoints}>{user.points} Points</Text>
          </View>
        ))}
      </View>

      {/* Other Ranked Users */}
      <FlatList
        data={displayedUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.otherUserContainer}>
            <Text style={styles.rankText}>{item.rank}</Text>
            <Image source={item.image} style={styles.smallUserImage} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userDesignation}>{item.designation}</Text>
            </View>
            <Text style={styles.userPoints}>{item.points} Points</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F2C94C',
    paddingVertical: 10,
    borderRadius: 10,
  },
  tab: {
    paddingVertical: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  activeTabText: {
    color: '#FF5733', // Highlighted color for active tab
  },
  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  podiumItem: {
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  rankBadge: {
    backgroundColor: '#F2C94C',
    borderRadius: 15,
    paddingHorizontal: 5,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userPoints: {
    fontSize: 14,
    color: '#999',
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  rankText: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 30,
    textAlign: 'center',
  },
  smallUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userDesignation: {
    fontSize: 12,
    color: '#777',
  },
});

export default LeaderBoard;
