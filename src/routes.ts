import { FastifyRequest, FastifyReply, FastifyPluginOptions, FastifyInstance } from "fastify";
import { CreateRunController } from "./controller/CreateRunController.js";
import { ListRunController } from "./controller/ListRunController.js";
import { DeleteRunController } from "./controller/DeleteRunController.js";
import { UpdateRunController } from "./controller/UpdateRunController.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/runner", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateRunController().handle(request, reply)
    })
    fastify.get("/runners", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListRunController().handle(request, reply)
    })
    fastify.delete("/runner", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteRunController().handle(request, reply)
    })
    fastify.put("/runner/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateRunController().handle(request, reply)
    })
}