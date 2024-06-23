// VehicleTrackerApp.js
import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const VehicleTrackerApp = () => {
  const [tracking, setTracking] = useState(false);
  const [watchId, setWatchId] = useState(null); // To store the watchId returned by Geolocation.watchPosition

  useEffect(() => {
    requestLocationPermission(); // Request permission when component mounts
  }, []);

  const requestLocationPermission = async () => {
    // Request location permission here
  };

  const startTracking = () => {
    setTracking(true);
    // Start location updates
    const id = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log('New location:', latitude, longitude);
        publishLocationToPubSub(latitude, longitude);
      },
      error => {
        console.error('Error obtaining location:', error);
      },
      { enableHighAccuracy: true, distanceFilter: 10 } // Optional config
    );
    setWatchId(id); // Store the watchId to be able to clear the watch later
  };

  const stopTracking = () => {
    setTracking(false);
    // Stop location updates
    if (watchId !== null) {
      Geolocation.clearWatch(watchId);
    }
  };

  const publishLocationToPubSub = (latitude, longitude) => {
    // Construct JSON payload
    const payload = {
      vehicleId: '6677046b0831fe97a5ba073d',
      latitude,
      longitude,
    };

    // Make HTTP POST request to Cloud Function endpoint
    axios.post('https://us-central1-letswork-60b88.cloudfunctions.net/publishLocation', payload)
      .then(response => {
        console.log('Location published successfully:', response.data);
      })
      .catch(error => {
        console.error('Error publishing location:', error);
      });
  };

  return (
    <View>
      <Button title="Start Tracking" onPress={startTracking} disabled={tracking} />
      <Button title="Stop Tracking" onPress={stopTracking} disabled={!tracking} />
    </View>
  );
};

export default VehicleTrackerApp;
