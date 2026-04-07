# Dictionary

Status: Completed

# 1️⃣ Dictionary kya hota hai? (Mental Model)

Dictionary = **Key → Value mapping**

Example:

```python
user= {
	"id":101,
	"name":"Divyesh",
	"age":25
}
```

Real meaning:

```
"id"  → 101
"name" → "Divyesh"
"age" → 25
```

Think like:

### 🏨 Hotel Locker System

Locker number → item

```
101 → laptop
102 → phone
103 → shoes
```

Tum directly locker open karte ho.

Na ki:

```
locker 1 check
locker 2 check
locker 3 check
```

Ye hi **O(1) lookup** ka idea hai.

---

# 2️⃣ Dictionary internally kaise kaam karta hai?

Dictionary internally:

```
HASH TABLE
```

Flow:

```
key
 ↓
hash(key)
 ↓
bucket index
 ↓
value
```

Example:

```
hash("apple") → 923874923
923874923 % table_size → bucket
```

Python directly us bucket pe jump karta hai.

Isliye lookup:

```
O(1) average
```

---

# 3️⃣ Hash Collision kya hota hai?

Kabhi kabhi:

```
hash("apple") % 8 → bucket 3
hash("grape") % 8 → bucket 3
```

Dono same bucket me chale gaye.

Isko kehte hain:

```
hash collision
```

Python fir keys compare karta hai.

---

# 4️⃣ Dictionary complexity

| Operation | Complexity |
| --- | --- |
| Lookup | O(1) avg |
| Insert | O(1) avg |
| Delete | O(1) avg |
| Worst case | O(n) |

Worst case rare hai.

---

# 5️⃣ Keys immutable kyu honi chahiye?

Dictionary hashing use karta hai.

Agar key change ho gayi:

```
hash(old_key) ≠ hash(new_key)
```

Dictionary usko wrong bucket me dhundega.

Example:

```python
d = {[1,2,3]:"hello"} ❌
```

Allowed keys:

```
int
str
tuple (immutable elements)
frozenset
```

Not allowed:

```
list
set
dict
```

---

# 6️⃣ Dictionary creation methods

### 1️⃣ Literal

```python
d = {"a":1,"b":2}
```

Most common.

---

### 2️⃣ dict()

```python
d = dict(a=1,b=2)
```

---

### 3️⃣ From tuples

```python
pairs = [("a",1),("b",2)]

d = dict(pairs)
```

---

### 4️⃣ Dict comprehension

```python
nums = [1,2,3]

d = {x:x*x for x in nums}
```

Output:

```python
{1:1,2:4,3:9}
```

---

### 5️⃣ fromkeys()

```python
dict.fromkeys(["a","b","c"],0)
```

Result:

```python
{"a":0,"b":0,"c":0}
```

⚠️ Pitfall:

```python
dict.fromkeys(["a","b"], [])
```

Both keys **same list share karte hain**.

---

# 7️⃣ Insert / Update operations

### Basic insert

```python
d["age"]=25
```

---

### Update value

```python
d["age"]=30
```

---

### update()

```python
d.update({"age":30})
```

Multiple:

```python
d.update(a=1,b=2)
```

---

### setdefault()

Use when:

```
insert if missing
```

Example:

```python
d.setdefault("count",0)
```

Equivalent to:

```python
if key not exists
    insert
```

Real grouping example:

```python
groups = {}

groups.setdefault(role, []).append(user)
```

---

# 8️⃣ Search operations

### Check key exists

```python
if "a" in d
```

⚠️ Important

```
in → checks KEYS
```

Not values.

---

### get()

Safe lookup.

```python
d.get("a")
```

Default value:

```python
d.get("a",0)
```

Production me **get() zyada use hota hai**.

---

# 9️⃣ Delete operations

### del

```python
del d["a"]
```

Missing key → crash.

---

### pop()

```python
d.pop("a")
```

Return value.

Safe version:

```python
d.pop("a",None)
```

---

### popitem()

```python
d.popitem()
```

Remove last inserted pair.

Useful in cache logic.

---

### clear()

```python
d.clear()
```

Remove everything.

---

# 🔟 Iteration

### Default iteration

```python
for k in d:
```

Returns:

```python
keys
```

Example:

```
a
b
```

---

### keys()

```python
for k in d.keys()
```

---

### values()

```python
for v in d.values()
```

---

### items()

Most useful.

```python
for k,v in d.items()
```

Example:

```python
for user_id,user in users.items()
```

---

# 1️⃣1️⃣ Dictionary Views

Methods:

```python
keys()
values()
items()
```

Return:

```
dynamic view objects
```

Example:

```python
d = {"a":1}

k = d.keys()

d["b"] = 2
```

Now:

```python
k → {'a','b'}
```

Not lists.

---

# 1️⃣2️⃣ Dictionary Comprehension

Example:

```python
{k:v for k,v in data}
```

Used for:

```
transformation
filtering
mapping
```

Example:

```python
{k:v for k,v in a.items() if v > 2}
```

---

# ⚠️ When NOT to use comprehension

Bad example:

```python
{w:words.count(w) for w in words}
```

Complexity:

```
O(n²)
```

Use loop for:

```
aggregation
counting
grouping
```

---

# 1️⃣3️⃣ Real Backend Patterns

### Request counter

```python
counts[user] = counts.get(user,0) + 1
```

---

### Cache

```
user_id → user_object
```

---

### Config map

```
setting_name → value
```

---

### Permission system

```
user → permissions
```

---

# 1️⃣4️⃣ Real AI / ML Uses

### Vocabulary mapping

```
word → index
```

Example:

```python
vocab = {word:i for i,word in enumerate(words)}
```

---

### Frequency counter

```
word → frequency
```

---

### Feature map

```
feature_name → feature_value
```

---

# 1️⃣5️⃣ Common Beginner Mistakes

### Mistake 1

```python
if d[key]
```

Key missing → crash.

Better:

```python
if key in d
```

---

### Mistake 2

Overcomplicated counters.

Bad:

```python
if key in dict
```

Better:

```python
d[key] = d.get(key,0) + 1
```

---

### Mistake 3

Modify dictionary during iteration.

```python
for k in d:
	del d[k]
```

Error:

```
dictionary changed size during iteration
```

Fix:

```python
for k in list(d):
```

---

### Mistake 4

Using comprehension for aggregation.

---

# 1️⃣6️⃣ Memory Cost

Dictionary entry approx:

```
~72 bytes+
```

Large dictionaries:

```
memory explosion
```

Example:

```
50M keys → ~3GB+
```

---

# 1️⃣7️⃣ Dictionary Order

Python 3.7+

```
dict preserves insertion order
```

Example:

```python
d = {}

d["a"] = 1
d["b"] = 2
d["c"] = 3
```

Iteration:

```
a b c
```

---

# 1️⃣8️⃣ Dictionary vs Set

| Feature | Dictionary | Set |
| --- | --- | --- |
| Structure | Hash table | Hash table |
| Data stored | key → value | key only |
| Duplicate allowed | Keys unique | Elements unique |
| Lookup speed | O(1) avg | O(1) avg |
| Memory usage | Higher | Lower |
| Typical use | Mapping | Membership testing |
| Example | user_id → user | visited nodes |
| Iteration | keys | elements |
| Ordering | preserved | preserved |
| Creation syntax | `{k:v}` | `{v}` |

---

# 1️⃣9️⃣ Mental Shortcut

Remember:

```
SET = DICTIONARY WITHOUT VALUES
```

---

# 2️⃣0️⃣ Engineering Rule

Use:

### Dictionary when

```
mapping needed
```

Example:

```
user_id → user
word → index
feature → value
```

---

### Set when

```
membership testing
```

Example:

```
visited nodes
duplicate detection
unique ids
```

---

# Final Summary (Fast Recall)

```
Dictionary = hash table mapping
key → value

O(1) lookup

keys must be immutable

Main operations:
insert → d[key]=value
safe lookup → get()
delete → pop()
iterate → items()

Common patterns:
counter → d[k]=d.get(k,0)+1
grouping → setdefault()
mapping → comprehension

SET = dictionary without values
```