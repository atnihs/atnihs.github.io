---
layout: post
title: Redpwn CTF 2020 - Web
subtitle: Web Security - CTF
tags: [ctf, web]
image: /img/redpwn.png
share-img: /img/redpwn.png
---

Nhân ngày đẹp trời đồ án mọi thứ xong xuôi vào chơi [ctf](https://ctftime.org/) thì thấy giải này nên apply chơi .. và nhận ra giải cực kì hay và chất lượng `well-made challenges` !

---



---

# Inspector General
<details>
    <summary>Challenge Description</summary>
    My friend made a new webpage, can you find a flag?
</details>

Chall nhìn qua thì nghe có vẻ phức tạp nhưng chỉ cần view source là thấy `flag`.
Đi đến `view-source:https://redpwn.net/` sẽ thấy flag ở `dòng 7`.

![Inspector-flag](../img/26062020/1.png)

<details>
  <summary>FLAG</summary>
  
  flag{1nspector_g3n3ral_at_w0rk}
</details>