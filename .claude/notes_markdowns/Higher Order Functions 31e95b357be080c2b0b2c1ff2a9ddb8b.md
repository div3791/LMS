# Higher Order Functions

Status: Completed

# Python Higher Order Functions – Complete Practical Notes

Mentor Notes for Divyesh

Focus: **Real understanding, not memorization**

---

# 1. What Are Higher Order Functions?

A **Higher Order Function (HOF)** is a function that:

1. **Accepts another function as argument**
2. **Returns a function**
3. **Or both**

Example:

```python
map(func, iterable)
filter(func, iterable)
reduce(func, iterable)
```

Here `func` is passed as an argument → therefore **higher order function**.

---

# Real Life Analogy

Imagine a **factory machine**.

The machine doesn't know what to do with objects.

You attach **tools** to the machine.

Example:

```
Items → Machine → Tool → Output
```

In Python:

```
data → map/filter → function → result
```

The **function is the tool**.

---

# Why Higher Order Functions Exist

Main benefits:

### 1. Reusable logic

Instead of writing loops again and again.

### 2. Lazy pipelines

Data can flow **step by step**, not loaded entirely in memory.

### 3. Cleaner code

Express *intent* instead of *procedure*.

---

# Core Higher Order Functions in Python

Important ones you learned:

```python
map()
filter()
reduce()
zip()
any()
all()
enumerate()
min()/max() with key
```

---

# 2. map()

## Purpose

**Transform each element of iterable**

```
input → transformation → output
```

---

## Example

```python
nums = [1,2,3]

map(lambda x: x*2, nums)
```

Result:

```
2,4,6
```

But important:

```
map returns a MAP OBJECT
```

Not a list.

---

## Return Type

```python
<class 'map'>
```

Lazy iterator.

---

## When values are produced?

Only when consumed.

Examples:

```python
list(map(...))
for x in map(...)
next(map_obj)
```

---

## Internal Concept

Conceptually behaves like:

```python
for item in iterable:
    yield func(item)
```

---

## Real World Example

Transform prices to tax-included prices.

```python
prices = [100,200,300]

map(lambda p: p*1.18, prices)
```

Output:

```
118,236,354
```

---

## Production Example

Parsing JSON responses.

```python
map(parse_json, api_responses)
```

---

## Multiple Iterables

Map can take multiple iterables.

Example:

```python
a = [1,2,3]
b = [10,20,30]

map(lambda x,y: x+y, a, b)
```

Result:

```
11,22,33
```

Internally similar to:

```python
for x,y in zip(a,b):
```

---

## Important Rule

Map stops when **shortest iterable ends**.

---

## Beginner Mistake

People do:

```python
list(map(...))
```

inside pipelines unnecessarily.

That destroys laziness.

---

## When Engineers Prefer map()

When applying **existing function**:

```python
map(str.upper, words)
```

Cleaner than:

```python
[x.upper() for x in words]
```

---

# 3. filter()

## Purpose

Select elements based on condition.

```
data → condition → filtered data
```

---

## Example

```python
nums = [1,2,3,4,5]

filter(lambda x: x%2==0, nums)
```

Output:

```
2,4
```

---

## Return Type

```python
<class 'filter'>
```

Lazy iterator.

---

## Internal Concept

Conceptually:

```python
for item in iterable:
    if condition(item):
        yield item
```

---

## Real World Example

Filter active users.

```python
filter(lambda u: u.active, users)
```

---

## Backend Example

Filter error logs.

```python
filter(lambda log: log.level=="ERROR", logs)
```

---

## Pipeline Example

```
logs
 ↓
filter(ERROR)
 ↓
map(parse)
 ↓
reduce(count)
```

Processing **millions of logs with constant memory**.

---

## Beginner Mistakes

### Mistake 1

```python
if filter(...):
```

Always True.

Because filter returns object.

Correct:

```python
any(...)
```

---

### Mistake 2

Consuming iterator twice.

```python
f = filter(...)

list(f)
list(f)   # empty
```

---

# 4. reduce()

Located in:

```python
functools.reduce
```

---

## Purpose

Collapse iterable into **single value**.

```
many values → one result
```

---

## Example

```
[1,2,3,4]
```

Execution:

```
1+2 → 3
3+3 → 6
6+4 → 10
```

Result:

```
10
```

---

## Syntax

```python
reduce(function, iterable)
```

Optional initial value:

```python
reduce(func, iterable, initial)
```

---

## Internal Concept

```python
accumulator = first_element

for element in rest:
    accumulator = func(accumulator, element)
```

---

## Example

Product of numbers.

```python
reduce(lambda a,b: a*b, [2,3,4])
```

Output:

```
24
```

---

## Real World Example

Compute total revenue.

```python
reduce(lambda a,b: a+b, order_totals)
```

---

## Important Reality

In production, engineers prefer:

```python
sum()
max()
min()
any()
all()
```

Instead of reduce.

Because **readability matters**.

---

## Pitfall

```python
reduce(func, [])
```

Raises:

```python
TypeError
```

Safer:

```python
reduce(func, nums, 0)
```

---

# 5. zip()

## Purpose

Combine multiple iterables element-wise.

---

## Example

```python
a = [1,2,3]
b = [10,20,30]

zip(a,b)
```

Output:

```python
(1,10)
(2,20)
(3,30)
```

---

## Return Type

```python
<class 'zip'>
```

Lazy iterator.

---

## Important Behavior

Stops at **shortest iterable**.

---

## Real Backend Example

Combining IDs with records.

```python
zip(user_ids, users)
```

---

## Advanced Feature

Python 3.10+

```python
zip(a,b, strict=True)
```

Throws error if lengths mismatch.

Useful for **data integrity**.

---

# 6. any()

## Purpose

Check if **at least one element is True**.

---

Example:

```python
any([0,0,5,0])
```

Result:

```
True
```

---

## Short Circuit

Stops early.

```
0 → False
0 → False
5 → True
STOP
```

---

## Backend Example

Check if any admin exists.

```python
any(user.role=="admin" for user in users)
```

---

# 7. all()

## Purpose

Check if **all elements are True**.

---

Example:

```python
all([1,2,3])
```

True.

```python
all([1,2,0])
```

False.

---

## Short Circuit

Stops at first False.

---

## Backend Example

Verify all users.

```python
all(user.verified for user in users)
```

---

# 8. enumerate()

## Purpose

Attach **index to elements**.

---

Example:

```python
items = ["a","b","c"]

enumerate(items)
```

Output:

```python
(0,'a')
(1,'b')
(2,'c')
```

---

## Syntax

```python
enumerate(iterable, start=0)
```

Example:

```python
enumerate(items, start=1)
```

---

## Why It Exists

Instead of writing:

```python
for i in range(len(items)):
```

Cleaner:

```python
for i,item in enumerate(items):
```

---

## Real Backend Example

Logging record numbers.

```python
for i,row in enumerate(rows):
```

---

# 9. min() / max() with key

## Purpose

Find element based on computed value.

---

Example

```python
max(users, key=lambda u: u.age)
```

---

Execution:

```
users
 ↓
apply key
 ↓
[25,30,20]
 ↓
max = 30
```

Returns:

```
user with age 30
```

---

## Important Rule

`max()` returns **original item**, not key value.

---

## Example

```python
max([-10,5,-3], key=abs)
```

Keys:

```
10,5,3
```

Result:

```
-10
```

---

## Duplicate Keys Behavior

Python keeps **first maximum**.

---

Example:

```
[95,95]
```

Returns first element.

---

# Lazy Pipeline Model (Important)

All these work beautifully together.

Example:

```
nums
 ↓
filter(even)
 ↓
map(double)
 ↓
sum
```

No intermediate lists.

Data flows **element-by-element**.

---

# Pipeline Example

```python
sum(x*2 for x in nums if x%2==0)
```

Equivalent pipeline:

```
filter → map → reduce
```

---

# Memory Advantage

Instead of:

```
[large list]
```

Pipeline processes:

```
one element at a time
```

Memory usage:

```
O(1)
```

---

# Common Beginner Pitfalls

### 1. Destroying laziness

```python
list(map(...))
```

inside pipeline.

---

### 2. Consuming iterators twice

Iterators are **one-time use**.

---

### 3. Using reduce for everything

Prefer built-ins:

```python
sum
max
min
any
all
```

---

### 4. Mutating iterable during iteration

Lazy iterators reference original object.

Mutations can produce unexpected results.

---

# Final Mental Model

```
map → transform
filter → remove
zip → combine
reduce → accumulate
any → atleast one true
all → everything true
enumerate → index + value
min/max(key) → custom comparison
```

---

# Why This Matters For Backend Engineers

These patterns power:

```python
data pipelines
log processing
API transformations
stream processing
analytics aggregation
ETL systems
```

Understanding **lazy iteration** is the foundation of:

```
stream processing systems
async frameworks
data engineering pipelines
```

---

# One Final Rule

Good Python engineers don't memorize functions.

They remember **patterns**.

```python
transform
filter
combine
aggregate
```

Everything else is just syntax.