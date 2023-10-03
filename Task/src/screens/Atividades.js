import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Atividades = ({ projects, selectedProjectId }) => {
  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  return (
    <View>
      <Text>Atividades:</Text>
      <FlatList
        data={selectedProject?.activities || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default Atividades;
