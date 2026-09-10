import { FastifyRequest, FastifyReply } from "fastify";
import { ListRunsService } from "../services/ListRunsService.js"

class ListRunsController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listRunService = new ListRunsService()
        const runner = await listRunService.execute()
        reply.send(runner)
    }
}

export { ListRunsController }