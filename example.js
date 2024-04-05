const fs = require('fs');

// Mở đọc tệp tin nguồn
const readableStream = fs.createReadStream('input.txt');

// Mở tạo tệp tin đích
const writableStream = fs.createWriteStream('output.txt');

// Bắt sự kiện "open" cho tệp tin nguồn
readableStream.on('open', () => {
  console.log('Tệp tin nguồn đã được mở.');

  // Sử dụng phương thức "pipe" để chuyển dữ liệu từ tệp tin nguồn đến tệp tin đích
  readableStream.pipe(writableStream);
});

// Bắt sự kiện "finish" cho tệp tin đích
writableStream.on('finish', () => {
  console.log('Dữ liệu đã được ghi vào tệp tin đích.');
});

// Bắt sự kiện "error" cho cả tệp tin nguồn và tệp tin đích
readableStream.on('error', (err) => {
  console.error('Lỗi khi đọc tệp tin nguồn:', err);
});

writableStream.on('error', (err) => {
  console.error('Lỗi khi ghi tệp tin đích:', err);
});