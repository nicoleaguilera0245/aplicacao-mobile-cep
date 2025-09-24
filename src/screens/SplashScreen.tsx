import React, { useEffect } from "react";
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SplashScreen: React.FC = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/brazil-flag-icon.png')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    }
});