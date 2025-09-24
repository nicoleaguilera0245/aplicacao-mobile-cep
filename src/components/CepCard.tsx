import React from "react";
import { View, Text, StyleSheet } from 'react-native';

type CepCardProps = {
    cep: string;
    address: string;
    district: string;
    city: string;
    state: string;
};

const CepCard: React.FC<CepCardProps> = ({ cep, address, district, city, state }) => { // Componentiza a constante e a transforma em uma função que recebe propriedades específicas
    return ( // Retorna uma interface visual
        <View style={styles.card}>
            <Text style={styles.label}>CEP:</Text>
            <Text style={styles.value}>{cep}</Text>

            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.value}>{address}</Text>

            <Text style={styles.label}>Bairro:</Text>
            <Text style={styles.value}>{district}</Text>

            <Text style={styles.label}>Cidade:</Text>
            <Text style={styles.value}>{city} - {state}</Text>
        </View>
    );
};

export default CepCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f2f2f2',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 2,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 8,
    },
    value: {
        fontSize: 14,
        marginBottom: 4,
    },
});
