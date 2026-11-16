
export interface Question {
  id: number;
  question: string;
  answer: boolean;
  explanation: string;
}

export const questionBank: Question[] = [
  // ==========================================
  // LEVEL 1: DỄ (20 CÂU)
  // ==========================================

  {
    id: 1,
    question: 'CPU được xem là bộ xử lý trung tâm của máy tính.',
    answer: true,
    explanation:
      'CPU (Central Processing Unit) thực hiện các phép tính, xử lý lệnh và điều khiển hoạt động của máy tính.',
  },
  {
    id: 2,
    question: 'RAM là bộ nhớ lưu trữ dữ liệu vĩnh viễn ngay cả khi mất điện.',
    answer: false,
    explanation:
      'RAM là bộ nhớ khả biến. Dữ liệu trong RAM sẽ mất khi máy tính tắt nguồn.',
  },
  {
    id: 3,
    question: 'HTML được sử dụng để xây dựng cấu trúc của trang web.',
    answer: true,
    explanation:
      'HTML (HyperText Markup Language) là ngôn ngữ đánh dấu dùng để tạo cấu trúc và nội dung trang web.',
  },
  {
    id: 4,
    question: 'CSS là ngôn ngữ lập trình được sử dụng để xử lý logic backend.',
    answer: false,
    explanation:
      'CSS là ngôn ngữ định kiểu, dùng để thiết kế giao diện như màu sắc, bố cục, kích thước và hiệu ứng.',
  },
  {
    id: 5,
    question: 'JavaScript có thể được sử dụng để phát triển cả frontend và backend.',
    answer: true,
    explanation:
      'JavaScript chạy trên trình duyệt ở frontend và có thể chạy phía máy chủ thông qua Node.js.',
  },
  {
    id: 6,
    question: 'Git là một hệ thống quản lý phiên bản mã nguồn.',
    answer: true,
    explanation:
      'Git giúp theo dõi lịch sử thay đổi, quản lý nhánh và hỗ trợ nhiều lập trình viên làm việc chung.',
  },
  {
    id: 7,
    question: 'Google Chrome là một hệ điều hành máy tính.',
    answer: false,
    explanation:
      'Google Chrome là trình duyệt web. ChromeOS mới là hệ điều hành của Google.',
  },
  {
    id: 8,
    question: 'Địa chỉ IP được sử dụng để định danh thiết bị trong mạng.',
    answer: true,
    explanation:
      'Địa chỉ IP giúp xác định giao diện mạng của thiết bị và hỗ trợ định tuyến dữ liệu.',
  },
  {
    id: 9,
    question: 'Phần mềm Microsoft Word chủ yếu được sử dụng để chỉnh sửa video.',
    answer: false,
    explanation:
      'Microsoft Word là phần mềm soạn thảo văn bản, không phải phần mềm chỉnh sửa video.',
  },
  {
    id: 10,
    question: 'Database là nơi lưu trữ và tổ chức dữ liệu.',
    answer: true,
    explanation:
      'Cơ sở dữ liệu giúp lưu trữ, quản lý, truy vấn và cập nhật dữ liệu một cách có tổ chức.',
  },
  {
    id: 11,
    question: 'Python là một ngôn ngữ lập trình.',
    answer: true,
    explanation:
      'Python là ngôn ngữ lập trình bậc cao, có cú pháp tương đối dễ đọc và được sử dụng rộng rãi.',
  },
  {
    id: 12,
    question: 'HTTP là giao thức chỉ hoạt động trong mạng nội bộ LAN.',
    answer: false,
    explanation:
      'HTTP được sử dụng để truyền tải dữ liệu web qua nhiều loại mạng, bao gồm Internet và mạng nội bộ.',
  },
  {
    id: 13,
    question: 'SSD thường có tốc độ truy xuất dữ liệu nhanh hơn HDD.',
    answer: true,
    explanation:
      'SSD sử dụng bộ nhớ flash, không có đĩa quay cơ học nên thường có tốc độ truy xuất nhanh hơn HDD.',
  },
  {
    id: 14,
    question: 'Virus máy tính là một loại phần cứng.',
    answer: false,
    explanation:
      'Virus máy tính là phần mềm độc hại có khả năng lây nhiễm vào các chương trình hoặc tệp khác.',
  },
  {
    id: 15,
    question: 'Wi-Fi cho phép thiết bị kết nối mạng không dây.',
    answer: true,
    explanation:
      'Wi-Fi sử dụng sóng vô tuyến để kết nối các thiết bị với mạng mà không cần dây cáp mạng.',
  },
  {
    id: 16,
    question: 'Một byte thường gồm 8 bit.',
    answer: true,
    explanation:
      'Theo quy ước hiện đại, một byte bằng 8 bit và có thể biểu diễn 256 giá trị khác nhau.',
  },
  {
    id: 17,
    question: 'Android là hệ điều hành dành cho thiết bị di động.',
    answer: true,
    explanation:
      'Android là hệ điều hành dựa trên Linux, được sử dụng phổ biến trên điện thoại và máy tính bảng.',
  },
  {
    id: 18,
    question: 'Phần mở rộng .jpg thường được sử dụng cho các tệp âm thanh.',
    answer: false,
    explanation:
      'JPG hoặc JPEG là định dạng hình ảnh, không phải định dạng âm thanh.',
  },
  {
    id: 19,
    question: 'Email là phương tiện trao đổi thông tin điện tử.',
    answer: true,
    explanation:
      'Email cho phép gửi và nhận thư điện tử qua Internet.',
  },
  {
    id: 20,
    question: 'Frontend là phần hệ thống mà người dùng thường trực tiếp tương tác.',
    answer: true,
    explanation:
      'Frontend đảm nhiệm giao diện và trải nghiệm người dùng, bao gồm các nút bấm, biểu mẫu và nội dung hiển thị.',
  },

  // ==========================================
  // LEVEL 2: TRUNG BÌNH (20 CÂU)
  // ==========================================

  {
    id: 21,
    question: 'Trong JavaScript, toán tử === so sánh cả giá trị và kiểu dữ liệu.',
    answer: true,
    explanation:
      'Toán tử === là so sánh nghiêm ngặt, không tự động chuyển đổi kiểu dữ liệu trước khi so sánh.',
  },
  {
    id: 22,
    question: 'Trong SQL, lệnh DELETE có thể xóa toàn bộ bản ghi của một bảng nếu không có điều kiện WHERE.',
    answer: true,
    explanation:
      'DELETE FROM table_name không có WHERE sẽ xóa tất cả các bản ghi trong bảng nhưng không xóa cấu trúc bảng.',
  },
  {
    id: 23,
    question: 'Trong lập trình hướng đối tượng, tính kế thừa cho phép lớp con sử dụng các thuộc tính và phương thức từ lớp cha.',
    answer: true,
    explanation:
      'Inheritance giúp tái sử dụng mã nguồn và mở rộng chức năng từ một lớp đã tồn tại.',
  },
  {
    id: 24,
    question: 'API REST bắt buộc phải sử dụng giao thức FTP để truyền dữ liệu.',
    answer: false,
    explanation:
      'REST thường được triển khai trên HTTP hoặc HTTPS và sử dụng các phương thức như GET, POST, PUT, PATCH và DELETE.',
  },
  {
    id: 25,
    question: 'Trong React, useState được sử dụng để quản lý trạng thái của component.',
    answer: true,
    explanation:
      'useState là Hook giúp component lưu trữ trạng thái và cập nhật giao diện khi trạng thái thay đổi.',
  },
  {
    id: 26,
    question: 'Trong cơ sở dữ liệu quan hệ, khóa chính (Primary Key) có thể chứa giá trị NULL.',
    answer: false,
    explanation:
      'Primary Key phải có giá trị duy nhất và không được phép NULL.',
  },
  {
    id: 27,
    question: 'HTTPS sử dụng cơ chế mã hóa TLS để bảo vệ dữ liệu truyền giữa client và server.',
    answer: true,
    explanation:
      'HTTPS sử dụng TLS để bảo vệ tính bí mật và tính toàn vẹn của dữ liệu trong quá trình truyền.',
  },
  {
    id: 28,
    question: 'Trong Git, lệnh git commit sẽ tự động đẩy mã nguồn lên GitHub.',
    answer: false,
    explanation:
      'git commit chỉ lưu thay đổi vào lịch sử repository ở máy local. Muốn đẩy lên GitHub cần sử dụng git push.',
  },
  {
    id: 29,
    question: 'Trong mô hình client-server, client thường gửi yêu cầu và server xử lý yêu cầu đó.',
    answer: true,
    explanation:
      'Client-server là mô hình trong đó client yêu cầu dịch vụ và server cung cấp dữ liệu hoặc xử lý nghiệp vụ.',
  },
  {
    id: 30,
    question: 'Docker container luôn chứa một hệ điều hành đầy đủ giống như máy ảo.',
    answer: false,
    explanation:
      'Container thường chia sẻ kernel của hệ điều hành máy chủ, trong khi máy ảo thường có hệ điều hành khách riêng.',
  },
  {
    id: 31,
    question: 'Trong lập trình, thuật toán tìm kiếm nhị phân yêu cầu dữ liệu đầu vào đã được sắp xếp.',
    answer: true,
    explanation:
      'Binary Search liên tục chia đôi phạm vi tìm kiếm nên yêu cầu dữ liệu phải được sắp xếp theo thứ tự.',
  },
  {
    id: 32,
    question: 'Trong SQL, INNER JOIN trả về tất cả bản ghi của bảng bên trái kể cả khi không có dữ liệu khớp ở bảng bên phải.',
    answer: false,
    explanation:
      'INNER JOIN chỉ trả về những bản ghi có dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng.',
  },
  {
    id: 33,
    question: 'JSON là định dạng dữ liệu thường được sử dụng để trao đổi thông tin giữa các hệ thống.',
    answer: true,
    explanation:
      'JSON có cấu trúc nhẹ, dễ đọc và được sử dụng phổ biến trong API và ứng dụng web.',
  },
  {
    id: 34,
    question: 'Trong CSS, thuộc tính z-index có thể kiểm soát thứ tự xếp chồng của các phần tử.',
    answer: true,
    explanation:
      'z-index xác định thứ tự hiển thị trước sau của các phần tử trong cùng stacking context.',
  },
  {
    id: 35,
    question: 'Unit Testing là hoạt động kiểm thử toàn bộ hệ thống trong môi trường thực tế.',
    answer: false,
    explanation:
      'Unit Testing kiểm thử các đơn vị nhỏ nhất của phần mềm như hàm, phương thức hoặc module riêng lẻ.',
  },
  {
    id: 36,
    question: 'Trong mạng máy tính, DNS có chức năng chuyển đổi tên miền thành địa chỉ IP.',
    answer: true,
    explanation:
      'DNS giúp phân giải tên miền như example.com thành địa chỉ IP tương ứng để thiết bị kết nối.',
  },
  {
    id: 37,
    question: 'Trong Python, kiểu dữ liệu List không cho phép thay đổi phần tử sau khi khởi tạo.',
    answer: false,
    explanation:
      'List là kiểu dữ liệu có thể thay đổi (mutable), cho phép thêm, xóa và cập nhật phần tử.',
  },
  {
    id: 38,
    question: 'Trong mô hình MVC, Model chịu trách nhiệm quản lý dữ liệu và logic liên quan đến dữ liệu.',
    answer: true,
    explanation:
      'Model đại diện cho dữ liệu và các quy tắc nghiệp vụ liên quan, View hiển thị giao diện, Controller điều phối yêu cầu.',
  },
  {
    id: 39,
    question: 'Một hàm đệ quy có thể gọi lại chính nó trong quá trình thực thi.',
    answer: true,
    explanation:
      'Recursion là kỹ thuật trong đó hàm tự gọi lại chính nó và cần có điều kiện dừng để tránh đệ quy vô hạn.',
  },
  {
    id: 40,
    question: 'Trong hệ thống quản lý cơ sở dữ liệu, Index luôn làm tăng tốc độ của mọi thao tác INSERT và UPDATE.',
    answer: false,
    explanation:
      'Index có thể tăng tốc độ truy vấn đọc nhưng thường làm tăng chi phí khi thêm, sửa hoặc xóa dữ liệu vì chỉ mục cũng cần được cập nhật.',
  },

  // ==========================================
  // LEVEL 3: KHÓ (10 CÂU)
  // ==========================================

  {
    id: 41,
    question: 'Độ phức tạp thời gian trung bình của thuật toán Quick Sort là O(n log n).',
    answer: true,
    explanation:
      'Quick Sort có độ phức tạp trung bình O(n log n), nhưng trường hợp xấu nhất có thể đạt O(n²).',
  },
  {
    id: 42,
    question: 'Trong cơ sở dữ liệu quan hệ, chuẩn hóa dữ liệu luôn làm giảm số lượng bảng.',
    answer: false,
    explanation:
      'Chuẩn hóa thường phân tách bảng để giảm dư thừa dữ liệu và tránh bất thường khi cập nhật, do đó số lượng bảng có thể tăng.',
  },
  {
    id: 43,
    question: 'Trong hệ thống phân tán, tính nhất quán mạnh đảm bảo các lần đọc sau khi ghi thành công sẽ nhìn thấy giá trị mới nhất theo mô hình nhất quán đó.',
    answer: true,
    explanation:
      'Strong Consistency yêu cầu các thao tác đọc quan sát được kết quả ghi mới nhất theo thứ tự nhất quán được đảm bảo.',
  },
  {
    id: 44,
    question: 'Trong thuật toán mã hóa bất đối xứng, khóa công khai và khóa riêng tư có vai trò giống hệt nhau trong mọi thao tác.',
    answer: false,
    explanation:
      'Hai khóa có quan hệ toán học nhưng vai trò khác nhau. Chẳng hạn, mã hóa bằng khóa công khai thì giải mã bằng khóa riêng tư; chữ ký số dùng khóa riêng tư để ký và khóa công khai để xác minh.',
  },
  {
    id: 45,
    question: 'Trong hệ quản trị cơ sở dữ liệu hỗ trợ ACID, tính Atomicity đảm bảo giao dịch được thực hiện toàn bộ hoặc không thực hiện gì cả.',
    answer: true,
    explanation:
      'Atomicity đảm bảo tính nguyên tử của transaction: nếu một phần thất bại thì toàn bộ giao dịch được rollback.',
  },
  {
    id: 46,
    question: 'Trong lập trình đa luồng, Race Condition chỉ xảy ra khi có đúng hai luồng cùng truy cập một biến.',
    answer: false,
    explanation:
      'Race Condition có thể xảy ra với hai hoặc nhiều luồng hay tiến trình khi chúng truy cập tài nguyên dùng chung mà việc đồng bộ không được đảm bảo.',
  },
  {
    id: 47,
    question: 'Trong bảo mật web, việc sử dụng Prepared Statement có thể giúp ngăn chặn SQL Injection.',
    answer: true,
    explanation:
      'Prepared Statement tách biệt câu lệnh SQL và dữ liệu đầu vào, giúp ngăn dữ liệu độc hại bị diễn giải thành mã SQL.',
  },
  {
    id: 48,
    question: 'Trong kiến trúc Microservices, tất cả dịch vụ bắt buộc phải sử dụng chung một cơ sở dữ liệu.',
    answer: false,
    explanation:
      'Microservices thường hướng tới quyền sở hữu dữ liệu độc lập cho từng dịch vụ, thay vì bắt buộc chia sẻ một cơ sở dữ liệu.',
  },
  {
    id: 49,
    question: 'Trong hệ điều hành, Deadlock có thể xảy ra khi các tiến trình thỏa mãn đồng thời bốn điều kiện Coffman.',
    answer: true,
    explanation:
      'Bốn điều kiện gồm Mutual Exclusion, Hold and Wait, No Preemption và Circular Wait. Khi cả bốn cùng tồn tại, deadlock có thể xảy ra.',
  },
  {
    id: 50,
    question: 'Thuật toán mã hóa SHA-256 là thuật toán mã hóa đối xứng có thể giải mã để khôi phục dữ liệu ban đầu.',
    answer: false,
    explanation:
      'SHA-256 là hàm băm mật mã một chiều, tạo ra giá trị băm 256 bit. Nó không phải thuật toán mã hóa có thể giải mã ngược.',
  },
];
