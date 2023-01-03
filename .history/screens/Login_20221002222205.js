import { View, Text, TouchableOpacity } from "react-native"


const Login = (props) => {

    const validateLogin = () => {
        props.navigation.navigate('Home')
    }

    return (
        <View>
           <TouchableOpacity onPress={validateLogin}>
                <Text> Entrar </Text>
           </TouchableOpacity>
        </View>
    )
} 

export default Login;







