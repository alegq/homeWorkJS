"use strict";
var hash =  new Object();

class LocStorageClass {

    constructor(productType){

         if(JSON.parse(window.localStorage.getItem('LocStorH'))){
             hash = JSON.parse(window.localStorage.getItem('LocStorH'))
             this.hashStor = hash[productType]
          }else {
            this.hashStor = new Object();
         }
    }
    addValue(productType,key, value){
        this.hashStor[key] = value
        this.updateLocStor(productType)
    }
    getValue(key) {
        return this.hashStor[key]
    }
    deleteValue(productType,key) {
        if (this.hashStor.hasOwnProperty(key)) {
            delete this.hashStor[key]
            this.updateLocStor(productType)
            return true
        }else{
            return false
        }
    }
    getKeys = function () {
        return Object.keys(this.hashStor)
    }
    updateLocStor = function (productType) {
        hash[productType] = this.hashStor;
        window.localStorage.setItem('LocStorH',JSON.stringify(hash));
    }
}
var dishStorage = new LocStorageClass('Блюда')
var drinkStorage = new LocStorageClass('Напитки')

dishStorage.addValue('Блюда','Торт',{ 'рецепт приготовления':'смешать что-то'})
dishStorage.addValue('Блюда','Салат',{ 'рецепт приготовления':'смешать что-то'})
drinkStorage.addValue('Напитки','Вино',{'алкогольный':'да', 'рецепт приготовления':'смешать что-то'})
drinkStorage.addValue('Напитки','Маргарита',{'алкогольный':'да', 'рецепт приготовления':'смешать что-то'})

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

        drinkStorage.addValue('Напитки',alcoName,{'алкогольный':alcoDegrees, 'рецепт приготовления':alcoRecipe})
        alert('Напиток добавлен')
    }else if(buttonId =='addDish'){
        drinkStorage.addValue('Блюда',alcoName,{'рецепт приготовления':alcoRecipe})
        alert('Блюдо добавлено')
    }
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
var delet = function (EO) {
    var buttonId = EO.target.id
    console.log(buttonId)
    do{
        var alcoDelet = prompt('Введите название продукта, рецепт которого хотите удалить ')
    }while (!alcoDelet)
    if (buttonId =='delete'){
        if (drinkStorage.deleteValue('Напитки',alcoDelet)){
            alert('успешно удалено')
        }else{
            alert('Такого напитка нет')
        }
    } else if(buttonId =='deleteDish'){
        if (dishStorage.deleteValue('Блюда',alcoDelet)){
            alert('успешно удалено')
        }else{
            alert('Такого напитка нет')
        }
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

document.querySelector("#addDish").onclick = add
document.querySelector("#infoDish").onclick = info
document.querySelector("#deleteDish").onclick = delet
document.querySelector("#listDish").onclick = list




