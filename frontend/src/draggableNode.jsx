// draggableNode.js

export const DraggableNode = ({ type, label,icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`cursor-grab w-fit min-w-20 py-2 text-white/80 font-normal  flex items-center hover:shadow-inner hover:bg-purple-800/90 rounded-lg bg-purple-800 justify-center flex-col ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
         <div className="text-xl">{icon}</div>
         <p className="text-sm">{label}</p>
      </div>
    );
  };
  