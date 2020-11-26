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

Với mỗi level giải mình sẽ cung cấp thêm POC để solve vấn đề nhanh hơn.

> Let's focus on the quiz !


![Alt Text](https://media.giphy.com/media/WiM5K1e9MtEic/giphy.gif)



***
# Natas Level 0 Solution
***
**URL:** [http://natas0.natas.labs.overthewire.org](http://natas0.natas.labs.overthewire.org) <br/>
**Datum:** natas0-natas0

Này thì đơn giản sau khi nhập user, pwd thì chỉ cần kiểm tra view-source bằng cách nhấn chuột phải `View page source`, ta sẽ nhận được pwd:
```bash
<!--The password for natas1 is gtVrDuiDfck831PqWsLEZy5gyDz1clto -->
 ```

hoặc có thể check bằng Python <br/>

**POC**
```Python
import requests
import re

user = 'natas0'
pwd = user

url = 'http://%s.natas.labs.overthewire.org/' % user
reponse = requests.get(url,auth = (user,pwd))
content = reponse.text

#print(content)
print(re.findall('<!--The password for natas1 is (.*) -->', content))
```



***
# Natas Level 1 Solution
***
**URL:** [http://natas1.natas.labs.overthewire.org](http://natas1.natas.labs.overthewire.org) <br/>
**Datum:** natas1-gtVrDuiDfck831PqWsLEZy5gyDz1clto

Ở level này thì khi nhấp chuột phải đã blocked thì mình thử dùng phím tắt `Ctrl + U`, ta sẽ nhận được pwd:
```bash
<!--The password for natas2 is ZluruAthQk7Q2MqmDeTiUij2ZvWy2mBi -->
```

**POC:**
```Python
import requests
import re

user = 'natas1'
pwd = 'gtVrDuiDfck831PqWsLEZy5gyDz1clto'

url = 'http://%s.natas.labs.overthewire.org/' % user
reponse = requests.get(url,auth = (user,pwd))
content = reponse.text

print(content)
#print(re.findall('<!--The password for natas2 is (.*) -->', content))
```



***
# Natas Level 2 Solution
***
**URL:** [http://natas1.natas.labs.overthewire.org](http://natas1.natas.labs.overthewire.org) <br/>
**Datum:** natas2-ZluruAthQk7Q2MqmDeTiUij2ZvWy2mBi
