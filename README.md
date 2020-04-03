```
|-- lib
|-- server
|  |-- domain
|  |  |-- model
|  |  |-- service
|  |  |-- repository-interface
|  |  |-- api-interface
|  |-- usecase
|  |-- infra
|  |  |-- config
|  |  |-- environment-vars
|  |  |-- repository-impl
|  |  |-- api-impl
|  |  |-- http
|  |  |-- database
|  |-- application
|  |  |-- xxx-api
|  |  |  |-- router/controller
|  |  |  |-- index.ts // boot script
|  |  |  |-- adapter
|  |  |  |  |-- io-interface
|  |  |  |  |-- translator(serializer)
|-- client
|  |-- component
|  |-- static-asset
|  |-- index.clinet.ts
|-- dist
|  |--server
|  |-- index.js
|  |--client
|  |  |-- index.html
|  |  |-- assets
|  |  |  |-- index.css
|  |  |  |-- index.js
|-- gulpfile.js
```