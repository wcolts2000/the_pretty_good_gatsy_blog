---
title: "Recursion Class Examples"
date: "2019-7-18"
---

## Recursion

```python
def partition(l):
        left = []
        pivot = l[0] # or make random
        right = []
        for v in l[1:]:
                if v < pivot:
                        left.append(v)
                else:
                        right.append(v)
        return left, pivot, right


def quicksort(l): # O (n log n) best case, O(n^2) worst case
        if l == []:
                return []

        left, pivot, right = partition(l)

        return quicksort(left) + [pivot] + quicksort(right)

```

### Quick sort in place example

```python
def quicksort(l, low, high): # O (n log n) best case, O(n^2) worst case

    if low >= high:
        return l

    pivot_index = low

        # partition
    for i in range(low, high):
        if l[i] < l[pivot_index]:
            l[i], l[pivot_index + 1] = l[pivot_index + 1], l[i]
            l[pivot_index], l[pivot_index + 1] = l[pivot_index + 1], l[pivot_index]
            pivot_index += 1

    quicksort(l, low, pivot_index)
    quicksort(l, pivot_index + 1, high)

    return l

l = [2,9,5,3]

quicksort(l, 0, len(l))
```

### Selection Sort Example # O(n^2)

```python
def selection_sort(l):
    for u in range(len(l)):
        min_index = u

        for s in range(u+1, len(l)):
            if l[s] < l[min_index]:
                min_index = s

        l[u], l[min_index] = l[min_index], l[u]

    return l

```

## CACHING/MEMOIZATION

> sample of cached fib numbers

```python
# RECURSIVE INFO NOTE THIS VERSION WILL EXCEED CALLSTACK AT 999
def nth_fib(n, cache):
# this is O(2^n)
    if n < 2:
        return n
    elif cache[n] > 0:
        return cache[n]
    else:
        cache[n] = nth_fib(n-1, cache) + nth_fib(n-2, cache)
        return cache[n]

# Either a dict or list will work
n = 50
cache = [0 for _ in range(n+1)]
cache2 = {i: 0 for i in range(n+1)}
print(nth_fib(50,cache))
print(nth_fib(50,cache2))

#========================================  MEMOIZATION / CACHING
#===========   CLASS SAMPLE   ===========
#========================================
cache = {
    0: 0,
    1: 1
}

# TOP DOWN DYNAMIC PROGRAMMING

def fib_cache(n):
    global cache

    if n in cache:
        return cache[n]

    cache[n] = fib_cache(n-1) + fib_cache(n-2)

    return cache[n]

# BOTTOM UP DYNAMIC PROGRAMMING

def fib_btm(n):
    if n <= 1:
        return n

    n1 = 1
    n2 = 0

    for i in range(n-1):
        r = n1 + n2
        n2 = n1
        n1 = r

    return r

for i in range(10):
    print(f'{i}: {fib_btm(i)}')

# ITERATIVE VERSION
def iterative_fib(n):
    answer = 0
    n_1 = 1
    n_2 = 0
    for i in range(n-1):
        answer = n_1 + n_2
        n_2 = n_1
        n_1 = answer
    return answer
```

# FACTORIALS

> 6! == 6 * 5 * 4 * 3 * 2 * 1

```python
# ITERATIVE VERSION
def factorial_iter(n):
    a = 1
    for i in range(1, n+1):
        a *= i
    return a

print(factorial_iter(0))
print(factorial_iter(1))
print(factorial_iter(2))
print(factorial_iter(4))

# RECURSIVE VERSION
def factorial_recursive(n):
    if n == 0:
        return 1
    return n * factorial_recursive(n-1)
```

# POWERS

> x^y = x * x * x * x * ... * x
>
> 2^4 = 2 * 2 * 2 * 2
>
> 2^5 = 2 * 2 * 2 * 2 * 2

```python
def power_iter(x, y):
    a = 1

    for i in range(y):
        a *= x

    return a

print(power_iter(2,0)) # 2^0 == 1
print(power_iter(2,1))
print(power_iter(2,3))
print(power_iter(2,7))

def power_recur(x,y):
    if y == 0:
        return 1
    else:
        return x * power_recur(x, y-1)


print(power_recur(2,0))
print(power_recur(2,1))
print(power_recur(2,3))
print(power_recur(2,7))
```

# MERGE SORT CLASS EXAMPLE: O(n lon (n))

```python
def merge(l,r):
    result = []

    while len(l) > 0 and len(r) > 0:
        if l[0] < r[0]:
            v = l.pop(0)
        else:
            v = r.pop(0)

        result.append(v)

    result += l
    result += r

    return result


def merged_arr = list(set(arrA + arrB))

def mergesort(l):
    if len(l) <= 1:
        return l

    halfway_index = len(l) // 2

    left = mergesort(l[:halfway_index])
    right = mergesort(l[halfway_index:])

    return merged_arr(left, right)
#     return merge(left, right)
```

