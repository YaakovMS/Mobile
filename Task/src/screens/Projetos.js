import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProjetosStyle from '../styles/ProjetosStyle' // Importe os estilos do arquivo separado

const themeColor = '#4B5F83';

const Projetos = () => {
  const [folders, setFolders] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const inputRef = useRef(null);

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
    <TouchableOpacity style={ProjetosStyle.folder}>
      <Icon name="folder" size={48} color={themeColor} /> 
      <Text style={{ color: themeColor }}>{item.name}</Text>

    </TouchableOpacity>
  );

  return (
    <View style={ProjetosStyle.container}>
      <Text style={[ProjetosStyle.title, { color: themeColor, textAlign: 'center' }]}>
        Minhas Pastas
      </Text>
      <FlatList
        data={groupFolders(folders)}
        keyExtractor={(item, index) => `row-${index}`}
        renderItem={({ item }) => (
          <View style={ProjetosStyle.folderRow}>
            {item.map((folder) => (
              <View key={folder.id} style={ProjetosStyle.folderContainer}>
                {renderFolderItem({ item: folder })}
              </View>
            ))}
          </View>
        )}
      />
      <TouchableOpacity style={ProjetosStyle.addButton} onPress={toggleModal}>
        <Icon name="plus" size={32} color="#fff" />
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true} animationType="slide" onRequestClose={toggleModal}>
  <View style={ProjetosStyle.modalContainer}>
    <TextInput
      ref={inputRef}
      style={ProjetosStyle.input}
      placeholder="Nome do Projeto"
      onChangeText={(text) => setNewProjectName(text)}
    />
    <TouchableOpacity style={ProjetosStyle.createButton} onPress={handleCreateProject}>
      <Text style={ProjetosStyle.createButtonText}>Criar Projeto</Text>
    </TouchableOpacity>
    <TouchableOpacity style={ProjetosStyle.closeButton} onPress={toggleModal}>
      <Text style={ProjetosStyle.closeButtonText}>Fechar</Text>
    </TouchableOpacity>
  </View>
</Modal>
    </View>
  );
};

export default Projetos;
