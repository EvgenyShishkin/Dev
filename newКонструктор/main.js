const Slider = {
   images: ['https://happyn.ru/uploads/posts/2019-11/thumbs/1573568668_75.jpg',
   'https://live.staticflickr.com/2948/15465273181_b9907aed39.jpg',
   'https://lasix.ru/nw/images/500x300/31108.jpg',
   'https://www.astromeridian.ru/assets/images/sonnik/podsolnyxi.jpg'],
   width: '500px',
   height: '300px',
   imgIndex: 0,
   

   
   createSliderWindow: function (pos) {
      let div = document.createElement('div');
      div.style.width = this.width;
      div.style.height = this.height;
      div.className = 'container';
      document.body.append(div);
      div.append(this.createNavButton('left'));
      div.append(this.addImgBlock());
      this.setImage(this.imgIndex);
      div.append(this.createNavButton('right'));
      // document.body.append(this.createNavDots());
      this.setActiveDot()
      

      
   },
   createNavButton: function (side) {
      let btn = document.createElement('div');
      btn.className = 'btn';
      btn.dataset.btn = side;
      btn.style.top = '120px';
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
   },
   createNavDots: function () {
      let dotList = document.createElement('ul');
      dotList.className = 'dotList';
      for (let i = 0; i < this.images.length;i++) {
         let li = document.createElement('li');
         li.className = 'dot'
         dotList.append(li);

      }
      return dotList;
   },
   
   addImgBlock: function () {
      let img = document.createElement('img');
      img.style.width = 'inherit';
      img.style.height = 'inherit';
      img.className = 'sliderImage';
      
      return img;
   },
   setImage: function (pos) {
      let img = document.querySelector('.sliderImage');
      img.src = this.images[pos];
      // document.body.style.backgroundImage = `url(${this.images[pos]})`
   },
   nextBtn: function () {
      if(this.imgIndex < this.images.length-1) {
         this.setImage(++this.imgIndex)
         this.setActiveDot()
      }
   },
   prevBtn: function () {
      if(this.imgIndex > 0) {
         this.setImage(--this.imgIndex);
         this.setActiveDot()
      }
   },
   setActiveDot: function () {
      let li = document.querySelectorAll('.dot')
      for (let i = 0;i < this.images.length;i++) {
         if(i === this.imgIndex) {
            li[i].className = 'dot--active';
         } else {
            li[i].className = 'dot';
         }
      }
   }
   
}

Slider.createSliderWindow(0);

