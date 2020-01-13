'use strict'
//Including our model
const Vehicle = use('App/Models/Vehicle')
class VehicleController {
    async index({response}){
        let vehicles = await Vehicle.all()

        return response.json(vehicles)
    }

    async store({request, response}){
        const vehicleInfo = request.only(['vehicle_name'])

        const vehicle = new Vehicle()
        vehicle.vehicle_name = vehicleInfo.vehicle_name
        
        await vehicle.save()
        return response.status(201).json(vehicle)
    }
    async show({params, response}){
        const vehicle = await Vehicle.find(params.id)

        return response.json(vehicle)
    }
    //update route
    async update({params, request, response}) {
        const vehicleInfo = request.only(['vehicle_name'])
        const vehicle = await Vehicle.find(params.id)
        if(!vehicle){
            return response.status(404).json({data: 'Data not found'})
        }

        vehicle.vehicle_name = vehicleInfo.vehicle_name

        await vehicle.save()

        return response.status(200).json(vehicle)
    }

//delete route
    async delete({params, response}){
        const vehicle = await vehicle.find(params.id)
        if(!vehicle){
            return response.status(404).json({data: 'Data not found'})

        }

        await vehicle.delete()
        return response.status(204).json(null)
    }
    async delete({params, response}){
        const vehicle = await Vehicle.find(params.id)
        if(!vehicle){
            return response.status(404).json({data: 'Data not found'})
        } 

        await vehicle.delete()

        return response.status(204).json(null)
    }

}
module.exports = VehicleController
