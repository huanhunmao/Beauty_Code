// 有没有写过 这样的 内容  python 例子 
// Do you know what it does? Is this readable to you? How much time would you spend to understand this?

// This is a code for a quick sort algorithm.

array = [29,99,27,41,66,28,44,78,87,19,31,76,58,88,83,97,12,21,44]
q = lambda l: q([x for x in l[1:] if x <= l[0]]) + [l[0]] + q([x for x in l if x > l[0]]) if l else []
print(q(array))