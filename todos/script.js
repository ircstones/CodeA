// Primary Object

var todoList = {
  todos: [],
  displayTodos: function (){
    if (this.todos.length === 0){
      console.log('Your todos array is empty');
    } else {
    console.log('My Todos:');
    for(var i = 0 ; i < this.todos.length ; i++){
      if(this.todos[i].completed === true){
      console.log('(x)', this.todos[i].todoText);
      }else {
        console.log('( )', this.todos[i].todoText);
      }
    }
   }
  },
  addTodos: function (todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodos: function (position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
 deleteTodos: function (position1, position2){
    this.todos.splice(position1, position2);
    this.displayTodos();
},
toggleCompleted: function (position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
},
toggleAll: function(){
  var completedTodos = 0;
  var totalTodos = this.todos.length;
  //get # of completed todos
  for(var i = 0 ; i < this.todos.length ; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
  }

  if(completedTodos === totalTodos){
    for(var i = 0; i < this.todos.length ; i++){
     this.todos[i].completed = false;
   } 

  } else { 
      for(var i = 0; i < this.todos.length ; i++){
     this.todos[i].completed = true;
   }
  } this.displayTodos();
 } 
};
 
//Handlers Object for HTML

 var handlers = {
   displayTodos: function(){
   todoList.displayTodos(); 
   },
  addTodos:function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodos:function(){
    var changeTodosNumberInput = document.getElementById('changeTodosNumberInput');
    var changeTodosTextInput = document.getElementById('changeTodosTextInput');
    todoList.changeTodos(changeTodosNumberInput.valueAsNumber, changeTodosTextInput.value);
    changeTodosNumberInput.value = '';
    changeTodosTextInput.value = '';
  },
  deleteTodos:function(){
    var deleteTodosInputPosition = document.getElementById('deleteTodosInputPosition');
    var deleteTodosInput = document.getElementById('deleteTodosInput');
    todoList.deleteTodos(deleteTodosInputPosition.valueAsNumber, deleteTodosInput.valueAsNumber);
    deleteTodosInput = "";
    deleteTodosInputPosition = "";
  },
  toggleCompleted:function(){
    var toggleCompletedInput = document.getElementById('toggleCompletedInput');
    todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
    toggleCompletedInput = "";
  },
  toggleAll:function(){
  todoList.toggleAll();

} };

 var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i = 0 ; i < todoList.todos.length ; i++){
     var todosLi = document.createElement('li');
     var todo = todoList.todos[i];
     var todoTextWithCompletion = '';
     
     if(todo.completed === true){
       todoTextWithCompletion = '(x)'  + todo.todoText;
     }else{
       todoTextWithCompletion = '( )'  + todo.todoText;
     }
     
     todosLi.textContent = todoTextWithCompletion;
     todosUl.appendChild(todosLi);
   }
  }
 };


