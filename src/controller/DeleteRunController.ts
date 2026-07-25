import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteRunProps } from "../types/DeleteRunProps.js";
import { DeleteRunService } from "../services/DeleteRunService.js";

class DeleteRunController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        // Pegando o id enviado via query na URL (ex: /run?id=65a...)
        const { id } = request.params as DeleteRunProps;

        const deleteRunService = new DeleteRunService()
        const deletedRunner = await deleteRunService.execute({ id })
        reply.code(200).send(deletedRunner)
    }
}

export { DeleteRunController }