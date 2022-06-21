const Slider = {
   images: ['https://www.itl.cat/pngfile/big/186-1861341_widescreen-road-scenery-hd.jpg',
   'https://cdn.wallpapersafari.com/23/46/MctDLp.jpg',
   'https://www.fonstola.ru/images/201112/fonstola.ru_64341.jpg'],
   width: '500px',
   height: '300px',
   imgIndex: 0,
   

   
   createSliderWindow: function () {
      let div = document.createElement('div');
      div.style.width = this.width;
      div.style.height = this.height;
      div.className = 'container';
      document.body.append(div);
      div.append(this.createNavButton('left'));
      div.append(this.addImgOnSlider());
      div.append(this.createNavButton('right'));
      document.body.append(this.createNavDots());

      
   },
   createNavButton: function (side) {
      let btn = document.createElement('div');
      btn.className = 'btn';
      btn.style.top = '120px';
      btn.style[side] = '-70px';
      btn.innerHTML = side;
      
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
   
   addImgOnSlider: function () {
      let img = document.createElement('img');
      img.style.width = 'inherit';
      img.style.height = 'inherit';
      img.src = this.images[this.imgIndex];

      return img;
   },
   
      
}

Slider.createSliderWindow();