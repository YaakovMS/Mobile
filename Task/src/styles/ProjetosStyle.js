import { StyleSheet } from 'react-native';

const themeColor = '#4B5F83';

const ProjetosStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: themeColor, // Cor do título
    textAlign: 'center',
  },
  folderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  folderContainer: {
    flex: 1,
  },
  folder: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: themeColor, // Cor do botão
    borderRadius: 32,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  createButton: {
    backgroundColor: themeColor, // Cor do botão Criar Projeto
    borderRadius: 8,
    padding: 12,
  },
  createButtonText: {
    color: '#fff', // Cor do texto do botão Criar Projeto
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'red', // Cor do botão Fechar (exemplo: vermelho)
    borderRadius: 8,
    padding: 12,
    marginTop: 8, // Espaço superior para separar o botão Fechar do botão Criar Projeto
  },
  closeButtonText: {
    color: '#fff', // Cor do texto do botão Fechar
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProjetosStyle;

