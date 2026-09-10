import { FastifyRequest, FastifyReply, FastifyPluginOptions, FastifyInstance } from "fastify";
import { CreateRunController } from "./controllers/CreateRunController.js";
import { ListRunsController } from "./controllers/ListRunsController.js";
import { DeleteRunController } from "./controllers/DeleteRunController.js";
import { UpdateRunController } from "./controllers/UpdateRunController.js";
import { GetRunByIdController } from "./controllers/GetRunByIdController.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/runner", (request: FastifyRequest, reply: FastifyReply) => new CreateRunController().handle(request, reply))

    fastify.get("/runners", (request: FastifyRequest, reply: FastifyReply) => new ListRunsController().handle(request, reply))

    fastify.get("/runner/:id", (request: FastifyRequest, reply: FastifyReply) => new GetRunByIdController().handle(request, reply))

    fastify.delete("/runner/:id", (request: FastifyRequest, reply: FastifyReply) => new DeleteRunController().handle(request, reply))

    fastify.put("/runner/:id", (request: FastifyRequest, reply: FastifyReply) => new UpdateRunController().handle(request, reply))
}