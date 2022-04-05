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

    const themeList = document.createElement('div');
    themeList.className ='chbTheme';

    for (let i=0;i < templateData.requestionType.length;i++) {
        let themeButton = document.createElement('input');
        let themeLabel = document.createElement('label');
        let themeContent = document.createElement('div')
        themeButton.type = 'radio';
        themeButton.dataset.id = templateData.requestionType[i].id;
        themeButton.setAttribute('name','themeType');
        themeContent.className = 'theme';
        themeContent.innerHTML = templateData.requestionType[i].name;

        themeLabel.append(themeButton);
        themeLabel.append(themeContent);
        themeList.append(themeLabel);

    }
    return themeList;
}
function getClientsTypeBlock () {
    const clientTypeList = document.createElement('div');
    clientTypeList.className = 'chbClientType';

    for (let i=0;i<templateData.userTypes.length;i++) {
        let clientButton = document.createElement('input');
        let clientLabel = document.createElement('label');
        let clientContent = document.createElement('div')
        clientButton.type = 'radio';
        clientButton.setAttribute('name','clientType');
        clientContent.className = `client ${templateData.userTypes[i].color}`;
        
        clientButton.dataset.id = templateData.userTypes[i].color;
        clientContent.innerHTML = templateData.userTypes[i].name;
        
        clientLabel.append(clientButton);
        clientLabel.append(clientContent);
        clientTypeList.append(clientLabel);
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

function renderClientDescriptionBlock () {
    const clientTypeDescriptionBlock = document.createElement('div');
    const description = document.createElement('div');
    clientTypeDescriptionBlock.className = 'clientTypeDescriptionBlock';
    description.className = 'description';

    for (let i = 0; i < templateData.userTypes.length;i++) {
        let clientBlock = document.createElement('div');
        let clientBlockH4 = document.createElement('h4');
        clientBlock.className = `descr ${templateData.userTypes[i].color}`;
        clientBlock.dataset.color = templateData.userTypes[i].color;
        clientBlockH4.innerHTML = templateData.userTypes[i].name;
        clientBlock.innerHTML = templateData.userTypes[i].mark + '</br></br>' + templateData.userTypes[i].description;

        clientBlock.prepend(clientBlockH4);
        description.append(clientBlock);

    }

    clientTypeDescriptionBlock.append(description);
    root.append(clientTypeDescriptionBlock);

}
renderChoiseBlock ();
renderClientDescriptionBlock();

const buttonsList = document.querySelectorAll('.chbClientType input');
const descrList = document.querySelectorAll('.description div');

function handleColorSelect (event) {
    let targetColor = event.target.dataset.id;

    for (let i = 0; i < descrList.length;i++) {
        if (descrList[i].dataset.color === targetColor) {
            descrList[i].style.display = 'block';
        } else {descrList[i].style.display = 'none';}
    }
}

buttonsList[3].addEventListener('click', handleColorSelect )
buttonsList[2].addEventListener('click', handleColorSelect )
buttonsList[1].addEventListener('click', handleColorSelect )
buttonsList[0].addEventListener('click', handleColorSelect )