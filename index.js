import axios from 'axios';

async function get() {
    try {
        const response = await axios.get("https://trabalho-integrador-ia-v1.onrender.com");
        console.log("API respondendo:", response.status); // Exibe o status da resposta
    } catch (error) {
        console.error("Erro na requisição à API:", error.message); // Exibe a mensagem de erro
    }
}

setInterval(get, 120000); // Chama a função get a cada 5 segundos

console.log("Programa de manutenção da API em execução...")