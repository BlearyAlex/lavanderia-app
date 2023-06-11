import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const user = auth.currentUser;
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
    >
      <Pressable style={{ marginVertical: 10 }}>
        <Text>Bienvenido {user.email}</Text>
      </Pressable>
      <Pressable onPress={signOutUser}>
        <Text>Cerrar Sesión</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
