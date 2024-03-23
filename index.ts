type TYPE_FN = (data: any) => void

export default class EventsClass<T extends string | number | symbol> {
  events: { [key in T]?: TYPE_FN[] }

  constructor () {
    this.events = {}
  }

  on(eventName: T, fn: TYPE_FN): void {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName]?.push(fn)
  }

  off(eventName: T, fn: TYPE_FN): void {
    const { length } = this.events[eventName] || []
    for (let i = 0; i < length; i++) {
      const element = this.events[eventName]
      if (element) {
        if (element[i] === fn) {
          element?.splice(i, 1)
          break
        }
      }
    }
  }

  trigger<K>(eventName: T, data: K): void {
    this.events[eventName]?.forEach((fn) => {
      fn(<K>data)
    })
  }
}
