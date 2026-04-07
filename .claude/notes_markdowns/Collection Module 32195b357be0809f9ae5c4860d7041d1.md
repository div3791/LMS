# Collection Module

Status: Completed

# Python Collections Module — Complete Notes (Desi Backend Engineer Version)

Python ka `collections` module ek **special toolbox** hai jo normal data structures ko extend karta hai.

Normal Python structures:

| Structure | Purpose |
| --- | --- |
| list | ordered sequence |
| dict | key-value mapping |
| set | unique elements |

But real world backend systems me kabhi kabhi **special behaviour** chahiye hota hai.

Isi liye `collections` module bana.

Important structures:

| Structure | Purpose |
| --- | --- |
| defaultdict | missing key automatically create |
| Counter | frequency counting |
| deque | fast queue operations |
| OrderedDict | order control |

---

# 1. defaultdict

## Problem jo solve karta hai

Normal dictionary behaviour:

```python
d = {}
d["user"].append("login")
```

Error:

```python
KeyError
```

Reason:

Dictionary bolta hai:

> "Key exist nahi karti."
> 

Isliye normal code me likhna padta hai:

```python
if key not in d:
		d[key] = []
```

Ye pattern bahut repeat hota hai.

Is repetitive pattern ko eliminate karne ke liye **defaultdict** banaya gaya.

---

# defaultdict ka core idea

Defaultdict ek dictionary hai jisme:

```
missing key → automatically value create
```

Example:

```python
from collections import defaultdict

d = defaultdict(list)
```

Meaning:

```python
agar key missing hai
to list() create karo
```

---

# Example

```python
from collections import defaultdict

logs= [
("alice","login"),
("bob","login"),
("alice","purchase")
]

d=defaultdict(list)

for user,action in logs:
		d[user].append(action)
```

Output:

```python
{
'alice':['login','purchase'],
'bob':['login']
}
```

Notice:

```
key manually create nahi ki
```

---

# default_factory concept

Defaultdict internally ek function store karta hai:

```
default_factory
```

Example:

```
defaultdict(list)
```

Internal behaviour:

```python
if key missing:
    value = list()
    insert key,value
```

---

# Common defaultdict patterns

| Pattern | Use case |
| --- | --- |
| defaultdict(list) | grouping |
| defaultdict(set) | unique grouping |
| defaultdict(int) | counting |
| defaultdict(dict) | nested maps |

---

# Example: defaultdict(int)

```python
counts = defaultdict(int)

for word in words:
		counts[word] += 1
```

Reason:

```python
int() returns 0
```

---

# Backend use cases

### 1. Log grouping

```
user → list of events
```

Example:

```
user1 → [login, purchase]
```

---

### 2. Graph adjacency lists

```
node → neighbors
```

Example:

```
A → [B,C]
```

---

### 3. Inverted index (search engines)

```
word → documents
```

Example:

```
python → [doc2, doc9]
```

---

# AI / ML use cases

### Vocabulary mapping

```
label → samples
```

### Token positions

```
word → positions in sentence
```

---

# Common traps

### Trap 1: accidental key creation

Example:

```python
if d["user"]:
```

If key missing:

```
key automatically create ho jayegi
```

Better:

```python
if "user" in d
```

---

### Trap 2: memory growth

If random keys accessed:

```
dictionary grow karta rahega
```

Production bug.

---

# Important behaviour

| Operation | Key create? |
| --- | --- |
| d[key] | Yes |
| d.get(key) | No |
| key in d | No |

---

# Internal architecture

defaultdict basically:

```
dict subclass
```

Special method:

```
__missing__()
```

---

# 2. Counter

## Problem jo solve karta hai

Frequency counting.

Normal dict code:

```python
counts = {}

for word in words:
		if word not in counts:
				counts[word]=1
		else:
				counts[word]+=1
```

Python ne bola:

```
ye pattern bahut common hai
```

Solution:

```
Counter
```

---

# Counter mental model

```
Counter = dict optimized for counting
```

Example:

```python
from collections import Counter

Counter(["a","b","a"])
```

Output:

```python
{'a':2,'b':1}
```

---

# Important feature

### most_common()

```python
c.most_common(2)
```

Output:

```python
[('a',10),('b',8)]
```

---

# Backend use cases

### Log analytics

```
status code frequency
```

Example:

```
200 → 10000
404 → 200
```

---

### Fraud detection

```
IP → login attempts
```

Detect abusive IPs.

---

### Product popularity

```
item → purchase count
```

---

# AI use cases

### NLP token frequency

```
word frequency
```

Used in:

```
bag of words
feature extraction
```

---

# Counter tricks

### Addition

```
c1 + c2
```

Combine frequencies.

---

### Subtraction

```
c1 - c2
```

Difference.

---

### Intersection

```
c1 & c2
```

Minimum counts.

---

### Union

```
c1 | c2
```

Maximum counts.

---

# Hidden feature

### elements()

```python
list(c.elements())
```

Reconstruct elements.

---

# Special behaviour

Missing key:

```python
c["missing"]
```

Returns:

```
0
```

---

# Traps

### negative counts possible

```python
c["a"] -= 5
```

---

### zero counts remain

Key still present.

---

### infinite streams

Counter grows forever.

---

# Counter vs defaultdict(int)

| Feature | Counter | defaultdict |
| --- | --- | --- |
| auto counting | yes | manual |
| most_common | yes | no |
| arithmetic ops | yes | no |

---

# 3. deque

Pronunciation:

```
deck
```

---

# deque ka purpose

Fast queue operations.

Normal list queue:

```python
queue.pop(0)
```

Cost:

```
O(n)
```

Because elements shift.

---

# deque mental model

```
double ended queue
```

Operations:

| Operation | Complexity |
| --- | --- |
| append | O(1) |
| appendleft | O(1) |
| pop | O(1) |
| popleft | O(1) |

---

# Example

```python
from collections import deque

d = deque([1,2,3])
d.appendleft(0)
```

Result:

```
[0,1,2,3]
```

---

# Internal structure

Deque internally:

```
doubly linked blocks
```

Not contiguous memory.

---

# Why front operations fast

List:

```
[A][B][C]
```

pop(0):

```
shift B,C
```

Deque:

```
[A B C] <-> [D E F]
```

popleft:

```
remove A
```

No shifting.

---

# maxlen feature

Example:

```python
deque(maxlen=3)
```

Old elements automatically removed.

Perfect for:

```
sliding windows
```

---

# Real backend uses

### task queues

Worker consumes tasks.

---

### rate limiting

Store timestamps.

---

### sliding window analytics

Track last N events.

---

# Rotation

```
d.rotate(1)
```

Right rotation.

```
[1,2,3] → [3,1,2]
```

---

# Traps

### random indexing slow

```
O(n)
```

---

### slicing unsupported

Need:

```
itertools.islice
```

---

# deque vs list

| Operation | list | deque |
| --- | --- | --- |
| append | fast | fast |
| appendleft | slow | fast |
| pop | fast | fast |
| popleft | slow | fast |
| random access | fast | slow |

---

# 4. OrderedDict

Purpose:

```
dictionary with controllable order
```

---

# Important modern fact

Python 3.7+:

```
normal dict already ordered
```

But OrderedDict still useful for:

```
order manipulation
```

---

# Important methods

### move_to_end()

```
d.move_to_end(key)
```

Move item to end.

---

### move_to_beginning

```
d.move_to_end(key,last=False)
```

---

### popitem()

Remove item.

```
popitem(last=False)
```

Removes first item.

---

# Backend use case

### LRU cache

Pattern:

```
access key
move_to_end
remove oldest
```

---

# Internal structure

OrderedDict uses:

```
hash table
+
doubly linked list
```

---

# Why slower than dict

Extra pointer operations.

Even though:

```
O(1)
```

Constant factor higher.

---

# Representation confusion

Print output:

```python
OrderedDict([('a',1),('b',2)])
```

But internally:

```
tuples store nahi hote
```

---

# Summary

| Structure | Use |
| --- | --- |
| defaultdict | grouping |
| Counter | frequency counting |
| deque | fast queues |
| OrderedDict | order manipulation |

---

# Golden rule (engineering mindset)

```
Right tool for the right problem
```

Example:

| Problem | Tool |
| --- | --- |
| group events | defaultdict |
| count frequency | Counter |
| queue operations | deque |
| LRU cache | OrderedDict |