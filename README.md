# Simple event service

At the very basic, an Event is just a simple object to which someone can subscribe and receive a event when the event is triggered.

The Class imagine with three basic methods:
- **on** - to subscribe to the event
- **off** - to unsubscribe
- **trigger** - used to trigger the event

! Every event has payload

# How to use

``` javascript
type TOnWindowResize = {
  a: string, b: number;
}

enum ENUM_EVENTS {
  'onWindowResize'
}

// init

const eventsClass = new EventsClass<ENUM_EVENTS>()

// subscribe

eventsClass.on(ENUM_EVENTS.onWindowResize, (payload: TOnWindowResize) => {
  console.log(payload)
})

// trigger

eventsClass.trigger<TOnWindowResize>(ENUM_EVENTS.onWindowResize, {
  a: 'test',
  b: 1
})
```

# How to use OFF
``` javascript
const eventsClass = new EventsClass<ENUM_EVENTS>()

const a = (payload: TOnWindowResize) => {
    console.log('a', payload)
}

const b = (payload: TOnWindowResize) => {
    console.log('b', payload)
}

// subscribe

test.on(ENUM_EVENTS.onWindowResize, a)
test.on(ENUM_EVENTS.onWindowResize, b)

// unsubscribe

test.off(ENUM_EVENTS.onWindowResize, b)

// trigger
// only function 'a' will be executed

test.trigger<TOnWindowResize>(ENUM_EVENTS.onWindowResize, {
  a: 'test',
  b: 1
})
```
