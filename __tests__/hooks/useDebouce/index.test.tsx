import { renderHook, act } from '@testing-library/react-hooks'
import useDebounce from 'hooks/useDebounce'

describe('useDebounce', () => {
  jest.useFakeTimers()

  it('returns the initial value immediately', () => {
    const initialValue = 'initial'
    const { result } = renderHook(() => useDebounce(initialValue, 1000))
    expect(result.current).toBe(initialValue)
  })

  it('updates debounced value after delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 1000 }
      }
    )
    act(() => {
      jest.advanceTimersByTime(1000)
      rerender({ value: 'updated', delay: 1000 })
    })
    expect(result.current).toBe('initial')
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(result.current).toBe('updated')
  })
})
