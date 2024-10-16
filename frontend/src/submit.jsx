// submit.js
import { useStore } from './store';

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
            <button type="submit" className="p-2 m-4 rounded-lg  text-white font-semibold bg-purple-500 " onClick={getResponse}>Submit</button>
        </div>
    );
}
