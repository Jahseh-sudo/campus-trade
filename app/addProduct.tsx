import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function AddCategory() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { label: 'Electronics', icon: require('../assets/electronics.png') },
    { label: 'Food', icon: require('../assets/food.png') },
    { label: 'Snacks', icon: require('../assets/snacks.png') },
    { label: 'Beauty', icon: require('../assets/beauty.png') },
    { label: 'Services', icon: require('../assets/services.png') },
    { label: 'Phones', icon: require('../assets/phones.png') },
    { label: 'Clothes', icon: require('../assets/clothes.png') },
    { label: 'Crypto', icon: require('../assets/crypto.png') },
  ];

  const filteredCategories = categories.filter((category) =>
    category.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Product</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search categories"
          placeholderTextColor="#aaa"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        {searchTerm ? (
          <TouchableOpacity onPress={() => setSearchTerm('')}>
            <Text style={styles.clearSearchIcon}>✖</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Category List */}
      <ScrollView contentContainerStyle={styles.categoryList}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() =>
                router.push({
                  pathname: '../AddProductScreen',
                  params: { category: category.label },
                })
              }
            >
              <Image source={category.icon} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>{category.label}</Text>
              <Text style={styles.arrowIcon}>➡️</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noResults}>No categories found.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#4E1A1A' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: { flex: 1, height: 40, color: '#333' },
  clearSearchIcon: {
    fontSize: 18,
    color: '#888',
    paddingHorizontal: 10,
  },
  categoryList: { paddingBottom: 20 },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryIcon: { width: 40, height: 40, resizeMode: 'contain' },
  categoryText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
    fontWeight: '600',
  },
  arrowIcon: { fontSize: 18, color: '#555' },
  noResults: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 20,
    fontSize: 16,
  },
});
