# Lists

Status: Completed

# Python Lists — Complete Desi Notes

---

# 1️⃣ Python Variable Reality (Reminder)

Python me variable **dabba nahi hota**.

Variable sirf **sticker / label** hota hai.

Example:

```python
a = [1,2,3]
```

Office analogy:

```
Sticker "a" → tray [1,2,3]
```

Important:

Variable **data store nahi karta**.

Variable **object ka address hold karta hai**.

---

# 2️⃣ Python List Actually Kya Hai

Python list ek **container hai jo references store karta hai**.

Example:

```python
a = [10,20,30]
```

Actual memory roughly:

```
a
│
▼
[ ref → 10 , ref → 20 , ref → 30 ]
```

List me **values directly store nahi hoti**.

Sirf **object ke references store hote hain**.

Isliye list me mixed data types ho sakte hain.

Example:

```python
data = [1,"hello",3.14,True]
```

---

# 3️⃣ List Properties

Python List:

- ordered hoti hai
- mutable hoti hai
- duplicates allow karti hai
- indexing support karti hai
- dynamic size hota hai

Example:

```python
a = [10,20,30]
a[1] = 99
```

Result:

```python
[10,99,30]
```

Possible because list **mutable hai**.

---

# 4️⃣ Reference Behavior

Example:

```python
a = [1,2,3]
b = a

b.append(4)
```

Result:

```python
a → [1,2,3,4]
b → [1,2,3,4]
```

Kyuki:

```
a
 │
 ▼
same list object
 ▲
 │
b
```

Dono same object ko point karte hain.

---

# 5️⃣ Copy vs Reference

### Reference

```python
b = a
```

Result:

```
same object
```

---

### Copy

```python
b = a.copy()
```

or

```python
b = a[:]
```

Result:

```
new list object
```

Memory:

```python
a → [1,2,3]
b → [1,2,3]
```

Different containers.

---

# 6️⃣ Shallow Copy (Very Important)

Example:

```python
a = [[1,2],[3,4]]
b = a.copy()
```

Memory:

```python
a → [D1 , D2]
b → [D1 , D2]
```

Inner lists **shared**.

Example:

```python
b[0].append(99)
```

Result:

```python
a → [[1,2,99],[3,4]]
b → [[1,2,99],[3,4]]
```

Because **inner list same thi**.

This is called **shallow copy**.

---

# 7️⃣  Operator With Lists

Rule:

```python
list * n → elements repeat hote hain
```

Example:

```python
[1,2,3]*3
```

Result:

```python
[1,2,3,1,2,3,1,2,3]
```

Ye basically:

```
copy + paste
```

---

# 8️⃣ Dangerous Case ( with nested list)

Example:

```python
a = [[]] * 3
```

Memory:

```python
D1 → []

a → [D1 , D1 , D1]
```

Same list reused.

Example:

```python
a[0].append(1)
```

Result:

```python
[[1],[1],[1]]
```

Because **same inner list modify hui**.

---

# 9️⃣ Correct Way to Create Nested Lists

Instead of:

```python
grid = [[0] * 3] * 3
```

Use:

```python
grid = [[0] * 3 for _ in range(3)]
```

Why?

Each iteration creates **new list**.

Memory:

```python
grid → [D1, D2, D3]

D1 → [0,0,0]
D2 → [0,0,0]
D3 → [0,0,0]
```

Now modification safe.

---

# 🔟 `+` Operator With Lists

`+` means **merge two lists**.

Example:

```python
[1,2] + [3,4]
```

Result:

```python
[1,2,3,4]
```

Important:

```
new list create hoti hai
```

Original lists change nahi hoti.

---

# 11️⃣ Invalid Operators

Lists support:

```python
+
*
```

Lists do NOT support:

```python
-
/
%
```

Example:

```python
[1,2,3] - [2]
```

Error.

---

# 12️⃣ append vs extend

### append

```python
a.append(5)
```

Result:

```python
[1,2,3,5]
```

Single element add.

---

### extend

```python
a.extend([4,5])
```

Result:

```python
[1,2,3,4,5]
```

List merge.

---

# 13️⃣ append vs `+` (Performance)

Bad:

```python
a = a + [5]
```

Python kya karega:

1 new list banayega

2 old list copy karega

3 new item add karega

Slow.

Better:

```python
a.append(5)
```

In-place modification.

Production code me **append prefer karo**.

---

# 14️⃣ Slot Replace vs Object Modify

Difference samajhna critical hai.

### Slot replace

```python
b[0] = [99]
```

Sticker change hua.

---

### Object modify

```python
b[0].append(99)
```

Dabba change hua.

Agar dabba shared hai → bug.

---

# 15️⃣ Real Backend Bugs

### Bug 1 — Shared Lists

```python
sessions = [[]] * 1000
```

Result:

```
1000 users → same session list
```

Disaster.

---

### Bug 2 — Mutable Default Arguments

```python
defadd_user(name,users=[]):
users.append(name)
```

Every call same list use karega.

Production nightmare.

---

# 16️⃣ Golden Rules

Remember these:

### Rule 1

Python lists store **references**.

---

### Rule 2

- operator **objects duplicate nahi karta**.

References repeat karta hai.

---

### Rule 3

Nested lists me `*` dangerous hai.

---

### Rule 4

Mutable objects shared hue to bugs aate hain.

---

### Rule 5

List comprehension safer hota hai nested structures ke liye.

---

# Quick Cheat Sheet

| Operation | Meaning |
| --- | --- |
| `list * n` | repeat elements |
| `list + list` | merge |
| `append()` | add item |
| `extend()` | merge list |
| `copy()` | shallow copy |
| `[:]` | shallow copy |

---

# Clarity Question (Important)

Tum ab isko explain kar sakte ho?

```python
a = [[1],[2]]
b = a * 2

b[0].append(99)
```

**Why `a` bhi change hota hai?**

Agar tum ye confidently explain kar sakte ho →

matlab **list reference model solid ho gaya**.