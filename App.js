
import { StyleSheet, Text, View ,SafeAreaView,TextInput,TouchableOpacity,FlatList} from 'react-native';
import {useState} from "react";

export default function App() {
  const [todo,setTodo]=useState("")
  const [todos,setTodos]=useState([])
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("")
  }
  const removeTodo = (index) => {
   const newTodo=[...todos]
    newTodo.splice(index,1)
    setTodos(newTodo)

  }
  return (
    <SafeAreaView style={{flex: 1 ,backgroundColor:"lightblue"}}>
       <View  style={styles.container}>
         <Text style={styles.title}>TODO LİST</Text>

         <TextInput value={todo} onChangeText={setTodo}
                    placeholder="todo..." style={styles.input}/>
         <TouchableOpacity onPress={addTodo} style={styles.button}>
           <Text style={styles.buttontext}>Add Todo</Text>
         </TouchableOpacity>
         <View style={styles.void}/>
         <FlatList keyExtractor={(item)=>item + Math.random()} data={todos} renderItem={({item})=>(
             <View style={styles.todoContainer}>
               <Text style={styles.list}>{item}</Text>
               <TouchableOpacity onPress={removeTodo} style={styles.remove}>
                 <Text style={styles.removeText}>X</Text>
               </TouchableOpacity>
             </View>
         )}/>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:16,
    backgroundColor:"lightblue"

  },
  title:{
    fontSize:30,



  },
  input:{
    paddingVertical:12,
    paddingHorizontal:16,
    borderRadius:6,
    borderWidth:1,
    backgroundColor:"#ddd",
    fontSize:18,
    marginTop:32
  },
  button:{
    backgroundColor:"lightgreen",
    paddingVertical:12,
    paddingHorizontal:16,
    borderRadius:6,
    alignSelf:"flex-end",
    alignItems:"center",
    marginTop:8

  },
  buttontext:{
    fontSize:18
  },
  void:{
    height:1,
    backgroundColor:"#ddd",
    marginVertical:32
  },
  todoContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottomWidth:1,
    borderColor:"#ddd",
    paddingVertical:12
  },
  list:{
    fontSize:18,
  },
  remove:{
    backgroundColor:"red",
    width:23,
    height:23,
    borderRadius:13,
    justifyContent:"center",
    alignItems: "center"


  },
  removeText:{
     fontSize:18,
    color:"#fff"
  }

});
