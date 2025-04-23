# 函数随记

## Python中内置函数
- `len()`: 接收一个对象作为参数，返回对象的长度
- `max()`: 接收一个可迭代对象作为参数，返回其中最大值
- `zip()`: 接收可迭代对象作为参数，将其对应元素打包成一个个元组，返回由这些元组组成的列表
```python
# zip()函数的使用
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped = zip(list1, list2)
print(list(zipped))  # 输出: [(1, 'a'), (2, 'b'), (3, 'c')]

# 高级用法:行列互换
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
# 使用zip()函数将行列互换
unzipped = zip(*zipped)
print(list(unzipped))  # 输出: [(1, 2, 3), ('a', 'b', 'c')]
```
- `list()`: 接收一个可迭代对象作为参数，返回一个列表
```python
# 特殊用法 : 接收字典作为参数
dict1 = {'a': 1, 'b': 2, 'c': 3}
list1 = list(dict1)
print(list1)  # 输出: ['a', 'b', 'c']默认返回字典的键
```
- `dict()`: 接收一个可迭代对象作为参数，返回一个字典
