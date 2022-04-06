"use strict";
class LocStorageClass {

    constructor(productType){
        this.productType = productType

        if(JSON.parse(window.localStorage.getItem(productType))){
            this.hashStor =JSON.parse(window.localStorage.getItem(productType))
          }else {
            this.hashStor = new Object();
         }
    }
    addValue(key, value){
        this.hashStor[key] = value
        this.updateLocStor()
    }
    getValue(key) {
        return this.hashStor[key]
    }
    deleteValue(key) {
        if (this.hashStor.hasOwnProperty(key)) {
            delete this.hashStor[key]
            this.updateLocStor()
            return true
        }else{
            return false
        }
    }
    getKeys = function () {
        return Object.keys(this.hashStor)
    }
    updateLocStor = function () {
        window.localStorage.setItem(this.productType,JSON.stringify(this.hashStor));
    }
}
var dishStorage = new LocStorageClass('Блюда')
var drinkStorage = new LocStorageClass('Напитки')

dishStorage.addValue('Торт',{ 'рецепт приготовления':'смешать что-то'})
dishStorage.addValue('Салат',{ 'рецепт приготовления':'смешать что-то'})
drinkStorage.addValue('Вино',{'алкогольный':'да', 'рецепт приготовления':'смешать что-то'})
drinkStorage.addValue('Маргарита',{'алкогольный':'да', 'рецепт приготовления':'смешать что-то'})

//---------------   ADD  --------------
var add = function (EO){
    var buttonId = EO.target.id
    do{
        if (buttonId =='add'){
            var alcoName = prompt('Введите название напитка, рецепт которого хотите добавить ')
        } else if (buttonId =='addDish'){
            var alcoName = prompt('Введите название блюда, рецепт которого хотите добавить ')
        }
    }while (! alcoName)

    do{
        var alcoRecipe = prompt('Введите рецепт')
    }while (!alcoRecipe )

    if (buttonId =='add'){
        const alcoDeg = confirm('Напиток алкогольный?')
        let alcoDegrees = alcoDeg ? 'да' : 'нет'

        drinkStorage.addValue(alcoName,{'алкогольный':alcoDegrees, 'рецепт приготовления':alcoRecipe})
        alert('Напиток добавлен')
    }else if(buttonId =='addDish'){
        dishStorage.addValue(alcoName,{'рецепт приготовления':alcoRecipe})
        alert('Блюдо добавлено')
    }
}

//---------------   INFO  --------------
var info = function (EO) {
    var buttonId = EO.target.id
    do{
        var alcoInfo = prompt('Введите название продукта, рецепт которого хотите получить ')
    }while (alcoInfo === '' || alcoInfo === ' ' )
    let info
    if(buttonId == 'info'){
        info = drinkStorage.getValue(alcoInfo)
    }else if (buttonId == 'infoDish'){
        info = dishStorage.getValue(alcoInfo)
    }
    if (info){
        console.log('Продукт:' + alcoInfo  )
        for (let i in info) {
            console.log(i + ':' + info[i] )
        }
    }else{
        alert('Такого напитка нет в хронилище')
    }
}
//---------------   DELETE  --------------
var delet = function (EO) {
    var buttonId = EO.target.id
    do{
        var alcoDelet = prompt('Введите название продукта, рецепт которого хотите удалить ')
    }while (!alcoDelet)
    if (buttonId =='delete'){
        if (drinkStorage.deleteValue(alcoDelet)){
            alert('успешно удалено')
        }else{
            alert('Такого напитка нет')
        }
    } else if(buttonId =='deleteDish'){
        if (dishStorage.deleteValue(alcoDelet)){
            alert('успешно удалено')
        }else{
            alert('Такого напитка нет')
        }
    }
}
//---------------   LIST  --------------
var list = function (EO) {
    var buttonId = EO.target.id
    if (buttonId =='list'){
        alert(drinkStorage.getKeys())
    }else if(buttonId =='listDish'){
        alert(dishStorage.getKeys())
    }



}

document.querySelector("#add").onclick = add
document.querySelector("#info").onclick = info
document.querySelector("#delete").onclick = delet
document.querySelector("#list").onclick = list

document.querySelector("#addDish").onclick = add
document.querySelector("#infoDish").onclick = info
document.querySelector("#deleteDish").onclick = delet
document.querySelector("#listDish").onclick = list




