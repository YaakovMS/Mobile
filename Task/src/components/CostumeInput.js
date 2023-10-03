import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const CustomInput = ({ placeholder, iconName, iconColor, ...restProps }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
      <Icon
        type="font-awesome"
        name={iconName}
        color={iconColor}
        style={{ marginRight: 10 }}
      />
      <TextInput
        label={placeholder}
        {...restProps}
        style={{ flex: 1, borderWidth: 1, borderRadius: 5 }}
      />
    </View>
  );
};

export default CustomInput;
