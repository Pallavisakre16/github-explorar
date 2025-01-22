import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { navigate } from '../utils/navigationUtils';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{uri:"https://avatars.githubusercontent.com/u/175584099?v=4"}} // Replace with your image path
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <MaterialIcons name="edit" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Pallavi Sakre</Text>
        <Text style={styles.email}>pallavi.sakre16@gmail.com</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        <MenuItem icon="heart" label="Favorite" />
        <MenuItem icon="setting" label="Settings" />
        <MenuItem icon="logout" label="Log out" />
      </View>
    </ScrollView>
  );
};

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem} onPress={()=>navigate("Favorites")}>
    <View style={styles.iconContainer}>
      <AntDesign name={icon} size={24} color="#000" />
    </View>
    <Text style={styles.menuLabel}>{label}</Text>
    <AntDesign name="right" size={20} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F7A399',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  phone: {
    fontSize: 16,
    color: '#888888',
  },
  email: {
    fontSize: 16,
    color: '#888888',
  },
  menuSection: {
    marginTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    marginRight: 16,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
  },
});

export default ProfileScreen;