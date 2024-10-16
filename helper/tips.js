"use client";
import { useState } from "react";
import Joyride, { STATUS } from "react-joyride";

export default function ReactjoyrideTest() {
  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2>Let's begin our journey!</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        title: "First Step",
        placement: "top",
        target: "#step-1",
      },
      {
        title: "Second Step",
        placement: "top",
        target: "#step-2",
      },
      {
        title: "Third Step",
        placement: "top",
        target: "#step-3",
      },
      {
        title: "Fourth Step",
        placement: "top",
        target: "#step-4",
      },
      {
        title: "Fifth Step",
        placement: "top",
        target: "#step-5",
      },
      {
        title: "Sixth Step",
        placement: "top",
        target: "#step-6",
      },
    ],
  });

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      setState((prevState) => ({ ...prevState, run: false }));
    }
  };

  const restartTour = () => {
    setState((prevState) => ({ ...prevState, run: true }));
  };

  return (
    <div
      style={{
        background: "#797979",
        width: "100%",
        height: "400px",
        marginBottom: "100px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Joyride
        continuous
        callback={handleJoyrideCallback}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
      />

      {[1, 2, 3, 4, 5, 6].map((item, i) => (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "lightblue",
            cursor: "pointer",
          }}
          id={`step-${item}`}
          key={i}
        >
          {item}
        </div>
      ))}

      <button
        style={{
          position: "absolute",
          bottom: "20px",
          backgroundColor: "#fff",
          border: "1px solid #000",
          padding: "10px 20px",
          cursor: "pointer",
        }}
        onClick={restartTour}
      >
        Restart Tour
      </button>
    </div>
  );
}
