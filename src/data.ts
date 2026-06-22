import { Attraction, Food, Hotel, Itinerary } from "./types";

export const OVERVIEW_DATA = {
  title: "Thành phố Hồ Chí Minh (Sài Gòn)",
  description: "Trẻ trung, năng động, đầy màu sắc nhưng vẫn lưu giữ trọn vẹn nét văn hóa truyền thống xen lẫn kiến trúc thuộc địa cổ điển.",
  funFact: "Sài Gòn được mệnh danh là 'Hòn ngọc Viễn Đông' từ thế kỷ 19 và là thành phố sầm uất, đông dân nhất Việt Nam.",
  stats: [
    { label: "Dân số", value: "Hơn 9 triệu người" },
    { label: "Thời tiết", value: "2 mùa (Mưa & Khô)" },
    { label: "Nhiệt độ TB", value: "27°C - 34°C" },
    { label: "Phương tiện phổ biến", value: "Xe máy, Xe buýt, Grab/Be, Xanh SM" }
  ],
  travelTips: [
    "Thời điểm đẹp nhất: Từ tháng 12 đến tháng 4 năm sau (Mùa khô, nắng ráo, rực rỡ).",
    "Giao thông: Qua đường từ từ, đều tay, giữ khoảng cách và bình tĩnh, các xe sẽ tự động tránh bạn một cách kỳ diệu!",
    "Trang phục: Sài Gòn nắng ấm quanh năm, hãy chuẩn bị đồ thoáng mát, kính râm, kem chống nắng và một chiếc ô nhỏ đề phòng những cơn mưa rào bất chợt."
  ]
};

export const ATTRACTIONS: Attraction[] = [
  {
    id: "ben-thanh",
    name: "Chợ Bến Thành",
    description: "Biểu tượng sống động nhất của Sài Gòn với hơn 100 năm lịch sử. Nơi đây bán đủ loại mặt hàng từ đồ thủ công mỹ nghệ, quà lưu niệm đến ẩm thực đường phố phong phú.",
    location: "Quận 1 (Trung tâm thành phố)",
    address: "Đường Lê Lợi, Phường Bến Thành, Quận 1",
    bestTime: "7:00 - 18:00 (Hợp chợ ngày), 19:00 - 22:00 (Chợ đêm kề bên)",
    cost: "Vào cửa tự do (Mua sắm nên trả giá/mặc cả một chút nhé)",
    emoji: "🛍️",
    category: "Chợ & Mua sắm",
    funFact: "Mỗi cửa Đông, Tây, Nam, Bắc của chợ đều có các biểu tượng đắp nổi bằng gốm sứ tinh xảo."
  },
  {
    id: "dinh-doc-lap",
    name: "Dinh Độc Lập",
    description: "Nhân chứng lịch sử quan trọng đánh dấu mốc thống nhất đất nước ngày 30/4/1975. Dinh thự sở hữu kiến trúc hiện đại kết hợp hài hòa triết lý phong thủy phương Đông.",
    location: "Quận 1",
    address: "135 Nam Kỳ Khởi Nghĩa, Bến Thành, Quận 1",
    bestTime: "8:00 - 16:30 hằng ngày",
    cost: "Khoảng 40.000đ - 65.000đ/người lớn",
    emoji: "🏛️",
    category: "Lịch sử & Kiến trúc",
    funFact: "Toàn bộ công trình được kiến trúc sư Ngô Viết Thụ thiết kế tạo thành chữ 'CÁT' (吉) mang ý nghĩa tốt lành."
  },
  {
    id: "nha-tho-duc-ba",
    name: "Nhà thờ Đức Bà Sài Gòn",
    description: "Kiến trúc tôn giáo cổ kính theo phong cách Roman pha Gothic độc đáo, được xây dựng hoàn toàn bằng gạch đỏ nhập khẩu trực tiếp từ Marseille (Pháp) mà không cần tô trát.",
    location: "Quận 1",
    address: "Số 1 Công xã Paris, Phường Bến Nghé, Quận 1",
    bestTime: "Ngắm nhìn từ bên ngoài (Đang trùng tu đến hết năm 2027)",
    cost: "Miễn phí tham quan khuôn viên ngoài",
    emoji: "⛪",
    category: "Tôn giáo & Kiến trúc",
    funFact: "Mảng gạch đỏ xây dựng nhà thờ sau hơn một thế kỷ vẫn giữ nguyên màu sắc rực rỡ, không hề bám rêu mốc."
  },
  {
    id: "buu-dien-tp",
    name: "Bưu điện Trung tâm Sài Gòn",
    description: "Công trình bưu điện cổ kính nằm ngay cạnh Nhà thờ Đức Bà, kết hợp hoàn hảo giữa phong cách kiến trúc phương Tây và nét trang trí phương Đông độc đáo.",
    location: "Quận 1",
    address: "Số 2 Công xã Paris, Phường Bến Nghé, Quận 1",
    bestTime: "7:00 - 18:00 hằng ngày",
    cost: "Miễn phí",
    emoji: "✉️",
    category: "Lịch sử & Kiến trúc",
    funFact: "Được thiết kế bởi kiến trúc sư Alfred Vildieu kì cựu và hoàn thành vào năm 1891."
  },
  {
    id: "bao-tang-chung-tich",
    name: "Bảo tàng Chứng tích Chiến tranh",
    description: "Nơi tái hiện chân thực, xúc động những thước phim, hiện vật lịch sử về cuộc chiến tranh Việt Nam. Địa điểm thu hút rất đông du khách quốc tế ghé thăm và cảm nhận sâu sắc giá trị của hòa bình.",
    location: "Quận 3",
    address: "28 Võ Văn Tần, Phường 6, Quận 3",
    bestTime: "7:30 - 17:30 hàng ngày",
    cost: "Khoảng 40.000đ/người lớn",
    emoji: "🖼️",
    category: "Lịch sử & Bảo tàng",
    funFact: "Thuộc top 10 bảo tàng hấp dẫn nhất châu Á và thế giới do TripAdvisor bình chọn."
  },
  {
    id: "dia-dao-cu-chi",
    name: "Địa đạo Củ Chi",
    description: "Mạng lưới đường hầm dưới lòng đất như mê cung dài hơn 250km được tạo tác bằng tay thô sơ, là căn cứ quân sự huyền thoại biểu trưng cho ý chí kiên định bất khuất.",
    location: "Huyện Củ Chi (Cách trung tâm khoảng 60km)",
    address: "Đường Tỉnh Lộ 15, Phú Mỹ Hưng, Củ Chi",
    bestTime: "Nên đi vào buổi sáng (khoảng 8:00 - 14:00)",
    cost: "Khoảng 35.000đ - 110.000đ tùy vùng hầm",
    emoji: "🕳️",
    category: "Lịch sử & Trải nghiệm",
    funFact: "Dưới địa đạo có đầy đủ phòng ăn, nhà bếp, giếng nước, phòng họp, bệnh xá dã chiến và cả xưởng sản xuất vũ khí."
  }
];

export const CUISINE: Food[] = [
  {
    name: "Cơm tấm Sài Gòn",
    description: "Được mệnh danh là 'linh hồn' của ẩm thực Sài Gòn. Hạt cơm tấm tơi xốp, thơm dẻo, ăn kèm sườn heo nướng mật ong sém cạnh ngọt thơm, bì heo trộn thính dai dòn, chả trứng béo ngậy và bát nước mắm chua ngọt sệt rất đặc trưng.",
    emoji: "🍛",
    placesToEat: [
      "Cơm tấm Ba Ghiền (84 Đặng Văn Ngữ, Phú Nhuận) - Sườn siêu siêu to khổng lồ",
      "Cơm tấm Nguyễn Văn Cừ (74 Nguyễn Văn Cừ, Quận 1) - Giá cao nhưng hương vị hảo hạng",
      "Cơm tấm Bụi Sài Gòn (Nhiều chi nhánh trung tâm)"
    ],
    bestTime: "Có thể ăn sáng, trưa, tối và cả... đêm muộn sau khi dạo phố.",
    taste: "Hài hòa giữa ngọt mát, mằn mặn đậm đà hấp dẫn.",
    funFact: "Xưa kia cơm tấm là món ăn chống đói của người lao động nghèo từ hạt gạo vỡ, giờ đây đã trở thành món ăn đặc sản quốc gia đầy tự hào."
  },
  {
    name: "Bánh mì Sài Gòn",
    description: "Ổ bánh mì vàng rực, giòn tan bên ngoài, ruột xốp mềm mịn bên trong, nhân quyện pate béo ngậy, bơ vàng, chả lụa thơm phức, xá xíu, dưa leo xắt mỏng, đồ chua ngọt hấp dẫn và chút ớt cay nồng.",
    emoji: "🥖",
    placesToEat: [
      "Bánh mì Huỳnh Hoa (26 Lê Thị Riêng, Quận 1) - Chiếc bánh mì siêu đầy đặn, ngập tràn nhân thịt",
      "Bánh mì Hồng Hoa (54 Nguyễn Văn Tráng, Quận 1)",
      "Bánh mì Bảy Hổ (19 Huỳnh Khương Ninh, Đa Kao, Quận 1) - Hơn 80 năm gia truyền"
    ],
    bestTime: "Thích hợp nhất làm bữa sáng nhanh gọn hoặc bữa xế chiều.",
    taste: "Giòn rụm, béo của pate, mặn của thịt và thanh mát của dưa leo.",
    funFact: "Bánh mì Việt Nam đã nhiều lần lọt top những món ăn đường phố ngon nhất toàn cầu do các ấn phẩm uy tín quốc tế vinh danh."
  },
  {
    name: "Hủ tiếu Nam Vang",
    description: "Món ăn đa văn hóa vô cùng đặc sắc của vùng đất phương Nam. Sợi hủ tiếu dai dai, chan nước dùng hầm từ xương ống ngọt lịm, kèm tôm tươi, thịt băm, gan heo, trứng cút nhỏ tinh xảo và rau tần ô, hẹ thơm.",
    emoji: "🍜",
    placesToEat: [
      "Hủ tiếu Nhân Quán (Nhiều chi nhánh khắp Sài Gòn)",
      "Hủ tiếu Thành Đạt (Chuỗi phục vụ 24/7 rất sạch sẽ)",
      "Hủ tiếu Hồng Phát (391 Võ Văn Tần, Quận 3)"
    ],
    bestTime: "Thưởng thức tuyệt nhất vào buổi sáng hoặc tối muộn ấm cúng.",
    taste: "Nước lèo đậm đà, vị cay nhẹ thơm thoang thoảng của tỏi phi vỏ vàng.",
    funFact: "Có hai cách ăn truyền thống: ăn hủ tiếu nước thông thường hoặc ăn hủ tiếu khô trộn nước sốt tương hắc đậm vị rồi húp sụp nước lèo riêng."
  },
  {
    name: "Cà phê sữa đá Sài Gòn",
    description: "Một phong cách văn hóa đặc hữu. Những giọt cà phê phin đậm đặc nhỏ giọt chậm rãi, pha lẫn lớp sữa đặc sánh mịn béo ngậy, khuấy đều cùng đá viên mát lạnh xua tan cái nóng oi ả.",
    emoji: "☕",
    placesToEat: [
      "Cà phê Bệt nhà thờ Đức Bà (Trải nghiệm ngồi công viên mát rượi ngắm dòng xe)",
      "Cà phê Vy (277 Lê Thánh Tôn, Quận 1) - Thích hợp ngắm phố phường tự nhiên",
      "Cà phê Đỗ Phủ (113A Đặng Dung, Quận 1) - Kết hợp ngắm bảo tàng mật danh xưa"
    ],
    bestTime: "Sáng sớm mát mẻ cùng tờ báo mới, hoặc buổi xế chiều tán gẫu.",
    taste: "Đắng đậm của hạt Robusta hòa quyện ngọt ngào, béo ngậy của sữa đặc.",
    funFact: "Cà phê sữa đá Sài Gòn từng lọt Top 10 hương vị cà phê ngon nhất hành tinh do độc giả thế giới của chuyên trang ẩm thực bình chọn."
  }
];

export const HOTELS: Hotel[] = [
  {
    name: "The Common Room Project",
    address: "80/8 Nguyễn Trãi, Quận 5, TP.HCM",
    priceRange: "Khoảng 300.000đ - 600.000đ / đêm",
    description: "Không gian hostel yên bình, thiết kế hiện đại, đầy cây xanh xanh mát. Phù hợp cho dân du lịch bụi, có bếp chung, sân thượng thoáng đãng để giao lưu kết bạn bốn phương.",
    rating: "4.6/5 ⭐",
    budgetCategory: "budget",
    emoji: "🎒",
    highlight: "Sân thượng chill & không gian bếp chung gần gũi"
  },
  {
    name: "Sài Gòn Backpackers Hostel",
    address: "241/32 Phạm Ngũ Lão, Quận 1, TP.HCM",
    priceRange: "Khoảng 200.000đ - 450.000đ / đêm",
    description: "Nằm ngay khu phố Tây Bùi Viện sầm uất, di chuyển cực kì nhanh chóng đến các địa danh lớn. Sạch sẽ, an ninh tốt, nhân viên cực kỳ hiếu khách và hỗ trợ thông tin nhiệt tình.",
    rating: "4.2/5 ⭐",
    budgetCategory: "budget",
    emoji: "🛏️",
    highlight: "Gần phố tây vui vẻ nhộn nhịp hằng đêm"
  },
  {
    name: "Alagon D'antique Hotel & Spa",
    address: "301-303 Lý Tự Trọng, Bến Thành, Quận 1, TP.HCM",
    priceRange: "Khoảng 1.200.000đ - 2.500.000đ / đêm",
    description: "Khách sạn phong cách boutique ấm cúng, tinh tế mang hơi thở cổ điển Pháp thời thượng. Đi kèm hồ bơi vô cực nhỏ trên tầng thượng, bồn Jacuzzi thoải mái và hệ thống spa thư giãn tuyệt đối.",
    rating: "4.5/5 ⭐",
    budgetCategory: "mid",
    emoji: "🏨",
    highlight: "Hồ bơi vô cực tầng thượng và vị trí sát vách chợ Bến Thành"
  },
  {
    name: "Silverland Sakyo Hotel",
    address: "10A Lê Thánh Tôn, Bến Nghé, Quận 1, TP.HCM",
    priceRange: "Khoảng 1.500.000đ - 3.000.000đ / đêm",
    description: "Nằm trong khu phố Nhật giao hòa không khí tĩnh lặng. Sự kết hợp tinh tế giữa văn hóa thiền Nhật Bản tối giản và sự nồng hậu phương Nam ấm áp.",
    rating: "4.6/5 ⭐",
    budgetCategory: "mid",
    emoji: "🎋",
    highlight: "Bồn tắm Jacuzzi ngoài trời mát mắt"
  },
  {
    name: "The Reverie Saigon",
    address: "22-36 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM",
    priceRange: "Từ 6.000.000đ - 15.000.000đ++ / đêm",
    description: "Tinh hoa khách sạn 5 sao xa xỉ bậc nhất Việt Nam, tọa lạc trên phố đi bộ Nguyễn Huệ sang trọng. Thiết kế hoàng gia Ý lộng lẫy, nội thất làm thủ công tinh xảo từng chi tiết nhỏ.",
    rating: "4.9/5 ⭐",
    budgetCategory: "luxury",
    emoji: "👑",
    highlight: "Xa hoa, vương giả, ngắm trọn vẹn cảnh sông Sài Gòn lộng lẫy"
  },
  {
    name: "Hotel Majestic Saigon",
    address: "Số 1 Đồng Khởi, Bến Nghé, Quận 1, TP.HCM",
    priceRange: "Từ 3.500.000đ - 7.000.000đ / đêm",
    description: "Khách sạn di sản có tuổi đời từ năm 1925 nằm hiên ngang bên bờ sông Sài Gòn quyến rũ. Trải nghiệm phong cách phục vụ mang tầm đẳng cấp thuộc địa Pháp cực sang trọng và cổ xưa.",
    rating: "4.7/5 ⭐",
    budgetCategory: "luxury",
    emoji: "✨",
    highlight: "Ngắm chiều tà sông Sài Gòn lãng mạn tại M-Bar tầng thượng"
  }
];

export const ITINERARIES: Itinerary[] = [
  {
    id: "1-day",
    title: "1 Ngày - Khám Phá Sài Gòn Cổ Kính",
    duration: "1 Ngày (Thích hợp cho chuyến đi ngắn ngày)",
    description: "Gợi ý lịch trình giúp bạn bao quát những địa danh biểu tượng của Sài Gòn cổ xưa và hiện đại chỉ trong vòng một ngày trọn vẹn.",
    stops: [
      {
        time: "07:30 - 08:30",
        place: "Check-in Cafe Bệt & Ăn Sáng Bánh Mì",
        desc: "Đón nắng sớm tự nhiên tại Công viên 30/4 kề bên Nha Thờ Đức Bà. Nhâm nhi ly Cà phê sữa đá bệt mộc mạc và thưởng thức ổ bánh mì giòn rụm thơm lừng.",
        activity: "Thư giãn, ngắm phố phường tỉnh giấc thoải mái",
        emoji: "☕"
      },
      {
        time: "09:00 - 11:30",
        place: "Tham quan Dinh Độc Lập & Bưu Điện Tp",
        desc: "Đi bộ vài bước đến Dinh Độc Lập khám phá hầm chỉ huy quân sự cổ. Sau đó chụp ảnh check-in tuyệt đẹp tại Bưu điện Trung tâm Sài Gòn.",
        activity: "Khám phá lịch sử, ngắm kiến trúc mái vòm cổ điển tuyệt mĩ",
        emoji: "🏛️"
      },
      {
        time: "12:00 - 13:30",
        place: "Ăn Trưa Cơm Tấm Sườn Bì Chả",
        desc: "Nạp năng lượng với dĩa cơm tấm Sài Gòn truyền thống thơm phưng phức cùng nước mắm ngọt kẹo quyến rũ.",
        activity: "Thưởng thức ẩm thực trứ danh",
        emoji: "🍛"
      },
      {
        time: "14:00 - 16:30",
        place: "Tham quan Bảo tàng Chứng tích Chiến tranh",
        desc: "Ghé thăm bảo tàng để có góc nhìn chân thực, sâu sắc về những đau thương thời xưa và nỗ lực kiến tạo hòa bình của dân tộc.",
        activity: "Xem hiện vật lịch sử, máy bay quân sự thực tế",
        emoji: "🖼️"
      },
      {
        time: "18:00 - 21:00",
        place: "Ngắm Hoàng hôn bên Sông Sài Gòn & Dạo Phố Nguyễn Huệ",
        desc: "Dạo bước trên Phố đi bộ Nguyễn Huệ rực rỡ đèn hoa, mua một ly nước mía hoặc trà dâu rồi ngắm nhìn thành phố lên đèn từ Bến Bạch Đằng lộng gió.",
        activity: "Tận hưởng không gian lộng gió về đêm",
        emoji: "🌉"
      }
    ]
  },
  {
    id: "2-day",
    title: "2 Ngày - Sài Gòn Lịch Sử & Sắc Màu Đêm",
    duration: "2 Ngày (Vừa vặn cho cuối tuần hoàn hảo)",
    description: "Kết hợp giữa việc du ngoạn các góc di sản lịch sử sâu sắc và trải nghiệm cuộc sống giải trí đa sắc màu, sôi nổi của thành phố không ngủ.",
    stops: [
      {
        time: "Ngày 1 - Sáng",
        place: "Cụm Kiến trúc Trung tâm Quận 1",
        desc: "Tham quan Nhà thờ Đức Bà - Bưu Điện Thành Phố - Đường Sách Nguyễn Văn Bình nhộn nhịp tri thức thơm tho.",
        activity: "Chụp ảnh kỷ niệm nghệ thuật, đọc sách bên tán cây",
        emoji: "📸"
      },
      {
        time: "Ngày 1 - Chiều",
        place: "Chợ Bến Thành & Chợ Lớn (Quận 5)",
        desc: "Mua sắm, dạo phố và thưởng thức hủ tiếu Nam Vang thơm lừng tại Chợ Lớn, ngắm những ngôi miếu người Hoa cổ kính thơm mùi trầm hương.",
        activity: "Tìm hiểu văn hóa dân gian phong phú",
        emoji: "🏮"
      },
      {
        time: "Ngày 1 - Tối",
        place: "Ngắm sông Sài Gòn từ xe Bus Sông (Waterbus)",
        desc: "Mua vé Waterbus từ ga tàu thủy Bạch Đằng thảnh thơi dạo mát trên sông nước lộng lẫy lãng mạn vô bờ.",
        activity: "Chiêm ngưỡng các tòa tháp rực rỡ phản chiếu lòng sông",
        emoji: "🚢"
      },
      {
        time: "Ngày 2 - Sáng",
        place: "Địa đạo Củ Chi huyền thoại",
        desc: "Khởi hành sớm đến vùng đất thép Củ Chi. Khám phá hệ thống phòng thủ dưới lòng đất vĩ đại của chiến sĩ xưa.",
        activity: "Trải nghiệm chui hầm thực tế, ăn khoai mì hấp chấm muối mè thơm bùi",
        emoji: "🕳️"
      },
      {
        time: "Ngày 2 - Chiều",
        place: "Dạo trung tâm thương mại & Sa-gông View",
        desc: "Tham quan trung tâm thương mại Saigon Centre, Takashimaya sầm uất hoặc thưởng thức trà chiều sang chảnh.",
        activity: "Mua sắm giải trí sành điệu",
        emoji: "✨"
      },
      {
        time: "Ngày 2 - Tối",
        place: "Phố ẩm thực Vĩnh Khánh (Quận 4) hoặc Phố Tây Bùi Viện",
        desc: "Nhậu ốc vỉa hè đa dạng kiểu Sài Gòn tại Quận 4 sôi động hoặc đi quẩy náo nhiệt cùng tiếng nhạc sầm uất tại Bùi Viện.",
        activity: "Tận hưởng cuộc sống vui tươi sôi động tuổi trẻ",
        emoji: "🍻"
      }
    ]
  },
  {
    id: "3-day",
    title: "3 Ngày - Trải Nghiệm Sài Gòn Trọn Vẹn",
    duration: "3 Ngày (Thấp thoáng trọn vẹn văn hóa, ẩm thực & sinh thái)",
    description: "Hành trình lý tưởng nhất để bạn vừa hiểu thấu tinh hoa văn hóa, lịch sử hào hùng, vừa khám phá vùng sinh thái ngoại thành trong lành.",
    stops: [
      {
        time: "Ngày 1",
        place: "Hồn cốt trung tâm Sài Gòn (Quận 1)",
        desc: "Dành trọn ngày đầu tiên tham quan Bảo tàng Chứng tích Chiến tranh, Dinh Độc Lập, Chợ Bến Thành, Landmark 81 vươn tầm mắt ngắm mây trời.",
        activity: "Check-in ngắm hoàng hôn đỉnh cao",
        emoji: "🏙️"
      },
      {
        time: "Ngày 2",
        place: "Tour sinh thái rừng ngập mặn Cần Giờ",
        desc: "Di chuyển đến Cần Giờ - 'Lá phổi xanh' của thành phố. Thăm đảo Khỉ tinh nghịch, đi xuồng máy len lỏi vào rừng ngập mặn Vàm Sát kỳ thú.",
        activity: "Hít thở không khí tự nhiên trong lành, ngắm động vật hoang dã",
        emoji: "🐒"
      },
      {
        time: "Ngày 3 - Sáng",
        place: "Khu vực Chợ Lớn & Hà Tôn Quyền (Quận 5, Quận 11)",
        desc: "Sáng ăn sủi cảo sầm uất Hà Tôn Quyền, đi lễ Chùa Bà Thiên Hậu cầu bình an hạnh phúc cho bản thân và gia đình.",
        activity: "Trải nghiệm nếp sống người Hoa cổ xưa đặc sắc",
        emoji: "☯️"
      },
      {
        time: "Ngày 3 - Chiều",
        place: "Bảo tàng Mỹ thuật TP.HCM",
        desc: "Chiêm ngưỡng công trình biệt thự cổ màu vàng tuyệt đẹp với kiến trúc Art Deco sang trọng và các tác phẩm nghệ thuật tiêu biểu.",
        activity: "Sáng tạo những góc ảnh cổ điển quý phái",
        emoji: "🎨"
      },
      {
        time: "Ngày 3 - Tối",
        place: "Thưởng thức À Ố Show tại Nhà Hát Lớn",
        desc: "Xem show diễn nghệ thuật xiếc tre đặc sắc kết hợp âm nhạc truyền thống, tái hiện sinh động đời sống làng quê và phố thị Việt Nam.",
        activity: "Thưởng thức nghệ thuật đẳng cấp thế giới",
        emoji: "🎭"
      }
    ]
  }
];
