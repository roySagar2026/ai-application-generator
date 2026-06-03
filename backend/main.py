from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from models import GenerateRequest, GenerationResult
from pipeline import GenerationPipeline
from config import config
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="AI Application Generator API",
    description="NLP-based system that generates executable application configurations",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=config.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pipeline = GenerationPipeline()

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "ai-application-generator"}

@app.post("/api/generate", response_model=GenerationResult)
async def generate(request: GenerateRequest):
    """Generate application configuration from natural language prompt"""
    try:
        if not request.prompt or len(request.prompt.strip()) == 0:
            raise HTTPException(status_code=400, detail="Prompt cannot be empty")
        
        logger.info(f"Generating configuration for prompt: {request.prompt[:100]}...")
        
        result = pipeline.generate(request.prompt)
        
        if not result["success"]:
            raise HTTPException(status_code=500, detail=result.get("error", "Generation failed"))
        
        return GenerationResult(**result)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in /api/generate: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "AI Application Generator API",
        "version": "1.0.0",
        "docs": "/docs"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",  # Change this line
        host=config.API_HOST,
        port=config.API_PORT,
        reload=(config.ENVIRONMENT == "development")
    )
