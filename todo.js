angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    var num
    todoList.sum = 0
    todoList.sumF = 0
    todoList.sumD = 0
    todoList.food = true
    todoList.drink = false
    todoList.addFood = function (num) {
      todoList.sumF = todoList.sumF + num
      todoList.sum = todoList.sumD + todoList.sumF

      if (todoList.sum >= 200) {
        todoList.sum = todoList.sum * 0.9
      }else if (todoList.sum >= 100) {
        todoList.sum = (todoList.sumF * 0.9) + todoList.sumD
      }

    }

    todoList.addDrink = function (num) {
      todoList.sumD = todoList.sumD + num
      todoList.sum = todoList.sumD + todoList.sumF

      if (todoList.sum >= 200) {
        todoList.sum = todoList.sum * 0.9
      }else if (todoList.sum >= 100) {
        todoList.sum = (todoList.sumF * 0.9) + todoList.sumD
      }

    }

    todoList.showfood = function () {
      todoList.food = true
      todoList.drink = false
    }

    todoList.showdrink = function () {
      todoList.food = false
      todoList.drink = true
    }

  })
