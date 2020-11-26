---
layout: post
title: Wargames Websec - Natas
subtitle: Web Security - CTF
tags: [wargame, ctf]
image: /img/wargame_natas.png
share-img: /img/wargame_natas.png
---

Wargame [Natas](https://overthewire.org/wargames/natas/) là hình thức chơi leo theo từng level được tạo nên bởi [OverTheWire](https://overthewire.org/wargames/) community. Wargame này dành cho những người muốn tìm hiểu những điều cơ bản nhất về web-security phía server. Chúng ta có thể thấy các lỗi phổ biến nhất trong wargame này.

Với mỗi cấp độ ta sẽ truy cập và lấy được pwd của level tiếp theo. Công việc của chúng ta somehow lấy được pwd đó và nhảy level. Tất cả pwd đều được lưu trữ ở **/etc/natas_webpass/** hãy để ý điều này. Ví dụ, pwd của **natas5** được lưu trữ trong **/etc/natas_webpass/natas5** và chỉ có **natas4** và **natas5** mới truy cập và đọc được.

> Let's focus on the quiz !



