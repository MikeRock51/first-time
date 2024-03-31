import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const days = [
    { day: "Sunday", id: 0 },
    { day: "Monday", id: 1 },
    { day: "Tuesday", id: 2 },
    { day: "Wednesday", id: 3 },
    { day: "Thursday", id: 4 },
    { day: "Friday", id: 5 },
    { day: "Saturday", id: 6 },
  ]

  const today = new Date().getDay();

  function announceDay(d) {
    let clickedDay = d.id - today;

    if (clickedDay < -1) clickedDay += 7
    
    switch(clickedDay) {
    case 0:
      alert(`Today is ${d.day}`);
      break;
    case 1:
      alert(`Tomorrow is ${d.day}`);
      break;
    case -1:
      alert(`Yesterday was ${d.day}`);
      break;
    default:
      alert(`${d.day} is in ${clickedDay} days`);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>My First Native App</Text>
        <StatusBar style="auto" />
      </View>

      <View>
        <Text style={styles.subHeading}>Days of the Week</Text>
        {days.map((d) => (
        <TouchableOpacity style={styles.days} onPress={() => announceDay(d)}>
          <Text>{d.day}</Text>
          {today === d.id && <Icon name='check-circle' color="#066839" size={20} />}
        </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    // justifyContent: 'center',
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#066839",
    backgroundColor: "#69b4",
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 15,
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15
  },
  days: {
    marginTop: 8,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
