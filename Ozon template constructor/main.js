const templateData = {
    requestionType: [{id:"type1",name:"Пересорт"},{id:"type2",name:"Отмена заказа"},{id:"type3",name:"Нарушение сроков"}],
    userTypes: [{color:"red",name:"Доминирование",mark:"Доминирует, прямой, вспыльчивый/раздражительный",description:"Требует быстрый результат; больше внимание на факты, а не эмоции; требование компенсации; использует caps lock и знаки восклицания"},
                {color:"yellow",name:"Влияние",mark:"Активный, эмоциональный; Любит быть в центре внимания; в общении гибкий, уклоничвый, неконкретный",description:"Доброжелательный, открытый; непоследовательный; задает много вопросов; прислушивается; больше внимание на эмоции, а не факты; интересуется мнением специалиста; привлекает внимание: 'ау! вы где?'; вежливый; присылает смайлики ",},
                {color:"green",name:"Постоянство",mark:"Сочетает пассивность и эмоциональность. Спокойный, консервативный, собственник, интроверт",description:"Перепроверяет свое решение, не спешит; привык советоваться и только после делать выбор; внимание на эмоции, а не факты; нуждается в поддержке; ощущение, что он всегда грустит. Обращается повторно, чтобы проверить выполнение действия; не сразу принимает решение, если вариантов несколько; может сообщать, что перед ним не извинились, не поняли его"},
                {color:"blue",name:"Соответствие",mark:"Пассивный, логичный, вдумчивый, следует правилам; нуждается в информации; прямой; скептик и критик",description:"Общается четко без ярких эмоций; просчитывает последствия; принимает решение сам; внимание на факты, а не эмоции; умещает мысли в одном сообщении четко и кратко; если оператор уделил внимание на эмоции, а не решение вопроса, уточнит еще раз, как решить вопрос"},]
  }

const root = document.querySelector('.wrapper');
const description = document.querySelector('.description');
const arrLeft = document.querySelector('.arrLeft');
const arrRight = document.querySelector('.arrRight');

// РЕНДЕР КНОПОК
function getCallTypesBlock () {

    const themeList = document.createElement('ul');
    themeList.className ='chbTheme';

    for (let i=0;i < templateData.requestionType.length;i++) {
        let themeButton = document.createElement('li');
        themeButton.className = 'theme';
        themeButton.dataset.id = templateData.requestionType[i].id;
        themeButton.innerHTML = templateData.requestionType[i].name;
        themeList.append(themeButton);
    }
    return themeList;
}
function getClientsTypeBlock () {
    const clientTypeList = document.createElement('ul');
    clientTypeList.className = 'chbClientType';

    for (let i=0;i<templateData.userTypes.length;i++) {
        let clientButton = document.createElement('input');
        clientButton.type = 'radio';
        clientButton.className = `client ${templateData.userTypes[i].color}`;
        clientButton.dataset.id = templateData.userTypes[i].color;
        clientButton.innerHTML = templateData.userTypes[i].name;
        clientTypeList.append(clientButton);
    }
    
    return clientTypeList;
}

function renderChoiseBlock () {
    const choiseBlockContainer = document.createElement('div');
    choiseBlockContainer.className = 'choiseBlock';

    choiseBlockContainer.append(getCallTypesBlock ());
    choiseBlockContainer.append(getClientsTypeBlock ());

    root.prepend(choiseBlockContainer);
}
renderChoiseBlock ();

let position = 0;

arrRight.addEventListener('click', () => {
    
    if (description.style.left == '' || position >-1200) {
        position -= 400;
        description.style.left = position + 'px';
    }
} )
arrLeft .addEventListener('click', () => {
    
    if (position < 0) {
        position += 400;
        description.style.left = position + 'px';
    }
} )
