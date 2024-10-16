import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="LLM"
      fields={[]} 
      handles={[
        { type: 'target', position: Position.Left, id: `${props.id}-system`, style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: `${props.id}-prompt`, style: { top: '66%' } },
        { type: 'source', position:Position.Right, id: `${props.id}-response` },
      ]}
      customContent={<div>This is an LLM node</div>} 
    />
  );
};
