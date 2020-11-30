import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../types';

interface Props {
  id: string;
  title: string;
}

const TextBox: React.FC<Props> = ({ id, title }) => {
  const dispatch = useDispatch();

  // On the real app these values are memoized using reselect.
  const moduleValue = useSelector<AppStore, string>((state) => state.moduleValues[id]);

  const onChangeText = (text: string) => {
    dispatch({ type: 'UPDATE_VALUES', payload: { moduleId: id, value: text } });
  };

  return (
    <View testID={id}>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => onChangeText(text)}
        value={moduleValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: { height: 40, borderColor: 'gray', borderWidth: 1 },
});

export default TextBox;
