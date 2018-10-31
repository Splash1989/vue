new Vue({
    el: '#todo',
    data: {
        listitems: [
            {listelem: 'Hallo' },
            {listelem: 'Welt' }
        ],
        nextTodo: ''
    },

    methods: {
      addListelem: function(){
          if(this.nextTodo == ''){
              return;
          }
          this.listitems.push({
              listelem: this.nextTodo

          }),
          this.nextTodo = ''
      }
    }
});


