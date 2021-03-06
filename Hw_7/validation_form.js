var formDef1=
    [
        {label:'Разработчики:',kind:'longtext',name:'develname'},
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Дата запуска сайта:',kind:'datetext',name:'datestart'},
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
    newForm.name = 'INFO'
    newForm.action = 'https://fe.it-academy.by/TestForm.php'
    newForm.noValidate = 'novalidate'

    for (let i = 0; i<formDef.length; i++){
        newForm = addElement(formDef[i],newForm,i)
    }

    document.body.appendChild(newForm);

    function addElement(options,newForm,i) {

        if (options.label){

            var newLabel = document.createElement("label")
            newLabel.id = 'n' + i
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
                case 'datetext':{
                    var newDate = document.createElement('input')
                    newDate.type = 'date'
                    newDate.name = 'datestart'
                    //newDate.value = '2022-03-14'
                    newDate.min = '1991-08-06'
                    newDate.required = 'required'

                    newLabel.appendChild(newDate)
                    newLabel.appendChild(newBr)

                    break
                }
                case 'radio':{
                    options.variants.forEach(creatRadio)

                    function creatRadio(variant) {
                        var newRadio = document.createElement('input')
                        var newRadioName = document.createElement('span')
                        newRadio.type = 'radio'
                        newRadio.name= options.name
                        newRadio.value = variant.value
                        newRadio.checked = 'checked'
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
                    //newCheck.checked = 'checked'
                    newLabel.appendChild(newCheck)
                    newLabel.appendChild(newBr)
                    break;
                }
                case 'memo':{
                    newLabel.innerHTML = options.label + '<br>'
                    newLabel.appendChild(newBr)
                    var newTextarea = document.createElement('textarea')
                    newTextarea.name = 'memo'
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
//addForm(formDef2)

addForm(formDef1)

var formTag=document.forms.INFO; // а можно было найти через getElementById
formTag.addEventListener('submit',clearForm,false); // назначаем обработчик события submit
formTag.addEventListener('submit',validateInfoForm,false); // назначаем обработчик события submit

var inputTagdev=document.getElementsByName('develname')
var inputTagName=document.getElementsByName('sitename')
var inputTagUrl=document.getElementsByName('siteurl')
var inputTagDate=document.getElementsByName('datestart')
var inputTagNum=document.getElementsByName('visitors')
var inputTagEmail=document.getElementsByName('email')
var inputTagSelect=document.getElementsByName('division')
var inputTagRadio=document.getElementsByName('payment')
var inputTagCheckbox=document.getElementsByName('votes')
var inputTagMemo=document.getElementsByName('memo')



inputTagdev[0].addEventListener('blur', clearError, false)
inputTagName[0].addEventListener('blur', clearError, false)
inputTagUrl[0].addEventListener('blur', clearError, false)
inputTagDate[0].addEventListener('blur', clearError, false)
inputTagNum[0].addEventListener('blur', clearError, false)
inputTagEmail[0].addEventListener('blur', clearError, false)
inputTagMemo[0].addEventListener('blur', clearError, false)


inputTagdev[0].addEventListener('blur', validateInfoForm, false);
inputTagName[0].addEventListener('blur', validateInfoForm, false);
inputTagUrl[0].addEventListener('blur', validateInfoForm, false);
inputTagDate[0].addEventListener('blur', validateInfoForm, false);
inputTagNum[0].addEventListener('blur', validateInfoForm, false);
inputTagEmail[0].addEventListener('blur', validateInfoForm, false);
inputTagMemo[0].addEventListener('blur', validateInfoForm, false);

inputTagCheckbox[0].addEventListener('change', clearError, false)
inputTagCheckbox[0].addEventListener('change', validateInfoForm, false);

inputTagSelect[0].addEventListener('change', clearError, false)
inputTagSelect[0].addEventListener('change', validateInfoForm, false);

inputTagRadio[0].addEventListener('change', clearErrorRadio, false)
inputTagRadio[1].addEventListener('change', clearErrorRadio, false)
inputTagRadio[2].addEventListener('change', clearErrorRadio, false)
inputTagRadio[0].addEventListener('change', validateInfoForm, false);
inputTagRadio[1].addEventListener('change', validateInfoForm, false);
inputTagRadio[2].addEventListener('change', validateInfoForm, false);


function clearForm() {
    clearErrorform(inputTagdev[0])
    clearErrorform(inputTagName[0])
    clearErrorform(inputTagUrl[0])
    clearErrorform(inputTagDate[0])

    clearErrorform(inputTagNum[0])
    clearErrorform(inputTagEmail[0])
    clearErrorform(inputTagSelect[0])

    clearErrorform(inputTagCheckbox[0])
    clearErrorform(inputTagMemo[0])

    clearErrorRadioSub(inputTagRadio[0])

}

function clearErrorform(elem){
    var parentElem = elem.parentNode
    var elemSpan = elem.nextSibling
    //if (elemSpan.tagName == 'SPAN' && (elem.value == '' || elem.name == 'votes'|| elem.name == 'division'|| elem.name == 'payment')){
    if (elemSpan.tagName == 'SPAN' ){
            parentElem.removeChild(elemSpan)
        }
}



function clearError(EO){
    EO=EO||window.event;
    var parentElem = this.parentNode
    var elemSpan = this.nextSibling
    if (elemSpan.tagName == 'SPAN'){
        parentElem.removeChild(elemSpan)
    }
}

function clearErrorRadio(EO){
    EO=EO||window.event;
    var parentElem = this.parentNode
    var elemSpan = parentElem.getElementsByTagName('span')
    if (elemSpan[3]){
        parentElem.removeChild(elemSpan[3])
   }
}

function clearErrorRadioSub(elem){
    var parentElem = elem.parentNode
    var elemSpan = parentElem.getElementsByTagName('span')
    if (elemSpan[3]){
        parentElem.removeChild(elemSpan[3])
    }
}

function validateInfoForm(EO){
    EO=EO||window.event;
    var self = this
    var formTag=document.forms.INFO;

    var develField=formTag.elements.develname; // а можно было найти через getElementById
    var develValue=develField.value; // текстовое значение

    var fioField=formTag.elements.sitename; // а можно было найти через getElementById
    var fioValue=fioField.value; // текстовое значение

    var urlField=formTag.elements.siteurl;
    var urlValue=urlField.value;

    var dateField=formTag.elements.datestart;
    var dateValue=dateField.value;

    var numField=formTag.elements.visitors;
    var numValue=numField.value;

    var emailField=formTag.elements.email;
    var emailValue=emailField.value;

    var selectField=formTag.elements.division;
    var selectValue=selectField.value;

    var langField=formTag.elements.payment;
    var langValue=langField.value;

    var CheckField=formTag.elements.votes;
    var CheckValue=CheckField.checked;

    var memoField=formTag.elements.memo;
    var memoValue=memoField.value;

    var focusValue = false

    switch (this.name) {
        case 'develname': develFun();    break;
        case 'sitename' : fioFun();      break;
        case 'siteurl'  : urlFun();      break;
        case 'datestart': dateFun();     break;
        case 'visitors' : numFun();      break;
        case 'email'    : emailFun();    break;
        case 'division' : selectFun();   break;
        case 'payment'  : radioFun();    break;
        case 'votes'    : checkFun();    break;
        case 'memo'     : memoFun();     break;

        case 'INFO' : {
            develFun();
            fioFun();
            urlFun();
            dateFun();
            numFun();
            emailFun();
            selectFun();
            radioFun();
            checkFun();
            memoFun();
            break;
        }
        default:break;
    }

    function focusFun (elem, focus) {
        if(focus == false){
            elem.focus()
            return true
        }
    }

    function develFun() {
        if ( (develValue.length>10 || develValue === '')){
            var newSelect = document.createElement("span")
            newSelect.innerHTML = develValue == '' ? 'Введите данные!': 'Не коректный ввод данных!'
            newSelect.style.color = 'red'
            develField.after(newSelect)
            EO.preventDefault()
            if (self.name == 'INFO'){
                focusValue = focusFun(develField, focusValue)
            }
        }
    }

    function fioFun() {
        if  (fioValue.length>10 || fioValue == '') {
            var newSelect = document.createElement("span")
            newSelect.innerHTML = fioValue == '' ? 'Введите данные!': 'Не коректный ввод данных!'
            newSelect.style.color = 'red'
            fioField.after(newSelect)
            EO.preventDefault();

            if (self.name == 'INFO'){
                 focusValue = focusFun(fioField, focusValue)
             }
        }
    }

    function urlFun() {
        if ( urlValue.substring(0,7)!=='http://' ) {
            var newSelect = document.createElement("span")
            newSelect.innerHTML = urlValue == '' ? 'Введите данные!': 'URL введен не верно'
            newSelect.style.color = 'red'
            urlField.after(newSelect)
            EO.preventDefault();
            if (self.name == 'INFO'){
                 focusValue = focusFun(urlField, focusValue)
             }
        }
    }

    function dateFun() {
        if (!dateValue ){
            var parent = document.getElementById('n3')
            var br = parent.getElementsByTagName('br')
            var newSelect = document.createElement("span")
            newSelect.innerHTML = '   Выберите дату!'
            newSelect.style.color = 'red'
            parent.insertBefore(newSelect,br[0])
            if (self.name == 'INFO'){
                focusValue = focusFun(dateField, focusValue)
            }
            EO.preventDefault();
        }
    }


    function numFun() {
        if ( (isNaN(numValue) || numValue === '' )  ) {
            var newSelect = document.createElement("span")
            newSelect.innerHTML = numValue == '' ? 'Введите данные!': 'Введите пожалуйста в поле корректную цифру!'
            newSelect.style.color = 'red'
            numField.after(newSelect)
            EO.preventDefault();        // форма не будет отправлена на сервер

            if (self.name == 'INFO'){
                focusValue = focusFun(numField, focusValue)
            }
        }
    }

    function emailFun() {
        if (!emailValue.includes('@')) {
            var newSelect = document.createElement("span")
            newSelect.innerHTML = emailValue== '' ? 'Введите данные!': 'E-mail введен неправильно!'
            newSelect.style.color = 'red'
            emailField.after(newSelect)
            if (self.name == 'INFO'){
                focusValue = focusFun(emailField, focusValue)
            }

            EO.preventDefault();
        }
    }

    function selectFun() {
        if (selectValue == 1 ) {
            var newSelect = document.createElement("span")
            newSelect.innerHTML = '  Каталог "здоровье"  недоступен!'
            newSelect.style.color = 'red'
            selectField.after(newSelect)
            EO.preventDefault();        // форма не будет отправлена на сервер
            if (self.name == 'INFO'){
                focusValue = focusFun(selectField, focusValue)
            }
        }

    }


    function radioFun() {
        if (langValue == 3 ) {
            var parent = langField[0].parentNode
            var br = parent.getElementsByTagName('br')
            var newSelect = document.createElement("span")
            newSelect.innerHTML = '   Бесплатной версси сайта на текущий момент не существует!'
            newSelect.style.color = 'red'
             parent.insertBefore(newSelect,br[0])
            EO.preventDefault();        // форма не будет отправлена на сервер
            var radioField = document.getElementById('n7')
            radioField.scrollIntoView()
        }
    }


    function checkFun() {
        if (!CheckValue) {
            var newSelect = document.createElement("span")
            newSelect.innerHTML = 'Вы не разрешили отзывы!'
            newSelect.style.color = 'red'
            CheckField.after(newSelect)
            EO.preventDefault();        // форма не будет отправлена на сервер
            CheckField.scrollIntoView()
        }
    }

    function memoFun() {
        if (memoValue.length < 5 && memoValue.length !== '' ) {
            var newSelect = document.createElement("span")
            newSelect.innerHTML = memoValue== '' ? 'Введите данные!': '     Слишком короткое описание!'
            newSelect.style.color = 'red'
            memoField.after(newSelect)
            EO.preventDefault();        // форма не будет отправлена на сервер
            if (self.name == 'INFO'){
                focusValue = focusFun(memoField, focusValue)
            }
        }
    }

}


