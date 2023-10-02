import React from 'react';
import { View ,Text,StyleSheet} from 'react-native';


function NovaAtividade() {
    return ( 
        <View style={styles.Container}>
            <Text> Nova Atividade </Text>
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

export default NovaAtividade;