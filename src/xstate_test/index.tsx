import React, { FC } from "react";
import { createMachine } from "xstate";

import { useMachine } from "@xstate/react";

interface ISampleXstateProps {}

export const SampleXsate: FC<ISampleXstateProps> = (props) => {
  const promiseMachine = createMachine({
    id: "test-machine",
    initial: "pending",
    states: {
      pending: {
        on: {
          RESOLVE: { target: "resolved" },
          REJECT: { target: "rejected" },
        },
      },
      resolved: {
        type: "final",
      },
      rejected: {
        type: "final",
      },
    },
  });

  const [state, send] = useMachine(promiseMachine);

  return (
    <React.Fragment>
      <div>
        {state.matches("pending") && <p>Loading...</p>}
        {state.matches("rejected") && <p>Promise Rejected</p>}
        {state.matches("resolved") && <p>Promise Resolved</p>}
        <div>
          <button onClick={() => send("RESOLVE")}>Resolve</button>
          <button onClick={() => send("REJECT")}>Reject</button>
        </div>
      </div>
    </React.Fragment>
  );
};
