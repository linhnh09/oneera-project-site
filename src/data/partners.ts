export type PartnerGroup = {
  category: string;
  names: string[];
};

/**
 * Tên và nhóm được đọc từ mục Đối tác trên https://oneera.com.vn/ ngày 27/10/2026.
 * Không nhúng logo vì chưa có giấy phép sử dụng nhận diện.
 */
export const partners: PartnerGroup[] = [
  { category: "Đối tác chiến lược", names: ["Longfor"] },
  { category: "Giáo dục", names: ["KindUp Preschool", "VAS Saigon"] },
  { category: "Thiết kế kiến trúc", names: ["FORG", "DP Architects"] },
  { category: "Thiết kế nội thất", names: ["Kume Design Asia", "ONG&ONG", "KAZE"] },
  { category: "Tư vấn công trình xanh", names: ["TERAO", "GreenViet"] },
  { category: "Kiến trúc cảnh quan", names: ["CPG Signature", "Land Sculptor Studio"] },
  { category: "Tư vấn kết cấu", names: ["TW-Asia Consultants"] },
  { category: "Hạ tầng kỹ thuật", names: ["Aurecon"] },
  { category: "Quy hoạch tổng thể", names: ["Surbana Jurong"] },
  { category: "Xây dựng", names: ["Coteccons"] },
];

export const partnersNote =
  "Danh sách ghi theo mục Đối tác hiển thị công khai tại oneera.com.vn ngày 27/10/2026. Trang này không xác nhận lại hợp đồng và không dùng logo.";
