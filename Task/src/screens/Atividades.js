import React from 'react';
import { View ,Text,StyleSheet} from 'react-native';


function Atividades() {
    return ( 
        <View style={styles.Container}>
            <Text> Atividades </Text>
        </View>
     );
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
  });

export default Atividades;