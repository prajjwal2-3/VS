import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const DatabaseQueryNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="Database Query"
      fields={[
        { key: 'query', label: 'Query', type: 'text', defaultValue: 'SELECT * FROM users' },
        {
          key: 'dbType',
          label: 'Database',
          type: 'select',
          options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
          defaultValue: 'MySQL',
        },
      ]}
      handles={[
        { type: 'target', position: Position.Left, id: `${props.id}-dbInput` },
        { type: 'source', position: Position.Right, id: `${props.id}-dbResult` },
      ]}
      customContent={<div>Executes a database query</div>}
    />
  );
};
