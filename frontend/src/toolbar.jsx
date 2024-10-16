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
            <div className='grid grid-flow-col mx-auto w-fit gap-2'>
                <DraggableNode type='customInput' label='Input' icon={<MdInput/>}/>
                <DraggableNode type='llm' label='LLM' icon={<LuBrainCircuit/>}/>
                <DraggableNode type='customOutput' label='Output' icon={<MdOutlineInput/>} />
                <DraggableNode type='text' label='Text' icon={<MdOutlineTextSnippet/>}/>
                <DraggableNode type='mathops' label='Math' icon={<BiMath />}/>
                <DraggableNode type='conditional' label='Conditions' icon={<PiGreaterThanOrEqualBold/>}/>
                <DraggableNode type='dbQuery' label='Query' icon={<MdOutlineQueryStats />}/>
                <DraggableNode type='apiCall' label='API' icon={<TbApi/>}/>
                <DraggableNode type='logic' label='Logic' icon={<TbLogicXnor/>}/>

            </div>
        </div>
    );
};
