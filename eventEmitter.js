  ////Câu 3: eventEmitter: eventEmitter (on, emit) 
const EventEmitter = require('events');

// Tạo một đối tượng EventEmitter mới
const myEmitter = new EventEmitter();

// Đăng ký một sự kiện bằng phương thức `on`
myEmitter.on('myEvent', (message) => {
  console.log('Đã nhận được sự kiện: ' + message);
});

// Phát ra một sự kiện bằng phương thức `emit`
myEmitter.emit('myEvent', 'Xin chào, đây là một sự kiện!');