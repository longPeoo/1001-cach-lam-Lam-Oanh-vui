# 1001 cách làm Lam Oanh bất ngờ

Giao diện tĩnh theo theme hồng + đen, hiện đại và dễ thương, gồm:

- Tiêu đề hero: `1001 cách làm Lam Oanh bất ngờ`
- Danh sách câu nói trend 50/50: tình yêu và thả thính
- Gallery ảnh có thể thêm/xóa URL trực tiếp trên giao diện
- Lưu URL ảnh bằng `localStorage`

## Chỉnh câu nói

Mở file `script.js`, sửa mảng `QUOTES`.

## Chỉnh ảnh mặc định

Mở file `script.js`, sửa mảng `DEFAULT_IMAGE_URLS`.

## Deploy lên GitHub Pages

Project đã có workflow tại `.github/workflows/pages.yml`.

1. Tạo repository mới trên GitHub.
2. Đẩy toàn bộ code lên nhánh `main`.
3. Vào `Settings` -> `Pages` -> `Build and deployment`, chọn `Source: GitHub Actions`.
4. Chờ workflow chạy xong, GitHub sẽ trả link host dạng:
   `https://<github-username>.github.io/<repo-name>/`

## Chạy local

Chỉ cần mở `index.html` bằng trình duyệt.
