import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, FlatList, SectionList, } from 'react-native'
import Class from './components/Class';

const App = () => {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')


  // const users = [
  //   {
  //     id: 1,
  //     name: 'Shiv',
  //     data: ["PHP", "React.js", "Angular"]
  //   },
  //   {
  //     id: 2,
  //     name: 'Aman',
  //     data: ["Java", "Spring Boot", "React Native"]
  //   },
  //   {
  //     id: 3,
  //     name: 'Riya',
  //     data: ["Python", "Django", "Flask"]
  //   },
  //   {
  //     id: 4,
  //     name: 'Maya',
  //     data: ["HTML", "CSS", "Bootstrap"]
  //   },
  //   {
  //     id: 5,
  //     name: 'Arjun',
  //     data: ["JavaScript", "Vue.js", "Node.js"]
  //   },
  //   {
  //     id: 6,
  //     name: 'Nisha',
  //     data: ["Ruby", "Rails", "Sinatra"]
  //   },
  //   {
  //     id: 7,
  //     name: 'Karan',
  //     data: ["C#", ".NET", "ASP.NET"]
  //   },
  //   {
  //     id: 8,
  //     name: 'Sana',
  //     data: ["Kotlin", "Android", "Jetpack Compose"]
  //   },
  //   {
  //     id: 9,
  //     name: 'Rohan',
  //     data: ["Go", "Gin", "Beego"]
  //   },
  //   {
  //     id: 10,
  //     name: 'Tanya',
  //     data: ["C++", "Qt", "Boost"]
  //   }
  // ];



  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.warn("Hello")
  // }, [])


  return (

    // Handling text input using state and onPress() or onChangeText() Events
    // <View>
    //   <Text>Handling text inputs</Text>
    //   <Text>Your Name is :{name} </Text>
    //   <TextInput style={styles.textInput}
    //     placeholder='Enter your Name '
    //     onChangeText={(text => setName(text))}
    //     value={name}
    //   />
    //   <Button title='Press to clear' onPress={() => setName('')} />
    // </View>


    // ------------------------------------------ Simple form Validation
    // <View>
    //   <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}>Simple Form for login and SignUp </Text>

    //   <TextInput style={styles.textInput}
    //     value={name}
    //     onChangeText={(text) => setName(text)}
    //     placeholder='Enter you Name' />

    //   <TextInput style={styles.textInput}
    //     value={email}
    //     onChangeText={(text) => setEmail(text)}
    //     placeholder='Enter you Email' />

    //   <TextInput style={styles.textInput}
    //     secureTextEntry={true}
    //     value={password}
    //     onChangeText={(text) => setPassword(text)}
    //     placeholder='Enter you Password' />


    //   <Button title='clear form'
    //     onPress={() => {
    //       setPassword('')
    //       setEmail('')
    //       setName('')
    //     }} />


    // </View>

    //  FlatList -----------------------------------------------

    // <View style={styles.container}>
    //   <Text style={styles.title}>FlatList Render Item</Text>
    //   <FlatList style={styles.list}
    //     data={user}
    //     keyExtractor={(item) => item.id.toString()}
    //     renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
    //     horizontal={true} 
    //     showsHorizontalScrollIndicator={true} 
    //   />
    // </View>

    // SectionList -----------------------------------------------------


    // <View>
    //   <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 20 }}> Section List </Text>
    //   <SectionList
    //     sections={users}
    //     renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item}</Text>}
    //     renderSectionHeader={({ section: { name } }) => <Text style={{ fontSize: 25, color: 'red' }}>{name}</Text>}
    //   />
    // </View>

    // class based component----------------------------------------

    // <View>
    //   <Text>Hello</Text>
    //   <Class />
    // </View>



    // useEffect()----------- Life cycle
    // <View>
    //   <Text>life cycle with  {count} </Text>
    //   <Button title='UpdateCount' onPress={() => setCount(count + 1)} />
    //   <Button title='Decrease' onPress={() => setCount(count - 1)} />
    // </View>


    <View>
      <Text>

      </Text>
    </View>

  )
}


// const styles = StyleSheet.create({
//   textInput: {
//     fontSize: 18,
//     color: 'blue',
//     borderWidth: 2,
//     borderColor: 'black',
//     margin: 10,
//     borderRadius: 10
//   }
// })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  list: {
    display: 'flex'
  }
});





export default App