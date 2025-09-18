import axios from "axios";

const BASE_URL = 'https://cep.awesomeapi.com.br/json';

export const fetchCepData = async (cep: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/${cep}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        throw error
    }
}
