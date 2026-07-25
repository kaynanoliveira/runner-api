import prismaClient from "../prisma/index.js";
import { UpdateRunProps } from "../types/UpdateRunProps.js";

// Definição da classe que contém a regra de negócio para atualizar corridas
class UpdateRunService {
    // Método principal que executa a atualização
    // Desestrutura os dados recebidos com base na tipagem UpdateRunProps
    async execute({ id, runnerName, distance, duration, pace, comments }: UpdateRunProps) {

        // 1️⃣ VALIDAÇÃO DO ID: Verifica se o ID foi enviado
        // Se o ID não existir/vier vazio, interrompe o código e lança um erro
        if (!id) {
            throw new Error("ID não fornecido para atualização.");
        }

        // 2️⃣ BUSCA NO BANCO: Procura a corrida pelo ID fornecido
        // Usa o recurso de sintaxe abreviada { id } que equivale a { id: id }
        const findRun = await prismaClient.run.findUnique({
            where: {
                id
            }
        });

        // 3️⃣ VALIDAÇÃO DA EXISTÊNCIA: Verifica se a corrida realmente existe no banco
        // Se a busca não retornar nada (null), lança um erro avisando que não foi encontrada
        if (!findRun) {
            throw new Error("Corrida não encontrada para atualização");
        }

        // 4️⃣ ATUALIZAÇÃO NO BANCO: Executa a alteração do registro
        const updateRun = await prismaClient.run.update({
            // Garante que a alteração será feita na corrida que acabamos de buscar
            where: {
                id: findRun.id
            },
            // Define os novos dados usando o operador '??' (Nullish Coalescing)
            // Se um dado novo for enviado, ele é usado; caso contrário, mantém o valor antigo já gravado em findRun
            data: {
                //  Nome no Banco :  Dado Novo   ??  Dado Antigo
                runnerName: runnerName ?? findRun.runnerName,
                distance: distance ?? findRun.distance,
                duration: duration ?? findRun.duration,
                pace: pace ?? findRun.pace,
                comments: comments ?? findRun.comments,
            }
        });

        // 5️⃣ RETORNO: Devolve o objeto da corrida já atualizado para quem chamou o Service (Controller)
        return updateRun;
    }
}

export { UpdateRunService };