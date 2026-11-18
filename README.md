# Thiệp cưới Tâm Hà

Trang thiệp cưới công khai, một trang và ưu tiên thiết bị di động. Dự án hiện chỉ gồm giao diện tĩnh; không có form RSVP, API, số điện thoại hay dữ liệu khách mời.

## Chạy local

Yêu cầu Node.js 20+.

```bash
npm install
npm run dev
```

Mở địa chỉ Vite in trên terminal. Kiểm tra bản production bằng:

```bash
npm run lint
npm test
npm run build
```

## Nội dung và tài sản

- Nội dung công khai được tập trung tại `src/content.js` để dễ thay tên, thời gian, địa điểm và liên kết bản đồ.
- Ảnh hero nằm tại `public/images/tam-ha-wedding-hero.png`. Thay ảnh bằng cùng tên, ảnh WebP/AVIF tối ưu hơn khi có bản xuất phù hợp.
- Trang hiển thị ngày cưới theo múi giờ `Asia/Ho_Chi_Minh`. Đồng hồ dừng ở 0 sau thời điểm tổ chức.

Khi phát triển RSVP, hãy triển khai qua dịch vụ phía máy chủ: không đưa dữ liệu khách mời, token QR hay bí mật vào client/repository.
