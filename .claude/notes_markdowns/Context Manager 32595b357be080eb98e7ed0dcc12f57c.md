# Context Manager

Status: Completed

# Python Context Manager

---

# 1. Real Life Story (PG Kitchen Rule)

Socho tum **PG me rehte ho**.

PG owner bolta hai:

| Kaam | Rule |
| --- | --- |
| Gas use karo | band karke jao |
| Bathroom use karo | pani band karo |
| Room chhodo | light off |

Problem kya hoti hai?

Log bolte hain:

```
haan haan band kar dunga
```

Aur phir bhool jaate hain.

Result:

```
gas chal rahi
pani beh raha
bijli jal rahi
```

Programming me bhi **same problem** hoti hai.

---

# Programming Version

Program resources use karta hai:

| Resource | Example |
| --- | --- |
| File | log file |
| Database connection | PostgreSQL |
| Network socket | API |
| Lock | multithreading |
| Temporary file | data processing |

Agar cleanup nahi hua:

```
resource leak
```

Example:

```
Too many open files
DB connection exhausted
memory leak
```

Isi problem ka solution hai:

# Context Manager

Simple rule:

```
RESOURCE LO
USE KARO
AUTO CLEANUP
```

---

# 2. `with` Keyword Kya Karta Hai

Example:

```python
with open("data.txt") as f:
			data = f.read()
```

Python internally isko convert karta hai:

```python
manager = open("data.txt")

f = manager.__enter__()

try:
    data = f.read()

finally:
    manager.__exit__()
```

---

# Important Rule

```python
as variable = __enter__ ka return value
```

Example:

```python
with open("file.txt") as f:
```

Actually:

```python
f = open("file.txt").__enter__()
```

---

# 3. `__enter__` Aur `__exit__`

Context manager banane ke liye class me do methods hone chahiye:

| Method | Kaam |
| --- | --- |
| `__enter__()` | resource acquire |
| `__exit__()` | cleanup |

Example:

```python
class Demo:

		def __enter__(self):
				print("enter")
				return 10

		def __exit__(self,exc_type,exc,tb):
				print("exit")
```

Use:

```python
with Demo() as x:
			print(x)
```

Output:

```
enter
10
exit
```

---

# Mental Model (Sabse Important)

Context Manager =

```
SETUP
RUN CODE
CLEANUP
```

Ya simple language me:

```
andar jao
kaam karo
bahar aate time safai karo
```

---

# 4. Exception Aaye To Kya Hota Hai

Example:

```python
class Test:

		def __enter__(self):
				print("start")
		
		def __exit__(self,exc_type,exc,tb):
				print("cleanup")
```

Code:

```python
with Test():
		1/0
```

Output:

```
start
cleanup
Traceback...
```

Important:

```
__exit__ always run hota hai
```

---

# 5. Exception Ko Suppress Karna

Rule:

| Return Value | Behavior |
| --- | --- |
| True | exception swallow |
| False / None | exception propagate |

Example:

```python
def __exit__(self,exc_type,exc,tb):
			return True
```

Danger:

Exception silently disappear ho jayega.

Production bug hide ho sakta hai.

---

# Real Production Trap

Ek dev ne likha:

```python
def __exit__(...):
		return True
```

Result:

```
errors silently disappear
```

Debugging nightmare.

Lesson:

```
return True bahut carefully use karo
```

---

# 6. Multiple Context Managers

Example:

```python
with open("a.txt") as f1, open("b.txt") as f2:
```

Python internally:

```python
with open("a.txt") as f1:
    with open("b.txt") as f2:
```

Execution order:

| Step | Action |
| --- | --- |
| 1 | f1 enter |
| 2 | f2 enter |
| 3 | block run |
| 4 | f2 exit |
| 5 | f1 exit |

Ye follow karta hai:

```
STACK (LIFO)
```

Analogy:

Plate stack:

```
plate1
plate2
```

Nikalte waqt:

```
plate2
plate1
```

---

# 7. Generator Based Context Manager

Python ka genius feature:

```python
contextlib
```

Example:

```python
from contextlib import contextmanager

@contextmanager
def demo():

		print("enter")
		
		yield 10
		
		print("exit")
```

Use:

```python
with demo() as x:
		print(x)
```

Output:

```
enter
10
exit
```

---

# Magic of `yield`

`yield` ke upar:

```
__enter__
```

`yield` ke baad:

```
__exit__
```

Mental model:

```
SETUP
yield
CLEANUP
```

---

# 8. Sabse Important Trap

Ye code dangerous hai:

```python
@contextmanager
def demo():

		open_resource()
		
		yield
		
		close_resource()
```

Agar exception aaya:

```
close_resource run nahi karega
```

Correct version:

```python
@contextmanager
def demo():

		open_resource()
		
		try:
				yield
		
		finally:
				close_resource()
```

Rule:

```
Generator context manager = always try/finally
```

---

# 9. Real Backend Example (Database)

Example:

```python
class DBSession:
		
		def __enter__(self):
				self.conn = connect_db()
				return self.conn
		
		def __exit__(self,exc_type,exc,tb):
		
				if exc:
					self.conn.rollback()
				else:
					self.conn.commit()
		
				self.conn.close()
```

Use:

```python
with DBSession() as db:
		db.insert()
```

---

# Execution

| Case | Action |
| --- | --- |
| No error | commit |
| Error | rollback |

---

# 10. ExitStack (Advanced)

Jab context managers **dynamic count** me ho.

Example:

```python
files= ["a.txt","b.txt","c.txt"]
```

Solution:

```python
from contextlib import ExitStack

		with ExitStack() as stack:
		
		files= [
				stack.enter_context(open(f))
				for f in filenames
		]
```

Ye automatically close karega:

```
reverse order
```

---

# Real Backend Use Case

Example:

```
multiple locks
multiple files
multiple transactions
```

---

# 11. Common Beginner Mistakes

| Mistake | Result |
| --- | --- |
| file open but close nahi | file descriptor leak |
| generator context manager me try/finally nahi | resource leak |
| **exit** me return True | silent failures |
| manual cleanup | human error |

---

# 12. Golden Rules

Always yaad rakho:

```python
with = safe resource management
```

Generator context manager:

```python
try
yield
finally
```

Cleanup rule:

```
cleanup always guaranteed hona chahiye
```

---

# Final Mental Model

Context manager basically ye hai:

```
Gate kholo
andar jao
kaam karo
bahar aate time gate band karo
```

Python version:

```python
__enter__()
block
__exit__()
```

---

# Tumhare Doubts Recap

| Doubt | Answer |
| --- | --- |
| `as f` kaha se aata hai | `__enter__` return value |
| kya har class me hota hai | nahi |
| exit override kar sakte | wrapper context manager bana ke |
| generator cleanup | try/finally |