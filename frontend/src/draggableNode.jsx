// draggableNode.js
import {motion} from 'framer-motion'
export const DraggableNode = ({ type, label,icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <motion.div
        className={`cursor-grab w-fit min-w-20 py-2 text-white/80 font-normal  flex items-center hover:shadow-inner hover:bg-purple-800/90 rounded-full  justify-center flex-col ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
        draggable
      >
         <div className="text-xl">{icon}</div>
         <p className="text-sm">{label}</p>
      </motion.div>
    );
  };
  