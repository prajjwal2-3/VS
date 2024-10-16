import { Handle, Position,useUpdateNodeInternals } from 'reactflow';
import { useState } from 'react';

const BaseNode = ({  data, nodeType, fields = [], handles = [], customContent = null }) => {
  console.log(data.id)
  console.log(data)
  const updateNodeInternals = useUpdateNodeInternals();
  const [nodeData, setNodeData] = useState(() => {
    const initialData = { ...data };
    fields.forEach((field) => {
      if (!initialData[field.key] && field.defaultValue) {
        initialData[field.key] = field.defaultValue;
      }
    });
    return initialData;
  });

  const [dynamicHandles, setDynamicHandles] = useState(handles);

  const handleInputChange = (key) => (e) => {
    setNodeData({
      ...nodeData,
      [key]: e.target.value,
    });
  };

  const handleKeyPress = (e, key) => {
    if (e.key === 'Enter' && nodeData[key].includes('{{') && nodeData[key].includes('}}')) {
    
      const newHandle = {
        type: 'target',
        position: Position.Left,
        id: `${data.id}-dynamic-${dynamicHandles.length}`,
        style: { top: `${33 + dynamicHandles.length * 15}%` }, 
      };
      updateNodeInternals(data.id);
      setDynamicHandles([...dynamicHandles, newHandle]);
    }
  };

  return (
    <div className="w-64 bg-[#4921afbe] rounded-lg shadow-xl overflow-hidden">
  
      {dynamicHandles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          className="w-3 h-3 bg-purple-500"
          style={handle.style} 
        />
      ))}

   
      <div className="bg-[#6026a8] text-white py-2 px-4 font-semibold">
        <span>{nodeType}</span>
      </div>

  
      <div className="p-4 space-y-3">
        {fields.map((field) => (
          <div key={field.key} className="flex flex-col">
            <label className="text-sm font-medium text-white mb-1">
              {field.label}:
            </label>
            {field.type === 'select' ? (
              <select
                value={nodeData[field.key] || ''}
                onChange={handleInputChange(field.key)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border text-white  bg-[#331a74ec] border-[#6a54a3ec] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type || 'text'}
                value={nodeData[field.key] || ''}
                onChange={handleInputChange(field.key)}
                onKeyDown={(e) => handleKeyPress(e, field.key)} 
                className="mt-1 block w-full border text-white  bg-[#331a74ec] border-[#6a54a3ec] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            )}
          </div>
        ))}
      </div>

  
      {customContent && <div className="px-4 pb-4 text-white">{customContent}</div>}
    </div>
  );
};

export default BaseNode;
