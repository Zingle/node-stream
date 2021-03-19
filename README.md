Stream utility library for Node.js.

stream Module
=============
To use the functions in this library, import the **@zingle/stream** package into
your project.

```js
import stream from "@zingle/stream";
```

Transform Streams
=================

filter Stream
-------------
Use a filter stream to filter out stream data that fails to match a filter.
This is analogous to **Array.prototype.filter**.

```js
import stream from "@zingle/stream";

getReadableSomehow().pipe(stream.filter((chunk, enc) => {
  return chunk.toString("utf8") !== "null";
}));
```

flatten Stream
--------------
Use a flatten stream to flatten stream Array data before passing it along.  This
is analogous to **Array.prototype.flat**.

```js
import stream from "@zingle/stream";

getReadableSomehow().pipe(stream.flatten());
```

map Stream
----------
Use a map stream to perform a one-to-one mapping of stream data using a map
function.  This is analogous to **Array.prototype.map**.

```js
import stream from "@zingle/stream";

getReadableSomehow().pipe(stream.map((chunk, enc) => {
  return chunk.toString("utf8").toUpperCase();
}));
```
