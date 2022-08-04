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

let VerticalSlider = function(location,imgArr) {
    
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
    };
    this.activeClick = function() {
        
    }
   
}

let vs = new VerticalSlider('mainFacilWindow',facilitiesArray)

vs.createUl();