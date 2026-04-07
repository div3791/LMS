# Exception handling

Status: Completed

# Exception Handling (Deep Notes)

# 1️⃣ Core Mental Model

An **exception** is a **runtime signal that something went wrong**.

Instead of crashing immediately, Python allows you to **intercept the error and decide what to do**.

Think of it like:

```
Normal execution → problem occurs → exception raised → search for handler
```

Basic syntax

```python
try:
		risky_operation()
except SomeError:
		handle_error()
```

Meaning:

```
Try this code
If error occurs → catch it
```

---

# 2️⃣ Why Exceptions Exist

Without exception handling:

```
error → program crash
```

With exception handling:

```
error → recover / retry / log / continue
```

Example

```python
x = int(input())
```

If user types:

```
abc
```

Python raises:

```python
ValueError
```

Handling:

```python
try:
		x = int(input())
except ValueError:
		print("Invalid input")
```

---

# 3️⃣ Exception Hierarchy

All exceptions derive from:

```
BaseException
```

Important hierarchy:

```python
BaseException
 ├── SystemExit
 ├── KeyboardInterrupt
 ├── GeneratorExit
 └── Exception
      ├── ValueError
      ├── TypeError
      ├── KeyError
      ├── IndexError
      ├── FileNotFoundError
      ├── ZeroDivisionError
      └── RuntimeError
```

Important rule:

⚠️ Most code should catch **Exception**, not BaseException.

---

# 4️⃣ How Exceptions Work Internally

Example

```python
a = 10/0
```

Process:

```
1 runtime detects illegal operation
2 create exception object
3 raise exception
4 search for handler
```

---

# 5️⃣ Exception Propagation (Stack Unwinding)

Example

```python
def a():
		b()

def b():
		c()

def c():
			1/0
```

Call stack:

```
main
 └ a()
    └ b()
       └ c()
```

When error occurs:

```
c() raises exception
→ b() checked for handler
→ a() checked
→ main checked
→ if none found → crash
```

This process is called

```
Stack Unwinding
```

---

# 6️⃣ Memory Model of Exceptions

When exception occurs Python creates an **exception object**.

Example

```python
ValueError("Invalid number")
```

Memory:

```
Exception object
 ├── type
 ├── message
 ├── traceback
```

Traceback stores:

```
file
line number
call stack
```

Example traceback:

```
File "app.py", line 10
```

---

# 7️⃣ try / except / else / finally

Full syntax:

```python
try:
		code
except SomeError:
		handler
else:
		runs_if_no_exception
finally:
		always_runs
```

---

## try

Contains **risky code**.

---

## except

Handles exception.

---

## else

Runs only if **no exception occurred**.

Example

```python
try:
		x = int("10")
except ValueError:
		print("bad")
else:
		print("success")
```

---

## finally

Runs **no matter what**.

Example

```python
try:
		file = open("data.txt")
finally:
		file.close()
```

Used for:

```
cleanup
release resources
close connections
```

---

# 8️⃣ Catching Multiple Exceptions

Example

```python
try:
		do_something()
except (ValueError,TypeError):
		print("Invalid data")
```

---

# 9️⃣ Catching Exception Object

```python
try:
		x = int("abc")
except ValueErrorase:
		print(e)
```

`e` contains:

```
error message
traceback
type
```

---

# 🔟 Raising Exceptions

You can manually raise exceptions.

Example

```python
raise ValueError("Invalid age")
```

Used for:

```
validation
business rules
API checks
```

---

# 11️⃣ Re-Raising Exception

Example

```python
try:
		risky()
except Exception:
		log_error()
		raise
```

`raise` without argument → rethrows original exception.

---

# 12️⃣ Custom Exceptions

Example

```python
class InvalidUserError(Exception):
		pass
```

Usage

```python
raise InvalidUserError("User blocked")
```

Used in:

```
large systems
libraries
frameworks
```

---

# 13️⃣ Exception Chaining

Example

```python
try:
		int("abc")
except ValueErrorase:
		raise RuntimeError("Conversion failed")frome
```

Output shows both exceptions.

Very useful for debugging.

---

# 14️⃣ Context Managers (Important)

Instead of manual try/finally:

Bad

```python
try:
		f = open("file.txt")
finally:
		f.close()
```

Better

```python
with open("file.txt") as f:
		data = f.read()
```

Context managers automatically handle exceptions.

Used everywhere in Python.

---

# 15️⃣ Exception Handling with Loops

Example

```python
while True:
		try:
				x = int(input())
				break
		except ValueError:
				print("Try again")
```

---

# 16️⃣ Real Production Use Cases

### API Calls

```python
try:
	response = requests.get(url)
except requests.ConnectionError:
	retry()
```

---

### File Processing

```python
try:
		with open("file.txt") as f:
				process(f)
except FileNotFoundError:
		create_file()
```

---

### Database operations

```
try:
db.commit()
exceptDatabaseError:
db.rollback()
```

---

### Retry systems

```
foriinrange(3):
try:
call_api()
break
exceptTimeoutError:
continue
```

---

# 17️⃣ Exception Cost (Performance)

Exception handling is **expensive**.

Bad practice:

```
use exceptions for normal control flow
```

Example BAD

```python
try:
		value = dict[key]
except KeyError:
		value = None
```

Better

```python
value = dict.get(key)
```

---

# 18️⃣ Dangerous Pitfalls

# Catching everything

Bad

```python
except:
```

This catches:

```python
KeyboardInterrupt
SystemExit
```

Always use:

```python
except Exception
```

---

# Silent failure

Bad

```python
try:
		something()
except:
		pass
```

Extremely dangerous.

Hides bugs.

---

# Over broad exceptions

Bad

```python
except Exception:
```

when you only expect:

```
ValueError
```

---

# Huge try blocks

Bad

```
try:
    50 lines of code
```

Better:

```
try only risky operation
```

---

# Misplaced try

Bad

```python
try:
		parse_data()
		save_data()
```

If parse fails you might want different logic.

---

# Swallowing exception

Bad

```python
except Exception:
		print("Error")
```

You lose stack trace.

---

# Finally overriding return

Example

```python
def test():
		try:
			return 1
		finally:
			return 2
```

Output

```
2
```

Dangerous trap.

---

# 19️⃣ Exception vs Error

Python distinguishes:

```
Exceptions → recoverable
Errors → serious system problems
```

Examples:

```
MemoryError
RecursionError
```

Usually not caught.

---

# 20️⃣ Logging Exceptions

Production systems always log exceptions.

Example

```python
import logging

try:
		risky()
except Exception:
		logging.exception("Failure occurred")
```

This logs full traceback.

---

# 21️⃣ Advanced Pattern: Exception Suppression

Example

```python
from contextlib import suppress

with suppress(FileNotFoundError):
		os.remove("temp.txt")
```

Cleaner than try/except.

---

# 22️⃣ Advanced Pattern: Retry Decorator

Used in distributed systems.

Example

```python
for attempt in range(3):
		try:
				return api_call()
		except TimeoutError:
				time.sleep(1)
```

---

# 23️⃣ Async Exception Handling

Example

```python
try:
		await fetch()
except TimeoutError:
		retry()
```

Important in async frameworks.

---

# Golden Rules

1️⃣ Catch **specific exceptions**

2️⃣ Keep try blocks **small**

3️⃣ Always **log exceptions**

4️⃣ Never silently ignore errors

5️⃣ Use **context managers**

6️⃣ Use **exceptions for exceptional situations**

---

# Final Mental Model

Exception system acts like:

```
error occurs
↓
create exception object
↓
propagate through call stack
↓
find matching handler
↓
handle or crash
```

---

# Most Important Production Exceptions

You will see these very often:

```
ValueError
TypeError
KeyError
IndexError
FileNotFoundError
TimeoutError
ConnectionError
PermissionError
```