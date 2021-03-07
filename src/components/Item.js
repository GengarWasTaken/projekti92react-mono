import React, { useState } from "react";

function Item({ name, model, collapseItem }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="item">
      <p className="name">{isCollapsed ? "" : [name]}</p>
      <p className="collapse" onClick={(e) => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "+" : "-"}
      </p>
      <p className="model">{isCollapsed ? "" : [model]}</p>
    </div>
  );
}

export default Item;
