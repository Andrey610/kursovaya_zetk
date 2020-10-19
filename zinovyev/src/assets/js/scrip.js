var products = [
	{
        "id": 1,
        "name": "The Story Begins",
        "date": "20.10.2015",
        "src": "assets/img/album/tsb.jpg"
	},
	{
        "id": 2,
        "name": "Page Two", 
        "date": "25.04.2016",
        "src": "assets/img/album/p2.jpg"
	},
	{
        "id": 3,
        "name": "TWICEcoaster: Lane 1",
        "date": "24.10.2016",
        "src": "assets/img/album/tc1.jpg"
    },
    {
        "id": 4,
        "name": "TWICEcoaster: Lane 2",
        "date": "20.02.2017",
        "src": "assets/img/album/tc2.png"
    },
    {
        "id": 5,
        "name": "Signal",
        "date": "15.05.2017",
        "src": "assets/img/album/signal.jpg"
    },
    {
        "id": 6,
        "name": "#Twice",
        "date": "28.06.2017",
        "src": "assets/img/album/jt.jpeg"
	},
    {
        "id": 7,
        "name": "One More Time",
        "date": "18.10.2017",
        "src": "assets/img/album/omt.jpeg"
	},
    {
        "id": 8,
        "name": "Twicetagram",
        "date": "30.10.2017",
        "src": "assets/img/album/gram.jpg"
	},
    {
        "id": 9,
        "name": "Merry & Happy",
        "date": "11.12.2017",
        "src": "assets/img/album/mh.jpg"
	},
    {
        "id": 10,
        "name": "Candy Pop",
        "date": "07.02.2018",
        "src": "assets/img/album/cp.jpeg"
    },
    {
        "id": 11,
        "name": "What Is Love?",
        "date": "09.04.2018",
        "src": "assets/img/album/wil.jpg"
    },
    {
        "id": 12,
        "name": "Wake Me Up",
        "date": "16.05.2018",
        "src": "assets/img/album/wma.jpeg"
	},
    {
        "id": 13,
        "name": "Summer Nights",
        "date": "09.07.2018",
        "src": "assets/img/album/sn.jpg"
	},
    {
        "id": 14,
        "name": "BDZ",
        "date": "12.09.2018",
        "src": "assets/img/album/bdz.jpeg"
    },
    {
        "id": 15,
        "name": "YEs or Yes",
        "date": "05.11.2018",
        "src": "assets/img/album/yes.jpg"
	}
]

new Vue({
     el: '#app',
      data: {
      items: []
     },
      mounted: function(){
          this.items = products.reverse();
      },
});