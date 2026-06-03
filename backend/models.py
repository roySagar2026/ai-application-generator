from pydantic import BaseModel
from typing import Optional, List, Dict, Any

class GenerateRequest(BaseModel):
    prompt: str

class Stage(BaseModel):
    name: str
    description: str
    status: str

class GenerationResult(BaseModel):
    success: bool
    error: Optional[str] = None
    configuration: Optional[Dict[str, Any]] = None
    stages: Optional[List[Stage]] = None
    metadata: Optional[Dict[str, Any]] = None
