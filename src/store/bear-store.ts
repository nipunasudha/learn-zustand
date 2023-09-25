import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'

interface BearState {
    bears: number
    increase: (by: number) => void
    reset: () => void
}

export const useBearStore = create<BearState>()(
    devtools(
        persist(
            (set) => {
                return {
                    bears: 0,
                    increase: () => {
                        set((prevState)=>({bears: prevState.bears + 50}))
                    },
                    reset: () => {
                        set({bears: 0})
                    }
                };
            },
            {
                name: 'bear-storage',
            }
        )
    )
)