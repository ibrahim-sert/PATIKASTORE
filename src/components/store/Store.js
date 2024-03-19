import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Store.style';

const Store = ({products}) => {
  const lastItem = 10;
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={products.id === lastItem ? styles.image_last : styles.image}
          source={{uri: products.imgURL}}
        />
      </View>
      <View>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        {products.inStock ? null : <Text style={styles.stock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default Store;
