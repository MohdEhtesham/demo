import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import callApi from './src/components/CallApi';

const App = () => {
  const [dataValue, setDateValue] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await callApi('GET', '/users');
      console.log(data);
      setDateValue(data);
     
    } catch (error) {

    }
  };

  const postData = async () => {
    try {
      const data = await callApi('POST', '/example-endpoint', {key: 'value'});
      console.log('API response:', data);

    } catch (error) {

    }
  };



  return (
    <SafeAreaView>
      
      <FlatList
        data={dataValue}
        keyExtractor={(item, index) => index.toString()}
       renderItem={(item, index)=>{
        console.log("iiiiii",item)
        return <Text>{item.item.name}</Text>
       }}
      />
    </SafeAreaView>
  );
};

export default App;
