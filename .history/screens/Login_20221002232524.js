import {View, Text, Touchable} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = (props) => {

    const validateLogin = () => {
        props.navigation.navigate('Home')
    }

    return(
        <View>
            <TouchableOpacity onPress={validateLogin}>
                <Text>login aqui agora vai porra </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login