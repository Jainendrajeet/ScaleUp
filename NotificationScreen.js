import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure FontAwesome is installed

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'New Message', description: 'You have received a new message from John.', time: '2 mins ago' },
    { id: '2', title: 'New Comment', description: 'Alice commented on your post.', time: '5 mins ago' },
    { id: '3', title: 'Friend Request', description: 'Mike sent you a friend request.', time: '10 mins ago' },
    { id: '4', title: 'Event Reminder', description: 'Don’t forget the meeting at 3 PM tomorrow.', time: '1 hour ago' },
    { id: '5', title: 'App Update', description: 'A new version of the app is available.', time: '1 day ago' },
  ]);

  const handleNotificationPress = (notification) => {
    Alert.alert('Notification', `You tapped on: ${notification.title}`);
    // Here, you can navigate to a specific screen based on the notification.
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationItem} onPress={() => handleNotificationPress(item)}>
      <View style={styles.iconContainer}>
        <Icon name="bell" size={30} color="#007AFF" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 80, // Add some padding at the bottom
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationScreen;
