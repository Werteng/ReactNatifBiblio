import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

const App = () => {
  const [isConnected, setIsConnected] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [scanned, setScanned] = useState(false)

  const handleConnection = () => {
    if (username.length > 3 && password.length > 3)
    setIsConnected(true)
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Le code bare de type: ${type}. Avec comme données : ${data} a été scanné`)
  }

  if (isConnected) {
    return (
      <View style={styles.container}>
        <Text>Vous pouvez scanner votre livre</Text>
        <BarCodeScanner 
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>Vous n'êtes pas connecté, veuillez vous connecter</Text>
        <TextInput 
          value={username}
          placeholder="Nom d'utilisateur"
          onChangeText={(value) => setUsername(value) }
        />
        <TextInput 
          value={password}
          secureTextEntry={true}
          placeholder="Mot de passe"
          onChangeText={(value) => setPassword(value) }
        />
        <Button 
          title='Connexion'
          onPress={handleConnection}
        />
      </View>      
    )
  }

}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
