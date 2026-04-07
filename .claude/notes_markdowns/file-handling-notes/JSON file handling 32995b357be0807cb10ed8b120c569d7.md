# JSON file handling

Status: Not Started

# 🧠 JSON MASTER NOTES (DESI BACKEND MENTOR STYLE)

---

# 🎯 BIG PICTURE (DIMAG ME CHIPKA LO)

👉 JSON kya hai?

👉 **JSON = data bhejne ka dabba (transport format)**

👉 Python dict = ghar ke andar ka saman (processing format)

---

## 🏠 Desi Analogy

Soch:

- Maa ne tiffin pack kiya (JSON)
- Tu ghar pe dabba kholta hai (Python dict)

👉 Dabbe me khana hai, par directly khana nahi — pehle kholna padega

---

# 🔥 JSON KYA HOTA HAI

JSON ka full form:

👉 JavaScript Object Notation

---

## 📦 Example

```json
{
  "name": "Divyesh",
  "age": 22
}
```

👉 Ye dikhta dict jaisa hai

👉 BUT ye actually **string hai**

---

## 🧠 IMPORTANT

👉 JSON = text (string)

👉 Python dict = object (memory me)

---

# 🔄 SERIALIZATION vs DESERIALIZATION

| Process | Matlab | Desi example |
| --- | --- | --- |
| Serialization | Python → JSON | dabba pack karna |
| Deserialization | JSON → Python | dabba kholna |

---

## Code samajh

```python
import json

data = {"name": "Divyesh"}

# Serialization
json_string = json.dumps(data)

# Deserialization
python_data = json.loads(json_string)
```

---

# 🔥 4 MAIN FUNCTIONS (LIFE SAVERS)

| Function | Input | Output | Use case |
| --- | --- | --- | --- |
| json.dumps | Python object | JSON string | API response banane ke liye |
| json.dump | Python object | file me likhega | file save karna |
| json.loads | JSON string | Python object | API response read karna |
| json.load | file | Python object | file read karna |

---

## 🧠 GOLDEN RULE

👉 “s” = string

👉 bina “s” = file

---

# ⚠️ MOST COMMON CONFUSION

| Function | Kya leta hai |
| --- | --- |
| load | file object |
| loads | string |

---

## ❌ Galti

```python
json.load('{"name": "Divyesh"}')
```

👉 Ye crash karega

---

## ✔️ Sahi

```python
json.loads('{"name": "Divyesh"}')
```

---

# 🔥 dump vs dumps (CRYSTAL CLEAR)

| Function | Kya karta hai |
| --- | --- |
| dumps | memory me string banata hai |
| dump | file me likhta hai |

---

## ❌ Classic mistake

```python
json.dump(data, "file.json")
```

👉 Galat — string diya, file nahi

---

## ✔️ Correct

```python
with open("file.json", "w") as f:
    json.dump(data, f)
```

---

## 🧠 Analogy

- "file.json" = address likha hua kagaz
- open(file) = ghar ka darwaza

👉 dump ko darwaza chahiye

---

# 🔥 JSON vs CSV

| Feature | JSON | CSV |
| --- | --- | --- |
| Structure | nested | flat |
| Use | API | Excel |
| Complex data | support | nahi |

---

## Example

JSON:

```json
{
  "orders": [
    {"item": "pizza"},
    {"item": "coke"}
  ]
}
```

CSV:

```
item
pizza
coke
```

---

# 🔥 NESTED JSON (REAL API)

```json
{
  "user": "Divyesh",
  "orders": [
    {"item": "pizza", "price": 200}
  ]
}
```

---

## Access

```python
data["orders"][0]["item"]
```

---

## ⚠️ Trap

```python
data["orders"][0]["discount"]
```

💥 KeyError

---

## ✔️ Safe

```python
data["orders"][0].get("discount", 0)
```

---

# 🔥 ERROR HANDLING (PRODUCTION LEVEL)

---

## ❌ Invalid JSON

```python
json.loads("{name: Divyesh}")
```

💥 crash

---

## ✔️ Handle

```python
try:
    data = json.loads(input_data)
except json.JSONDecodeError:
    print("Invalid JSON")
```

---

## 🧠 Real scenario

API return:

```html
500 error page
```

👉 tu JSON samajh ke parse karega → crash

---

# 🔥 TYPE MISMATCH (SILENT KILLER)

```python
data = {"price": "100"}
```

```python
data["price"] + 50
```

💥 crash

---

## ✔️ Fix

```python
int(data["price"])
```

---

## 🧠 Lesson

👉 JSON me sab kuch string aa sakta hai

---

# 🔥 NULL vs EMPTY LIST

| Value | Meaning |
| --- | --- |
| null | data nahi hai |
| [] | data hai, par empty |

---

## 🧠 Real bug

```python
for order in data["orders"]:
```

👉 agar orders = null → crash

---

## ✔️ Safe

```python
orders = data.get("orders") or []
```

---

# 🔥 ENCODING ISSUE (INDIAN NAMES)

```python
data = {"name": "हर्ष"}
```

```python
json.dumps(data)
```

👉 weird unicode

---

## ✔️ Fix

```python
json.dumps(data, ensure_ascii=False)
```

---

# 🔥 PRETTY PRINT

```python
json.dumps(data, indent=4)
```

👉 debugging me life saver

---

# 🔥 PERFORMANCE (REAL PAIN)

---

## ❌ Problem

```python
json.load(large_file)
```

👉 pura memory me load

---

## 🧠 Result

- RAM spike
- server crash

---

## ✔️ Solutions

- chunk processing
- streaming
- pagination

---

## 🧠 War story

1GB JSON load kiya → server freeze

boss ka phone → "kya kiya tune?" 😄

---

# 🔥 JSON VALIDATION (VERY IMPORTANT)

---

## 🧠 Rule

👉 external data = untrusted

---

## ❌ Bad

```python
price = data["price"]
```

---

## ✔️ Good

```python
if not isinstance(data.get("price"), int):
    raise ValueError
```

---

# 🔥 PYDANTIC (REAL BACKEND TOOL)

```python
from pydantic import BaseModel

class Payment(BaseModel):
    amount: int
```

---

## Magic

```python
Payment(amount="500")
```

👉 convert + validate

---

# 🔥 JSON → DATABASE

---

## ❌ Galti

👉 pura JSON store kar diya

---

## Problem

- query nahi chalegi
- slow system

---

## ✔️ Correct

Tables me tod:

| user | orders |

---

## 🧠 Rule

👉 JSON = transport

👉 DB = structure

---

# 🔥 JSONB (ADVANCED)

👉 PostgreSQL me JSON store kar sakte ho

---

## Use kab kare

✔️ logs

✔️ flexible data

---

## Avoid kab kare

❌ payments

❌ analytics

---

# 🔥 API CONTRACT DESIGN

---

## ❌ Bad

```json
{
  "data": {
    "user": {
      "name": "Divyesh"
    }
  }
}
```

---

## ✔️ Good

```json
{
  "name": "Divyesh"
}
```

---

## 🧠 Rules

1. flat rakho
2. consistent naming
3. predictable structure

---

# 🔥 BIGGEST LESSONS

---

## 🧠 1

👉 JSON string hai, dict nahi

---

## 🧠 2

👉 load vs loads kabhi confuse nahi karna

---

## 🧠 3

👉 external data pe kabhi trust nahi

---

## 🧠 4

👉 validation mandatory

---

## 🧠 5

👉 API design future break kar sakta hai

---

# 🧪 PRACTICE THINKING

---

## Case

```json
{
  "amount": "500",
  "orders": null
}
```

👉 kya handle karega?

- type conversion
- null safety
- validation

---

# 🎯 FINAL MENTAL MODEL

👉 JSON = courier box

👉 loads = box kholna

👉 dumps = box pack karna

👉 load = file se box uthana

👉 dump = box file me rakhna

---

# 🧠 LAST LINE (YAAD RAKH)

👉 "Backend me sabse bada kaam data ko samajhna nahi,

👉 data ko safely handle karna hai"

---