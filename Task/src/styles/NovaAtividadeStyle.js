import { StyleSheet } from 'react-native';


const NovaAtividadeStyle = StyleSheet.create({
  container: {
    flex: 1, // Garante que o contêiner ocupe todo o espaço disponível
    justifyContent: 'center', // Centraliza verticalmente os componentes
    alignItems: 'center', // Centraliza horizontalmente os componentes
    padding: 16, // Adiciona um espaçamento interno
  },
  screenTitle: {
    fontSize: 28,
    marginBottom: 16,
    fontWeight:'bold',
    color: '#4B5F83'
  },
  screenProjectId:{
    fontSize: 18,
    marginBottom: 16,
    color: '#4B5F83'
  },
  input: {
    width: '100%', // Faz com que o campo de entrada ocupe a largura completa
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    color: '#4B5F83'
  },
  picker: {
    width: 300,
    marginBottom: 10,
    color: '#4B5F83',
    alignContent: 'center'
  },
  pickerLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4B5F83',
  },
  button: {
    backgroundColor: '#4B5F83',
    marginTop: 8,
  },
  backButton: {
    backgroundColor: '#D9D9D9',
    marginTop: 8,
  },
  backButtonText: {
    color: '#000',
  },
});

export default NovaAtividadeStyle;
