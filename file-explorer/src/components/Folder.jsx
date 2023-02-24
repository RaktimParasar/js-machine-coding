import { useState } from "react";

import { FileIcon, FolderIcon } from "./Icons";

import "../App.css";

const Folder = ({ explorer }) => {
  console.log("explorer", explorer);

  const [expand, setExpand] = useState(false);

  const handleFolderClick = () => setExpand((visible) => !visible);

  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder-wrapper" onClick={handleFolderClick}>
          <span>
            <FolderIcon /> {explorer.name}
          </span>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "2.5rem" }}
        >
          {explorer.items.map((exp) => (
            <Folder explorer={exp} key={exp.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span className="explorer-items">
        <FileIcon /> {explorer.name}
      </span>
    );
  }
};

export default Folder;
