// submit.js
import { useStore } from './store';
import {motion} from 'framer-motion'
export const SubmitButton = () => {
    const {
        nodes,
        edges
      } = useStore();

      async function getResponse() {
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes: nodes, edges: edges }),
            });
    
            const data = await response.json();
            const message = `Graph Details:\n\n` +
                            `Number of Nodes: ${data.num_nodes}\n` +
                            `Number of Edges: ${data.num_edges}\n` +
                            `Is it a DAG?: ${data.is_dag ? 'Yes' : 'No'}`;
            alert(message);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while fetching the graph details.');
        }
    }
    return (
        <div className="absolute w-full z-[5]">
           <motion.button
        className="absolute top-4 right-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={getResponse}
      >
        Submit
      </motion.button>
        </div>
    );
}
