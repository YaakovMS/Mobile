import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAtividades } from '../context/AtividadesContext';
import { Button } from 'react-native-elements';
import { verificarProjetoSelecionado } from '../context/ProjetoContext';

const Atividades = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { atividades } = useAtividades();
  const projetoId = route.params?.projetoId; // Usando ? para verificar se projetoId está definido

  useEffect(() => {
    if (!projetoId) {
      // Se projetoId não estiver definido, redirecione para 'Projetos'
      navigation.navigate('Projetos');
      return;
    }

    const projetoSelecionado = verificarProjetoSelecionado(projetoId, navigation);
    if (!projetoSelecionado) {
      navigation.navigate('Projetos'); // Redireciona para 'Projetos' se o projeto não estiver selecionado
    }
  }, [projetoId, navigation]);

  const atividadesDoProjeto = atividades.filter(
    (atividade) => atividade.projetoId === projetoId
  );

  return (
    <View>
      <Text>Projeto selecionado: {projetoId || 'Nenhum projeto selecionado'}</Text>
      <Text>Atividades do Projeto:</Text>
      <FlatList
        data={atividadesDoProjeto}
        keyExtractor={(atividade) => atividade.id}
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Data Limite: {item.dataLimite}</Text>
            <Text>Prioridade: {item.prioridade}</Text>
            <Text>Descrição: {item.descricao}</Text>
          </View>
        )}
      />
      <Button
        onPress={() => navigation.navigate('Nova Atividade', { projetoId: projetoId })}
        title="Nova Atividade"
      />
    </View>
  );
};

export default Atividades;

