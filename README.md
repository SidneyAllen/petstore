# Petstore
Petstore OpenAPI specification modified for demo purposes.

We are mocking the Petstore API using Quickmocker.

The following properties were added to the default Petstore specification.

```
 "servers": [
    {
      "url": "https://src8wr32cg.api.quickmocker.com"
    }
  ]
```

and 

```
"securitySchemes": {
    "bearerAuth": {
      "type": "http",
      "scheme": "bearer",
      "description": "bearer token security"
  }
}
```
