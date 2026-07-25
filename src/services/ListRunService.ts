import prismaClient from "../prisma/index.js";

class ListRunService {
    async execute() {
        const runner = await prismaClient.run.findMany()
        if (!runner) {
            throw new Error("Banco de dados vazio!")
        }
        return runner;
    }
}

export { ListRunService }
