import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateRunProps } from "../types/UpdateRunProps.js";
import { UpdateRunService } from "../services/UpdateRunService.js";

// Definição da classe Controller, responsável por receber a requisição HTTP e devolver a resposta
class UpdateRunController {
    // Método que lida com a requisição de atualização
    async handle(request: FastifyRequest, reply: FastifyReply) {

        // 1️⃣ EXTRAÇÃO DO ID: Captura o 'id' enviado nos parâmetros da rota/URL (ex: /run/123456)
        const { id } = request.params as { id: string };

        // 2️⃣ EXTRAÇÃO DO BODY: Captura os dados enviados no corpo da requisição JSON
        // Define o tipo como UpdateRunProps para garantir o autocompletar e a checagem de tipos
        const { runnerName, distance, duration, pace, comments } = request.body as UpdateRunProps;

        // 3️⃣ INSTÂNCIA DO SERVICE: Cria a instância da classe com a regra de negócio do Update
        const updateRunService = new UpdateRunService();

        // 4️⃣ EXECUÇÃO DO SERVICE: Chama o método execute repassando o ID da URL e os campos vindos do body
        const updateRun = await updateRunService.execute({
            id,
            runnerName,
            distance,
            duration,
            pace,
            comments
        });

        // 5️⃣ RESPOSTA HTTP: Envia o status HTTP 200 (Sucesso) e devolve a corrida atualizada como JSON
        reply.status(200).send(updateRun);
    }
}

export { UpdateRunController };