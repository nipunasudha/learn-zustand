import {useBearStore} from "./store/bear-store.ts";

function App() {
    const bears = useBearStore(store => store.bears);
    const increase = useBearStore(store => store.increase);
    return (
        <>
            <div>We have {bears} bears! 🐻</div>
            <button onClick={() => increase(1)}>Click Me!</button>
        </>
    )
}

export default App
