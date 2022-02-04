import { StyleSheet, Text, View, StatusBar, SafeAreaView, Button} from 'react-native';
import color from './src/utils/color';
import Form from './src/components/Form';
import React, {useState} from 'react';


export default function App() {
  const [capital, setcapital] = useState(null);
  const [interes, setinteres] = useState(null);
  const [meses, setmeses] = useState(null);

  const calcular = () => {
    console.log("cap -> " + capital);
    console.log("int -> " + interes);
    console.log("mes -> " + meses);
  }
  return (
    <>
      <StatusBar barStyle = "dark-content"/>
      <SafeAreaView style = {styles.safeArea}> 
        <View style = {styles.background}></View>
        <Text style = {styles.tittleApp}>Mis Prestamos</Text>
        <Form capital = {setcapital} interes = {setinteres} meses = {setmeses}></Form>
      </SafeAreaView>
      <View>
          <Text>Resultados</Text>
      </View>
      <View>
        <Text>Footer</Text>
        <Button title='Calcular' onPress={calcular}></Button>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
   //backgroundColor:color.PRIMARY_COLOR,
    height : 290,
    alignItems : "center"
  },
  tittleApp : {
    fontSize: 25,
    fontWeight: "bold",
    color : "#fff",
    marginTop: 15
  },
  background : {
    backgroundColor: color.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    position:'absolute',
    zIndex: -1
  }  
});
