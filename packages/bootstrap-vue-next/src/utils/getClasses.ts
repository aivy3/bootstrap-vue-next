import type {ComponentProps} from './getBreakpointProps'

/**
 * @deprecated
 */
export default (
  props: Readonly<Record<PropertyKey, unknown>>,
  els: Readonly<ComponentProps>,
  propPrefix: string,
  classPrefix = propPrefix
): string[] =>
  Object.keys(els).reduce((arr: string[], prop) => {
    if (!props[prop]) return arr

    arr.push(
      [classPrefix, prop.replace(propPrefix, ''), props[prop]]
        .filter((e) => e && typeof e !== 'boolean')
        .join('-')
        .toLowerCase()
    )

    return arr
  }, [])
