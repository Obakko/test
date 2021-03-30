const BUTTON_SUBMIT = document.querySelector(`.open-form__button`);
const FORM_TEXT = document.querySelector(`.open-form__text`);
const TASK = document.querySelector(`.to-do-list__tasks`);
let arrObjektForTask = [];

let getElementForArray = () => {
    let contentList = '';
    arrObjektForTask.forEach(function(item, i) {
        contentList += `
            <li>
                <p>${arrObjektForTask[i].textContent}</p>
                <button type="button" class="delete delete${i}">Удалить</button>
            </li>
        `
        TASK.innerHTML = contentList
    })
}

if (localStorage.getItem('arr')) {
    arrObjektForTask = JSON.parse(localStorage.getItem('arr'));
    getElementForArray();
};

BUTTON_SUBMIT.addEventListener(`click`, function () {
    if (FORM_TEXT.value !== '') {
        let objList = {
            textContent: FORM_TEXT.value ,
        }
        arrObjektForTask.push(objList);
        getElementForArray()
        localStorage.setItem('arr', JSON.stringify(arrObjektForTask));
        FORM_TEXT.value = ''
    }
});

TASK.addEventListener('click', function(evt){
    let evtDelete = evt.target.getAttribute('class');
    let ButtonDelete = document.querySelectorAll('.delete');

    if (ButtonDelete.length == 1) {
        let list = document.querySelector('li')
        arrObjektForTask.slice(0,1);
        localStorage.setItem('arr', JSON.stringify(arrObjektForTask));
        list.remove()
    }
    ButtonDelete.forEach(function(item,i) {
        let buttonIndex = ButtonDelete[i].getAttribute('class');
    
        if (evtDelete == buttonIndex) {
                arrObjektForTask.splice(i, 1);
                localStorage.setItem('arr', JSON.stringify(arrObjektForTask));
                getElementForArray();
            }
    })
})