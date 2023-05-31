// import React, { useState, useEffect } from 'react';
// import { SafeAreaView, Text } from 'react-native';
// import { get } from './src/components/api';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await get('/users');
//       setUsers(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <SafeAreaView>
//       {users.map((user) => (
//         <Text key={user.id}>{user.name}</Text>
//       ))}
//     </SafeAreaView>
//   );
// };

// export default UserList;

import React, { useState } from 'react';
import { SafeAreaView, Button, TextInput } from 'react-native';
import { post } from './src/components/api'; 

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreateUser = async () => {
    const userData = {
      name,
      email,
    };

    try {
      const response = await post('/users', userData);
      console.log(response); // Do something with the response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Create User" onPress={handleCreateUser} />
    </SafeAreaView>
  );
};

export default CreateUser;

