import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="Text Node"
      fields={[
        { key: 'text', label: 'Text', defaultValue: '{{input}}', type: 'text' }
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${props.id}-output` }
      ]}
      customContent={<p>Press Enter after typing in curly braces to add a handle.</p>}
    />
  );
};
