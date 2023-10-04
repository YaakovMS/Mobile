import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAtividades } from '../context/AtividadesContext';
import { Button } from 'react-native-elements';
import CustomInput from '../components/CostumeInput';
import { verificarProjetoSelecionado } from '../context/ProjetoContext';

const NovaAtividade = () => {
  const route = useRoute();
  const { projetoId } = route.params;
  const navigation = useNavigation();
  const { useSalvarAtividade } = useAtividades();
  const salvarAtividade = useSalvarAtividade();

  const [novaAtividade, setNovaAtividade] = useState('');
  const [dataLimite, setDataLimite] = useState('');
  const [prioridade, setPrioridade] = useState('Baixa'); // Valor padrão
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    const projetoSelecionado = verificarProjetoSelecionado(projetoId, navigation);
    if (!projetoSelecionado) {
      navigation.navigate('Projetos');
    }
  }, [projetoId, navigation]);

  const salvarNovaAtividade = () => {
    if (novaAtividade.trim() === '') {
      return;
    }

    const novaAtividadeObj = {
      id: Math.random().toString(),
      nome: novaAtividade,
      projetoId: projetoId,
      dataLimite: dataLimite, // Adicione a data limite à atividade
      prioridade: prioridade, // Adicione a prioridade à atividade
      descricao: descricao, // Adicione a descrição à atividade
    };

    salvarAtividade(novaAtividadeObj);
    setNovaAtividade('');
    setDataLimite('');
    setPrioridade('Baixa');
    setDescricao('');
  };

  return (
    <View>
      <Text>Projeto selecionado: {projetoId}</Text>
      <Text>Criar Nova Atividade:</Text>
      <CustomInput
        placeholder="Nova Atividade"
        value={novaAtividade}
        onChangeText={(text) => setNovaAtividade(text)}
      />
      <CustomInput
        placeholder="Data Limite"
        value={dataLimite}
        onChangeText={(text) => setDataLimite(text)}
      />
      <CustomInput
        placeholder="Prioridade"
        value={prioridade}
        onChangeText={(text) => setPrioridade(text)}
      />
      <CustomInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <Button
        onPress={salvarNovaAtividade}
        title="Salvar Atividade"
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Voltar"
      />
    </View>
  );
};

export default NovaAtividade;
