import { StyleSheet } from 'react-native';
const blueColor = "#4B5F83";
export const SignUpStyle = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  heading: {
    marginBottom: 20,
    textAlign: "center"
  },
  form: {
    width: "80%",
  },
  input: {
    marginBottom: 15,
    color: "#4B5F83",
  
  },
  signupButton: {
    backgroundColor: "#4B5F83",
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
  signupButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 5,
  },
 
});

