import React from 'react';
import {View, Text, Button} from 'react-native';

// const Home = props => {
//   console.warn(props.route.params);
//   const params = props.route.params;
//   return (
//     <View>
//       <Text>Home {params.name}</Text>
//       <Button
//         title="go to profile"
//         onPress={() => {
//           props.navigation.navigate('Profile');
//         }}
//       />
//     </View>
//   );
// };
const Home = props => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="go to details"
        onPress={() => {
          props.navigation.navigate('Details');
        }}
      />
    </View>
  );
};

export default Home;
