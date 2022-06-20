function Picture (width,height,url) {
   this.width = width;
   this.height = height;
   this.url = url;

   this.createPicture = function () {
      let div = document.createElement('div');
      let img = document.createElement('img');
      img.style.width = this.width;
      img.style.height = this.height;
      img.src = this.url;
      document.body.append(div);
      div.append(img);
   }
}

let catPicture = new Picture ('300px','200px','http://mobimg.b-cdn.net/v3/fetch/2c/2c38ec7c72e3d0094f591d6f735a3b8e.jpeg');
catBlock.createPicture();
let dogPicture = new Picture ('300px','200px','https://otkritkis.com/wp-content/uploads/2022/01/17_977773.jpg');
dogBlock.createPicture();
