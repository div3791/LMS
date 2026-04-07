# Roadmap Data — Divyesh Engineering Roadmap v3.0

Timeline: 18 Mar 2026 → 1 Mar 2027 · ~950 hrs · 50 weeks
Goal: Backend + AI/ML/DL/GenAI → System Design & Architecture

---

## PHASES OVERVIEW

| Phase | Name | Duration | Hours | Dates |
|---|---|---|---|---|
| 0A | Python Fundamentals | — | ~60 hrs | START HERE |
| 0B | Quick Revision (Shaky Topics) | 2 weeks | ~18 hrs | Mar 18 – Apr 1 |
| 0C | Python Remaining (Fresh Topics) | 2 weeks | ~22 hrs | Apr 1–15 |
| 1  | CS + Internet Fundamentals | 2 weeks | ~25 hrs | Apr 15–30 |
| 2  | Backend Engineering + FastAPI | 7 weeks | ~120 hrs | May 1 – Jun 18 |
| 3  | Maths for ML | 3 weeks | ~45 hrs | Jun 19 – Jul 9 |
| 4  | ML Engineering Core | 6 weeks | ~100 hrs | Jul 10 – Aug 20 |
| 5  | Deep Learning + System Design | 6 weeks | ~95 hrs | Aug 21 – Oct 1 |
| 6  | GenAI + RAG + Product | 6 weeks | ~100 hrs | Oct 2 – Nov 13 |
| 7  | MLOps + Cloud | 4 weeks | ~60 hrs | Nov 14 – Dec 11 |
| 8  | Interview Prep (Extended) | 11 weeks | ~130 hrs | Dec 12 – Mar 1 |

---

## PHASE 0A — Python Fundamentals

Topics:
- Basics (variables, loops, operators, conditionals, string formatting)
- Functions (lambda, HOF, scope, closures, *args, **kwargs)
- Data Structures (list, dict, set, tuple, collections, comprehensions)
- OOP Complete (classes, objects, inheritance, polymorphism, descriptor protocol)
- Decorators (stacking, parametrized, functools.wraps)
- Generators (yield, lazy eval, generator expressions, send(), throw())
- AsyncIO (coroutines, tasks, await, gather, event loop)
- Exception Handling (try/except/finally, custom exceptions, exception chaining)

---

## PHASE 0B — Quick Revision (Shaky Topics)

Topics:
- Access Control (public/_protected, __private, name mangling, __dict__ proof)
- Encapsulation (@property, getters, setters, validation, read-only fields)
- Dunder Methods (__repr__, __str__, __eq__, __len__, __add__, __enter__)
- Context Manager (__enter__/__exit__, @contextmanager, ExitStack)
- Coroutines + Tasks (gather, shield, timeout, cancellation, graceful shutdown)
- Call Stack + Recursion (frames, suspended state, memory cost, when to avoid)
- Iterator/Generator Protocol (__iter__, __next__, StopIteration, for loop internals)
- Operator Tweaks (walrus :=, unpacking *, **, chaining comparisons)

---

## PHASE 0C — Python Remaining (Fresh Topics)

Topics:
- File Handling (open(), modes, pathlib, CSV/JSON, binary files, safe operations)
- Datetime Module (datetime, timedelta, timezone, zoneinfo, formatting, traps)
- Packages + Modules (import system, __init__, relative imports, circular import traps)
- Mixins (multiple inheritance, MRO, C3 linearization, diamond problem)
- Python Internals (GIL, CPython memory, reference counting, gc, heap vs stack)
- Dataclasses + Typing (@dataclass, field(), Generics, Protocol, TypedDict, Literal)
- Environment Management (venv, conda, Poetry, pyproject.toml, version pinning)
- Testing with pytest (fixtures, parametrize, mocking, monkeypatch, coverage, TDD)

---

## PHASE 1 — CS + Internet Fundamentals

Topics:
- How Internet Works (DNS resolution, IP/TCP/UDP, packets, routing, CDN)
- HTTP Deep Dive (HTTP/1.1 vs 2, headers, cookies, status codes, CORS)
- HTTPS + Security (TLS handshake, certificates, symmetric/asymmetric, HSTS)
- How Servers Work (request-response, ports, sockets, sync/async, Nginx)
- REST Principles (6 constraints, resource design, versioning, REST vs GraphQL vs gRPC)
- Auth Fundamentals (session vs token, JWT, OAuth2, refresh tokens, PKCE)
- Concurrency Concepts (process vs thread vs async, blocking, event loop)
- Database Concepts (ACID, indexing, query plan, SQL vs NoSQL)
- Caching Concepts (cache-aside, write-through, TTL, eviction, Redis)

---

## PHASE 2 — Backend Engineering + FastAPI

Topics:
- FastAPI Core (routing, path/query params, request/response models, DI, middleware)
- FastAPI Advanced (microservices, event sourcing, CQRS, message queue patterns)
- PostgreSQL Engineering (SQLAlchemy 2.0 async, Alembic, indexes, N+1 problem)
- Pydantic v2 (BaseModel, validators, field types, serialization, nested, custom)
- Auth Implementation (JWT create/verify, OAuth2, RBAC, refresh token rotation)
- Redis + Caching (data types, cache patterns, rate limiting, session storage)
- Async FastAPI (async endpoints, background tasks, blocking mistakes, Uvicorn)
- Celery + Docker (task queue, Redis broker, retry, Dockerfile, compose, networking)
- API Testing (pytest + TestClient, Locust load testing, mock DB, contract testing)

Project: Production-Grade SaaS Analytics API
(FastAPI + PostgreSQL + Redis + JWT + Docker + WebSocket · ~25 hrs)

---

## PHASE 3 — Maths for ML

Topics:
- Linear Algebra (scalars, vectors, matrices, dot product, transpose, eigenvalues concept)
- Calculus ML Only (derivatives, chain rule, partial derivatives, gradient)
- Probability + Statistics (basics, distributions, Bayes theorem, mean/variance/std)
- Information Theory light (entropy, cross-entropy, KL divergence concept, log loss)
- NumPy Applied (arrays, broadcasting, vectorized ops, reshape, indexing)
- Optimization Intuition (gradient descent visual, learning rate, local vs global minima)

---

## PHASE 4 — ML Engineering Core

Topics:
- Data Engineering (Pandas performance, chunked processing, ETL, data validation)
- Feature Engineering (encoding, scaling, normalization, RFE, data leakage detection)
- Supervised ML (linear + logistic regression, trees, ensembles, bias-variance, F1/AUC)
- Unsupervised ML (K-means, PCA, anomaly detection)
- ML Pipelines (sklearn pipelines, hyperparameter tuning, cross-validation)
- SHAP + Explainability (SHAP values, feature importance, regulatory compliance)
- MLflow + Versioning (experiment tracking, model registry, drift detection, rollback)
- A/B Testing + Inference (A/B framework, batch vs online inference tradeoffs)

Project: Production Fintech Credit Risk Platform
(sklearn + SHAP + MLflow + A/B testing + FastAPI · ~25 hrs)

---

## PHASE 5 — Deep Learning + System Design Start

Topics:
- Neural Net Foundations (perceptron, forward prop, activations, backprop, loss)
- PyTorch (tensors, autograd, training loop, DataLoader, checkpointing)
- Transformer Architecture (attention deep, encoder vs decoder, positional encoding, BERT vs GPT)
- NLP Evolution (NLTK era → BERT → GPT, why Transformers won, tokenization)
- Transfer Learning (pretrained models, fine-tuning, when to freeze layers)
- System Design Foundations (scalability, CAP theorem, consistent hashing)

Project: Indian Business Document Intelligence API
(Invoice extraction + GST + Hindi/Gujarati/Marathi + Tally · ~25 hrs)

---

## PHASE 6 — GenAI + RAG + Product

Topics:
- LLM Foundations (tokenization, embeddings, context windows, hallucination)
- Embeddings Deep Dive (sentence transformers, cosine similarity, multilingual)
- Prompt Engineering (zero/few-shot, CoT, injection defense, structured outputs)
- Vector DBs + RAG (chunking, FAISS/Chroma/Pinecone, hybrid retrieval, evaluation)
- LangChain + LlamaIndex (chains, agents, memory, tool calling, streaming)
- LangGraph + Agents (ReAct, multi-agent basics, agentic RAG, guardrails)
- Fine-tuning LoRA/QLoRA (PEFT, dataset curation, instruction tuning)
- System Design ML Systems (RAG end-to-end, DB sharding, service mesh)

Project: YOUR ACTUAL AI PRODUCT (Live + Paying Users)
(RAG + FastAPI + Auth + Vector DB + Multi-tenant + Billing · ~35 hrs)

---

## PHASE 7 — MLOps + Cloud

Topics:
- CI/CD for ML (GitHub Actions, automated testing, DVC, canary deployments)
- Monitoring + Observability (structured logging, Prometheus concept, LangSmith, drift)
- Cloud Basics (AWS EC2/S3, FastAPI deployment, blue/green, secrets management)
- LLMOps (LangSmith observability, cost optimization, token monitoring)
- Kubernetes Concept Only (pods, services, ingress — mental model only)

Final Project: Distributed AI Microservices Platform
(All 4 projects integrated + cloud + monitoring + CI/CD · ~25 hrs)

---

## PHASE 8 — Interview Prep (Extended)

Topics:
- DSA Foundations (arrays, hashmaps, strings, two pointers, sliding window, trees, graphs)
- DSA Practice (Leetcode easy → medium, pattern recognition, time/space complexity)
- System Design Deep (URL shortener, notification system, rate limiter, tradeoffs)
- ML System Design (RAG end-to-end, recommendation engine, ML platform at scale)
- Mock Interviews (Python internals, ML/SHAP, product + architecture round)

---

## INTENTIONALLY SKIPPED (With Reasons)

| Topic | Reason |
|---|---|
| TensorFlow | PyTorch is GenAI standard. Both = double time, half depth |
| Time Series | Niche (finance/IoT). Goal is GenAI |
| Reinforcement Learning | Pure research, rarely in production |
| Old NLP (NLTK/spaCy deep) | LLMs replaced it. Modern NLP in Phase 5+6 |
| Phidata / Autogen | LangChain+LangGraph sufficient |
| GAN / Autoencoder deep | Not needed for GenAI engineer goal |
| Kubernetes deep | Concept awareness enough at this stage |
| Recommender Systems | Product company niche, not target track |
| Integration (Maths) | Not needed for ML — gradient descent enough |

---

## PRODUCT + BUSINESS STRATEGY

- Phase 0–4: Problems observe karo daily. Notebook mein note karo.
- Phase 5: P3 (Document AI) live karo. Indian SMB users se feedback lo.
- Phase 6: Product idea finalize + build + deploy. Real users pe test karo.
- Phase 7–8: Product polish + paying users + interview prep parallel.
- 1 Mar 2027: Job ready ✓ + 4 live projects ✓ + 1 real product ✓

---

## HOURS BUDGET

| Phase | Hours |
|---|---|
| Phase 0 (Python) | ~40 hrs |
| Phase 1 (CS/Internet) | ~25 hrs |
| Phase 2 (Backend) | ~120 hrs |
| Phase 3 (Maths) | ~45 hrs |
| Phase 4 (ML Core) | ~100 hrs |
| Phase 5 (DL + SysDesign) | ~95 hrs |
| Phase 6 (GenAI + Product) | ~100 hrs |
| Phase 7 (MLOps) | ~60 hrs |
| Phase 8 (Interview Prep) | ~130 hrs |
| 4 Projects | ~110 hrs |
| **TOTAL USED** | **~825 hrs** |
| **BUFFER** | **~125 hrs** |
| **AVAILABLE** | **~950 hrs** |
