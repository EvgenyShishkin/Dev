const reviewsArray = [
    {
        reviewDescr:"Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful,modern, and comfortable space. And cozy cafe with high-speedinternet in there. Thank you for frispes and team.",
        rewPersName:"Pedro Ibanez",
        rewPersProfession:"UI Designer at Google",
        imgSrc:"images/reviews/pedro.png",
    },
    {
        reviewDescr:"The high-speed internet at frispes was so amazing. I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, thats what i need because i used to work as freelancer for a long time.",
        rewPersName:"Raymond Thual",
        rewPersProfession:"Professional Freelancer",
        imgSrc:"images/reviews/raymound.png",
    },
    {
        reviewDescr:"Just three words : Frispes is Awesome!",
        rewPersName:"Yuli Berlian",
        rewPersProfession:"IOS Dev at Tokopedia",
        imgSrc:"images/reviews/yuli.png",
    },
    {
        reviewDescr:" I don't understand at all how I got here and why I'm writing this review, but I'm a frog and I have to do it, you know?",
        rewPersName:"Froggy Frog",
        rewPersProfession:"MS Dev at Boloto.ru",
        imgSrc:"https://bbwroller.com/static/images/thumbnails/acdf9df5f73ec3888a2dc996da687457af3c83c1806cad4c54ffcabb43b22a71.jpg",
    },
    {
        reviewDescr:"He-he-he-he! He-he-he-he-he-he-he-he-he-he-he-he-he-he. He-he-he-he! He-he-he-he-he-he-he-he-he-he-he-he-he-he-he-he-he-he-he-he-he-he-he-he",
        rewPersName:"Some Asshole",
        rewPersProfession:"Workless idiot",
        imgSrc:"https://www.blast.hk/data/avatars/o/39/39849.jpg?1596011485",
    }
];
const facilitiesArray = [
    {option: "Spacious parking area", url:"https://www.belnovosti.by/sites/default/files/2020-03/gorod.jpg"},
    {option: "Comfortable spaces", url:"https://www.emlaklobisi.com/wp-content/uploads/Screenshot_71.jpg"},
    {option: "Cozy cafe", url:"https://static.tourvisor.ru/hotel_pics/verybig/18/royal-hideaway-7.jpg"},
    {option: "Child playground", url:"https://u.9111s.ru/uploads/201905/06/fc9a3b37eb3404a1803e50e3f3c4cfa3.jpg"},
    {option: "Outdoor spaces", url:"https://sc01.alicdn.com/kf/HTB1pIpbHFXXXXcCXpXXq6xXFXXXL/205779000/HTB1pIpbHFXXXXcCXpXXq6xXFXXXL.jpg"},
];


// ************** ourFacilites ***************
let VerticalSlider = function(location,imgArr) {
    let currentImg = 2;
    
    
    this.createUl = function() {
        this.div = document.querySelector(`.${location}`)
        let ul = document.createElement('ul');
        ul.className = 'selectTale';
        
        for(let i=0;i<imgArr.length;i++) {
            let li = document.createElement('li');
            li.className = 'fasilTale';
            li.setAttribute('data',i);
            li.innerHTML = imgArr[i].option;
            ul.append(li);
        }
        this.div.prepend(ul);
        this.ul = ul;
    };
    this.setImg = function () {
        document.querySelector('.fasilImage img').src = imgArr[currentImg].url;
    }
    
    this.startSlider = function() {
        this.createUl();
        this.setImg();
    }
}

let vs = new VerticalSlider('mainFacilWindow',facilitiesArray);
vs.startSlider();


//************** Customer Reviews ***************


let CustomerReviewSlider = function(loc,loc2,revArr) {

    this.reviewsSliderloc = document.querySelector(`.${loc}`);
    this.descrAndNavBlock = document.querySelector(`.${loc2}`);
    
    this.createNavPanel = function () {
        let navPannel = document.createElement('div');
        let leftBtn = document.createElement('div');
        let rightBtn = document.createElement('div');

        navPannel.className = 'navPannel';
        leftBtn.className = 'left';
        leftBtn.id = 'CRleft';
        leftBtn.innerHTML = '←';
        
        rightBtn.className = 'rigrt';
        rightBtn.id = 'CRrigrt';
        rightBtn.innerHTML = '→';
        
        navPannel.append(leftBtn);
        navPannel.append(rightBtn);

        this.descrAndNavBlock.append(navPannel);

        this.leftBtn = leftBtn;
        this.rightBtn = rightBtn;
        
    }
    
    this.createSliderStructure = function (revArr) {

        for (let i = 0; i<revArr.length;i++) {
        
            let reviewElem = document.createElement('div');
            let reviewDescr = document.createElement('div');
            let rewiewPerson = document.createElement('div');
            let rewPersPhoto = document.createElement('div');
            let rewPersInfo = document.createElement('div');
            let rewPersName = document.createElement('div');
            let rewPersProfession = document.createElement('div');

            this.reviewImage = document.createElement('img');
            this.reviewImage.src = revArr[i].imgSrc;

            reviewElem.className = 'reviewElem';
            reviewDescr.className = 'reviewDescr';
            reviewDescr.innerHTML = revArr[i].reviewDescr;
            rewiewPerson.className = 'rewiewPerson';
            rewPersPhoto.className = 'rewPersPhoto';
            rewPersInfo.className = 'rewPersInfo';
            rewPersName.className = 'rewPersName';
            rewPersName.innerHTML = revArr[i].rewPersName;
            rewPersProfession.className = 'rewPersProfession';
            rewPersProfession.innerHTML = revArr[i].rewPersProfession;
            
            this.reviewsSliderloc.append(reviewElem);
            reviewElem.append(reviewDescr);
            reviewElem.append(rewiewPerson);
            rewiewPerson.append(rewPersPhoto);
            rewiewPerson.append(rewPersInfo);
            rewPersPhoto.append(this.reviewImage);
            rewPersInfo.append(rewPersName);
            rewPersInfo.append(rewPersProfession);

        }

        
    }
    this.startCRSlider = function () {
        this.createSliderStructure(revArr);
        this.createNavPanel();
        this.leftBtn.addEventListener('click', function (){
            
        });
        this.rightBtn.addEventListener('click', function (){
            
        });
        
    }

    
}

let crs = new CustomerReviewSlider ('reviewsSlider','descrAndNavBlock',reviewsArray);
crs.startCRSlider();


