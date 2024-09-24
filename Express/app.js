const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Setup static middleware
// Middleware comes in the middle of the request-response cycle in a Node.js application. It provides access to various functions, including manipulating the request and response objects.

// The response object is passed as the second argument to the request listener function. It represents the writable stream that will be sent back to the client. You can use several methods to manage the response:

/*
- write(): Sends data to the client without closing the connection. Can be used to stream responses.
- writeHead(): Sets the HTTP status code and headers before sending the response.
- end(): Ends the response process and optionally sends data. Once called, no more data can be written.
- getHeader(): Retrieves a specific header value from the response object.
- setTimeout(): Sets the time (in milliseconds) before the response times out if no data is sent.
- statusCode: A property used to set or get the status code of the response.

### HTTP Status Code Ranges:
- **100-199**: Informational responses (e.g., request received, and processing continues).
- **200-299**: Successful responses (e.g., the request was successfully received and processed).
- **300-399**: Redirection messages (e.g., further action must be taken to complete the request).
- **400-499**: Client error responses (e.g., bad syntax, or the request cannot be fulfilled).
- **500-599**: Server error responses (e.g., the server failed to fulfill a valid request).

You can find a detailed list of HTTP status codes at: https://developer.mozilla.org (replace with actual link).
*/

// The request object is created by the client and sent to the server. Its aim is to access resources or data hosted on the server. A proper HTTP request contains the following components:

/*
### HTTP Request Components:
1. **Request Line**: The first line of the request, which contains:
- **Method**: Defines the action to be performed on the resource (e.g., GET, POST, PUT, DELETE).
- **Path**: Identifies the specific resource on the server (e.g., `/products`, `/users/123`).
- **HTTP Version**: Specifies the HTTP version being used (e.g., HTTP/1.1).

2. **HTTP Headers**: These are key-value pairs that provide additional information about the request, the client, or how the client wants to communicate with the server. Common headers include:
- `Content-Type`: Specifies the media type of the request body (e.g., `text/html`, `application/json`).
- `Host`: Specifies the domain name of the server.
- `User-Agent`: Provides information about the client making the request (browser, device, etc.).

3. **Message Body (if needed)**: This part is optional and is used mainly with methods like POST or PUT. It contains the data being sent to the server, like form data or JSON payloads.
*/

