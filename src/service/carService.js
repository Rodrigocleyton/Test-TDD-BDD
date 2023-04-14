const BaseRepository = require('./../repository/base/baseRepository')

//criação da classe

class CarService {
    constructor({car}) {
        this.carRepository = new BaseRepository({ file:car })
    }
    test(){
        return this.carRepository.find()
    }
}

module.exports = CarService