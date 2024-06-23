// App.js (or index.js)
import React from 'react';
import { View, Text } from 'react-native';
import VehicleTrackerApp from './VehicleTrackerApp'; // Replace with your component file name

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Vehicle Tracking App</Text>
      <VehicleTrackerApp />
    </View>
  );
};

export default App;
