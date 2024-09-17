import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from "react-flow-renderer";
import ContractorNodes from "./components/ContractorNodes";
import DayColumns from "./components/DayColumns";
import TimeslotNodes from "./components/TimeslotNodes";

const initialNodes = [
  { id: "1", position: { x: 0, y: 100 }, data: { label: "Test Node 1" } },
  { id: "2", position: { x: 0, y: 150 }, data: { label: "Test Node 2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    const savedNodes = JSON.parse(localStorage.getItem("timeslotNodes"));
    if (savedNodes) {
      setNodes((prevNodes) => [...prevNodes, ...savedNodes]);
    }
  }, [setNodes]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <DayColumns />
        <TimeslotNodes setNodes={setNodes} /> {/* Passing setNodes */}
        <Controls />
        <MiniMap styling={{ border: "2px solid #7DA1C4" }} />
        <Background variant="dots" size={0.7} />
        <ContractorNodes setNodes={setNodes} setEdges={setEdges} />
      </ReactFlow>
    </div>
  );
}
