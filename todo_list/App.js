import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { FlatList } from 'react-native-web';
import { CheckBox } from 'react-native-web'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionHeader}>Welcome, User</Text>

        <View style={styles.taskList}>
          <Text style={styles.taskItem}>Task 1</Text>
          <Text style={styles.taskItem}>Task 2</Text>
          <Text style={styles.taskItem}>Task 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  }, 
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskList: {
    paddingTop: 15,
  },
  taskItem: {
    marginBottom: 10,
    padding: 15,
  },
});
