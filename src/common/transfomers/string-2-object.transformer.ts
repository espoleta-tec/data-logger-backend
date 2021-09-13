import { ValueTransformer } from 'typeorm'

export class String2ObjectTransformer<T> implements ValueTransformer {
  from(value: string): T {
    return JSON.parse(value)
  }

  to(value: T): string {
    return JSON.stringify(value)
  }
}
