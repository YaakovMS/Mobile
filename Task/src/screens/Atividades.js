import React, { useEffect } from "react";
import { View, Text, FlatList,TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useAtividades } from "../context/AtividadesContext";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from "react-native-elements";
import { verificarProjetoSelecionado } from "../context/ProjetoContext";
import AtividadeStyle from "../styles/AtividadeStyle";

const Atividades = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { atividades } = useAtividades();
  const projetoId = route.params?.projetoId;

  useEffect(() => {
    if (!projetoId) {
      navigation.navigate("Projetos");
      return;
    }

    const projetoSelecionado = verificarProjetoSelecionado(
      projetoId,
      navigation
    );
    if (!projetoSelecionado) {
      navigation.navigate("Projetos");
    }
  }, [projetoId, navigation]);

  const atividadesDoProjeto = atividades.filter(
    (atividade) => atividade.projetoId === projetoId
  );

  return (
    <View style={AtividadeStyle.screenAtividades}>
      <Text style={AtividadeStyle.screenAtividadesTitle}>
        Atividades do Projeto:
      </Text>
      <Text style={AtividadeStyle.screenAtividadesProjetoId}>
        Projeto selecionado: {projetoId || "Nenhum projeto selecionado"}
      </Text>

      <FlatList
        data={atividadesDoProjeto}
        keyExtractor={(atividade) => atividade.id}
        renderItem={({ item }) => (
          <View style={AtividadeStyle.atividadeContainer}>
            <Text style={AtividadeStyle.nome}>Nome: {item.nome}</Text>
            <Text>Data Limite: {item.dataLimite}</Text>
            <Text style={AtividadeStyle.prioridade}>
              Prioridade: {item.prioridade}
            </Text>
            <Text style={AtividadeStyle.descricao}>
              Descrição: {item.descricao}
            </Text>
          </View>
        )}
      />
     <TouchableOpacity
  onPress={() => navigation.navigate('Nova Atividade', { projetoId: projetoId })}
  style={AtividadeStyle.floatingButton} // Use o novo estilo aqui
>
<Icon name="plus" size={32} color="#fff" />
</TouchableOpacity>
    </View>
  );
};

export default Atividades;
