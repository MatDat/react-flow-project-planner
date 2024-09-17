import React from "react";

const ContractorNodes = ({ setNodes, setEdges }) => {
  React.useEffect(() => {
    const contractors = [
      { id: "1", name: "Contractor 1", cvr: "12345678" },
      { id: "2", name: "Contractor 2", cvr: "87654321" },
      { id: "3", name: "Contractor 3", cvr: "98765432" },
    ];

    const gap = 85;
    const yOffset = 100;

    const nodes = contractors.map((contractor, index) => ({
      id: contractor.id,
      data: {
        label: (
          <div className="nodeContainer">
            {contractor.name}
            <br />
            (CVR: {contractor.cvr})
          </div>
        ),
      },
      position: { x: 130, y: index * gap + yOffset },
    }));

    const edges = [];

    setNodes(nodes);
    setEdges(edges);
  }, [setNodes, setEdges]);

  return null;
};

export default ContractorNodes;
