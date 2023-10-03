import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CorPrimaria from '../styles/Layout';

const themeColor = CorPrimaria;

const Projetos = () => {
  const [folders, setFolders] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const inputRef = useRef(null);

  // Não há mais projetos de exemplo aqui

  // Função para dividir os ícones em grupos de três
  const groupFolders = (folders) => {
    const grouped = [];
    for (let i = 0; i < folders.length; i += 3) {
      const group = folders.slice(i, i + 3);
      grouped.push(group);
    }
    return grouped;
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setNewProjectName('');
  };

  const handleCreateProject = () => {
    if (newProjectName.trim() !== '') {
      const newProject = { id: folders.length + 1, name: newProjectName };
      setFolders([...folders, newProject]);
      toggleModal();
    }
  };

  const renderFolderItem = ({ item }) => (
    <TouchableOpacity style={styles.folder}>
      <Icon name="folder" size={48} color={themeColor} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: themeColor, textAlign: 'center' }]}>Minhas Pastas</Text>
      <FlatList
        data={groupFolders(folders)}
        keyExtractor={(item, index) => `row-${index}`}
        renderItem={({ item }) => (
          <View style={styles.folderRow}>
            {item.map((folder) => (
              <View key={folder.id} style={styles.folderContainer}>
                {renderFolderItem({ item: folder })}
              </View>
            ))}
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
        <Icon name="plus" size={32} color="#fff" />
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Nome do Projeto"
            onChangeText={(text) => setNewProjectName(text)}
          />
          <TouchableOpacity style={styles.createButton} onPress={handleCreateProject}>
            <Text style={styles.createButtonText}>Criar Projeto</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  folderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  folderContainer: {
    flex: 1,
  },
  folder: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: themeColor,
    borderRadius: 32,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  createButton: {
    backgroundColor: themeColor,
    borderRadius: 8,
    padding: 12,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Projetos;
