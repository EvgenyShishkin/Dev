const slider = {
    images: ["pics/cat1.jpg","pics/cat2.jpg","pics/cat3.jpg"],
    imageContainer: document.querySelector("#kot__img"),
    nextBtn: document.querySelector(".after"),
    prevBtn: document.querySelector(".before"),
    kotoDots: document.querySelector(".koto-dots"),
    currentPosition: 0,



    next: function () {
        if (this.currentPosition < this.images.length-1) {
        this.imageContainer.src = this.images[++this.currentPosition]
        }
    },
    prev: function () {
        if (this.currentPosition > 0) {
            this.imageContainer.src = this.images[--this.currentPosition]
        }
    },
    change: function () {

    },
    createDots: function () {
        for (let i = 0; i < slider.images.length;i++) {
            let li = document.createElement('li');
            li.className = "koto-dot";
            li.dataset.index = i;
            this.kotoDots.appendChild(li);

        }
    },
    start: function () {
        this.imageContainer.src = this.images[this.currentPosition];
        this.createDots();
        this.nextBtn.addEventListener('click', () => this.next());
        this.prevBtn.addEventListener('click', () => this.prev());
        this.kotoDots.addEventListener('click', (event) => {
            if(event.target.dataset.index) {
                this.currentPosition = +event.target.dataset.index;
                this.imageContainer.src = this.images[this.currentPosition];
                event.target.className = "koto-dot--active";
                
            }
        })

        
    },
}

slider.start();

