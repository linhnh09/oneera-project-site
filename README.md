# One Era — trang giới thiệu độc lập

Website tĩnh, Astro + TypeScript, lấy **bố cục** từ [oneera.com.vn](https://oneera.com.vn/). Đây không phải website chính thức của chủ đầu tư. Logo, phối cảnh và bài viết gốc không được sao chép. Ảnh trên trang là ảnh minh họa Unsplash, ghi ở `public/images/ASSET-LICENSES.md`.

## Yêu cầu

- Node.js 22.23.4 trở lên (`nvm use` nếu máy có file `.nvmrc`)
- npm

## Chạy local

```bash
npm install
npm run dev
```

Mở http://localhost:4321/

```bash
npm run check
npm run build
npm run preview
```

`npm run build` tạo bản local với đường dẫn gốc `/`. Bản GitHub Pages dùng `npm run build:pages` (base `/oneera-project-site`).

## Sửa nội dung

Chữ và liên hệ nằm trong `src/data/`, không viết cứng trong component.

- `project.ts`: tiêu đề, mô tả, giá trị, `contactPhone`, `zaloUrl`, `contactEmail`, `officeAddress`
- `amenities.ts`, `developers.ts`, `partners.ts`
- `awards.ts` và `news.ts` đang để trống nên hai mục đó không hiện. Chỉ thêm khi có tên giải, đơn vị trao, hoặc bài viết được phép đăng. Không điền số diện tích, giá, pháp lý, tiến độ nếu chưa có nguồn.

Khi `contactEmail` có giá trị, form mở ứng dụng thư của người xem. Trang không lưu dữ liệu và không báo gửi thành công nếu thư chưa được gửi. Điện thoại và Zalo chỉ hiện khi điền URL/số đã kiểm tra.

Ảnh mới: bỏ vào `public/images/`, ghi một dòng trong `ASSET-LICENSES.md`, đặt `alt` đúng nội dung thật.

## Đang chạy

https://linhnh09.github.io/oneera-project-site/

Mã nguồn: https://github.com/linhnh09/oneera-project-site

Bản public được build bằng `npm run build:pages` rồi đẩy thư mục `dist` lên nhánh `gh-pages`. Token GitHub hiện tại không có quyền `workflow`, nên chưa đẩy GitHub Actions. Khi token có quyền đó, workflow chỉ cần: `npm run build` với `SITE=https://linhnh09.github.io`, `BASE_PATH=/oneera-project-site`, thư mục `dist`.

## Cloudflare Pages

Nếu chuyển sang Cloudflare Pages (tài khoản Cloudflare của bạn):

1. Đẩy repo lên GitHub.
2. Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Biến môi trường production: `SITE` = URL https cuối (kể cả domain riêng), `BASE_PATH=/`
6. Gắn domain bạn sở hữu trong mục Custom domains. DNS làm trên tài khoản domain đó. Bật HTTPS.
7. Canonical và sitemap lấy từ `SITE` lúc build. Không hard-code URL preview.
8. Gửi `sitemap-index.xml` trong Google Search Console sau khi domain đã trỏ đúng. Công cụ này không hứa thời điểm được index.

Không đính kèm API token vào repo.

## Những mục đang cố ý không có

- Số liệu quy mô, giá, pháp lý, tiến độ, thời gian di chuyển
- Logo, phối cảnh và video của website tham chiếu
- Giải thưởng (thiếu tên giải và đơn vị trao)
- Tin bài (không đăng lại bài gốc)
- Form giả “đã gửi thành công”
- Google Analytics (chưa gắn, để tránh thu thập khi chưa cần)
