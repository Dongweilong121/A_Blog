# 遇见的问题,如何解决

## jupyter文件引用py本地包路径问题

### 问题描述
在jupyter中引用本地包时，路径问题，导致无法引用本地包。
### 解决方案
使用sys,os模块，添加本地包路径到sys.path中。
```python
import sys
import os
sys.path.append(os.path.abspath("../app"))  # 相对路径，或换成绝对路径
```
