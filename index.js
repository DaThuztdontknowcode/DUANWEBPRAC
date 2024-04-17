// const express = require('express');
// const db = require('./routes/db-config'); // Đây là file chứa cấu hình kết nối đến cơ sở dữ liệu
// const cookie = require('cookie-parser');
// const app = express();
// const PORT = process.env.PORT || 5000;
// app.use("/js", express.static(__dirname + "./public/js"));
// app.use("/css", express.static(__dirname + "./public/css"));
// app.set("view engine", "ejs");
// app.set("views engine", "./views");
// app.use(cookie());
// app.use(express.json());
// db.connect((err) => {
//     if (err) throw err;
//         console.log('Kết nối thành công đến cơ sở dữ liệu MySQL ' );
// });
// app.use("/", require("./routes/pages"));
// app.use("/api", require("./controllers/auth"));
// app.listen(PORT);
const express = require('express');
const app = express();
const path = require('path');

// Cấu hình express để phục vụ các tệp tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình đường dẫn cho thư mục chứa các tệp mẫu
app.set('views', path.join(__dirname, 'views'));

// Cấu hình trình xem mặc định là EJS
app.set('view engine', 'ejs');

// Cấu hình router cho trang chính
app.get('/', (req, res) => {
    res.render('index');
});

// Cấu hình router cho trang đăng ký
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','js', 'register.html'));
});

// Cấu hình router cho trang đăng nhập
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','js', 'login.html'));
});

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



 
