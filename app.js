
new Vue({
    el: '#exercise',
    data: {
        name: 'Michael',
        age: 29,
        image: 'https://assets.t3n.sc/news/wp-content/uploads/2016/05/vue.js_2.0_frontend-framework.jpg?auto=compress%2Cformat&fit=crop&fm=jpg&h=347&ixlib=php-1.1.0&q=65&w=620&s=8398eacd030d9955f6805f64df9e66fe',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        random: function() {
            return Math.random();
        },
        addieren: function(){
            this.counter++;
        },
        Koordinaten: function(event){
            this.x = event.clientX;
            this.y = event.clientY;

        }
    }
});