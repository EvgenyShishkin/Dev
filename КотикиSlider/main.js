function Slider () {
    this.images = ["pics/cat1.jpg","pics/cat2.jpg","pics/cat3.jpg"],
    this.imageContainer = document.querySelector("#kot__img"),
    this.nextBtn = document.querySelector(".after"),
    this.prevBtn = document.querySelector(".before"),
    this.kotoDots = document.querySelector(".koto-dots"),
    this.currentPosition = 0,
    this.sliderOn = false,




    
    this.gettingImages = function (imgArr) {
        this.images = imgArr;
    },
    this.imgDemonstration = function (position) {
        this.imageContainer.src = this.images[position]
    },
    this.next = function () {
        if (this.currentPosition < this.images.length-1) {
            this.imgDemonstration(++this.currentPosition);
            this.setActiveDot ();
        }
    },
    this.prev = function () {
        if (this.currentPosition > 0) {
            this.imgDemonstration(--this.currentPosition);
            this.setActiveDot ();
        }
    },
    this.change = function (index) {
                this.currentPosition = index;
                this.imgDemonstration(this.currentPosition);
                this.setActiveDot ();
    },
    this.createDots = function () {
        for (let i = 0; i < this.images.length;i++) {
            let li = document.createElement('li');
            li.className = "koto-dot";
            li.dataset.index = i;
            this.kotoDots.appendChild(li);
        }
    },
    this.setActiveDot = function () {
        for (let i = 0; i<this.kotoDots.children.length;i++) {
            this.kotoDots.children[i].className = (i === this.currentPosition) 
            ? "koto-dot--active" : "koto-dot"
        }
    },
    this.setStartPosition = function (position) {
        if (position > this.images.length) {
            this.currentPosition = 0;
        } else { 
            this.currentPosition = --position;
        }
    },
    this.start = function (position,imgArr) {
        if (!this.sliderOn) {
            this.gettingImages (imgArr);
            this.setStartPosition (position);
            this.imgDemonstration(this.currentPosition);
            this.createDots();
            this.setActiveDot ();
            this.nextBtn.addEventListener('click', () => this.next());
            this.prevBtn.addEventListener('click', () => this.prev());
            this.kotoDots.addEventListener('click', (event) => {
                if(event.target.dataset.index) {
                    this.change (+event.target.dataset.index);             
                }
            })
            this.sliderOn = true;
        }
    },
}

["https://avatars.mds.yandex.net/i?id=ba7352ff1098bd28cf3f0b0d1d2107f8-4012518-images-thumbs&n=13&exp=1",
"https://yandex-images.clstorage.net/U5JI2k201/5d3c5fReOZ/YLBQ7rXNfQw5LrFRLqi1LeYEIjoWQc21jC3fGJIrwkjZdfnFgmPpx9H3Rrrt1_RRRJbDyDjzF-CQN87GsFn11S7mHbf0j34HPC7rBSarsC_7WWo-Dx6f5Nh40QySdoJDjD24wIIKgOT0gSDE2_rRem7Wlp86pVz-gXWnqaEjp61co2nqhNIBGy4k7lEcj4Is7UUINRQs0uWMD7hipl2IL4oGpovlBp7q8bUt0efVxltI7K-1GqJzgrhPob3AEqudfZ5i46bOHAYsNvp7Gp-bIfhfHhATK-7NjwaWe6RKgzGaNau4_BSXzv2lPMbT5PN6RuautjGLdpyFR76z9C-Bl2WCXOCh_R0AHAndSw6EhD_TYgk2Gz7wxYgej363d50XiAeJn_QXidzMlAnz-9jEZ2fYtLY5qW6_oEmtj-UdpoJ-klX9rskwJTMZ21sGjZYA9UUfEisP6MOoApJ_sEOwHp81uY_EJrbgx5YW3dvl_FRTy5KUG41stIVSmZfmMpyZV7JP96nTARsJJNFmKb-wBMRcLRAOIPLctjOzX4J-hBGcIp6s6hep4N-xDtn99sdbdMC0oTCsTYGndLq80hKKjF2XYOqoyyQDLBv4UASKuxrsfyg1DCLiwZ8BmH2yXbsTrRKHhPAWuMnWhCnlzuXGR0_bmLcsiG6FnnOgk_ISm5VaqE3YvcQDGy8szmUsnKI-7GgHDRIDxfy1Koxah1OaM4gHoZjiGon_4oEY_ejDwVhM9pqfOYlOo6Jzl7rEP7-rToZj6JL3KxcfLuhvFqGSBux-OBUvIvXujxuNb6dumyycFYycxhOW7deQCMPgxcVDWOWSpiSqV7aBaJGz9S2Fn0yhad2k8jAQNizobyyttSTtSwEcDiLBxIgdlmOlWpA1hROxudU4s83GkhHz2dXza1HGnb4IkGW9qViTgfMlg7FgqWnGkd8wExw181sJqrUm2VwIOTgc1uSVD6VwhX4",
"https://yandex-images.clstorage.net/U5JI2k201/5d3c5fReOZ/YLBQ7rXNfQw5LrFRLqi1LeYEIjoWQc21jC3fGJIrwkjZdfnFgmPux9OlHOiwgvBWQsqVxm-jEOjENZ3H4gyu1SfiHLr2h2RMOzzsXGKvvCn5Tz95AwPUsYt00xnVep8I0iCwjY5kgPr0gj3UxuHfdGnhjpAwpEGo3XKNqd5KhZNDm1bCov0_Mycu5lk2lZgb-lkjGwgY5vyKIKRwu060Ar4mi5PFA4zk-ocJ2dPd8GNIx7SpGoRGh6FLt6_KK7Sfc7pryavfIy46LPRNHJOIAvdMOQ0tH-HAoiOtXqJMowmgNrie9hqe7d6LGcjE6cFWacm-qBmvb4K_dr-wxB-JtXmid_eo2BAvPBzLaiyHkx3pZwQaCxf03qoktUenX54XhiSKvNESnfPMuij98cH9YXTogLIZp02anFOxo_gOu5JsuWf-tdckAhkz22w8j5oP1kEjDC8nxcasBKlapliqOo8zuIzBIqzM8LEq4t_hwFlH3JOUO4VpmJd2qpfgDZSod5BH5L_QPjMnCeZmAaCoKdJwOj4tAurcsxqYe4Zqlw6AMK-r4gyd0_CpDfrbx9NiSPuYsg6uSLmiVIy0yzm0vmKaYsui0SYWPyzZTzeNnSLMWBk7CADozK4zqlCkWrQxggGfssoWnMLZoDjd5_TAY1TAg54Ysmyapm2LruQZtK97nV3mkMQpMScv7nkCpYs76FgOFDAeyeuTGYFEg2-6EKIkipTWBJDz75Q97P_S5mRLw66cMKdtuoBRi5nNL5mLRYlzyKDrGhkrH-xfCJ-2C9BYGCsoI-jbgSOwRbZPhxG9MJi50iCZ7P2hLPzB2uBgUNe9lAm6TqOVcpCfxB6LsXGLVMKV3R8CLDbuXwiluizyWS0SIQLo76sktl66TbMapCmehPczssndsC7l8ePwVnjenpsRlnSRnlqgnfYYg7dfp1zCjugyAi8c90Q8gL0s8G06GwQ01viLOaRtqW0",
"https://avatars.mds.yandex.net/i?id=2baaa9239c4f38b3c7dab15b4f21cc7f-6558101-images-thumbs&n=13&exp=1"];
