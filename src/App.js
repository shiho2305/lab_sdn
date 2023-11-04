import React, { useEffect } from "react";

import useQueryLazyApi from "./hooks/useQueryLazyApi.js";
import useMutationApi from "./hooks/useMutationApi";

// router

function App() {
  const [trigger, { data }] = useQueryLazyApi();

  useEffect(() => {
    trigger("/posts/1/comments");
  }, []);

  const [deleteTrigger] = useMutationApi();
  return (
    <div className="body">
      <button
        onClick={() => {
          deleteTrigger("/posts/1", "DELETE");
        }}
      >
        delete
      </button>
    </div>
  );
}

export default App;
