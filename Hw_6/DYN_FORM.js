var formDef1=
    [
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
        {label:'E-mail для связи:',kind:'shorttext',name:'email'},
        {label:'Рубрика каталога:',kind:'combo',name:'division',
            variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
        {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
        {label:'Разрешить отзывы:',kind:'check',name:'votes'},
        {label:'Описание сайта:',kind:'memo',name:'description'},
        {caption:'Опубликовать',kind:'submit'},
    ];

var formDef2=
    [
        {label:'Фамилия:',kind:'longtext',name:'lastname'},
        {label:'Имя:',kind:'longtext',name:'firstname'},
        {label:'Отчество:',kind:'longtext',name:'secondname'},
        {label:'Возраст:',kind:'number',name:'age'},
        {caption:'Зарегистрироваться',kind:'submit'},
    ];

function addForm(formDef) {

    var newForm = document.createElement("form")

    for (let i = 0; i<formDef.length; i++){
        newForm = addElement(formDef[i],newForm)
    }

    document.body.appendChild(newForm);

    function addElement(options,newForm) {

        if (options.label){

            var newLabel = document.createElement("label")
            newLabel.innerHTML = options.label
            newForm.appendChild(newLabel)

            var newBr = document.createElement("br")

            switch (options.kind) {
                case 'combo': {
                    var newSelect = document.createElement("select")
                    newSelect.name = options.name

                    options.variants.forEach(creatSelectOptions)

                    newLabel.appendChild(newSelect)
                    newLabel.appendChild(newBr)

                    function creatSelectOptions(variant) {
                        var newSelOpt = document.createElement('option')
                        newSelOpt.innerHTML = variant.text
                        newSelOpt.value = variant.value
                        newSelect.appendChild(newSelOpt)
                    }
                    break;
                }
                case 'radio':{
                    options.variants.forEach(creatRadio)

                    function creatRadio(variant) {
                        var newRadio = document.createElement('input')
                        var newRadioName = document.createElement('span')
                        newRadio.type = 'radio'
                        newRadio.name= variant.name
                        newRadio.value = variant.value
                        newRadioName.innerHTML = variant.text
                        newLabel.appendChild(newRadio)
                        newLabel.appendChild(newRadioName)
                    }
                    newLabel.appendChild(newBr)
                    break;
                }
                case 'check':{
                    var newCheck = document.createElement('input')
                    newCheck.type = 'checkbox'
                    newCheck.name = options.name
                    newCheck.checked = 'checked'
                    newLabel.appendChild(newCheck)
                    newLabel.appendChild(newBr)
                    break;
                }
                case 'memo':{
                    newLabel.innerHTML = options.label + '<br>'
                    newLabel.appendChild(newBr)
                    var newTextarea = document.createElement('textarea')
                    newLabel.appendChild(newTextarea)
                    newLabel.appendChild(newBr)
                    break;
                }
                default:{
                    var newInput = document.createElement("input")
                    newInput.name = options.name

                    newLabel.appendChild(newInput)
                    newLabel.appendChild(newBr)}
            }

        }else{
            var newInputSub= document.createElement("input")
            newInputSub.type = 'submit';
            newInputSub.value = options.caption;
            newForm.appendChild(newInputSub)
        }
        return newForm
    }
}
addForm(formDef1)

addForm(formDef2)


