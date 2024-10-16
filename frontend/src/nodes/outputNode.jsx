import BaseNode from './BaseNode';
import { Position } from 'reactflow';
export const OutputNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="Output"
      fields={[
        { label: 'Name', key: 'outputName',defaultValue:'output_1' },
        { label: 'Type', key: 'outputType', type: 'select', options: ['Text', 'Image'] },
      ]}
      handles={[
        { type: 'target', position: Position.Left, id: `${props.id}-value` },
      ]}
    />
  );
};
