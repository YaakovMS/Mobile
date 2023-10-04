import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAtividades } from '../context/AtividadesContext';
import { Button } from 'react-native-elements';
import { verificarProjetoSelecionado } from '../context/ProjetoContext';

const Atividades = () => {
  const route = useRoute();
  const { projetoId } = route.params;
  const navigation = useNavigation();
  const { atividades } = useAtividades();

  // Verifique o projeto selecionado ao entrar na tela
  useEffect(() => {
    const projetoSelecionado = verificarProjetoSelecionado(projetoId, navigation);
    if (!projetoSelecionado) {
      // Se não houver projeto selecionado, redirecione para a tela de projetos
      navigation.navigate('Projetos');
    }
  }, [projetoId, navigation]);

  const atividadesDoProjeto = atividades.filter(
    (atividade) => atividade.projetoId === projetoId
  );

  return (
    <View>
      <Text>Projeto selecionado: {projetoId}</Text>
      <Text>Atividades do Projeto:</Text>
      <FlatList
        data={atividadesDoProjeto}
        keyExtractor={(atividade) => atividade.id}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
      />
      <Button
        onPress={() => navigation.navigate('Nova Atividade', { projetoId: projetoId })}
        title="Nova Atividade"
      />
    </View>
  );
};

export default Atividades;
