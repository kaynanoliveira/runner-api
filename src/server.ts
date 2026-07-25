import Fastify from "fastify";
import cors from "@fastify/cors"
import { routes } from "./routes.js";

const app = Fastify({ logger: true });  // Instanciando o fastify para poder ter acesso aos comandos dele

const start = async () => {
    await app.register(cors)
    await app.register(routes)

    try {
        await app.listen({ port: 3333 })

    } catch (error) {
        process.exit(1)
    }
}

start()