# 1001 cach lam Lam Oanh bat ngo

Giao dien tinh theo theme hong + den, hien dai va de thuong, gom:

- Tieu de hero: `1001 cach lam Lam Oanh bat ngo`
- Danh sach cau noi trend 50/50: tinh yeu va tha thinh
- Man hinh chao dau trang: `Xin chao Lam Oanh, anh la Long`
- Fireworks 3D (canvas) co nut bat/tat
- Kho media (anh + video) co the them/xoa duong dan
- Video co nut bat/tat tieng ngay tren moi the video
- Luu danh sach media bang `localStorage`

## Them anh/video cua ban vao GitHub

1. Dat file vao thu muc `assets/media/`.
2. Tren giao dien, nhap duong dan local:
   - `./assets/media/ten-anh.jpg`
   - `./assets/media/ten-video.mp4`
3. Hoac nhap URL online (https://...).

## Chinh cau noi

Mo `script.js`, sua mang `QUOTES`.

## Chinh media mac dinh

Mo `script.js`, sua mang `DEFAULT_MEDIA_ITEMS`.

## Deploy len GitHub Pages

Project da co workflow tai `.github/workflows/pages.yml`.

1. Day code len nhanh `main`.
2. Vao `Settings` -> `Pages`, chon `Source: GitHub Actions`.
3. Vao `Settings` -> `Actions` -> `General`, chon `Workflow permissions: Read and write permissions`.
4. Re-run workflow neu can.

Site mac dinh:
`https://<github-username>.github.io/<repo-name>/`

## Chay local

Mo `index.html` bang trinh duyet.
