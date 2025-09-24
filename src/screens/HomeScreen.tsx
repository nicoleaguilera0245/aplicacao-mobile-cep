import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import CepCard from '../components/CepCard';
import { fetchCepData } from '../services/api';

const HomeScreen: React.FC = () => {
    const [cepInput, setCepInput] = useState('');
    const [cepData, setCepData] = useState<any | null>(null);

    const handleSearch = async () => {
        if (!cepInput || cepInput.length < 8) {
            Alert.alert("CEP inválido", "Insira um CEP com 8 dígitos.");
            return;
        }

        try {
            const data = await fetchCepData(cepInput);
            setCepData(data);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível buscar os dados do CEP.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Código de Endereçamento Postal (CEP) do Brasil</Text>

            <Text style={styles.label}>Insira o CEP:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex.: 01310100"
                keyboardType="numeric"
                value={cepInput}
                onChangeText={setCepInput}
                maxLength={8}
            />
            <Button
                title="Buscar CEP"
                onPress={handleSearch}
                color="#05963a"
            />

            {cepData && (
                <CepCard
                    cep={cepData.cep}
                    address={cepData.address}
                    district={cepData.district}
                    city={cepData.city}
                    state={cepData.state}
                />
            )}
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 12,
        borderRadius: 4,
    },
    button: {
        backgroundColor: '#05963a',
    }
})
