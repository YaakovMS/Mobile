// NovaAtividade.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const NovaAtividade = ({ onAddActivity }) => {
  const [newActivityTitle, setNewActivityTitle] = useState('');

  const addActivity = () => {
    if (newActivityTitle.trim() === '') return;
    onAddActivity(newActivityTitle);
    setNewActivityTitle('');
  };

  return (
    <View>
      <Text>Nova Atividade:</Text>
      <TextInput
        placeholder="Digite o título da atividade"
        value={newActivityTitle}
        onChangeText={(text) => setNewActivityTitle(text)}
      />
      <Button title="Adicionar Atividade" onPress={addActivity} />
    </View>
  );
};

export default NovaAtividade;
