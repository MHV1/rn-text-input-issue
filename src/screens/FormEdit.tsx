import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Form from '../components/Form';
import { FormModule } from '../types';

const sampleModules: ReadonlyArray<FormModule> = [
  {
    id: 'test_1',
    title: 'First Item',
  },
  {
    id: 'test_2',
    title: 'Second Item',
  },
  {
    id: 'test_3',
    title: 'Third Item',
  },
];

const FormEdit: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Form modulesToRender={sampleModules} />
    </SafeAreaView>
  );
};

export default FormEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
