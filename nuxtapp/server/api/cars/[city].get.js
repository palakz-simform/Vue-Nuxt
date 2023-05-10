// import cars from "@/data/cars.json"

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler((event) => {
    console.log("I am hit")
    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);

    // console.log(filteredCars)
    // let filteredCars = cars;
    // filteredCars = filteredCars.filter((car) => {
    //     return car.city && car.city.toLowerCase() === city.toLowerCase()
    // })

    const filters = {
        city: city.toLowerCase()
    }

    if (make) {
        filters.make = make
        // filteredCars = filteredCars.filter((car) => {
        //     return car.make.toLowerCase() === make.toLowerCase()
        // })
    }
    if (minPrice || maxPrice) {
        filters.price = {}
    }
    if (minPrice) {
        filters.price.gte = parseInt(minPrice)
        // filteredCars = filteredCars.filter((car) => {
        //     return car.price >= parseInt(minPrice)
        // })
    }
    if (maxPrice) {
        filters.price.lte = parseInt(maxPrice)
        // filteredCars = filteredCars.filter((car) => {
        //     return car.price <= parseInt(maxPrice)
        // })
    }

    return prisma.car.findMany({
        where: filters
    });

})