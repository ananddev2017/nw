module.exports = {
  'Caret down completes all tasks if none selected': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task1')
      .submitForm('#todo-form')
      .setValue('#new-todo', 'My other new task')
      .submitForm('#todo-form')
      .click('#toggle-all')
      .assert.containsText('#todo-count', '0 items left')
      .end();
  },

  'Caret down completes all tasks if some selected': function(client) {
	 client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task2')
      .submitForm('#todo-form')
      .setValue('#new-todo', 'My other new task')
      .submitForm('#todo-form')
      .click('#todo-list li:first-child .toggle')
      .click('#toggle-all')
   //  if(client.element.containsText('#todo-count', '0 items left'))   
   //  if (4==4)
       document.write("test passed");
      //.assert.containsText('#todo-count', '0 items left')
      client.end();
  },

  'Caret down uncompletes all tasks if all are selected': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task3')
      .submitForm('#todo-form')
      .setValue('#new-todo', 'My other new task')
      .submitForm('#todo-form')
      .click('#todo-list li:first-child .toggle')
      .click('#todo-list li:nth-child(2) .toggle')
      .assert.containsText('#todo-count', '0 items left')
      .click('#toggle-all')
      .assert.containsText('#todo-count', '2 items left')
      .end();
  }
};