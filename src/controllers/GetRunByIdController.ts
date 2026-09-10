import { FastifyRequest, FastifyReply } from "fastify";
import { GetRunByIdProps } from "../types/GetRunByIdProps.js";
import { GetRunByIdService } from "../services/GetRunByIdService.js";

class GetRunByIdController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        // 1. Extrai o ID dos parâmetros da URL (ex: /runner/65f1a2b...)
        const { id } = request.params as GetRunByIdProps

        const getRunByIdService = new GetRunByIdService()
        // 2. Executa a busca no serviço
        const run = await getRunByIdService.execute({ id })

        // 3. Se a corrida não for encontrada, retorna 404
        if (!run) {
            return reply.status(404).send({ message: "Corrida não encontrada." })
        }
        // 4. Retorna a corrida com status 200 (Sucesso)
        return reply.status(200).send(run)

    }
}

export { GetRunByIdController }