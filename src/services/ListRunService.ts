import prismaClient from "../prisma/index.js";

class ListRunService {
    async execute() {
        const runs = await prismaClient.run.findMany()

        if (runs.length === 0) {
            throw new Error("Banco de dados vazio!")
        }

        return runs;
    }
}

export { ListRunService }
