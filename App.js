import { StatusBar } from 'expo-status-bar';
import useSWR from 'swr'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {fetchRates} from "./api/rates";

export default function App() {
  const { data } = useSWR('/api/rates', fetchRates)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {data?.rates.map(el => <Text key={el.id}>{el.to}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
