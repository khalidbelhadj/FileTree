import { useState } from 'react';
import { FileTreeNode } from './types';

export default function FileTree({
    node,
    indent,
}: {
  node: FileTreeNode;
  indent: number;
}): JSX.Element {
  const [expanded, setExpended] = useState(false);

  if (node.files === undefined) {
    return (
      <div>
        <button
          style={{ marginLeft: indent * 2 + 'rem' }}
          className="FileButton"
        >
          <img src="./src/assets/document.png" className="icon"></img>
          {node.name}

          
        </button>
      </div>
    );
  } else {
    if (expanded) {
      return (
        <div>
          <button
            onClick={() => setExpended((prev) => !prev)}
            style={{ marginLeft: indent * 2 + 'rem' }}
            className="FolderButton"
          >
            <img className="icon" src="./src/assets/folder.png"></img>
            {node.name}
          </button>

          {node.files.map((subNode) => (
            <FileTree node={subNode} indent={indent + 1} />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={() => setExpended((prev) => !prev)}
            style={{ marginLeft: indent * 2 + 'rem' }}
            className="FolderButton"
          >
            <img className="icon" src="./src/assets/empty-folder.png"></img>
            {node.name}
          </button>
        </div>
      );
    }
  }
}
