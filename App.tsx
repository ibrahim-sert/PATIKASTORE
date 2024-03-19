import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import Store from './src/components/store';
import styles from './src/components/store/Store.style';
import product_data from './src/components/store/product_data.json';

function App(): React.JSX.Element {
  const handleRenderNews = ({item, index}) => {
    const isLastItem = index === product_data.length - 1;
    return (
      <Store
        products={item}
        style={isLastItem ? styles.image_last : styles.image}
      />
    );
  };
  const handleKeyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView style={styles.safe_container}>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <TextInput style={styles.text_input} placeholder="Ara..." />
      <FlatList
        keyExtractor={handleKeyExtractor}
        data={product_data}
        renderItem={handleRenderNews}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default App;
