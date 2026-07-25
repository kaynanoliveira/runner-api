import prismaClient from "../prisma/index.js";
import { DeleteRunProps } from "../types/DeleteRunProps.js";

class DeleteRunService {
    async execute({ id }: DeleteRunProps) {
        // VALIDAÇÃO 1: Garante que um ID foi enviado na requisição
        // Se o id vier vazio, nulo ou indefinido, a API barra a execução aqui
        if (!id) {
            throw new Error("ID não fornecido para exclusão.")
        }

        // BUSCA NO BANCO: Usa o findUnique para procurar se existe alguma corrida com esse ID específico
        // O 'await' faz o código esperar a resposta do banco antes de ir para a próxima linha
        const findRun = await prismaClient.run.findUnique({
            where: {
                id
            }
        });

        // VALIDAÇÃO 2: Se a busca no banco não retornar nada (findRun for null), significa que o ID não existe
        // Interrompe a execução e lança um erro avisando o cliente
        if (!findRun) {
            throw new Error("Corrida não encontrada");
        }

        // EXCLUSÃO: Chama o método delete do Prisma para remover o registro do banco
        // Passamos o ID confirmado da corrida que encontramos na busca anterior
        await prismaClient.run.delete({
            where: {
                id: findRun.id
            }
        });

        // RETORNO: Se tudo deu certo até aqui, retorna um objeto de confirmação para o Controller
        return { message: "Corrida deletada com sucesso!" };
    }
}

export { DeleteRunService }