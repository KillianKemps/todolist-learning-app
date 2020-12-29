// Initialize DOM for tests
var markup = require ('fs')
.readFileSync(__dirname + '/../../index.html')
.toString();

document.documentElement.innerHTML = markup;

// Require components to be tested
const TodoListApp = require('../script');

beforeAll(() => {
  // Freeze date to control tests
  jest
    .spyOn(global.Date, 'now')
    .mockImplementation(() =>
      new Date('2019-12-29:01:58.135Z').valueOf()
    );
});

// Test a basic function
test('Add a todo', () => {
  expected_todos = [
    {
      id: Date.now(),
      name: 'Go to the Gym',
      completed: false
    }
  ];

  testApp = new TodoListApp;

  testApp.addTodo('Go to the Gym');

  expect(testApp.todos).toStrictEqual(expected_todos);
});
