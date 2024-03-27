type TYPE_FN = (payload: any) => void

export default class EventsClass<T extends string | number | symbol> {
  private events: { [key in T]?: TYPE_FN[] }

  constructor() {
    this.events = {}
  }

  public on<K>(eventName: T, fn: (payload: K) => void): void {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName]?.push(fn)
  }

  public off(eventName: T, fn: TYPE_FN): void {
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

  public trigger<K>(eventName: T, payload: K): void {
    this.events[eventName]?.forEach((fn) => {
      fn(payload)
    })
  }
}
