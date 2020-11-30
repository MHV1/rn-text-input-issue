import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import TextBox from './modules/TextBox';
import { AppStore, FormModule, ModuleValuesState } from '../types';
import { connect, MapStateToProps } from 'react-redux';
import { equals } from '../utils';

interface OwnProps {
  modulesToRender: any;
}

interface MapStateToPropsProps {
  moduleValues: ModuleValuesState;
}

interface Props extends OwnProps, MapStateToPropsProps {}

class Form extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  // Module values state is passed to this component, as in the real app they are needed for certain logic to work.
  // We overrride this method to avoid the component updating due to the module values being changed.
  public shouldComponentUpdate(nextProps: Props) {
    return !equals(nextProps.modulesToRender, this.props.modulesToRender);
  }

  public render() {
    const renderItem = ({ item }: { item: FormModule }) => (
      <TextBox id={item.id} title={item.title} />
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.modulesToRender}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps: MapStateToProps<MapStateToPropsProps, OwnProps, AppStore> = (state) => {
  const { moduleValues } = state;

  return {
    moduleValues,
  };
};

export default connect(mapStateToProps)(Form);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
