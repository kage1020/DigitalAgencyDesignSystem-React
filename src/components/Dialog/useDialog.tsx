import { useCallback, useRef } from 'react'
import type { Dispatch, SetStateAction } from 'react'

const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null)

  const setOpen: Dispatch<SetStateAction<boolean>> = useCallback((setStateAction) => {
    if (ref.current) {
      let open = false

      if (typeof setStateAction === 'boolean') open = setStateAction
      else open = setStateAction(ref.current.open)

      if (open) ref.current.showModal()
      else ref.current.close()
    }
  }, [])

  return { ref, open: ref.current?.open ?? false, setOpen }
}

export default useDialog
