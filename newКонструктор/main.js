const Slider = {
   images: ['https://www.itl.cat/pngfile/big/186-1861341_widescreen-road-scenery-hd.jpg',
   'https://get.wallhere.com/photo/sunlight-landscape-hill-nature-grass-sky-field-green-morning-farm-horizon-plateau-cloud-tree-flower-grassland-plant-pasture-agriculture-meadow-plantation-plain-lawn-2560x1600-px-prairie-crop-rural-area-grass-family-paddy-field-General-551245.jpg',
   'https://klike.net/uploads/posts/2019-11/1572609133_17-min.jpg'],
   width: '500px',
   height: '300px',
   imgIndex: 1,
   

   
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
      document.body.append(this.createNavDots());
      document.body.style.backgroundImage = `url(${Slider.images[Slider.imgIndex]})`

      
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
   },
   nextBtn: function () {
      if(this.imgIndex < this.images.length-1) {
         this.setImage(++this.imgIndex)
      }
   },
   prevBtn: function () {
      if(this.imgIndex > 0) {
         this.setImage(--this.imgIndex);
      }
   }
   
}

Slider.createSliderWindow(1);
