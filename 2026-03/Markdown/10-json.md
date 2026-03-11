# JSON 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax
- commonly used for transmitting data in web applications
- represents structured data as a string
- can be used independently of JavaScript
- in JavaScript, the methods for parsing and generating JSON are provided by the JSON object 

**Note**
- converting a string to a native object is called deserialization
- converting a native object to a string so it can be transmitted across the network is called serialization

A JSON string can be stored in its own file, which is basically just a text file with an extension of `.json` and a MIME type of `application/json`

```json

    {
        "squadName": "Super Hero Squad",
        "homeTown": "Metro City",
        "formed": 2016, 
        "members": [
            {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": ["Radiation Resistance", "Turning Tiny"]
            },
            {
                "name": "Eternal Flame",
                "age": 10000000,
                "secretIdentity": "Unknown",
                "powers": [
                    "Immortality", 
                    "Heat Immunity",
                    "Teleportation"
                ]
            }
        ]
    }

```

If you load this JSON in your JavaScript program as a string, you can parse it into a normal object and then access the data inside it using dot/bracket notation
- to parse a JSON string into a normal JavaScript object, you can use the built in static method `JSON.parse()`


**Syntax Restrictions**

Any JSON is a valid JavaScript literal, the opposite however, isn't true. Not all JavaScript object literals are valid JSON. 
- JSON can only contain serializable data types: 
    - Primitives: string literals, number literals, true, false, and null. It *cannot* contain undefined, NaN, or Infinity
    - Non-Primitives: Object literals and arrays. It *cannot* contain functions or other object types such as `Date`, `Set`, or `Map`
- Strings must be enclosed in double quotes, not single quotes
- Numbers must be written in decimal notation
- Each property of an object must be in the form `"key": value`
- Objects and arrays cannot contain trailing commas
- Comments aren't allowed in JSON

One of the ways you can obtain JSON from a separate source, is to use an API called Fetch. This API allows us to make network requests to retrieve resources from a server via JavaScript, meaning that we can update small sections of content without having to reload the entire page. 

## Other things I learned:

1. MIME TYPE
- is a string sent along with a file indicating the type of the file 
    - a sound file might be labeled `audio/ogg`
    - a image file might be labeled as `image/png`
2. One of the ways to tell the different between a JavaScript Object and a JSON string is that property names in JSON must be wrapped in double quotes, while in JavaScript objects they aren't. 


## Questions I have: (March 11, 2026)

1. What is CORS? (it was mentioned a few times in my readings)


## Resources

- [**Mozilla Docs: JSON**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
- [**Mozilla Docs: MIME Type**](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)


## Link to Example JS File

- N/A


