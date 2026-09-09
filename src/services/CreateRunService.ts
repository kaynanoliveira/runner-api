import prismaClient from "../prisma/index.js";
import { RunnerProps } from "../types/RunnerProps.js";

class CreateRunService {
    async execute({ runnerName, distance, duration, pace, comments }: RunnerProps) {
        if (!runnerName || !distance || !duration || !pace) {
            throw new Error("Preencha todos os campos obrigatórios.")
        }
        const newRunner = await prismaClient.run.create({
            data: {
                runnerName,
                distance,
                duration,
                pace,
                comments
            }
        })
        return newRunner;
    }
}

export { CreateRunService }