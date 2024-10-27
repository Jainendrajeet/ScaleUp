

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const Search = () => {
  // Example user data
  const users = [
    { id: '1', name: 'Rohit Sharma', designation: 'Software Engineer', image: require('./assets/13.jpg') },
    { id: '2', name: 'Virat Kohli ', designation: 'Product Manager', image: require('./assets/24.jpg') },
    { id: '3', name: 'MS Dhoni', designation: 'UX Designer', image: require('./assets/25.jpg') },
    { id: '4', name: 'Sachin Tendulkar', designation: 'Data Scientist', image: require('./assets/29.jpg') },
    { id: '5', name: 'Surya Kumar Yadav', designation: 'Backend Developer', image: require('./assets/41.webp') },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [foundUser, setFoundUser] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);

    // Find an exact match in the users list
    const user = users.find(
      (user) => user.name.toLowerCase() === query.toLowerCase()
    );
    setFoundUser(user);

    // Generate suggestions based on the query
    const filteredSuggestions = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Function to handle selecting a user from suggestions
  const handleSelectUser = (user) => {
    setFoundUser(user);
    setSearchQuery(user.name);
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter full name to search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {foundUser ? (
        <View style={styles.userDetails}>
          <Image source={foundUser.image} style={styles.userImage} />
          <Text style={styles.userName}>{foundUser.name}</Text>
          <Text style={styles.userDesignation}>{foundUser.designation}</Text>
        </View>
      ) : searchQuery ? (
        <Text style={styles.noResultsText}>User not available</Text>
      ) : null}

      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectUser(item)} style={styles.suggestionItem}>
              <Text style={styles.suggestionText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          style={styles.suggestionsContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  searchInput: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  userDetails: {
    flexDirection: 'row', // Added to align image and text horizontally
    alignItems: 'center', // Center align items
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    borderColor: '#EEE',
    borderWidth: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10, // Added space between image and text
  },
  userDesignation: {
    fontSize: 14,
    color: '#666',
  },
  noResultsText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  suggestionsContainer: {
    marginTop: 10,
    maxHeight: 200,
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  suggestionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Search;
