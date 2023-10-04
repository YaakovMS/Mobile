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

  useEffect(() => {
    const projetoSelecionado = verificarProjetoSelecionado(projetoId, navigation);
    if (!projetoSelecionado) {
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
