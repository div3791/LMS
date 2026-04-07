# Conditional Statements (if / elif / else)

Status: Completed

# Python Conditional Statements (if / elif / else)

# 1️⃣ Core Mental Model

A conditional statement is a **control gate**.

It decides **which block of code should execute based on a boolean condition**.

Think:

```
Condition → True → execute block A
Condition → False → execute block B
```

Basic form:

```
ifcondition:
block1
elifcondition2:
block2
else:
block3
```

Important rule:

👉 **Only ONE branch executes.**

---

# 2️⃣ How Python Evaluates a Condition

Every condition must become **True or False**.

Python internally does:

```
evaluate expression → convert to boolean → decide branch
```

Example

```python
if x > 10:
```

Steps

```
1 evaluate x > 10
2 result → True or False
3 if True → run block
```

---

# 3️⃣ Truthiness (Very Important)

Python does **implicit boolean conversion**.

Objects are either:

```
truthy
falsy
```

Falsy values:

```
False
None
0
0.0
''
[]
{}
set()
```

Example

```python
if []:
print("True")
```

Does NOT run.

Because empty list = False.

Example

```python
if [1]:
```

Runs.

---

# Mental Model

Python internally does:

```python
bool(object)
```

Example

```python
bool([])
False

bool([1])
True
```

---

# 4️⃣ Memory Model of Conditional

Example

```python
x = 10

if x > 5:
print("big")
```

Memory

```
x → 10
```

Execution

```
evaluate expression → x > 5
result → True
jump into block
```

Conditional statements **do not create new memory structures**.

They only **control instruction flow**.

---

# 5️⃣ Flow of Execution

Example

```python
if a:
	block1
elif b:
	block2
elif c:
	block3
else:
	block4
```

Execution order

```
check a
if true → stop

else check b
if true → stop

else check c
if true → stop

else run block4
```

Python **does not evaluate further conditions once one is True**.

---

# 6️⃣ Short Circuit Evaluation

Example

```python
if a and b:
```

Evaluation

```
if a is False → stop immediately
```

Python does NOT evaluate `b`.

Similarly

```python
a or b
```

If `a` True → stop.

---

# Why this matters

Example

```python
if user and user.is_admin:
```

If user is None:

```python
user.is_admin
```

never runs.

Prevents crash.

---

# 7️⃣ Comparison Chaining (Python Feature)

Example

```python
if 5 < x < 10:
```

Equivalent to

```
5 < x AND x < 10
```

But more efficient.

Python evaluates `x` only once.

---

# 8️⃣ Conditional Expressions (Ternary)

Syntax

```python
value_if_true if condition else value_if_false
```

Example

```python
result="adult" if age > = 18 else "minor"
```

Equivalent to

```python
if age >= 18:
    result = "adult"
else:
    result = "minor"
```

---

# 9️⃣ Nested Conditionals

Example

```python
if user:
	if user.is_admin:
		allow_access()
```

Often replaced with:

```python
if user and user.is_admin
```

Cleaner and safer.

---

# 🔟 Logical Operators

### AND

```
True only if both true
```

Example

```python
if age > 18 and verified
```

---

### OR

```
True if any true
```

Example

```python
if is_admin or is_superuser
```

---

### NOT

```
reverse boolean
```

Example

```python
if not logged_in
```

---

# 11️⃣ Identity vs Equality (Huge Trap)

Equality

```
==
```

Identity

```
is
```

Example

```
x==y
```

checks value.

Example

```
xisy
```

checks same object in memory.

---

Correct usage

```
if x is None
```

Not

```
if x == None
```

---

# 12️⃣ Pattern Matching (Python 3.10+)

Modern conditional system.

```
match value:
    case pattern1:
    case pattern2:
```

Example

```python
match status:
	case 200:
	print("OK")
case 404:
	print("Not found")
```

Cleaner than multiple if-elif.

---

# Common Conditional Pitfalls

# 1️⃣ Using assignment instead of comparison

Wrong

```python
if x = 5
```

Correct

```python
if x == 5
```

---

# 2️⃣ Comparing to True

Bad

```python
if flag == True
```

Better

```python
if flag
```

---

# 3️⃣ Negation confusion

Bad

```python
if not x == 5
```

Better

```python
if x != 5
```

---

# 4️⃣ Over nested conditions

Bad

```python
if a:
    if b:
        if c:
```

Better

```python
if a and b and c
```

---

# 5️⃣ Checking emptiness wrong

Bad

```python
if len(list) > 0
```

Better

```python
if list
```

---

# 6️⃣ Floating point equality

Bad

```python
if x == 0.1
```

Floating precision issues.

Better

```python
math.isclose()
```

---

# 7️⃣ Using `or` incorrectly

Wrong

```python
if x == 1 or 2
```

Always True.

Correct

```python
if x == 1 or x == 2
```

or

```python
if x in (1,2)
```

---

# 8️⃣ Mutable default traps in conditions

Example

```python
if list_var:
```

May change unexpectedly if list modified elsewhere.

---

# Real World Conditional Use Cases

### Authentication

```python
if user.is_authenticated
```

---

### API responses

```python
if response.status_code == 200
```

---

### Feature flags

```python
if feature_enabled
```

---

### Data validation

```python
if age < 18
```

---

### Retry logic

```python
if retries > max_retries
```

---

### Access control

```python
if role == "admin"
```

---

### Error handling

```python
if error
```

---

# Conditional Optimization Techniques

### Use dictionary dispatch instead of long if chains

Bad

```python
if type == "A"
elif type == "B"
elif type == "C"
```

Better

```python
handlers = {
	"A": funcA,
	"B": funcB
}

handlers[type]()
```

---

### Use membership check

Bad

```python
if x == 1 or x == 2 or x == 3
```

Better

```python
if x in {1,2,3}
```

---

# Production Advice

Keep conditions:

```python
simple
readable
predictable
```

Avoid:

```
deep nesting
complex boolean logic
side effects
```

---

# Advanced Trick (Common in Python)

Using `or` for default values

Example

```python
name = user_input or "Guest"
```

If user_input empty → Guest.

---

# Golden Rules

1️⃣ Prefer **simple conditions**

2️⃣ Avoid **deep nesting**

3️⃣ Use **truthiness checks**

4️⃣ Use **membership instead of multiple OR**

5️⃣ Use **`is None` for None checks**

---

# Summary Mental Model

```
Condition → evaluated → bool() conversion
True → execute block
False → skip
```

Conditional statements **do not create objects**.

They simply **control the execution path of the program**.