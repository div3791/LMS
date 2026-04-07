# Scope & Closure

Status: Completed

# 🔥 Closures, Scope & nonlocal — Final Revision Notes

(Read once before interview → whole topic refreshed)

---

# 1️⃣ LEGB Rule (Scope Resolution Backbone)

When Python looks for a variable:

```
L → Local
E → Enclosing
G → Global
B → Builtins
```

Python searches in this exact order.

It stops at first match.

---

# 2️⃣ What Is a Closure? (Precise Definition)

A closure is:

> A function object that remembers variables from its enclosing function scope, even after the outer function has finished execution.
> 

Important:

- Closure captures **variable (cell)**, not value.
- It survives outer frame destruction.

---

# 3️⃣ Free Variable vs Cell Variable

Given:

```
defouter():
x=10
definner():
print(x)
```

- In `inner`, `x` is a **free variable**
- In `outer`, `x` becomes a **cell variable**

Rule:

If inner function uses a variable from outer scope → Python promotes that variable into a cell.

---

# 4️⃣ Closure Stores Reference, Not Snapshot

Example:

```python
def outer():
	x=5

def inner():
	print(x)
	x=20
	return inner
	
f = outer()
f()
```

Output:

```
20
```

Because closure stores reference to variable cell, not initial value.

---

# 5️⃣ Late Binding Problem (Very Important)

```python
funcs= []

for i in range(3):
	deff():
		print(i)
		funcs.append(f)

for fn in funcs:
	fn()
```

Output:

```
2
2
2
```

Why?

- All functions share same `i`
- Closure captures variable, not value
- Loop ends → i = 2

---

## Fix (Default Argument Trick)

```python
for i in range(3):
		def f(i=i):
			print(i)
```

Default evaluated at definition time → snapshot captured.

---

# 6️⃣ `nonlocal` Keyword

Used when:

- Variable exists in enclosing function
- Inner function wants to MODIFY it

Example:

```python
def outer():
	x=0
	
def inner():
	nonlocal x
	x+=1
```

Without `nonlocal` → UnboundLocalError

---

# 7️⃣ `nonlocal` Search Rule

Search order for nonlocal:

```
Current function → enclosing functions outward
(STOPS before global)
```

If not found → SyntaxError

It does NOT fall back to global.

---

# 8️⃣ `global` Keyword

`global x` binds variable to module-level namespace.

It bypasses enclosing scope.

Use carefully.

Avoid in backend logic (side effects).

---

# 9️⃣ Scope Decision Happens at Compile Time

If variable is assigned anywhere inside function:

```python
def f():
	print(x)
	x=10
```

Python marks `x` as local at compile time.

Then reading before assignment → UnboundLocalError.

This is NOT runtime confusion.

It’s compile-time scope classification.

---

# 🔟 Multiple Nested Scope Example

```python
def outer():
	x=10

def middle():
	x=20

def inner():
	nonlocal x
	x+=1
```

`nonlocal x` binds to nearest enclosing function that defines x.

Search chain:

```
inner → middle → outer → stop
```

Nearest match wins.

---

# 1️⃣1️⃣ Closure State Retention Example

```python
def counter():
	x=0
	def inc():
		nonlocal x
		x+=1
		return x
	return inc
```

Each call retains its own state.

Closures can act like lightweight objects.

---

# 1️⃣2️⃣ Mental Debug Checklist

When debugging closure behavior, ask:

1. Is variable local or free?
2. Is it assigned inside inner?
3. Is nonlocal needed?
4. Is it global?
5. Is closure capturing variable or value?

If you answer these → bug solved.

---

# 1️⃣3️⃣ Interview Rapid-Fire Answers

Q: Why does loop closure print last value?

A: Late binding — closure stores reference to loop variable cell.

Q: Difference between global and nonlocal?

A: global → module scope, nonlocal → enclosing function scope.

Q: When does nonlocal raise error?

A: When no enclosing function scope contains that variable.

Q: Does closure capture value?

A: No, captures variable (cell reference).

Q: When is nonlocal required?

A: When modifying enclosing function variable.

---

# 1️⃣4️⃣ Real Backend Applications

Closures are used in:

- Decorators
- Dependency injection
- Route factories
- Caching wrappers
- Stateful validation
- Rate limiting

Misunderstanding closures → subtle production bugs.

---

# 🧠 Final Mental Model Summary (Compress Into Brain)

- Variables live in scopes
- Closures capture cell references
- nonlocal modifies enclosing function scope
- global modifies module scope
- Scope resolution follows LEGB
- Compile-time decides local vs nonlocal
- Late binding occurs because variable, not value, is captured