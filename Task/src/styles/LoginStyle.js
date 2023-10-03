import { StyleSheet } from 'react-native';

export const LoginStyle = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 40,
  },
  heading: {
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%', // Ajuste a largura conforme necessário
  },
  input: {
    marginBottom: 15,
    padding: 20,
    width: '100%', // Isso permite que os inputs ocupem todo o espaço disponível no container
  },
  loginButton: {
    borderRadius: 5,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginButtonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
