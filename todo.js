
new Vue({
    el: '#todo',
    data: {
        listitems: [
            { listelem: 'Hallo' },
            { listelem: 'Welt' }
        ],

        nextTodo: ''
    },

    methods: {
      addListelem: function(){
          this.listitems.push({
              listelem: this.nextTodo
          })

      }
    }
});

