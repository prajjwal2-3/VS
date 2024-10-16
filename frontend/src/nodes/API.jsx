import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const APICallNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="API Call"
      fields={[
        { key: 'url', label: 'URL', type: 'text', defaultValue: 'https://api.example.com' },
        {
          key: 'method',
          label: 'Method',
          type: 'select',
          options: ['GET', 'POST', 'PUT', 'DELETE'],
          defaultValue: 'GET',
        },
      ]}
      handles={[
        { type: 'target', position: Position.Left, id: `${props.id}-request` },
        { type: 'source', position: Position.Right, id: `${props.id}-response` },
      ]}
      customContent={<div>Makes an API request</div>}
    />
  );
};
