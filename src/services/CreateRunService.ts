import prismaClient from "../prisma/index.js";
import { RunnerProps } from "../types/RunnerProps.js";

class CreateRunService {
    async execute({ runnerName, distance, duration, pace, comments }: RunnerProps) {
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