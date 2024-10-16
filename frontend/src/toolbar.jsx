// toolbar.js
import { DraggableNode } from './draggableNode';
import { MdOutlineInput,MdOutlineTextSnippet,MdOutlineQueryStats,MdInput } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { BiMath } from "react-icons/bi";
import { TbLogicXnor } from "react-icons/tb";
import { PiGreaterThanOrEqualBold } from "react-icons/pi";
import { TbApi } from "react-icons/tb";
export const PipelineToolbar = () => {

    return (
        <div className='p-2 grid gap-2 bottom-0   fixed z-[5] w-full'>
            <div className="relative w-fit mx-auto">
      <div className="absolute inset-0 bg-purple-950 opacity-75 blur-xl"></div>
      <div 
        className="relative bg-purple-900 bg-opacity-30 backdrop-blur-md overflow-hidden rounded-full flex space-x-2 p-2"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%14noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundBlendMode: 'overlay',
          backgroundSize: '200px 200px',
        }}
      >
        <DraggableNode type="customInput" label="Input" icon={<MdInput />} />
        <DraggableNode type="llm" label="LLM" icon={<LuBrainCircuit />} />
        <DraggableNode type="customOutput" label="Output" icon={<MdOutlineInput />} />
        <DraggableNode type="text" label="Text" icon={<MdOutlineTextSnippet />} />
        <DraggableNode type="mathops" label="Math" icon={<BiMath />} />
        <DraggableNode type="conditional" label="Conditions" icon={<PiGreaterThanOrEqualBold />} />
        <DraggableNode type="dbQuery" label="Query" icon={<MdOutlineQueryStats />} />
        <DraggableNode type="apiCall" label="API" icon={<TbApi />} />
        <DraggableNode type="logic" label="Logic" icon={<TbLogicXnor />} />
      </div>
    </div>
        </div>
    );
};
