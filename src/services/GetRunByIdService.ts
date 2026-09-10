import prismaClient from "../prisma/index.js";
import { GetRunByIdProps } from "../types/GetRunByIdProps.js";

class GetRunByIdService {
    async execute({ id }: GetRunByIdProps) {
        if (!id) {
            throw new Error("ID não fornecido!")
        }

        const run = await prismaClient.run.findUnique({
            where: {
                id
            }
        })
        return run;
    }
}

export { GetRunByIdService }