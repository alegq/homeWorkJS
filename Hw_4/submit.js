"use strict";

class HashStorageClass {

    constructor(){
        this.hashStor = new Object();
    }

    addValue(key, value){
        this.hashStor[key] = value
        console.log(this.hashStor)
    }
    getValue(key) {
        return this.hashStor[key]
    }
    deleteValue(key) {
        if (this.hashStor.hasOwnProperty(key)) {
            delete this.hashStor[key]
            return true
        }else{
            return false
        }
    }
    getKeys = function () {
        return Object.keys(this.hashStor)
    }

}
var drinkStorage = new HashStorageClass()
drinkStorage.addValue('Вино',{'алкогольный':'да', 'рецепт приготовления':'смешать что-то'})
drinkStorage.addValue('Маргарита',{'алкогольный':'да', 'рецепт приготовления':'смешать что-то'})


//---------------   ADD  --------------
var add = function (){
    do{
        var alcoName = prompt('Введите название напитка, рецепт которого хотите добавить ')
    }while (! alcoName)

    const alcoDeg = confirm('Напиток алкогольный?')
    let alcoDegrees = alcoDeg ? 'да' : 'нет'

    do{
        var alcoRecipe = prompt('Введите рецепт напитка')
    }while (!alcoRecipe )

    drinkStorage.addValue(alcoName,{'алкогольный':alcoDegrees, 'рецепт приготовления':alcoRecipe})
    alert('Напиток добавлен')
}


//---------------   INFO  --------------
var info = function () {
    do{
        var alcoInfo = prompt('Введите название напитка, рецепт которого хотите получить ')
    }while (alcoInfo === '' || alcoInfo === ' ' )
    let info = drinkStorage.getValue(alcoInfo)
    if (info){
        console.log('Напиток:' + alcoInfo  )
        for (let i in info) {
            console.log(i + ':' + info[i] )
        }
    }else{
        alert('Такого напитка нет в хронилище')
    }
}
//---------------   DELETE  --------------
var delet = function () {
    do{
        var alcoDelet = prompt('Введите название напитка, рецепт которого хотите удалить ')
    }while (!alcoDelet)

    if (drinkStorage.deleteValue(alcoDelet)){
        alert('успешно удалено')
    }else{
        alert('Такого напитка нет')
    }
}
//---------------   LIST  --------------
var list = function () {
    alert(drinkStorage.getKeys())

}

document.querySelector("#add").onclick = add
document.querySelector("#info").onclick = info
document.querySelector("#delete").onclick = delet
document.querySelector("#list").onclick = list




