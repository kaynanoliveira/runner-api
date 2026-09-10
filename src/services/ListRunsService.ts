import prismaClient from "../prisma/index.js";

class ListRunsService {
    async execute() {
        const runner = await prismaClient.run.findMany()
        if (!runner) {
            throw new Error("Banco de dados vazio!")
        }
        return runner;
    }
}

export { ListRunsService }