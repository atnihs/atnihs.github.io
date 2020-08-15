---
layout: post
title: Root-me walkthrough
subtitle: Web Security - CTF
tags: [ctf, web-client, web-server]
image: /img/root-me.png
share-img: /img/root-me.png
---

Trong lúc tìm site để chơi thì đọc qua nhiều blog thì mình quyết định chơi site này.. Cũng được nhiều bậc tiền bối chơi và bảo có độ fame cao [root-me](https://www.root-me.org/) !

> #### Category:
>
> - Web Client
> - Web Server
>
> Let's go to the same dark road, **bruh** !

# HTML - disabled buttons

[Link](https://www.root-me.org/en/Challenges/Web-Client/HTML-disabled-buttons)

<details>
    <summary>Challenge Description</summary>
    This form is disabled and can not be used. It’s up to you to find a way to use it.
</details>

Khi bật cửa sổ lên sẽ thấy thẻ input và nút submit bị vô hiệu hóa bởi thuộc tính `disable`.


![Pic1](../img/26032018/pic1.png)

Vì vậy chỉ cần xóa đi và submit `admin` xem có show flag hay không?

![Pic2](../img/26032018/pic2.png)

Chal này mục đích để hiểu được thuộc tính của thẻ và cách thức `turn on`.

![Pic3](../img/26032018/pic3.png)

***

<details>
  <summary>FLAG</summary>
  
  HTMLCantStopYou
</details>
 
***

# Javascript - Authentication
[Link](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Authentication)
<details>
  <summary>Challenge Description</summary>
  None !
</details>

Chall yêu cầu ta xác thực đúng username và password thì mới show ra flag.

![Pic4](../img/26032018/pic4.png)

Cứ F12 view-source xem và nhận ra có file `login.js` mở ra sẽ thấy id và pwd và nhập vào để nhận thông báo và flag chính là pwd.

![Pic5](../img/26032018/pic5.png)

***

<details>
  <summary>FLAG</summary>
  
  sh.org
</details>
 
***

# Javascript - Source
[Link](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Source)
<details>
  <summary>Challenge Description</summary>
  You know javascript ?
</details>

Chall này sẽ bắt ta điền password vào prompt thì view-source như chall trước cũng sẽ thấy flag!

![Pic6](../img/26032018/pic6.png)

***

<details>
  <summary>FLAG</summary>
  
  123456azerty
</details>
 
***

# Javascript - Authentication 2
[Link](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Authentication-2)
<details>
  <summary>Challenge Description</summary>
  Yes folks, Javascript is damn easy :)
</details>

Về phần chall này thì yêu cầu login và check từng id và pwd mới show ra flag.

![Pic7](../img/26032018/pic7.png)

Tiếp tục view-source xem có gì không, và nhận thấy file `login.js` lúc này sẽ show đoạn code xử lý form trên.

![Pic8](../img/26032018/pic8.png)

Như trong hình thì biến `TheLists` sẽ cắt bởi kí tự `:` đồng thời gán vào 2 biến username = `GOD` và password = `HIDDEN` vì vậy mình lấy 2 params này check form là sẽ show flag!

***

<details>
  <summary>FLAG</summary>
  
  HIDDEN
</details>

***

# Javascript - Obfuscation 1
[Link](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Obfuscation-1)
<details>
  <summary>Challenge Description</summary>
  None!
</details>

Obfuscation là kỹ thuật che giấu code nhằm mục đích minify code, làm cho đoạn code trở nên khó đọc, khi view-source ta sẽ thấy biến obfuscator vì vậy chỉ cần unescape biến đấy là sẽ render ra flag như hình.

![Pic9](../img/26032018/pic9.png)

***

<details>
  <summary>FLAG</summary>
  
  cpasbiendurpassword
</details>

***

# Javascript - Obfuscation 2
[Link](https://www.root-me.org/en/Challenges/Web-Client/Javascript-Obfuscation-2)
<details>
  <summary>Challenge Description</summary>
  None!
</details>

Ta để ý khi view-source biến `pass` tiếp tục bị encode lúc này phải decode nhiều lần để lấy được chuỗi cần tìm.

![Pic10](../img/26032018/pic10.png)

Sau khi decode URL vài lần ta thu được:
```javascript
String.fromCharCode%28104%2C68%2C117%2C102%2C106%2C100%2C107%2C105%2C49%2C53%2C54%29
```
Ta chỉ cần unescape lại sẽ thu được pass lúc chưa obfuscator !

***

<details>
  <summary>FLAG</summary>
  
  hDufjdki156
</details>

***