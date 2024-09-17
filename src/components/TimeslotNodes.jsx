import React, { useEffect } from "react";

const TimeslotNodes = ({ setNodes }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeslots = [];
  for (let i = 8; i <= 16; i++) {
    timeslots.push(`${i}.00`);
  }

  const dayOffsets = {
    Monday: 450,
    Tuesday: 670,
    Wednesday: 890,
    Thursday: 1120,
    Friday: 1350,
  };

  useEffect(() => {
    const newNodes = [];

    days.forEach((day) => {
      timeslots.forEach((timeslot, index) => {
        newNodes.push({
          id: `${day}-${timeslot}`,
          position: {
            x: dayOffsets[day],
            y: 100 + index * 55,
          },
          data: { label: `${timeslot}` },
        });
      });
    });

    // Save nodes to local storage
    localStorage.setItem("timeslotNodes", JSON.stringify(newNodes));

    setNodes((prevNodes) => [...prevNodes, ...newNodes]);
  }, [setNodes]);

  return null;
};

export default TimeslotNodes;
