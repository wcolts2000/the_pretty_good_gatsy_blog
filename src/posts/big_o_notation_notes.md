---
title: "Big O Notation Class Notes"
date: "2019-7-17"
---

# Big O Classifications

> 'c' is a constant - 'n' is the size of the input

- O(c) - Constant Time <-- Best time
- O(logn) - Logarithmic Time
- O(n) - Linear Time
- O(nlogn) - Log-linear Time
- O(n^c) - Quadratic Time
- O(c^n) - Exponential Time <-- Worst time

# Constant Time

## O(1) time complexity

- regardless of input size, run time remains the same (algo performs the same number of operations every time)
- picking a random number from a group of numbers, grabbing an element in an array/list by index, hashtable key/value fetching with known key

```python
def print_100th_element(array):
    print(array[99])
```

```python
def loop_50_times(array):
    for i in range(50):
        print(array[i])
```

# Logarithmic Time

## O(log n) time complexity

- increases the number of operations as a log function of input size
- log n grows slowly, so as the input size increases, number of operations only slightly increases (next best to constant time)
- searching for a book in a shelf of alphabetized books
- Binary Search Pseudo Code below

```python
def binary_search(sorted_arr, target):
    low = 0, high = len(sorted_arr) - 1
    midpoint = (high - low) // 2
    if target == sorted_arr[midpoint]:
        return midpoint
    elif target < sorted_arr[midpoint]:
        return binary_search(sorted_arr[:midpoint])
    else:
        return binary_search(sorted_arr[midpoint:])
```

# Linear Time

## O(n) time complexity

- the number of operations increases proportionally with the input size
- Counting something
- washing dogs one at a time in a tub, etc..

```python
def search(array, target):
    for el in array:
        if target == el:
            return True
    return False
```

> note below code is O(2\*n) still Linear time

```python
def print_all_elements_twice(array):
    for el in array:
        print(el)
    for el in array:
        print(el)
```

```python
def print_up_to_n(n):
    for i in range(n):
        print(i)
```

# Log-linear Time

## O(nlogn) time complexity

- increases number of operations as a log-linear function of input size
- looks at every element and does additional work on each thing
- mostly only applied to sorting
  - Quicksort
  - Mergesort
  - Heapsort
  - Timsort
- think of sorting billiard balls in a row, you look over everything and shift/adjust the things accordingly

# Quadratic Time

## O(n^2) time complexity

- n = 10 -> n^2 = 100
- n = 100 -> n^2 = 1_000_000
- quadratically increases as input size increases
- enumerating all possible permutations of a string

>        --------Recursive tree for string ABC-------------
>                           ABC
>                                                
>           A | BC        B | AC          C | BA            
>                                                
>     AB | C  AC | B  BA | C  BC | A  CB | A  CA | B

- bubble sort

```python
def print_all_pairs(array):
    for first_item in array:
        for second_item in array:
            print(first_item, second_item)
```

```python
def bubble_sort(array):
    for i in range(len(array)-1):
        for j in range(len(array)-2):
            if array[i] > array[i+1]:
                array[i], array[i+1] = array[i+1], array[i]
```

# Exponential Time

## O(c^n) time complexity

- exponentially increases number of operations as input size increases
- number of nested loops increases as a function of the input size
- cracking unknown password
- knapsack problem <???>
- Minesweeper consistency problem
- Prime factorization of large ints
- longest common subsequence of strings problem

### Point to note

- iterations of constants are removed from factoring final Big O
  - O(5n) ~ O(n)
  - O(.5n) ~ O(n)
- Likewise non-dominate terms are removed as well
  - O(n^3 + .5n + 101) ~ O(n^3)

---

7/18/2019

---

# Space Complexity / Memory Consumption

```python
# O(1) Space complexity ***(Python3 range is O(1), Python2 range is O(n))***
def reverse_list_in_place(x):
    ln = len(x)

    for i in range(ln // 2):
        x[i], x[ln-i-1] = x[ln-i-1], x[i]


def foo(x):
    for i in range(len(x)):
        for j in range(len(x)):
            pass
# O(n^2) time complexity ^^^
# O(1) Space complexity ***(Python3 range is O(1), Python2 range is O(n))***


def foo2(n):
    if n == 0: return

    print(n)

    foo(n-1)
    # foo(n-1) + foo(n-1) 2 calls would yield O(2^n) Time/Space complexity

foo(10)
# O(n) Linear Time Complexity ^^^
# O(n) Space Complexity
```

# Find largest amount of anagrams

```python
anagrams = {}
most_anagrams = 0
most_anagrams_signature = None

with open('words.txt') as fp:
    for line in fp: # O(w)  w is number of words
        line = line.strip() # remove whitespace
        signature = ''.join(sorted(line)) # O(n log n) n is avg number of letters per word

        if signature not in anagrams:
            anagrams[signature] = []

        anagrams[signature].append(line) # O(1)

        if len(anagrams[signature]) > most_anagrams:
            most_anagrams = len(anagrams[signature])
            most_anagrams_signature = signature # O(n) copy signature

# for k in anagram
#     print(anagrams[k])

# TIME COMPLEXITY ^^^^^^^
# O(w * n log n)  ## w is num of words, n is avg num of letters per word

```