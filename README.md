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
            "footer":{
                "Copyright":"Yoofoo",
                "Year": 2020
            }
          }
        }
```

# Read focus

Post json data for read API call

```javascript
readFocus(focus_type, payload, url, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("done!");
});
```

# Write Focus

Post json data for Write API call

```javascript
writeFocus(focus_type, payload, url, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("done!");
});
```
