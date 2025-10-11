🧠 What is an API?

API (Application Programming Interface) is a set of rules that allow two software applications to communicate with each other.
It defines how requests should be made, what data will be returned, and how responses are formatted.

Example:
When you use a weather app, it calls a Weather API to get real-time weather data from a server.

🌐 Types of APIs (Based on Architecture / Protocol)

1. REST API (Representational State Transfer)
   Most common type of web API.
   Uses HTTP methods: GET, POST, PUT, DELETE.
   Data format: JSON (or sometimes XML).
   Stateless (server doesn’t store client info).
   Pros: Easy, scalable, language-independent
   Used in: Web apps, mobile apps

2. SOAP API (Simple Object Access Protocol)
   Uses XML for requests and responses.
   Strictly defined structure (uses WSDL file).
   More secure and reliable — used in enterprises.
   Example: Banking or payment gateways (e.g., PayPal’s classic APIs)
   Pros: High security (supports WS-Security, ACID transactions)
   Cons: Verbose, complex compared to REST

3. gRPC API (Google Remote Procedure Call)
   Uses Protocol Buffers (binary format) instead of JSON.
   Very fast, best for microservices communication.
   Uses HTTP/2 for streaming and multiplexing.
   Example Use: Netflix, Google Cloud services
   Pros: Low latency, high performance
   Cons: Harder to debug, not as human-readable

4. gRPC API (Google Remote Procedure Call)

Uses Protocol Buffers (binary format) instead of JSON.

Very fast, best for microservices communication.

Uses HTTP/2 for streaming and multiplexing.

Example Use: Netflix, Google Cloud services

Pros: Low latency, high performance

Cons: Harder to debug, not as human-readable

5. WebSocket API

Enables real-time, two-way communication between client and server.

Used in chat apps, live notifications, and online games.

Example: Real-time stock prices or messaging apps

Pros: Instant updates

Cons: Needs more management for scalability and security

6. RPC (Remote Procedure Call) API

Calls functions directly on another server as if local.

Variants:

XML-RPC: Uses XML

JSON-RPC: Uses JSON
Pros: Simple and direct

Cons: Tight coupling between client and server
