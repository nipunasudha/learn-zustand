import {useBearStore} from "./store/bear-store.ts";

function App() {
    const bears = useBearStore(state => state.bears);
    const {
        increase,
        reset
    } = useBearStore();
    return (
        <>
            <div>We have {bears} bears! 🐻</div>
            <button onClick={() => increase(1)}>Click Me!</button>
            <button onClick={reset}>Reset!</button>
        </>
    )
}

export default App
