import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "../store/slices/repositoriesSlice";
import Icon from "react-native-vector-icons/MaterialIcons";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";

const SearchInput = () => {
  const [repositoryName, setRepositoryName] = useState("careerAi");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (repositoryName.trim().length < 3) {
      setIsModalVisible(true);
    } else {
      dispatch(fetchRepositories(repositoryName.trim()));
      Keyboard.dismiss()
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter repository name"
        placeholderTextColor={"gray"}
        value={repositoryName}
        onChangeText={setRepositoryName}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Icon name="search" size={RFValue(24)} color="#000" />
      </TouchableOpacity>

      {/* Modal for invalid repository name */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        useNativeDriver
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            Repository name must be at least 3 characters long.
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 10,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  searchButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
