import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

import cars from "@/data/cars.json"
export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    // const car = cars.find(c => {
    //     return c.id === parseInt(id)
    // })
    const car = await prisma.car.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!car) {
        throw createError({
            statusCode: 404,
            statusessage: `Car with ID of ${id} does not exists`
        })
    }
    return car

})