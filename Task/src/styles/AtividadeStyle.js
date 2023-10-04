import { StyleSheet } from "react-native";

const AtividadeStyle = StyleSheet.create({
  screenAtividades: {
    flex: 1,
    backgroundColor: "#F9F9F9", // Define a cor de fundo
    paddingHorizontal: 16, // Espaçamento horizontal interno
    paddingTop: 16, // Espaçamento superior interno
  },
  screenAtividadesProjetoId: {
    fontSize: 18,
    color: "#4B5F83",
    marginBottom: 25,
  },

  screenAtividadesTitle: {
    color: "#4B5F83",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },

  atividadeContainer: {
    backgroundColor: "lightgray", // Define a cor de fundo das atividades
    marginBottom: 16, // Espaçamento inferior entre atividades
    padding: 16, // Espaçamento interno das atividades
    borderRadius: 8, // Define um raio para os cantos das atividades
  },
  nome: {
    fontWeight: "bold",
    fontSize: 18, // Define o tamanho da fonte para o nome
  },
  dataLimite: {
    color: "gray",
  },
  prioridade: {
    color: "red",
  },
  descricao: {
    marginTop: 5,
  },
  ButtonNovaAtividade: {
    marginBottom: 30,
  },
 
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#4B5F83', // Cor do botão
    borderRadius: 32,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default AtividadeStyle;
