import { FastifyRequest, FastifyReply } from "fastify";
import { ListRunService } from "../services/ListRunService.js";

class ListRunController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listRunService = new ListRunService()
        const runner = await listRunService.execute()
        reply.send(runner)
    }
}

export { ListRunController }