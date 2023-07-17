import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import Form from './src/components/Form';

export default function App() {
  const [modalVisible, setModalVisible]  = useState(false)

  const newDateHandler = () => {
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.titleBold}>Veterinary</Text> management schedule
      </Text>
      <Pressable
        onPress={newDateHandler}
        style={styles.btnNewDate}
      >
        <Text style={styles.btnTextNewDate}>new turn</Text>
      </Pressable>
      <Form modalVisible={modalVisible} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#374151',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9'
  },
  btnNewDate: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNewDate: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});
