import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const ConditionalNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="Condition"
      fields={[
        { key: 'value1', label: 'Value 1', type: 'text', defaultValue: '' },
        { key: 'value2', label: 'Value 2', type: 'text', defaultValue: '' },
        {
          key: 'condition',
          label: 'Condition',
          type: 'select',
          options: ['Equals', 'Not Equals', 'Greater Than', 'Less Than'],
          defaultValue: 'Equals',
        },
      ]}
      handles={[
        { type: 'target', position: Position.Left, id: `${props.id}-value1` },
        { type: 'target', position: Position.Left, id: `${props.id}-value2`, style: { top: '50%' } },
        { type: 'source', position: Position.Right, id: `${props.id}-result` },
      ]}
      customContent={<div>Checks conditions between two values</div>}
    />
  );
};
