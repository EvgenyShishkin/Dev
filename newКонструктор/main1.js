function Pictire (w,h,u) {
    this.width = w + 'px';
    this.height = h + 'px';
    this.images = u;

    this.createPic = function () {
        let div = document.createElement('div');
        div.style.width = this.width;
        div.style.height = this.height;
        div.className = 'container';
        div.style.backgroundImage = `url(${this.images[0]})`
        document.body.append(div);
    }
}
let try2 = new Pictire (500,300,['https://happyn.ru/uploads/posts/2019-11/thumbs/1573568668_75.jpg']);
try2.createPic();