import { NotAuthorized } from "@main/components";
import { addOne, supabase } from "@main/utils";
import React, { useState } from "react";

export const TestPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const user = supabase.auth.user();

  if (!supabase.auth.session()) {
    return <NotAuthorized />;
  }

  return (
    <>
      <h1>Hello New Project!</h1>
      This is a new project. Supabase User: {user?.email}
      <div>
        <button
          type="button"
          onClick={() => setCount((count) => addOne(count))}
        >
          count is: {count}
        </button>
      </div>
    </>
  );
};
