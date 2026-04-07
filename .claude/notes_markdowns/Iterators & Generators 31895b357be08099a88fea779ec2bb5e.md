# Iterators & Generators

Status: Completed

---

# 🔥 ITERATORS & GENERATORS – ENGINEER MENTAL MODEL NOTES

---

**Examples:**

- list
- tuple
- string
- set
- dict
- range
- generator

**Technical requirement:**

```python
obj.__iter__()
```

**Mental Model:**

Basket of fruits — it contains data.

# 1️⃣ What is Iterable?

👉 Iterable = data source

Examples:

- list
- tuple
- string
- set
- dict
- range
- generator

Technical:

Has `__iter__()` method.

Mental model:

📦 Basket of fruits.

It can give you something that iterates.

---

# 2️⃣ What is Iterator?

👉 Iterator = object that gives next item.

Technical:

- Has `__next__()`
- Raises `StopIteration`

Mental model:

🖐 Hand picking fruit one by one.

Important:

Iterator stores **state** (current position).

---

# 3️⃣ Key Rule

Iterable → gives iterator

Iterator → gives values

List = iterable

Generator = iterable + iterator (both)

---

# 4️⃣ What Happens Inside For Loop?

When you write:

```python
for x in data:
```

Python internally does:

```python
it=iter(data)

while True:
	try:
		x=next(it)
	except: 
		StopIteration:
	break
```

For loop is just a polite next() caller.

Interview gold point.

---

# 5️⃣ range() Mental Model

```
range(1_000_000)
```

Does NOT store 1M numbers.

It stores:

- start
- stop
- step

Values calculated on demand.

Lazy evaluation.

Memory efficient.

---

# 6️⃣ Generator Function

```python
def demo():
	yiel d1
```

Important:

Calling `demo()` does NOT execute body.

It returns generator object.

Execution starts only when `next()` is called.

Mental model:

🎬 Netflix episode:

- demo() → open Netflix
- next() → press play

---

# 7️⃣ yield vs return

yield → pause

return → end permanently

Generator remembers:

- local variables
- execution line
- state

It freezes function frame.

---

# 8️⃣ Generator Expression

List comprehension:

```python
[x * x for x in range(5)]
```

Creates full list immediately.

Generator expression:

```python
(x*x for x in range(5))
```

Creates generator object.

Values produced on demand.

---

# 9️⃣ Memory Comparison

Bad (large data):

```python
sum([x*x for x in range(1_000_000)])
```

Good:

```python
sum(x*x for x in range(1_000_000))
```

Why?

First creates 1M list in memory.

Second streams values one by one.

Backend mindset:

Avoid unnecessary materialization.

---

# 🔟 When NOT to Use Generator

- When you need indexing
- When you need len()
- When you need multiple passes
- When dataset is small (clarity > micro-optimization)

---

# 1️⃣1️⃣ When NOT to Use Comprehension

- Logic too complex
- Multiple nested conditions
- Readability drops
- Debugging becomes hard

Clean loop > clever one-liner.

---

# 🏭 Production Lessons

1. Never reuse exhausted generator.
2. Don’t convert DB cursor to list unless necessary.
3. Always think: materialized or streaming?
4. Memory problems kill backend systems silently.

---

# 🧠 Deep Concept Summary

Iterator = state machine

Generator = state machine + suspended execution frame

Comprehension = syntactic sugar for building collections

Generator expression = lazy comprehension

---

# 🎯 Interview One-Liner

“Python’s for loop works using the iterator protocol, where iter() creates an iterator and next() fetches values until StopIteration is raised.”