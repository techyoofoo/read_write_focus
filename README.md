# read_write_focus

read_write_focus

# Initialize application with default port up and running

# Payload data format

```json
{
  "UB": {
    "header": {
      "Version": "1",
      "Message_ID": "projectname.company_name.plugin_name.api_name"
    },
    "data_body": "request.data",
    "footer": {
      "Copyright": "Yoofoo",
      "Year": 2020
    }
  },
  "permission_type": "read",
  "map_url": "localhost:3000"
}
```

# Read focus

Post json data for read API call

```javascript
readFocus = async (req, h) => {
  try {
    console.log("--payload--", req.payload);
    return h.response(req.payload).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
};
```

# Write Focus

Post json data for Write API call

```javascript
writeFocus = async (req, h) => {
  try {
    return h.response(req.payload).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
};
```
