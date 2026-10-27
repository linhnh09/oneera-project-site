const officialSiteUrl = "https://oneera.com.vn/";

export const project = {
  siteName: "One Era",
  siteUrl: "https://linhnh09.github.io/oneera-project-site",
  officialSiteUrl,
  pageTitle: "One Era — Trang giới thiệu độc lập",
  metaDescription:
    "Trang độc lập tóm tắt dự án One Era: tổng quan, ba giá trị, tên tiện ích được công bố và đường về website chính thức. Không phải kênh của chủ đầu tư.",
  heroEyebrow: "Dự án",
  heroTitle: "One Era",
  heroSubtitle:
    "Kết nối, nhịp sống chung và cách đứng dịu hơn với môi trường — ba mạch website chính thức dùng để giới thiệu khu đô thị này.",
  overviewTitle: "Dự án One Era",
  overviewLead:
    "Website chính thức đặt One Era trong câu chuyện định hình phía đông bắc Sài Gòn. Trang này chỉ kể lại cấu trúc đó, không thay bản đồ, pháp lý, giá hay tiến độ.",
  overviewBody:
    "Ảnh bên cạnh là công trình khác, dùng làm minh họa có giấy phép. Phối cảnh và hiện trạng của dự án chỉ nên xem tại nguồn chính thức.",
  projectFacts: [
    { label: "Tên trên website tham chiếu", value: "One Era" },
    { label: "Kênh chính thức", value: "oneera.com.vn" },
    { label: "Trang này", value: "Giới thiệu độc lập" },
    { label: "Cập nhật nội dung", value: "27/10/2026" },
  ],
  coreValues: [
    {
      index: "01",
      title: "Thông minh",
      summary:
        "Công nghệ được kể như lớp vận hành của tòa nhà và đô thị: kết nối, quản lý, dữ liệu phục vụ sinh hoạt hằng ngày.",
    },
    {
      index: "02",
      title: "Năng động",
      summary:
        "Đời sống giữa các khối nhà nằm ở lối đi, quảng trường, chỗ chơi và cây xanh — không gian chung là một phần của quy hoạch.",
    },
    {
      index: "03",
      title: "Bền vững",
      summary:
        "Năng lượng, mảng xanh và nước được nhắc trong cùng một mạch thiết kế, thay vì là một mục phụ phía cuối hồ sơ.",
    },
  ],
  contactPhone: "",
  zaloUrl: "",
  contactEmail: "",
  officeAddress: "",
  lastUpdated: "2026-10-27",
  disclaimer:
    "Trang độc lập, tham khảo bố cục từ oneera.com.vn. Không phải website chính thức của chủ đầu tư hay đơn vị phát triển. Logo, phối cảnh và bài viết gốc không được sao chép vào đây.",
} as const;

export const navigation = [
  { href: "#tong-quan", label: "Tổng quan" },
  { href: "#gia-tri", label: "Giá trị" },
  { href: "#tien-ich", label: "Tiện ích" },
  { href: "#trai-nghiem", label: "360°" },
  { href: "#nha-phat-trien", label: "Đơn vị" },
  { href: "#doi-tac", label: "Đối tác" },
  { href: "#lien-he", label: "Liên hệ" },
] as const;

export const exploreLinks = [
  {
    title: "Vị trí kết nối",
    text: "Bản đồ nằm trên website chính thức. Trang này không ước lượng quãng đường hay phút di chuyển.",
    href: officialSiteUrl,
    external: true,
  },
  {
    title: "Phân khu",
    text: "Cơ cấu phân khu chưa được đưa vào trang này vì chưa có bộ số liệu được phép đăng.",
    href: officialSiteUrl,
    external: true,
  },
  {
    title: "Tiện ích",
    text: "Ba tên không gian đang hiển thị công khai được liệt kê ở mục bên dưới.",
    href: "#tien-ich",
    external: false,
  },
  {
    title: "Trải nghiệm 360°",
    text: "Bản xem đủ phát trên website chính thức. Trang này không nhúng trình xem đó.",
    href: "#trai-nghiem",
    external: false,
  },
] as const;

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
