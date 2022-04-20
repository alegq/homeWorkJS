"use strict";

function HashStorageFunc() {
    var self=this
    var  hashStor = new Object()
    self.addValue = function (key, value) {
        hashStor[key] = value
        console.log(hashStor)
    }
    self.getValue = function (key) {
        return hashStor[key]
    }
    self.deleteValue =function (key) {
        if (hashStor.hasOwnProperty(key)) {
            delete hashStor[key]
            return true
        }else{
            return false
        }
    }
    self.getKeys = function () {
         return Object.keys(hashStor)
    }
}
const drinkStorage = new HashStorageFunc()
drinkStorage.addValue('Маргарита',{'алкогольный':'да', 'рецепт приготовления':'смешать что-то'})
drinkStorage.addValue('Вино',{'алкогольный':'да', 'рецепт приготовления':'смешать чт'})
//---------------   ADD  --------------
var add = function (){
    console.log(5)
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




