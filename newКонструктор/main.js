function Slider (width,height,url,) {
   this.images = url;
   this.width = width+'px';
   this.height = height+'px';
   this.imgIndex = 0;
   
   

   
   this.createSliderWindow = function (pos,) {
      let div = document.createElement('div');
      div.style.width = this.width;
      div.style.height = this.height;
      div.className = 'container';
      document.body.append(div);
      div.append(this.createNavButton('left',height));
      div.append(this.addImgBlock());
      div.append(this.createNavButton('right',height));
      document.body.append(this.createNavDots());
      this.setImageAndSetActiveDot(this.imgIndex);
      
      
   };
   this.createNavButton = function (side,height) {
      let btn = document.createElement('div');
      btn.className = 'btn';
      btn.dataset.btn = side;
      btn.style.top = height/2-30+"px";
      btn.style[side] = '-70px';
      btn.innerHTML = side;
      btn.addEventListener('click', () => {
         if (side === 'left') {
            this.prevBtn()
         } else if (side === 'right') {
            this.nextBtn()
         }
      })
      
      return btn
   };
   this.createNavDots = function () {
      this.dotList = document.createElement('ul');
      this.dotList.className = 'dotList';
      for (let i = 0; i < this.images.length;i++) {
         let li = document.createElement('li');
         li.className = 'dot'
         this.dotList.append(li);

      }
      return this.dotList;
   };
   
   this.addImgBlock = function () {
      this.img = document.createElement('img');
      this.img.style.width = 'inherit';
      this.img.style.height = 'inherit';
      this.img.className = 'sliderImage';
      
      return this.img;
   };
   this.setActiveDot = function () {
      for(let i = 0;i < this.images.length;i++) {
         if (i === this.imgIndex) {
            this.dotList.children[i].className = "dot--active";
         } else {
            this.dotList.children[i].className = "dot";          
         }
      }
   };
   this.setImageAndSetActiveDot = function (pos) {
      this.img.src = this.images[pos];
      this.setActiveDot();
   };
   this.nextBtn = function () {
      if(this.imgIndex < this.images.length-1) {
         this.setImageAndSetActiveDot(++this.imgIndex)
   };
   this.prevBtn = function () {
      if(this.imgIndex > 0) {
         this.setImageAndSetActiveDot(--this.imgIndex);
      }
   };
   
  
};
}

let slider1 = new Slider (500,300,['https://happyn.ru/uploads/posts/2019-11/thumbs/1573568668_75.jpg',
'https://live.staticflickr.com/2948/15465273181_b9907aed39.jpg',
'https://lasix.ru/nw/images/500x300/31108.jpg',
'https://www.astromeridian.ru/assets/images/sonnik/podsolnyxi.jpg']);
slider1.createSliderWindow(1);

let slider2 = new Slider (720,480,['https://gidfon.com/prev/21460.jpg',
'https://storage.theoryandpractice.ru/tnp/uploads/course_image_unit/000/000/494/image/base_fe777f7405.jpg',
'https://gidfon.com/prev/8031.jpg',
'https://gidfon.com/prev/23235.jpg']);
slider2.createSliderWindow(1);

