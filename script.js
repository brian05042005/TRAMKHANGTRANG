let currentPage = 1;
const itemsPerPage = 10;
let ratingsData = JSON.parse(localStorage.getItem("ratingsData")) || {};
let products = [
  {
    id: 1,
    name: "Paracetamol",
    category: "Thuốc kê đơn",
    price: "20000",
    stock: 15,       
    sold: 120,      
    image: "images/paracetamol.jpg",
    description: {
      thanhPhan: "Paracetamol 500mg",
      congDung: "Giảm đau, hạ sốt",
      cachDung: "Uống 1-2 viên mỗi 4-6 giờ khi cần",
      tacDungPhu: "Buồn nôn, phát ban",
      luuY: "Không dùng quá liều",
      baoQuan: "Nơi khô ráo, tránh ánh sáng",
    },
  },
  {
    id: 2,
    name: "Amoxicillin",
    category: "Thuốc kê đơn",
    price: "60000",
    stock: 100,   
     sold: 230 ,
    image: "images/amoxicillin.png",
    description: {
      thanhPhan: "Amoxicillin 500mg",
      congDung: "Kháng sinh trị nhiễm khuẩn",
      cachDung: "Uống 1 viên mỗi 8 giờ",
      tacDungPhu: "Tiêu chảy, dị ứng",
      luuY: "Tham khảo ý kiến bác sĩ",
      baoQuan: "Tránh nhiệt độ cao",
    },
  },
  {
    id: 3,
    name: "Vitamin C",
    category: "Thực phẩm chức năng",
    price: "40000",
    stock: 67,
    sold: 39,
    image: "images/vitamin-c.png",
    description: {
      thanhPhan: "Acid Ascorbic (Vitamin C) 500mg",
      congDung: "Tăng cường sức đề kháng, chống oxy hóa",
      cachDung: "Uống 1 viên mỗi ngày sau bữa ăn",
      tacDungPhu: "Buồn nôn, tiêu chảy khi dùng liều cao",
      luuY: "Tham khảo ý kiến bác sĩ nếu đang mang thai hoặc cho con bú",
      baoQuan: "Bảo quản nơi khô ráo, tránh ánh sáng trực tiếp",
    },
  },
  {
    id: 4,
    name: "Sữa rửa mặt Cetaphil",
    category: "Mỹ phẩm - Skincare",
    image: "images/cetaphil.jpg",
    price: 120000,
    stock: 43,
    sold: 12,
    description: {
      thanhPhan: "Nước tinh khiết, Glycerin",
      congDung: "Làm sạch da nhẹ dịu",
      cachDung: "Dùng sáng và tối",
      tacDungPhu: "Hiếm gặp kích ứng",
      luuY: "Tránh tiếp xúc mắt",
      baoQuan: "Tránh ánh nắng",
    },
  },
  {
    id: 5,
    name: "Kem dưỡng ẩm Neutrogena",
    category: "Mỹ phẩm - Skincare",
    image: "images/neutrogena.jpg",
    price: 250000,
    stock: 434,
    sold: 987,
    description: {
      thanhPhan: "Hyaluronic Acid",
      congDung: "Cấp ẩm cho da",
      cachDung: "Thoa sáng và tối",
      tacDungPhu: "Có thể gây mụn nhẹ",
      luuY: "Ngưng dùng khi kích ứng",
      baoQuan: "Nơi thoáng mát",
    },
  },
  {
    id: 6,
    name: "Sữa rửa mặt Simple",
    catetory: "Mỹ phẩm - Skincare",
    price: 130000,
    stock: 80,
    sold: 55,
    image: "images/simple.jpg",
    description: {
      thanhPhan: "Pro-Vitamin B5",
      congDung: "Làm sạch và cấp ẩm",
      cachDung: "Rửa sáng và tối",
      tacDungPhu: "Hiếm kích ứng",
      luuY: "Tránh tiếp xúc mắt",
      baoQuan: "Đậy kín nắp",
    },
  },
  {
    id: 7,
    name: "Glucosamine 1500mg",
    price: 300000,
    stock: 97,
    sold: 0,
    image: "images/glucosamine.jpg",
    description: {
      thanhPhan: "Glucosamine Sulfate",
      congDung: "Hỗ trợ xương khớp",
      cachDung: "Uống 1 viên/ngày",
      tacDungPhu: "Khó tiêu",
      luuY: "Tham khảo bác sĩ nếu có bệnh nền",
      baoQuan: "Tránh ẩm",
    },
    category: "Thực phẩm chức năng",
  },
  {
    id: 8,
    name: "Serum The Ordinary Niacinamide",
    price: 250000,
    stock: 82,
    sold: 238,
    image: "images/niacinamide.jpg",
    description: {
      thanhPhan: "Niacinamide 10%",
      congDung: "Giảm mụn, thu nhỏ lỗ chân lông",
      cachDung: "Thoa sau rửa mặt",
      tacDungPhu: "Kích ứng nhẹ",
      luuY: "Test trước khi dùng",
      baoQuan: "Tránh nắng",
    },
    category: "Mỹ phẩm - Skincare",
  },
  {
    id: 9,
    name: "Vitamin D3 K2 MK7",
    price: 180000,
    stock: 0,
    sold: 300,
    image: "images/vitamin-d3k2.jpg",
    description: {
      thanhPhan: "Vitamin D3, K2",
      congDung: "Hỗ trợ hấp thu Canxi",
      cachDung: "Uống 1 giọt/ngày",
      tacDungPhu: "Hiếm gặp",
      luuY: "Không dùng quá liều",
      baoQuan: "Ngăn mát",
    },
    category: "Thực phẩm chức năng",
  },
  {
    id: 10,
    name: "Viên sủi Vitamin C",
    price: 40000,
    stock: 500,
    sold: 23,
    image: "images/vitamin-c-effervescent.jpg",
    description: {
      thanhPhan: "Vitamin C 1000mg",
      congDung: "Tăng sức đề kháng",
      cachDung: "Hòa tan 1 viên/ngày",
      tacDungPhu: "Tiêu chảy khi quá liều",
      luuY: "Không dùng quá 2 viên/ngày",
      baoQuan: "Nơi khô ráo",
    },
    category: "Thực phẩm chức năng",
  },
  {
    id: 11,
    name: "Omega 3 Fish Oil",
    price: 190000,
    stock: 123,
    sold: 58,
    image: "images/omega3.jpg",
    description: {
      thanhPhan: "Dầu cá nguyên chất",
      congDung: "Tốt cho tim mạch",
      cachDung: "Uống 1-2 viên/ngày",
      tacDungPhu: "Khó tiêu nhẹ",
      luuY: "Không dùng cho người dị ứng cá",
      baoQuan: "Tránh ánh sáng",
    },
    category: "Thực phẩm chức năng",
  },
  {
    id: 12,
    name: "Magie B6",
    price: 85000,
    stock: 99,
    sold: 11,
    image: "images/magie-b6.jpg",
    description: {
      thanhPhan: "Magnesium, Vitamin B6",
      congDung: "Giảm căng thẳng, hỗ trợ thần kinh",
      cachDung: "Uống 1 viên/ngày",
      tacDungPhu: "Hiếm gặp",
      luuY: "Tham khảo ý kiến bác sĩ",
      baoQuan: "Nơi khô ráo",
    },
    category: "Thực phẩm chức năng",
  },
  {
    id: 13,
    name: "Kẽm Gluconate",
    price: 75000,
    stock:200,
    sold: 0,
    image: "images/kem-gluconate.jpg",
    description: {
      thanhPhan: "Kẽm Gluconate",
      congDung: "Tăng miễn dịch",
      cachDung: "Uống 1 viên/ngày",
      tacDungPhu: "Buồn nôn nhẹ",
      luuY: "Dùng sau ăn",
      baoQuan: "Tránh ẩm",
    },
    category: "Thực phẩm chức năng",
  },
  {
    id: 14,
    name: "Collagen Neocell",
    price: 320000,
    stock: 0,
    sold: 150,
    image: "images/collagen-neocell.jpg",
    description: {
      thanhPhan: "Collagen Type 1&3",
      congDung: "Đẹp da, tóc, móng",
      cachDung: "Uống 6 viên/ngày",
      tacDungPhu: "Khó tiêu",
      luuY: "Tham khảo bác sĩ nếu có thai",
      baoQuan: "Tránh ánh nắng",
    },
    category: "Thực phẩm chức năng",
  },
  {
    id: 15,
    name: "Vitamin E 400 IU",
    price: 90000,
    stock: 78,
    sold: 22,
    image: "images/vitamin-e.jpg",
    description: {
      thanhPhan: "Vitamin E",
      congDung: "Chống lão hóa",
      cachDung: "Uống 1 viên/ngày",
      tacDungPhu: "Buồn nôn",
      luuY: "Không dùng quá liều",
      baoQuan: "Tránh nhiệt độ cao",
    },
    category: "Thực phẩm chức năng",
  },
  {
    id: 16,
    name: "Kem chống nắng Anessa",
    price: 450000,
    stock: 80,
    sold: 120,
    image: "images/anessa.jpg",
    description: {
      thanhPhan: "SPF 50+",
      congDung: "Chống nắng tối ưu",
      cachDung: "Thoa trước ra ngoài 20 phút",
      tacDungPhu: "Kích ứng nhẹ",
      luuY: "Tránh vùng mắt",
      baoQuan: "Tránh nóng",
    },
    category: "Mỹ phẩm - Skincare",
  },
  {
    id: 17,
    name: "Serum HA L'Oreal",
    price: 320000,
    stock: 28,
    sold: 672,
    image: "images/ha-loreal.jpg",
    description: {
      thanhPhan: "Hyaluronic Acid",
      congDung: "Cấp ẩm sâu",
      cachDung: "Thoa sáng và tối",
      tacDungPhu: "Hiếm kích ứng",
      luuY: "Test da trước khi dùng",
      baoQuan: "Tránh nắng",
    },
    category: "Mỹ phẩm - Skincare",
  },
  {
    id: 18,
    name: "Kem trị mụn La Roche-Posay",
    price: 250000,
    stock: 77,
    sold: 13,
    image: "images/la-roche-posay.jpg",
    description: {
      thanhPhan: "Niacinamide",
      congDung: "Giảm viêm, giảm mụn",
      cachDung: "Thoa vùng mụn",
      tacDungPhu: "Kích ứng nhẹ",
      luuY: "Không dùng trên vết thương hở",
      baoQuan: "Tránh ánh sáng",
    },
    category: "Mỹ phẩm - Skincare",
  },
  {
  id: 19,
  name: "Tinh dầu tràm",
  price: 60000,
  stock: 12,
  sold: 108,
  image: "images/tinh-dau-tram.jpg",
  description: {
    thanhPhan: "Tinh dầu tràm nguyên chất",
    congDung: "Giữ ấm, phòng cảm",
    cachDung: "Xoa nhẹ lên ngực",
    tacDungPhu: "Kích ứng nhẹ",
    luuY: "Không bôi trực tiếp lên mặt trẻ nhỏ",
    baoQuan: "Đậy nắp kín",
  },
  category: "Chăm sóc sức khỏe",
},
{
  id: 20,
  name: "Dung dịch vệ sinh phụ nữ Dạ Hương",
  price: 50000,
  stock: 6,
  sold: 92,
  image: "images/da-huong.jpg",
  description: {
    thanhPhan: "Tinh chất trà xanh",
    congDung: "Làm sạch, khử mùi",
    cachDung: "Dùng hàng ngày",
    tacDungPhu: "Kích ứng nhẹ",
    luuY: "Chỉ dùng ngoài da",
    baoQuan: "Nơi khô ráo",
  },
  category: "Chăm sóc cá nhân",
},
{
  id: 21,
  name: "Sữa tắm Dove",
  price: 120000,
  stock: 18,
  sold: 134,
  image: "images/dove.jpg",
  description: {
    thanhPhan: "Sữa dưỡng ẩm",
    congDung: "Làm mềm da",
    cachDung: "Dùng hàng ngày",
    tacDungPhu: "Hiếm gặp",
    luuY: "Tránh tiếp xúc mắt",
    baoQuan: "Tránh ánh nắng",
  },
  category: "Chăm sóc cá nhân",
},
{
  id: 22,
  name: "Dầu gội Head & Shoulders",
  price: 95000,
  stock: 0,
  sold: 160,
  image: "images/head-shoulders.jpg",
  description: {
    thanhPhan: "Zinc Pyrithione",
    congDung: "Trị gàu",
    cachDung: "Gội 2-3 lần/tuần",
    tacDungPhu: "Khô da đầu",
    luuY: "Không để dính mắt",
    baoQuan: "Nơi thoáng",
  },
  category: "Chăm sóc tóc",
},
{
  id: 23,
  name: "Viên nghệ Nano Curcumin",
  price: 150000,
  stock: 9,
  sold: 74,
  image: "images/nano-curcumin.jpg",
  description: {
    thanhPhan: "Nano Curcumin",
    congDung: "Hỗ trợ dạ dày",
    cachDung: "Uống 2 viên/ngày",
    tacDungPhu: "Hiếm gặp",
    luuY: "Tham khảo bác sĩ nếu đang điều trị bệnh",
    baoQuan: "Tránh ẩm",
  },
  category: "Thực phẩm chức năng",
},
{
  id: 24,
  name: "Men vi sinh BioGaia",
  price: 280000,
  stock: 3,
  sold: 47,
  image: "images/biogaia.jpg",
  description: {
    thanhPhan: "Probiotic",
    congDung: "Cân bằng hệ tiêu hóa",
    cachDung: "Uống 5 giọt/ngày",
    tacDungPhu: "Hiếm gặp",
    luuY: "Lắc đều trước khi dùng",
    baoQuan: "Ngăn mát",
  },
  category: "Thực phẩm chức năng",
},
{
  id: 25,
  name: "Nước súc miệng Listerine",
  price: 90000,
  stock: 25,
  sold: 190,
  image: "images/listerine.jpg",
  description: {
    thanhPhan: "Tinh dầu tự nhiên",
    congDung: "Khử mùi, sạch miệng",
    cachDung: "Súc miệng 2 lần/ngày",
    tacDungPhu: "Cay nhẹ",
    luuY: "Không nuốt",
    baoQuan: "Đậy kín nắp",
  },
  category: "Chăm sóc răng miệng",
},
{
  id: 26,
  name: "Tinh dầu bưởi Milaganics",
  price: 95000,
  stock: 7,
  sold: 88,
  image: "images/tinh-dau-buoi.jpg",
  description: {
    thanhPhan: "Tinh dầu vỏ bưởi",
    congDung: "Kích thích mọc tóc",
    cachDung: "Thoa da đầu 2-3 lần/tuần",
    tacDungPhu: "Kích ứng nhẹ",
    luuY: "Không dùng khi da đầu có vết thương",
    baoQuan: "Nơi thoáng mát",
  },
  category: "Chăm sóc tóc",
},
{
  id: 27,
  name: "Bột sủi Vitamin B Complex",
  price: 50000,
  stock: 4,
  sold: 65,
  image: "images/vitamin-b-complex.jpg",
  description: {
    thanhPhan: "Vitamin B1, B6, B12",
    congDung: "Tăng năng lượng, giảm mệt mỏi",
    cachDung: "Hòa tan 1 gói/ngày",
    tacDungPhu: "Nước tiểu vàng",
    luuY: "Không dùng quá liều",
    baoQuan: "Nơi khô ráo",
  },
  category: "Thực phẩm chức năng",
},
{
  id: 28,
  name: "Tinh dầu bạc hà",
  price: 40000,
  stock: 0,
  sold: 123,
  image: "images/tinh-dau-bac-ha.jpg",
  description: {
    thanhPhan: "Menthol tự nhiên",
    congDung: "Giảm đau đầu, thông mũi",
    cachDung: "Xoa thái dương hoặc hít",
    tacDungPhu: "Kích ứng",
    luuY: "Tránh bôi gần mắt",
    baoQuan: "Đậy kín",
  },
  category: "Chăm sóc sức khỏe",
},
{
  id: 29,
  name: "Kem dưỡng Nivea Soft",
  price: 85000,
  stock: 14,
  sold: 99,
  image: "images/nivea-soft.jpg",
  description: {
    thanhPhan: "Vitamin E, Jojoba Oil",
    congDung: "Dưỡng ẩm toàn thân",
    cachDung: "Thoa sáng và tối",
    tacDungPhu: "Hiếm gặp",
    luuY: "Ngưng khi kích ứng",
    baoQuan: "Tránh ánh nắng",
  },
  category: "Mỹ phẩm - Skincare",
},
{
  id: 30,
  name: "Siro ho Prospan",
  price: 110000,
  stock: 11,
  sold: 75,
  image: "images/prospan.jpg",
  description: {
    thanhPhan: "Lá thường xuân",
    congDung: "Giảm ho, long đờm",
    cachDung: "Uống theo chỉ định",
    tacDungPhu: "Tiêu chảy nhẹ",
    luuY: "Tham khảo bác sĩ trẻ nhỏ",
    baoQuan: "Tránh nóng",
  },
  category: "Thuốc không kê đơn",
},
{
  id: 31,
  name: "Viên uống DHC Vitamin C",
  price: 90000,
  stock: 19,
  sold: 220,
  image: "images/dhc-vitamin-c.jpg",
  description: {
    thanhPhan: "Vitamin C 1000mg",
    congDung: "Chống oxy hóa",
    cachDung: "Uống 1 viên/ngày",
    tacDungPhu: "Tiêu chảy nếu quá liều",
    luuY: "Không dùng quá 2 viên/ngày",
    baoQuan: "Nơi khô ráo",
  },
  category: "Thực phẩm chức năng",
},
{
  id: 32,
  name: "Nước rửa tay Lifebuoy",
  price: 35000,
  stock: 10,
  sold: 156,
  image: "images/lifebuoy.jpg",
  description: {
    thanhPhan: "Tinh dầu tự nhiên",
    congDung: "Diệt khuẩn 99,9%",
    cachDung: "Rửa tay hàng ngày",
    tacDungPhu: "Khô da",
    luuY: "Tránh tiếp xúc mắt",
    baoQuan: "Đậy nắp kín",
  },
  category: "Chăm sóc cá nhân",
},
{
  id: 33,
  name: "Kem đánh răng Sensodyne",
  price: 95000,
  stock: 16,
  sold: 141,
  image: "images/sensodyne.jpg",
  description: {
    thanhPhan: "Potassium Nitrate",
    congDung: "Giảm ê buốt",
    cachDung: "Đánh răng 2 lần/ngày",
    tacDungPhu: "Hiếm gặp",
    luuY: "Không nuốt",
    baoQuan: "Nơi thoáng",
  },
  category: "Chăm sóc răng miệng",
},
{
  id: 34,
  name: "Tảo Spirulina Nhật Bản",
  price: 350000,
  stock: 5,
  sold: 31,
  image: "images/spirulina.jpg",
  description: {
    thanhPhan: "Tảo Spirulina",
    congDung: "Bổ sung dinh dưỡng",
    cachDung: "Uống 6 viên/ngày",
    tacDungPhu: "Khó tiêu",
    luuY: "Không dùng quá liều",
    baoQuan: "Tránh ẩm",
  },
  category: "Thực phẩm chức năng",
},
{
  id: 35,
  name: "Kem dưỡng ẩm Hada Labo",
  price: 200000,
  stock: 2,
  sold: 64,
  image: "images/hada-labo.jpg",
  description: {
    thanhPhan: "Hyaluronic Acid",
    congDung: "Cấp ẩm sâu",
    cachDung: "Thoa sáng và tối",
    tacDungPhu: "Hiếm kích ứng",
    luuY: "Test trước khi dùng",
    baoQuan: "Tránh ánh nắng",
  },
  category: "Mỹ phẩm - Skincare",
},
{
  id: 36,
  name: "Thuốc nhỏ mắt V.Rohto",
  price: 45000,
  stock: 13,
  sold: 172,
  image: "images/rohto.jpg",
  description: {
    thanhPhan: "Natri Chloride",
    congDung: "Giảm mỏi mắt",
    cachDung: "Nhỏ 3-5 lần/ngày",
    tacDungPhu: "Xót nhẹ",
    luuY: "Không dùng khi kích ứng",
    baoQuan: "Đậy nắp kín",
  },
  category: "Thuốc không kê đơn",
},
{
  id: 37,
  name: "Kẹo ngậm ho Ricola",
  price: 50000,
  stock: 0,
  sold: 110,
  image: "images/ricola.jpg",
  description: {
    thanhPhan: "Thảo dược tự nhiên",
    congDung: "Giảm đau họng",
    cachDung: "Ngậm khi cần",
    tacDungPhu: "Hiếm gặp",
    luuY: "Không dùng quá 8 viên/ngày",
    baoQuan: "Nơi khô ráo",
  },
  category: "Chăm sóc sức khỏe",
},
{
  id: 38,
  name: "Viên bổ sung sắt Ferrovit",
  price: 120000,
  stock: 6,
  sold: 85,
  image: "images/ferrovit.jpg",
  description: {
    thanhPhan: "Sắt, Acid Folic",
    congDung: "Ngừa thiếu máu",
    cachDung: "Uống 1 viên/ngày",
    tacDungPhu: "Táo bón",
    luuY: "Tham khảo bác sĩ",
    baoQuan: "Tránh ẩm",
  },
  category: "Thực phẩm chức năng",
},
{
  id: 39,
  name: "Gel trị mụn Acnes",
  price: 70000,
  stock: 8,
  sold: 137,
  image: "images/acnes.jpg",
  description: {
    thanhPhan: "Sulfur, Resorcinol",
    congDung: "Giảm mụn nhanh",
    cachDung: "Thoa trực tiếp vùng mụn",
    tacDungPhu: "Kích ứng nhẹ",
    luuY: "Ngưng khi kích ứng",
    baoQuan: "Tránh ánh sáng",
  },
  category: "Mỹ phẩm - Skincare",
},
{
  id: 40,
  name: "Sữa rửa mặt Senka",
  price: 95000,
  stock: 17,
  sold: 203,
  image: "images/senka.jpg",
  description: {
    thanhPhan: "Amino Acid",
    congDung: "Làm sạch sâu",
    cachDung: "Rửa sáng và tối",
    tacDungPhu: "Khô da nhẹ",
    luuY: "Tránh tiếp xúc mắt",
    baoQuan: "Đậy kín",
  },
  category: "Mỹ phẩm - Skincare",
}
];
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
} else {
  products = JSON.parse(localStorage.getItem("products"));
}

let currentProductId = null;
const commentsData = {}; // Lưu bình luận tạm thời

// Lấy giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hiển thị sản phẩm khuyến mãi (Trang khuyến mãi)
function renderPromotions() {
  const container = document.getElementById("promotionList");
  if (!container) return;
  const promotions = products.slice(0, 3);
  container.innerHTML = "";
  promotions.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p><s>${parseInt(p.price) + 10000}đ</s> <strong>${p.price}đ</strong></p>
      <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
    `;
    container.appendChild(div);
  });
}

// Thêm vào giỏ hàng
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product || product.stock <= 0) {
    alert("Sản phẩm đã hết hàng!");
    return;
  }

  const item = cart.find(i => i.id === id);
  if (item) {
    if (item.quantity < product.stock) {
      item.quantity++;
    } else {
      alert("Đã đạt số lượng tối đa còn lại trong kho!");
    }
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCart();
}


// Lưu giỏ hàng
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Cập nhật giỏ hàng trên icon và checkout
function updateCart() {
  const count = document.getElementById("cartCountIcon");
  const checkout = document.getElementById("checkoutItems");
  let total = 0;

  if (count) count.textContent = cart.reduce((s, i) => s + i.quantity, 0);

  if (checkout) {
    checkout.innerHTML = "";
    cart.forEach((i) => {
      checkout.innerHTML += `<div>${i.name} x${i.quantity}</div>`;
      total += i.quantity * parseInt(i.price);
    });
    const totalElem = document.getElementById("checkoutTotal");
    if (totalElem) totalElem.textContent = total + "đ";
  }
}

// Popup giỏ hàng
function openPopup() {
  const popup = document.getElementById("cartPopup");
  const popupItems = document.getElementById("popupItems");
  popupItems.innerHTML = "";
  if (cart.length === 0) {
    popupItems.innerHTML = "<p>Giỏ hàng trống.</p>";
  } else {
    cart.forEach(item => {
  const product = products.find(p => p.id === item.id);
  if (product) {
    product.stock -= item.quantity;
    product.sold += item.quantity;
  }
});
// Cập nhật products trong localStorage nếu bạn lưu chúng ở đó
// localStorage.setItem("products", JSON.stringify(products));

  }
  popup.style.display = "block";
}
function closePopup() {
  document.getElementById("cartPopup").style.display = "none";
}

// Slide banner
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  if (slides.length === 0) return;
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}
function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

// Khi tải trang
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  updateCart();
  renderProducts(); // chỉ hiển thị nếu có #productList
  renderPromotions(); // chỉ hiển thị nếu có #promotionList
  showSlides();
});
function toggleChat() {
  const content = document.getElementById("chatContent");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function handleChat(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message === "") return;
    appendMessage("user", message);
    respondBot(message);
    input.value = "";
  }
}

function toggleChat() {
  const content = document.getElementById("chatContent");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

// Lưu lịch sử chat
let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

function renderChatHistory() {
  const chat = document.getElementById("chatMessages");
  chat.innerHTML = "";
  chatHistory.forEach((item) => {
    appendMessage(item.sender, item.text, false);
  });
  chat.scrollTop = chat.scrollHeight;
}

function handleChat(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message === "") return;
    appendMessage("user", message, true);
    respondBot(message);
    input.value = "";
  }
}

function appendMessage(sender, text, save) {
  const chat = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "message " + sender;

  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src =
    sender === "user"
      ? "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
      : "https://cdn-icons-png.flaticon.com/512/4712/4712109.png";

  const bubble = document.createElement("div");
  bubble.className = "text";
  bubble.innerHTML = text;

  div.appendChild(avatar);
  div.appendChild(bubble);
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;

  if (save) {
    chatHistory.push({ sender, text });
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }
}

function showTyping() {
  appendMessage("bot", "<i>Đang trả lời...</i>", false);
}

function removeTyping() {
  const chat = document.getElementById("chatMessages");
  const messages = chat.querySelectorAll(".message.bot");
  messages.forEach((m) => {
    if (m.querySelector(".text").innerHTML === "<i>Đang trả lời...</i>") {
      chat.removeChild(m);
    }
  });
}

function respondBot(message) {
  showTyping();
  setTimeout(() => {
    removeTyping();

    let reply = "Xin lỗi, tôi chưa hiểu câu hỏi.";

    const msg = message.toLowerCase();
    if (msg.includes("giờ mở cửa")) {
      reply = "Hiệu thuốc mở cửa từ 8h đến 21h mỗi ngày.";
    } else if (msg.includes("khuyến mãi")) {
      reply =
        "Hiện tại có chương trình giảm giá đến 30%. Xem mục <a href='promotions.html' target='_blank'>Khuyến mãi</a>.";
    } else if (msg.includes("địa chỉ")) {
      reply = "Địa chỉ: 123 Đường Sức Khỏe, Quận Trung Tâm.";
    } else if (msg.includes("giao hàng")) {
      reply = "Chúng tôi giao hàng toàn quốc trong 2-3 ngày.";
    } else if (msg.includes("thanh toán")) {
      reply = "Bạn có thể thanh toán khi nhận hàng hoặc qua chuyển khoản.";
    } else if (msg.includes("hotline")) {
      reply = "Hotline hỗ trợ: 1900 6789 (8h-21h).";
    } else if (msg.includes("tư vấn")) {
      reply = "Bạn vui lòng cung cấp tên thuốc hoặc triệu chứng để được hỗ trợ.";
    }

    appendMessage("bot", reply, true);
  }, 800);
}

function sendSuggestion(text) {
  appendMessage("user", text, true);
  respondBot(text);
}

function renderSuggestions() {
  const suggestions = [
    "Giờ mở cửa",
    "Khuyến mãi",
    "Địa chỉ",
    "Giao hàng",
    "Thanh toán",
    "Hotline",
    "Tư vấn thuốc",
  ];
  const container = document.getElementById("chatSuggestions");
  container.innerHTML = "";
  suggestions.forEach((s) => {
    const btn = document.createElement("button");
    btn.textContent = s;
    btn.onclick = () => sendSuggestion(s);
    container.appendChild(btn);
  });
}

// MODIFIED: Added keyword and selectedCategory parameters
function renderProducts(keyword = "", selectedCategory = "") {
  const container = document.getElementById("productList");
  const paginationContainer = document.getElementById("pagination");
  if (!container) return;

  container.innerHTML = "";
  if (paginationContainer) {
    paginationContainer.innerHTML = "";
  }

  const filteredProducts = products.filter((p) => {
    const matchesKeyword = keyword
      ? p.name.toLowerCase().includes(keyword.toLowerCase())
      : true;
    const matchesCategory = selectedCategory
      ? p.category === selectedCategory
      : true;
    return matchesKeyword && matchesCategory;
  });

  if (filteredProducts.length === 0) {
    container.innerHTML = "<p>Không tìm thấy sản phẩm phù hợp.</p>";
    if (paginationContainer) {
      paginationContainer.innerHTML = ""; // Clear pagination if no products
    }
    return;
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = filteredProducts.slice(start, end);

 pageItems.forEach(product => {
  const div = document.createElement("div");
  const isOutOfStock = product.stock <= 0;

  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" onclick="showDetails(${product.id})" style="cursor:pointer;">
    <h3 onclick="showDetails(${product.id})" style="cursor:pointer; color:#2a7f62;">${product.name}</h3>
    <p><strong>${product.price.toLocaleString()}đ</strong></p>
    <p>Đã bán: ${product.sold ?? 0} | Còn lại: ${product.stock ?? 0}</p>
    ${isOutOfStock ? 
      `<button disabled style="background: gray; cursor: not-allowed;">Hết hàng</button>` :
      `<button onclick="addToCart(${product.id})">Thêm vào giỏ</button>`
    }
    <button onclick="showDetails(${product.id})">Xem chi tiết</button>
  `;

  container.appendChild(div);
});

  // Tạo nút phân trang
  if (paginationContainer) {
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = i === currentPage ? "active" : "";
      btn.onclick = function () {
        currentPage = i;
        // Pass current keyword and category when changing page
        const currentKeyword = document.getElementById("searchInput").value;
        const currentCategory = document.getElementById("categoryFilter").value;
        renderProducts(currentKeyword, currentCategory);
      };
      paginationContainer.appendChild(btn);
    }
  }
}

document.getElementById("searchInput").addEventListener("keyup", function () {
  currentPage = 1; // Reset to first page on new search
  const keyword = this.value.trim();
  const selectedCategory = document.getElementById("categoryFilter").value;
  renderProducts(keyword, selectedCategory);
});

// MODIFIED: Update filterByCategory to call renderProducts
function filterByCategory() {
  currentPage = 1; // Reset to first page on new filter
  const selectedCategory = document.getElementById("categoryFilter").value;
  const keyword = document.getElementById("searchInput").value.trim();
  renderProducts(keyword, selectedCategory);
}

window.addEventListener("load", () => {
  renderProducts();
});
window.addEventListener("load", () => {
  renderChatHistory();
  renderSuggestions();
});
function showDetails(id) {
  const p = products.find((prod) => prod.id === id);
  if (!p) return;

  currentProductId = id; // lưu sản phẩm đang xem
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalImage").src = p.image;
  document.getElementById("modalThanhPhan").textContent =
    p.description.thanhPhan;
  document.getElementById("modalCongDung").textContent =
    p.description.congDung;
  document.getElementById("modalCachDung").textContent = p.description.cachDung;
  document.getElementById("modalTacDungPhu").textContent =
    p.description.tacDungPhu;
  document.getElementById("modalLuuY").textContent = p.description.luuY;
  document.getElementById("modalBaoQuan").textContent = p.description.baoQuan;

  renderRatingStars(id);

  renderComments();

  document.getElementById("productModal").style.display = "block";
}
function renderRatingStars(productId) {
  const container = document.getElementById("ratingStars");
  const currentRating = ratingsData[productId] || 0;
  container.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.textContent = i <= currentRating ? "★" : "☆";
    star.style.cursor = "pointer";
    star.style.fontSize = "24px";
    star.style.color = i <= currentRating ? "gold" : "gray";
    star.addEventListener("click", () => setRating(productId, i));
    container.appendChild(star);
  }
}
function setRating(productId, rating) {
  ratingsData[productId] = rating;
  localStorage.setItem("ratingsData", JSON.stringify(ratingsData));
  renderRatingStars(productId);
}

function renderComments() {
  const ul = document.getElementById("commentList");
  ul.innerHTML = "";

  const comments = commentsData[currentProductId] || [];
  comments.forEach((c) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${c.text}</span>
      <button onclick="editComment(${c.id})">Sửa</button>
      <button onclick="deleteComment(${c.id})">Xoá</button>
    `;
    ul.appendChild(li);
  });
}
function deleteComment(commentId) {
  commentsData[currentProductId] = commentsData[currentProductId].filter(
    (c) => c.id !== commentId
  );
  renderComments();
}
function editComment(commentId) {
  const comments = commentsData[currentProductId];
  const comment = comments.find((c) => c.id === commentId);
  const newText = prompt("Chỉnh sửa bình luận:", comment.text);
  if (newText !== null && newText.trim() !== "") {
    comment.text = newText.trim();
    renderComments();
  }
}

function addComment() {
  const textarea = document.getElementById("newComment");
  const text = textarea.value.trim();
  if (!text) return;

  if (!commentsData[currentProductId]) {
    commentsData[currentProductId] = [];
  }

  const newComment = {
    id: Date.now(), // tạo id duy nhất
    text: text,
  };

  commentsData[currentProductId].push(newComment);
  textarea.value = "";
  renderComments();
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

// Add an event listener to the category filter if it exists
const categoryFilter = document.getElementById("categoryFilter");
if (categoryFilter) {
  categoryFilter.addEventListener("change", filterByCategory);
}
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
