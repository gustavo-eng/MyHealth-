import { View, Text, TouchableOpacity } from "react-native"


const Login = (props) => {

    const validateLogin = () => {

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







