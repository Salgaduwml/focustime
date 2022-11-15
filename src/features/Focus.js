import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from '../utils/sizes'
import { colors } from '../utils/colors';

export default Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <RoundedButton title="+" size={60} onPress={() => addSubject(subject)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    marginRight: spacing.md,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
