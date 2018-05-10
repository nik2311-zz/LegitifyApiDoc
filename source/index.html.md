---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

Welcome to the Legitifi API! You can use our API to access Legitifi API endpoints, which can get information on users and contacts in our database.

We have language bindings in Shell You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

# Authentication

> To authorize, use this code:

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "x-access-token: myAPIKey"
```

> Make sure to replace `myAPIKey` with your API key.

Legitifi uses API keys to allow access to the API. You can get the apiKey by logging into login to Legitifi [developer portal](http://example.com/developers).

Legitifi expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: myAPIKey`

<aside class="notice">
You must replace <code>myAPIKey</code> with your personal API key.
</aside>

# Legitifi Apis

## Login to Legitifi

```shell
curl -X POST "http://52.32.165.204:10010/login" -H "accept: application/json" -H "x-access-token: myAPIKey" -H "Content-Type: application/json" -d "{ \"username\": \"string\", \"password\": \"string\"}"
```

> The above command returns JSON structured like this:

```json
{
  "message": "string",
  "token": "string"
}
```

This endpoint logs into Legitifi.

### HTTP Request

`POST http://52.32.165.204:10010/login`

### Parameters

Parameter | Description
--------- | -----------
username |  Legitifi username
password |  Legitifi password

## Get User

```shell
curl -X GET "http://52.32.165.204:10010/user/?id=111" -H "accept: application/json" -H "x-access-token: myAPIKey"
```

> The above command returns JSON structured like this:

```json
{
  "appfbid": 111,
  "name": "Jon Snow"
}
```

This endpoint retrieves an users info.

### HTTP Request

`GET http://52.32.165.204:10010/user/`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
appfbid | -1 | users legid_id for which information is requested.


<aside class="success">
Response 200:
{
  "appfbid": 111,
  "name": "Jon Snow""
}
</aside>
<aside class="warning">
  Response 404:
  {
    "message": "User Not Found"
  }
</aside>

## Get Secondary Connections

```shell
curl -X GET "http://52.32.165.204:10010/secondconnections/111" -H "accept: application/json" -H "x-access-token: myAPIKey"
```

> The above command returns JSON structured like this:

```json
[
  {
    "appfbid": 111,
    "name": "Jon Snow"
  },
  {
    "appfbid": 121,
    "name": "daenerys targaryen "
  }

]
```

This endpoint retrieves a specific Legitifi.

### HTTP Request

`GET http://52.32.165.204:10010/secondconnections/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the Legitifi to retrieve

<aside class="success">
Response 200:
[
  {
    "appfbid": 111,
    "name": "Jon Snow"
  },
  {
    "appfbid": 121,
    "name": "daenerys targaryen "
  }

]
</aside>
<aside class="warning">
  Response 403:
  {
  "message": "cant access",
  "code": "server_error",
  "statusCode": 403
  }
</aside>
<aside class="warning">
Response 404:
{
  "message": "string"
}
</aside>


