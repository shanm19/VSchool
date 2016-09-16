var app = angular.module("MainApp");

app.service("CarouselService", function () {

    this.myInterval = 5000;
    this.noWrapSlides = false;
    this.active = 0;
    var slides = this.slides = [
        {
            image: "http://img.wallpaperfolder.com/f/7AFC52A3795A/marvel-civil-war-resolution-fmmrf.jpg",
            text: 'Captain America: Civil War',
            trailerLink: "https://www.youtube.com/watch?v=dKrVegVI0Us",
            id: 0
        },
        {
            image: "https://i.ytimg.com/vi/mjKEXxO2KNE/maxresdefault.jpg",
            text: 'Sully',
            trailerLink: "https://www.youtube.com/watch?v=mjKEXxO2KNE",
            id: 1
        },
        {
            image: "http://media.comicbook.com/2016/04/doctor-strange-magic-178841.jpg",
            text: 'Doctor Strange',
            trailerLink: "https://www.youtube.com/watch?v=HSzx-zryEgM",
            id: 2
        },
        {
            image: "http://empireonline.media/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/57869a31823490d062667985/netflix%20stranger%20things%20poster.jpg",
            text: 'Stranger Things',
            trailerLink: "https://www.youtube.com/watch?v=XWxyRG_tckY",
            id: 3
        }
    ];

});