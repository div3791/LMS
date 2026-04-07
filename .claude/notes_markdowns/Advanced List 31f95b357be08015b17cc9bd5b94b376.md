# Advanced List

Status: Completed

# Python Lists — Backend Engineer Notes

## 1. Mental Model (Sabse Important)

Python list **values store nahi karti**.

Python list store karti hai:

```
references → objects
```

Memory view:

```
List
 ├── pointer → object
 ├── pointer → object
 └── pointer → object
```

Example:

```python
a = [10,20,30]
```

Reality:

```
a
 │
 ▼
[p][p][p]
 │  │  │
 ▼  ▼  ▼
10 20 30
```

### Desi Analogy

Socho **warehouse shelves**.

Shelf pe item nahi hai.

Shelf pe **location tag** hai.

Tag bolta hai:

```
warehouse row 5 shelf 2 → item
```

List = shelf of **addresses**.

---

# 2. Dynamic Array Internals

Python list internally:

```
dynamic array
```

Structure:

```
size      → actual elements
capacity  → allocated slots
```

Example:

```
size = 3
capacity = 8
```

Memory:

```python
[10][20][30][_][_][_][_][_]
```

Extra space reserved.

---

# 3. Why append() is Fast

Agar list full ho:

```python
[1,2,3,4]
capacity = 4
```

Next append:

```python
append(5)
```

Python karega:

1. bigger array allocate
2. old items copy
3. new element add

But ye **rarely hota hai**.

Because Python **over-allocate** karta hai.

Growth approx:

```
old + old/8 + constant
```

So append average me:

```
O(1)
```

Isko bolte hain:

```
amortized O(1)
```

---

# 4. List Operations Complexity

| Operation | Cost | Why |
| --- | --- | --- |
| `a[i]` | O(1) | direct index access |
| `append()` | O(1) amortized | extra capacity |
| `pop()` end | O(1) | remove last |
| `insert(0,x)` | O(n) | shifting |
| `remove(x)` | O(n) | search + shift |
| `x in list` | O(n) | scan |

---

# 5. Very Common Beginner Mistake

### Bad

```python
result = []

for x in data:
		result = result + [x]
```

Problem:

```
new list create each iteration
```

Time complexity:

```
O(n²)
```

### Correct

```python
result.append(x)
```

---

# 6. `append()` vs `extend()` vs `+`

Example:

```
a = [1,2]
b = [3,4]
```

### append

```
a.append(b)
```

Result:

```
[1,2,[3,4]]
```

Nested list.

---

### extend

```
a.extend(b)
```

Result:

```
[1,2,3,4]
```

---

### +

```
a=a+b
```

Creates **new list**.

Memory copy.

---

### Backend Rule

Use:

```
append / extend
```

Avoid `+` inside loops.

---

# 7. Reference Trap

Example:

```
a= [1,2,3]
b=a
```

Now:

```
b.append(4)
```

Both change.

```
a = [1,2,3,4]
b = [1,2,3,4]
```

Because:

```
same list object
```

Memory:

```
a ─┐
   ├─> [1,2,3]
b ─┘
```

---

# 8. Shallow Copy

Two common methods:

```python
b = a.copy()
b = a[:]
```

Creates **new list container**.

But objects inside still shared.

Example:

```python
a = [[1],[2]]
b = a.copy()
```

Modify inner list:

```python
b[0].append(99)
```

Result:

```python
a = [[1,99],[2]]
b = [[1,99],[2]]
```

Because inner objects same.

---

# 9. Dangerous Nested List Trap

Never do this:

```python
matrix = [[0] * 3] * 3
```

Memory:

```
same list referenced 3 times
```

Result:

```
[[0,0,0],
 [0,0,0],
 [0,0,0]]
```

Modify one:

```
matrix[0][0]=1
```

Output:

```
[[1,0,0],
 [1,0,0],
 [1,0,0]]
```

### Correct Way

```python
matrix = [[0] * 3 for _ in range(3)]
```

---

# 10. List Comprehension Mental Model

Syntax:

```python
[expression for item in iterable if condition]
```

Example:

```python
[x*2 for x in nums if x%2==0]
```

Expansion:

```python
for x in nums:
    if x % 2 == 0:
        result.append(x*2)
```

---

# 11. When NOT to Use List Comprehension

Bad:

```python
[print(x) for x in data]
```

Bad:

```python
[db.save(x) for x in data]
```

Why?

```
side effects
```

Use loop instead.

---

# 12. Nested Comprehension

Example:

```python
[x for row in matrix for x in row]
```

Expansion:

```python
for row in matrix:
    for x in row:
        append(x)
```

---

# Rule

Never go beyond **2 nested loops**.

Bad:

```python
[x for a in A for b in B for c in C]
```

Unreadable.

---

# 13. Sorting

Python sorting algorithm:

```
Timsort
```

Properties:

```
stable
adaptive
very fast
```

---

# Stable Sorting

Equal elements keep original order.

Example:

```
(A,25)
(B,20)
(C,25)
```

Sort by age:

```
(B,20)
(A,25)
(C,25)
```

A before C preserved.

---

# Multi-Level Sorting Trick

Example:

```
sort by name
then age
```

```python
users.sort(key=lambda x:x["name"])
users.sort(key=lambda x:x["age"])
```

Because sort **stable** hai.

---

# 14. Memory Behavior

Each element roughly:

```
8 bytes pointer
+
28 bytes int object
=
~36 bytes
```

Example:

```
1 million integers
≈ 36 MB
```

People expect:

```
8 MB
```

Reality bigger.

---

# 15. Backend Pitfalls

### 1️⃣ Large lists in memory

Bad:

```python
data = [parse(x) for x in huge_file]
```

Better:

```
generator pipeline
```

---

### 2️⃣ Infinite accumulation

```python
logs = []
while True:
		logs.append(new_log)
```

Memory leak.

---

### 3️⃣ Copying lists repeatedly

```python
result = result + new_items
```

Creates new list each time.

---

# 16. When Lists Are Perfect

Use lists for:

```
API responses
ordered data
moderate datasets
iteration heavy workloads
```

Example:

```python
users = [serialize(u) for u in db_rows]
return users
```

---

# 17. When Lists Are Bad Choice

Avoid lists when:

```
huge numeric datasets
stream processing
unbounded logs
```

Better tools:

```
generators
queues
files
databases
numpy arrays
```

---

# Final Backend Mental Model

Think of list as:

```
fast ordered container
of references
```

Great for:

```
iteration
indexing
aggregation
```

Bad for:

```
huge memory workloads
front insertions
streaming pipelines
```

---

# One Question for You (Learning Check)

Explain in your own words:

**Why `append()` is O(1) amortized even though sometimes Python copies the entire list?**

5–6 lines me answer karo.

Agar tum ye clearly explain kar pao, to samjho **list internals fully clear ho gaye**.

Uske baad hum **Tuples (very interesting backend concept)** start karenge.