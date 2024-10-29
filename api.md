# Events

Types:

- <code><a href="./src/resources/events/events.ts">EventData</a></code>
- <code><a href="./src/resources/events/events.ts">EventDataArray</a></code>
- <code><a href="./src/resources/events/events.ts">StringArray</a></code>
- <code><a href="./src/resources/events/events.ts">EventCreateResponse</a></code>
- <code><a href="./src/resources/events/events.ts">EventListResponse</a></code>

Methods:

- <code title="post /events">client.events.<a href="./src/resources/events/events.ts">create</a>({ ...params }) -> EventCreateResponse</code>
- <code title="get /events">client.events.<a href="./src/resources/events/events.ts">list</a>({ ...params }) -> EventListResponse</code>

## Names

Types:

- <code><a href="./src/resources/events/names.ts">NameListResponse</a></code>

Methods:

- <code title="get /events/names">client.events.names.<a href="./src/resources/events/names.ts">list</a>() -> NameListResponse</code>

# Entities

Types:

- <code><a href="./src/resources/entities/entities.ts">EntityData</a></code>
- <code><a href="./src/resources/entities/entities.ts">EntityWithSegments</a></code>
- <code><a href="./src/resources/entities/entities.ts">EntityWithSegmentsArray</a></code>
- <code><a href="./src/resources/entities/entities.ts">EntityCreateResponse</a></code>
- <code><a href="./src/resources/entities/entities.ts">EntityRetrieveResponse</a></code>
- <code><a href="./src/resources/entities/entities.ts">EntityListResponse</a></code>

Methods:

- <code title="post /entities">client.entities.<a href="./src/resources/entities/entities.ts">create</a>({ ...params }) -> EntityCreateResponse</code>
- <code title="get /entities/{entityId}">client.entities.<a href="./src/resources/entities/entities.ts">retrieve</a>(entityId) -> EntityRetrieveResponse</code>
- <code title="get /entities">client.entities.<a href="./src/resources/entities/entities.ts">list</a>() -> EntityListResponse</code>

## Events

Types:

- <code><a href="./src/resources/entities/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /entities/{entityId}/events">client.entities.events.<a href="./src/resources/entities/events.ts">list</a>(entityId) -> EventListResponse</code>
