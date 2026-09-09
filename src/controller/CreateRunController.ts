import { CreateRunService } from "../services/CreateRunService.js";
import { FastifyRequest, FastifyReply } from "fastify";
import { RunnerProps } from "../types/RunnerProps.js";

class CreateRunController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { runnerName, distance, duration, pace, comments } = (request.body as RunnerProps) || {};
        const runnerService = new CreateRunService();

        try {
            const runner = await runnerService.execute({ runnerName, distance, duration, pace, comments })
            reply.code(201).send(runner)

        } catch (err: any) {
            reply.code(400).send({ error: err.message })
        }

    }
}

export { CreateRunController }