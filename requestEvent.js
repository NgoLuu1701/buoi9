//Câu 4: requestEvent: http, sử dụng on của request. 
const http = require('http');

// Tạo một máy chủ HTTP đơn giản
const server = http.createServer((req, res) => {
  // Đăng ký sự kiện 'request'
  req.on('data', (chunk) => {
    console.log(`Da nhan du lieu: ${chunk}`);
  });

  req.on('end', () => {
    console.log('Ket thuc yeu cau.');
    res.end('Yeu cau da ket thuc.');
  });
});

// Lắng nghe cổng 3000
server.listen(4000, () => {
  console.log('May chu dang lang nghe tren cong 4000...');
});