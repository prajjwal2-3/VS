import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const LogicGateNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="Logic Gate"
      fields={[
        {
          key: 'gateType',
          label: 'Gate Type',
          type: 'select',
          options: ['AND', 'OR', 'NOT'],
          defaultValue: 'AND',
        },
      ]}
      handles={[
        { type: 'target', position: Position.Left, id: `${props.id}-input1` },
        { type: 'target', position: Position.Left, id: `${props.id}-input2`, style: { top: '50%' }, condition: props.data.gateType !== 'NOT' },
        { type: 'source', position: Position.Right, id: `${props.id}-output` },
      ]}
      customContent={<div>Logic Gate Node</div>}
    />
  );
};
