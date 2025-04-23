# 基础语法


## Python类、`__init__`、`main`和`self`问答文档

### Q1: Python中的类和`__init__`、`self`有什么关系？

#### 回答：

在Python中：
1. **类(Class)** 是创建对象的蓝图/模板
1. **`__init__`** 是类的构造方法，在创建实例时自动调用
2. **`self`** 代表类的当前实例，用于访问实例属性和方法



### Q2: 为什么每个方法都要定义`self`参数？

#### 回答：
主要原因包括：
1. **实例标识**：明确操作哪个实例
2. **方法调用机制**：Python自动将实例作为`self`传入
3. **访问实例变量**：通过`self`访问实例特有属性
4. **显式优于隐式**：清晰区分实例变量和局部变量

例外情况：
- `@staticmethod`不需要`self`
- `@classmethod`使用`cls`参数
```python
# 文件内普通函数
def helper_function():  # 不需要self
    print("这是辅助函数")

# 静态方法
class MyClass:
    @staticmethod
    def static_method():  # 不需要self
        print("这是静态方法")
```


### Q3: `__name__`和`__main__`是什么？
#### 回答：
python中每个文件都有一个`__name__`变量
  - 当作为主程序运行时,`__name__`的值为`__main__`
  - 当被别的文件导入时,`__name__`的值为模块名
  - 所以 `if __name__ == "__main__"` 可以确保：
> 下面的代码只在我直接运行这个文件时执行，不会在被导入时执行。


```python
class MyClass:
    def __init__(self, value):
        self.value = value  # 初始化实例属性
        print(f"实例化了MyClass，值为{self.value}")
        # 这里可以放置其他初始化代码

def main():
    print("程序开始执行")
    obj = MyClass(10)  # 创建实例
    print(f"实例的值是：{obj.value}")
    # 这里可以放置其他主逻辑代码
if __name__ == "__main__":
  # 用于判断当前文件是否是主程序运行入口
    main()  # 调用main函数
```


### Q4: 能否展示实际应用示例？

#### 回答：
##### 示例1：用户管理系统
```python
class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email
        self.is_active = True
    
    def deactivate(self):
        self.is_active = False
        print(f"{self.username}已停用")

# 使用
user = User("张三", "zhang@example.com")
user.deactivate()



class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def apply_discount(self, percent):
        self.price *= (1 - percent/100)

# 使用
book = Product("Python入门", 100)
book.apply_discount(20)  # 打8折



