import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className='bg-gradient-to-br from-[#0F0923] to-[#340B85]'>
      <PipelineToolbar />
      <SubmitButton />
      <PipelineUI />
      
    </div>
  );
}

export default App;
