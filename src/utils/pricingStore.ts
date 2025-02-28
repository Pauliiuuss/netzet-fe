import { useSyncExternalStore } from 'react'

let selectedPricingId = '2' // initial value

const listeners = new Set<() => void>()

export function setSelectedPricingId(id: string) {
  selectedPricingId = id
  listeners.forEach((listener) => {
    listener()
  })
}

function getSnapshot() {
  return selectedPricingId
}

export function subscribe(callback: () => void) {
  listeners.add(callback)
  return () => {
    listeners.delete(callback)
  }
}

export function useSelectedPricingId() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}
