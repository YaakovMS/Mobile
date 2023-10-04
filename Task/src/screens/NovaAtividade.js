import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native'; 
import { Picker } from '@react-native-picker/picker';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAtividades } from '../context/AtividadesContext';
import { Button } from 'react-native-elements';
import CustomInput from '../components/CostumeInput';
import { verificarProjetoSelecionado } from '../context/ProjetoContext';

import NovaAtividadeStyle from '../styles/NovaAtividadeStyle';

const NovaAtividade = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { useSalvarAtividade } = useAtividades();
  const salvarAtividade = useSalvarAtividade();
  const projetoId = route.params?.projetoId;

  useEffect(() => {
    if (!projetoId) {
      navigation.navigate('Projetos');
    }
  }, [projetoId, navigation]);

  const [novaAtividade, setNovaAtividade] = useState('');
  const [dataLimite, setDataLimite] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('Baixa');

  const salvarNovaAtividade = () => {
    if (!projetoId) {
      navigation.navigate('Projetos');
      return;
    }

    if (novaAtividade.trim() === '') {
      return;
    }

    const novaAtividadeObj = {
      id: Math.random().toString(),
      nome: novaAtividade,
      projetoId: projetoId,
      dataLimite: dataLimite,
      prioridade: prioridade,
      descricao: descricao,
    };

    salvarAtividade(novaAtividadeObj);
    setNovaAtividade('');
    setDataLimite('');
    setDescricao('');
    setPrioridade('Baixa');
  };

  return (
    <View style={NovaAtividadeStyle.container}>
       <Text style={NovaAtividadeStyle.screenTitle}>Criar Nova Atividade:</Text>
      <Text style={NovaAtividadeStyle.screenProjectId}>
        Projeto selecionado: {projetoId || 'Nenhum projeto selecionado'}
      </Text>
      
      <CustomInput
        style={NovaAtividadeStyle.input}
        placeholder="Nova Atividade"
        value={novaAtividade}
        onChangeText={(text) => setNovaAtividade(text)}
      />
      <CustomInput
        style={NovaAtividadeStyle.input}
        placeholder="Data Limite"
        value={dataLimite}
        onChangeText={(text) => setDataLimite(text)}
      />
      <CustomInput
        style={[NovaAtividadeStyle.input, NovaAtividadeStyle.largeInput]}
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
        multiline={true}
        numberOfLines={4}
      />
      {/* Utilize o Picker padrão do React Native para a seleção de prioridade */}
      <Picker
        style={NovaAtividadeStyle.picker}
        selectedValue={prioridade}
        onValueChange={(itemValue) => setPrioridade(itemValue)}
      >
        <Picker.Item label="Baixa Prioridade" value="baixa" />
        <Picker.Item label="Média Prioridade" value="media" />
        <Picker.Item label="Alta Prioridade" value="alta" />
      </Picker>
      <Button
        buttonStyle={NovaAtividadeStyle.button}
        onPress={salvarNovaAtividade}
        title="Salvar Atividade"
      />
      <Button
        buttonStyle={[NovaAtividadeStyle.button, NovaAtividadeStyle.backButton]}
        titleStyle={NovaAtividadeStyle.backButtonText}
        onPress={() => navigation.goBack()}
        title="Voltar"
      />
    </View>
  );
};

export default NovaAtividade;
