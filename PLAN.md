# PLAN.md — Tái tạo website giới thiệu dự án One Era

> Mục tiêu: dùng Cursor để xây dựng một website giới thiệu bất động sản có bố cục và trải nghiệm tham khảo từ https://oneera.com.vn/, triển khai production và tối ưu SEO.
>
> **Lưu ý quyền sử dụng:** Chỉ tải, lưu trữ hoặc tái sử dụng hình ảnh, video, logo, nội dung chữ và tài liệu từ website tham chiếu khi bạn sở hữu chúng hoặc có quyền/giấy phép sử dụng. Nếu chưa xác minh được quyền, dùng chúng làm tài liệu tham khảo thiết kế; thay bằng tài nguyên được cấp phép trước khi public. Không giả mạo là website chính thức hoặc tạo nhầm lẫn với chủ đầu tư/đơn vị phát triển.

## 1. Mục tiêu và phạm vi

### Mục tiêu MVP
- Một website responsive, ưu tiên mobile.
- Tái tạo phong cách trang giới thiệu dự án cao cấp: hero lớn, typography tinh tế, ảnh phối cảnh, section toàn chiều rộng, gallery, thông tin dự án, tiện ích, vị trí, tin tức, đối tác và liên hệ.
- Điều hướng tới các section bằng menu.
- CTA rõ ràng: gọi điện, Zalo, đăng ký nhận thông tin.
- SEO kỹ thuật, tốc độ tải tốt, HTTPS, sitemap và Google Search Console.
- Không cần backend/CMS ở phiên bản đầu nếu chỉ có form liên hệ đơn giản.

### Không nằm trong MVP
- Tài khoản người dùng.
- CRM hoặc dashboard quản lý lead.
- Database, thanh toán trực tuyến.
- Công cụ chọn căn tương tác phức tạp.
- Tự động đồng bộ bảng giá hoặc dữ liệu từ website khác.

## 2. Phân tích tham chiếu

Website tham chiếu: https://oneera.com.vn/

Nội dung có thể nhận diện từ dữ liệu được lập chỉ mục:
1. Header / menu điều hướng.
2. Hero với thông điệp “Thành phố đáng sống” và ảnh toàn cảnh.
3. Tổng quan dự án One Era.
4. Các giá trị cốt lõi: thông minh, năng động, bền vững.
5. Điểm nhấn kiến trúc / biểu tượng dự án.
6. Hệ tiện ích và carousel/gallery tiện ích.
7. Trải nghiệm 360°.
8. Giới thiệu nhà phát triển.
9. Giải thưởng.
10. Tin tức / câu chuyện dự án.
11. Đối tác.
12. Thông tin liên hệ và footer.

Các section cần được xác minh trực tiếp trong trình duyệt trước khi chốt pixel-level. Không được giả định mọi animation hoặc tương tác đã được phát hiện đầy đủ từ kết quả tìm kiếm.

## 3. Quyết định công nghệ

Dùng stack tối giản, phù hợp website nội dung tĩnh:

- Astro + TypeScript.
- CSS thuần, CSS variables và responsive media queries.
- HTML semantic.
- JavaScript chỉ cho tương tác thực sự cần thiết: mobile menu, carousel, gallery/lightbox, accordion FAQ và form validation.
- Không dùng database hoặc backend cho MVP.
- GitHub để quản lý mã nguồn.
- Cloudflare Pages để deploy static site.
- Google Search Console và Google Analytics 4 (nếu cần đo traffic).

Dùng phiên bản stable hiện hành của Node.js LTS và các package tương thích tại thời điểm triển khai. Không tự đoán version cũ.

## 4. Setup dự án

### 4.1 Điều kiện
- Node.js LTS và npm.
- Git.
- Cursor.
- Tài khoản GitHub.
- Tài khoản Cloudflare (nếu deploy bằng Cloudflare Pages).
- Domain do người triển khai sở hữu/được phép sử dụng (tùy chọn).

### 4.2 Khởi tạo
Nếu chưa có project:

```bash
npm create astro@latest oneera-project-site
cd oneera-project-site
npm install
npm run dev
```

Chọn TypeScript strict nếu wizard hỏi. Nếu Cursor tạo project từ đầu, phải kiểm tra `package.json`, lockfile và scripts sau khi cài đặt.

### 4.3 Scripts bắt buộc
Đảm bảo `package.json` có scripts tương đương:
- `dev`: chạy local.
- `build`: build production.
- `preview`: xem bản build.
- `check`: kiểm tra Astro/TypeScript.

Không được đánh dấu hoàn tất nếu `npm run build` thất bại.

## 5. Cấu trúc thư mục đề xuất

```text
oneera-project-site/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── images/
│   │   ├── hero/
│   │   ├── overview/
│   │   ├── amenities/
│   │   ├── awards/
│   │   ├── partners/
│   │   └── news/
│   └── documents/              # chỉ tài liệu được phép công bố
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── MobileMenu.astro
│   │   ├── HeroSection.astro
│   │   ├── ProjectOverview.astro
│   │   ├── CoreValues.astro
│   │   ├── LandmarkSection.astro
│   │   ├── AmenitiesGallery.astro
│   │   ├── PanoramaSection.astro
│   │   ├── DeveloperSection.astro
│   │   ├── AwardsSection.astro
│   │   ├── NewsSection.astro
│   │   ├── PartnersSection.astro
│   │   ├── ContactSection.astro
│   │   ├── ContactBar.astro
│   │   ├── LeadForm.astro
│   │   └── SiteFooter.astro
│   ├── data/
│   │   ├── project.ts
│   │   ├── amenities.ts
│   │   ├── awards.ts
│   │   ├── news.ts
│   │   └── partners.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   └── 404.astro
│   └── styles/
│       ├── tokens.css
│       ├── global.css
│       └── components.css
├── PLAN.md
├── README.md
├── package.json
└── astro.config.mjs
```

Điều chỉnh cấu trúc nếu Astro scaffold mới khác đôi chút, nhưng phải giữ component/data rõ ràng, không dồn toàn bộ trang vào một file lớn.

## 6. Yêu cầu giao diện

### Phong cách
- Sang trọng, tối giản, giàu hình ảnh.
- Tông màu lấy cảm hứng từ website tham chiếu nhưng không sao chép logo/nhận diện thương hiệu khi chưa được phép.
- Khoảng trắng rộng, tiêu đề lớn, typography dễ đọc.
- Ảnh hero toàn chiều rộng, có overlay khi cần để bảo đảm độ tương phản.
- Chuyển động nhẹ; tôn trọng `prefers-reduced-motion`.
- Không dùng ảnh stock ngẫu nhiên nếu làm sai bản chất dự án.

### Responsive
- Mobile: 360px trở lên; menu dạng drawer hoặc menu gọn; CTA liên hệ không che nội dung.
- Tablet: bố cục 2 cột khi phù hợp.
- Desktop: nội dung có max-width; hero và gallery được tối ưu.
- Không có horizontal overflow ở các viewport phổ biến.
- Kiểm tra Chrome và Safari nếu có điều kiện.

### Tương tác
- Menu điều hướng tới ID section.
- Mobile menu có trạng thái mở/đóng và hỗ trợ bàn phím.
- Carousel có nút điều hướng rõ ràng, không tự chạy quá nhanh.
- Gallery có alt text; nếu dùng lightbox, hỗ trợ đóng bằng Escape và nút đóng.
- Nút gọi dùng `tel:`; Zalo dùng URL đã xác minh.
- Form có label, validation, trạng thái thành công/lỗi.
- Không làm form giả. Nếu chưa có backend, thay bằng CTA gọi/Zalo hoặc tích hợp dịch vụ form có điều khoản phù hợp. Không báo “đã gửi thành công” nếu dữ liệu chưa được gửi đi đâu.

## 7. Nội dung và dữ liệu

Tất cả nội dung thay đổi thường xuyên phải nằm trong `src/data/`, không hard-code rải rác trong component.

`project.ts` nên chứa:
- `siteName`
- `siteUrl`
- `pageTitle`
- `metaDescription`
- `heroTitle`
- `heroSubtitle`
- `overview`
- `projectFacts`
- `contactPhone`
- `zaloUrl`
- `contactEmail`
- `officeAddress`
- `lastUpdated`

Không tự tạo số liệu về diện tích, số lượng sản phẩm, pháp lý, chứng nhận, giá, tiến độ hoặc thời gian di chuyển. Chỉ đăng dữ liệu có nguồn xác minh và ghi ngày cập nhật khi phù hợp. Nếu chưa có dữ liệu, ẩn section hoặc đánh dấu TODO; không để placeholder trong production.

## 8. Hình ảnh và tài nguyên

### Quy trình ưu tiên
1. Lập danh sách ảnh cần có: hero, tổng thể, bản đồ vị trí, tiện ích, cảnh quan, nhà mẫu, giải thưởng, đối tác, tin tức.
2. Ưu tiên ảnh do chủ đầu tư/đơn vị sở hữu cung cấp hoặc bộ media được cấp phép.
3. Nếu được cấp quyền dùng ảnh trên `oneera.com.vn`, tải bản gốc từ URL tài nguyên được phép, lưu vào `public/images/` và ghi nguồn/giấy phép trong `public/images/ASSET-LICENSES.md`.
4. Nếu chưa có quyền, chỉ dùng screenshot/ảnh tham chiếu trong quá trình thiết kế nội bộ; trước khi public phải thay bằng ảnh có quyền sử dụng.
5. Không hotlink ảnh production từ website tham chiếu: URL có thể đổi, ảnh có thể bị chặn, tải chậm hoặc vi phạm điều khoản sử dụng.
6. Không xóa watermark hoặc dấu nhận diện.
7. Không tải hàng loạt bằng crawler nếu điều khoản website không cho phép.

### Tối ưu ảnh
- Dùng AVIF/WebP khi hợp lý; giữ ảnh gốc được cấp phép.
- Hero: ảnh responsive, preload chỉ khi thật sự là LCP image.
- Ảnh dưới màn hình đầu: `loading="lazy"`.
- Khai báo `width` và `height` hoặc aspect ratio để giảm layout shift.
- Dùng `alt` mô tả nội dung thực tế; ảnh trang trí dùng alt rỗng.
- Tránh file ảnh vài MB cho thumbnail/card.
- Không tự ý biến ảnh phối cảnh thành tuyên bố về hiện trạng xây dựng.

### Danh mục asset cần lập
Tạo `public/images/ASSET-LICENSES.md` với cột:
- File
- Mô tả
- URL/source
- Chủ sở hữu
- Tình trạng quyền sử dụng
- Ngày lấy
- Ghi chú attribution

## 9. SEO production

### Metadata
- Mỗi trang có `<title>` riêng, duy nhất và mô tả đúng nội dung.
- Meta description tự nhiên, không nhồi từ khóa.
- Canonical trỏ về URL production chính xác.
- Open Graph title/description/image.
- Favicon và theme color.
- HTML lang đúng ngôn ngữ (ví dụ `vi`).

### Crawling/indexing
- Tạo `sitemap-index.xml` hoặc `sitemap.xml` phù hợp cấu hình Astro.
- Tạo `robots.txt` cho phép crawl trang public; không chặn nhầm CSS/JS/ảnh.
- Không để `noindex` trong production.
- Gửi sitemap qua Google Search Console.
- Xác minh domain/property và kiểm tra URL Inspection.
- Không hứa hẹn thứ hạng hoặc thời gian index.

### Structured data
- Chỉ thêm JSON-LD khi dữ liệu có thật và phù hợp loại schema.
- Không tạo rating/review giả.
- Không dùng schema Organization/RealEstateAgent để giả danh chủ đầu tư.
- Kiểm tra JSON-LD bằng công cụ kiểm thử trước khi public.

### SEO nội dung
- Một H1 chính; H2/H3 theo cấu trúc.
- Nội dung độc nhất, có giá trị cho người dùng, không sao chép nguyên văn nếu chưa được phép.
- Tối ưu các từ khóa theo ý định tìm kiếm nhưng không nhồi nhét.
- Ảnh có alt hữu ích.
- Link nội bộ hoạt động.
- Không tạo hàng loạt trang mỏng chỉ để nhắm từ khóa.

## 10. Hiệu năng, accessibility và bảo mật

- Chạy `npm run check` và `npm run build`.
- Dùng Lighthouse/PageSpeed Insights sau deploy.
- Mục tiêu Core Web Vitals: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 khi đo ở phân vị 75; kết quả thực tế phụ thuộc thiết bị/mạng.
- Tránh thư viện JavaScript lớn nếu CSS/HTML làm được.
- Dùng semantic HTML, focus state rõ ràng, contrast đủ, form label.
- Không đưa API secret vào client hoặc repository.
- Không thu thập dữ liệu cá nhân khi chưa có mục đích và thông báo phù hợp.
- Nếu có form, thông báo mục đích sử dụng dữ liệu và chỉ thu thập dữ liệu tối thiểu.
- Kiểm tra link, số điện thoại, email, Zalo trước khi public.

## 11. Deploy Cloudflare Pages

1. Push repository lên GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Chọn repository.
4. Framework preset Astro (nếu được đề xuất).
5. Build command: `npm run build`.
6. Build output directory: `dist`.
7. Deploy preview và kiểm thử trước.
8. Gắn custom domain/subdomain mà bạn sở hữu hoặc được ủy quyền.
9. Bật HTTPS và kiểm tra redirect/canonical thống nhất.
10. Gửi sitemap tới Google Search Console.

Nếu sử dụng domain riêng, cấu hình DNS theo hướng dẫn Cloudflare tại thời điểm setup. Không hard-code domain preview trong canonical hoặc sitemap.

## 12. Chi phí dự kiến

Giả định bạn tự code bằng Cursor, không thuê ngoài và website tĩnh:
- Astro/TypeScript/CSS: miễn phí.
- GitHub repository: có thể miễn phí cho dự án cá nhân.
- Cloudflare Pages: có thể bắt đầu bằng gói miễn phí, tùy giới hạn hiện hành.
- Google Search Console: miễn phí.
- Google Analytics 4: miễn phí cho nhu cầu cơ bản.
- Domain riêng: chi phí theo nhà đăng ký và đuôi domain; cần kiểm tra giá đăng ký/gia hạn trước khi mua.
- Ảnh: 0 đồng nếu đã có bộ ảnh được cấp quyền; có thể phát sinh nếu mua ảnh hoặc thuê chụp/thiết kế.
- Dịch vụ form/email/CRM: có thể phát sinh phí; không bắt buộc cho MVP.

Ngân sách kỹ thuật tối thiểu có thể gần 0 đồng nếu dùng URL nền tảng miễn phí và tài nguyên hợp lệ đã có. Với domain riêng, cộng phí tên miền thực tế. Không coi chi phí AI coding agent hoặc thời gian cá nhân là bằng 0 nếu tài khoản Cursor là gói trả phí.

## 13. Kế hoạch task cho Cursor

### Task 1 — Khảo sát và scaffold
- Đọc toàn bộ PLAN.md.
- Tạo Astro + TypeScript project.
- Tạo README với lệnh setup/run/build.
- Không tải hoặc tái sử dụng ảnh khi chưa xác minh quyền.

### Task 2 — Design system
- Tạo CSS variables cho màu, font stack, spacing, container, radius.
- Tạo global styles, typography và responsive breakpoints.
- Thiết lập focus styles và reduced-motion.

### Task 3 — Header và hero
- Tạo header desktop/mobile.
- Tạo hero với asset có quyền sử dụng.
- Đảm bảo CTA và navigation hoạt động.

### Task 4 — Các section nội dung
- Tạo overview, core values, landmark, amenities, panorama, developer, awards, news, partners, contact, footer.
- Dùng component tái sử dụng và data file.
- Ẩn section nếu chưa có nội dung thật thay vì bịa dữ liệu.

### Task 5 — Tương tác
- Menu mobile, carousel/gallery, FAQ nếu có, CTA và form có xử lý thật.
- Test keyboard và touch.

### Task 6 — SEO và hiệu năng
- Metadata, canonical, Open Graph, robots, sitemap, JSON-LD phù hợp.
- Tối ưu ảnh và font.
- Kiểm tra link và không để placeholder.

### Task 7 — Quality gate
- Chạy `npm run check`.
- Chạy `npm run build`.
- Sửa toàn bộ lỗi.
- Kiểm tra mobile/desktop, console, 404, alt text, form, navigation.
- Viết danh sách những nội dung còn cần người dùng xác nhận.

### Task 8 — Deploy
- Hướng dẫn deploy Cloudflare Pages từ GitHub.
- Không tự mua domain, không tự thay DNS, không tự gửi form/đăng ký dịch vụ trả phí.
- Sau deploy, hướng dẫn kiểm tra HTTPS, canonical, sitemap, robots và Search Console.

## 14. Definition of Done

- [ ] Dự án chạy local theo README.
- [ ] `npm run check` pass.
- [ ] `npm run build` pass.
- [ ] Responsive trên mobile/tablet/desktop.
- [ ] Không có lỗi console nghiêm trọng.
- [ ] Tất cả CTA và link hoạt động.
- [ ] Form không giả lập thành công.
- [ ] Không còn placeholder, lorem ipsum hoặc số liệu chưa xác minh.
- [ ] Ảnh/logo/video production có quyền sử dụng được ghi nhận.
- [ ] Metadata, canonical, sitemap và robots đúng domain production.
- [ ] HTTPS hoạt động.
- [ ] Google Search Console có thể xác minh và gửi sitemap.
- [ ] Có README hướng dẫn deploy, cập nhật nội dung và thay ảnh.

## 15. Prompt khởi động cho Cursor

Đọc toàn bộ `PLAN.md` trước khi sửa code. Hãy triển khai theo từng Task 1–8, không bỏ qua bước kiểm tra. Dùng Astro + TypeScript + CSS thuần, tạo website responsive giới thiệu dự án bất động sản lấy cảm hứng về bố cục từ https://oneera.com.vn/ nhưng không sao chép logo, nội dung hoặc media có bản quyền nếu chưa được cấp phép.

Trước tiên hãy kiểm tra repository hiện tại. Nếu chưa có project, scaffold Astro. Sau đó tạo cấu trúc thư mục, components và data files theo plan. Tạo giao diện có chất lượng production, tránh dồn mọi thứ vào một file, không bịa thông tin dự án, không hotlink ảnh bên thứ ba trong production và không giả lập form thành công.

Sau mỗi task:
1. Chạy kiểm tra phù hợp.
2. Báo file đã tạo/thay đổi.
3. Nêu các quyết định/giả định.
4. Ghi rõ nội dung hoặc quyền sử dụng tài nguyên còn cần người dùng xác nhận.

Cuối cùng chạy `npm run check` và `npm run build`, sửa lỗi, cập nhật README, và đưa ra hướng dẫn deploy Cloudflare Pages. Không mua domain, thay DNS, gửi dữ liệu người dùng hoặc phát sinh chi phí thay mặt người dùng.
