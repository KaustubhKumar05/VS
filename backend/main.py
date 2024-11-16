from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware


def is_cyclic(nodes, edges):
    from collections import defaultdict

    visited = set()
    graph = defaultdict(list)
    for source, target in edges:
        graph[source].append(target)

    def dfs(node):
        visited.add(node)

        for connection in graph[node]:
            if connection in visited:
                return True
            return dfs(connection)

        visited.remove(node)
        return False

    for node in nodes:
        if node not in visited:
            if dfs(node):
                return True

    return False


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    body = await request.json()
    nodes = body.get("nodes")
    edges = body.get("edges")

    nodeList = [node.get("id") for node in nodes]
    edgeList = [(edge.get("source"), edge.get("target")) for edge in edges]
    is_dag = not is_cyclic(nodeList, edgeList)

    return {
        "status": "parsed",
        "num_nodes": len(nodeList),
        "num_edges": len(edgeList),
        "is_dag": is_dag,
    }
