import { View, Text, Alert } from "react-native";
import { Paystack } from 'react-native-paystack-webview';

export function Pay({ navigation, route }) {
    const { email, phone, price } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <Paystack
                paystackKey="your-public-key-here"
                amount={price}
                billingEmail={email}
                activityIndicatorColor="green"
                onCancel={(e) => {
                    // Alert.alert(
                    //     'Transaction Status',
                    //     'You have cancelled this transaction',
                    //     [
                    //         { text: 'Return to Order', onPress: () => navigation.navigate('Order') }
                    //     ]
                    // )
                    navigation.navigate('Order') 
                }}
                onSuccess={(res) => {
                    // insert order to db
                    // Initiate a conformation
                    Alert.alert(
                        'Payment Status',
                        `You payment of NGN${price} was received`,
                        [
                            { text: 'Return to Customize', onPress: () => navigation.navigate('Customize ') }
                        ]
                    )
                }}
                autoStart={true}
            />
        </View>
    )
}