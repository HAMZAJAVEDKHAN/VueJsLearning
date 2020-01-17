new Vue({
    el:'#vue-app',
    data:{
        // fname:'Hamza',
        // lname:'Javed',
        // city:'karachi',
        // domain:'developer',
        // website:'http://framerspakistan.com/',
        // tag:'<a href="http://framerspakistan.com/">Framers Tag</a>',
        myage:21,
        fage:10,
        x:0,
        y:0,

    },
    methods:{
      add:function(inc){
      this.myage += inc;
      this.fage += inc;
},
    substract:function(dec){
      this.myage -= dec;
      this.fage -= dec;
    },

    updateXY:function (event) {
      this.x = event.offsetX;
        this.y = event.offsetY;

    },
    clickme:function () {
      alert('You clicked me');
    }


  },
});
