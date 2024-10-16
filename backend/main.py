from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
from collections import defaultdict, deque

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str
    type: str

class Edge(BaseModel):
    source: str
    target: str

class GraphInput(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


def is_dag(nodes: List[str], edges: List[Dict[str, str]]) -> bool:
    graph = defaultdict(list)
    in_degree = {node: 0 for node in nodes}


    for edge in edges:
        graph[edge['source']].append(edge['target'])
        in_degree[edge['target']] += 1


    queue = deque([node for node in nodes if in_degree[node] == 0])
    visited_count = 0

    while queue:
        current = queue.popleft()
        visited_count += 1
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

 
    return visited_count == len(nodes)

@app.post("/pipelines/parse")
async def check_graph(graph_input: GraphInput):
    nodes = [node.id for node in graph_input.nodes]
    edges = [{"source": edge.source, "target": edge.target} for edge in graph_input.edges]

    num_nodes = len(nodes)
    num_edges = len(edges)

 
    dag_check = is_dag(nodes, edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag_check
    }

