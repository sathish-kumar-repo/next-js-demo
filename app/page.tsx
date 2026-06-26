// "use client";

import { lazy, Suspense } from "react";
const HeavyDashboard = lazy(() => import("./components/Para"));

export default function Home() {
  // const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>{" "} */}
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <HeavyDashboard />
      </Suspense>
    </div>
  );
}
