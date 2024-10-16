import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const MathOperationNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="Math Operation"
      fields={[
        { key: 'input1', label: 'Input 1', type: 'number', defaultValue: 0 },
        { key: 'input2', label: 'Input 2', type: 'number', defaultValue: 0 },
        {
          key: 'operation',
          label: 'Operation',
          type: 'select',
          options: ['Add', 'Subtract', 'Multiply', 'Divide'],
          defaultValue: 'Add',
        },
      ]}
      handles={[
        { type: 'target', position: Position.Left, id: `${props.id}-input1` },
        { type: 'target', position: Position.Left, id: `${props.id}-input2`, style: { top: '50%' } },
        { type: 'source', position: Position.Right, id: `${props.id}-result` },
      ]}
      customContent={<div>Performs math operations on inputs</div>}
    />
  );
};
