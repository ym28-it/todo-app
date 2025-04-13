from pydantic import BaseModel

class EchoRequest(BaseModel):
    message: str

def echo(app):
    
    @app.post("/echo")
    async def post_echo(echo_request: EchoRequest):
        return {"message": echo_request.message}
    
    @app.get("/echo")
    async def get_echo(echo_request: EchoRequest):
        return {"message": echo_request.message}
