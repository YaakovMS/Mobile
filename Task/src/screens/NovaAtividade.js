import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAtividades } from '../context/AtividadesContext'; // Importe o contexto useAtividades
import { Button } from 'react-native-elements';
import CustomInput from '../components/CostumeInput';
import { verificarProjetoSelecionado } from '../context/ProjetoContext';

const NovaAtividade = () => {
  const route = useRoute();
  const { projetoId } = route.params;
  const navigation = useNavigation();

  // Use a função useSalvarAtividade do contexto AtividadesContext
  const { useSalvarAtividade } = useAtividades();
  const salvarAtividade = useSalvarAtividade();

  const [novaAtividade, setNovaAtividade] = useState('');

  // Verifique o projeto selecionado ao entrar na tela
  useEffect(() => {
    const projetoSelecionado = verificarProjetoSelecionado(projetoId, navigation);
    if (!projetoSelecionado) {
      // Se não houver projeto selecionado, redirecione para a tela de projetos
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
    };

    salvarAtividade(novaAtividadeObj);
    setNovaAtividade('');
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
      <Button
        onPress={salvarNovaAtividade}
        title="Salvar Atividade"
      />
      
    </View>
  );
};

export default NovaAtividade;
