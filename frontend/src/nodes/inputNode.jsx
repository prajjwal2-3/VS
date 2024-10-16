import BaseNode from './BaseNode';
import { Position } from 'reactflow';
export const InputNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="Input"
      fields={[
        { label: 'Name', key: 'inputName' ,defaultValue: 'input_1'},
        { label: 'Type', key: 'inputType', type: 'select', options: ['Text', 'File'] },
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${props.id}-value` },
      ]}
    />
  );
};
