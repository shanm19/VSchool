var app = angular.module("MainApp");

app.service("CarouselService", function () {

    this.myInterval = 5000;
    this.noWrapSlides = false;
    this.active = 0;
    var slides = this.slides = [
        {
            video: "https://www.youtube.com/embed/dKrVegVI0Us",
            text: 'Captain America: Civil War',
            id: 0
        },
        {
            video: "https://www.youtube.com/embed/mjKEXxO2KNE",
            text: 'Sully',
            id: 1
        },
        {
            video: "https://www.youtube.com/embed/HSzx-zryEgM",
            text: 'Doctor Strange',
            id: 2
        },
        {
            video: "https://www.youtube.com/embed/XWxyRG_tckY",
            text: 'Stranger Things',
            id: 3
        }
    ];

});