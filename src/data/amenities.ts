export type Amenity = {
  id: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
};

export const amenities: Amenity[] = [
  {
    id: "haru-clubhouse",
    name: "Haru Clubhouse",
    summary:
      "Tên một không gian tiện ích trên trang chủ chính thức. Diện tích và hạng mục bên trong không được ghi ở đây.",
    image: "images/amenities/club.webp",
    imageAlt: "Ảnh minh họa một sảnh nghỉ dưỡng, không phải ảnh Haru Clubhouse.",
    width: 1600,
    height: 1066,
  },
  {
    id: "hoshi-onsen",
    name: "Hoshi Onsen",
    summary:
      "Tên được công bố trong nhóm tiện ích. Ảnh hồ bơi bên cạnh chỉ giữ chỗ nhìn, không mô tả công trình thật.",
    image: "images/amenities/water.webp",
    imageAlt: "Ảnh minh họa mặt nước của một khu nghỉ, không phải Hoshi Onsen.",
    width: 1600,
    height: 1066,
  },
  {
    id: "nagi-green-parks",
    name: "Nagi Green Parks",
    summary:
      "Tên mảng xanh được trang chủ chính thức đưa vào carousel tiện ích. Đây không phải ảnh cây xanh của dự án.",
    image: "images/amenities/park.webp",
    imageAlt: "Ảnh minh họa một khu rừng, không phải Nagi Green Parks.",
    width: 1600,
    height: 1066,
  },
];
