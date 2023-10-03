import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProjetoStyle = () => {
  return (
    <TouchableOpacity style={styles.folder}>
      <Icon name="folder" size={48} color="#4B5F83" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 16,
  },
});

export default ProjetoStyle;
