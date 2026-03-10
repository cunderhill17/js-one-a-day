# HTTP 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

`HTTP` is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes such as machine-to-machine communication and programmatic access to APIs
- follows a classic client-server model
- HTTP is a stateless protocol 
    - the later addition of cookies did add states to some client-server interactions 

An `application layer protocol` is a set of rules that allows software applications to communicate with each other over a network (like the internet)
- in networking models, the application layer is the top layer where user-facing programs operate

A `hypermedia document` is a digitial document that contains different types of media (text, images, video, and audio) connected by links that let you jump to other content 
- hypermedia --> linked multimedia content 

A `stateless protocol` is a communication method where each request from a client to a server is treated as completely independent. The server doesn't remember anything about previous requests
- because HTTP is stateless, websites use extra tools to remember users, such as: 
    - HTTP cookies
    - sessions
    - login tokens

Clients and servers communicate by exchanging individual messages. The messages sent by the client are called `requests` and the message sent by the server as an answer are called `responses`
- requests are sent by one entity, the user-agent, which most of the time is a web browser


**Client: the user agent**

The user agent is any tool that acts on behalf of the user. This role is primarily performed by the web browser. 
- the client is always the entity initiating the request, it is never the server

To Display A Webpage: 
- the browser sends an original request to fetch the HTML document that represents the page
- it then parses this file, making additional requests to corresponding to execution scripts, layout information (CSS) to display, and sub-resources contained within the page 
- the web browser then combines these resources to present the complete document, the web page
- scripts executed by the browser can fetch more resources in later phases and the browser updates the page accordingly


Links can be used to fetch new web pages, allowing the user to direct their user agent and navigate through the web. The browser translates these 'directions' into `HTTP requests` and further interprets the HTTP responses to present the user with a clear response. 



## Other things I learned:

- N / A


## Questions I have: (March 10, 2026)

1. What's a proxy server? (It was mentioned in my reading, but I didn't add it to my notes as I couldn't be sure I understood what it was)

**The Web Server**

2. Need to look at the following section in more detail as I'm not sure what a number of the parts are, namely: 
- load balancing
- caches
- database server / e-commerse server
- Host header 


On the opposite side of the communication channel is the server, which serves the document as requested by the client. A server appears as only a single machine virtually; but it may actually be a collection of servers sharing the load (load balancing), or other software (such as caches, a database server, or e-commerce servers), totally or partially generating the document on demand.

A server is not necessarily a single machine, but several server software instances can be hosted on the same machine. With HTTP/1.1 and the Host header, they may even share the same IP address.


## Resources

- [**Mozilla Docs: HTTP**](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [**Mozilla Docs: HTTP Overview**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)


## Link to Example JS File

- N/A


