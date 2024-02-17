import { DependencyList, useEffect } from 'react'

/**
 * The useEffect hook, but also runs for async functions
 * @param effect - The effect to run
 * @param deps - The dependencies to run the effect on
 */
export const useAsyncEffect = (effect: () => Promise<any>, deps: DependencyList): void => {
  useEffect(() => {
    void effect()
  }, deps)
}
