import React, { useState } from "react";

function Item({ name, model }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="item">
      <p className="name">{isCollapsed ? "" : `Name:${name}`}</p>
      <p className="collapse" onClick={(e) => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "+" : "-"}
      </p>
      <p className="model">{isCollapsed ? "" : `Model:${model}`}</p>
    </div>
  );
}

export default Item;
