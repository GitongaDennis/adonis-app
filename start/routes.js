'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.get('vehicles', 'VehicleController.index')
    Route.get('vehicle/:id', 'VehicleController.show')
    Route.post('vehicle', 'VehicleController.store')
    Route.put('vehicle/:id', 'VehicleController.update')
    Route.delete('vehicle/:id', 'VehicleController.delete')

}).prefix('api')