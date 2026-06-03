import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./ai_generator.db")
    API_HOST = os.getenv("API_HOST", "0.0.0.0")
    API_PORT = int(os.getenv("API_PORT", 8000))
    ENVIRONMENT = os.getenv("ENVIRONMENT", "development")
    CORS_ORIGINS = [
        "http://localhost:3000",
        "http://localhost:8000",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:8000"
    ]

config = Config()

# Debug: Print loaded config
print(f"\n✅ Config loaded:")
print(f"   GROQ_API_KEY: {'✅ Set' if config.GROQ_API_KEY else '❌ NOT SET'}")
print(f"   DATABASE_URL: {config.DATABASE_URL}")
print(f"   ENVIRONMENT: {config.ENVIRONMENT}")
print(f"   API_PORT: {config.API_PORT}\n")

# Verify Groq key is set
if not config.GROQ_API_KEY:
    print("❌ ERROR: GROQ_API_KEY not set!")
    print("   Solution: Add GROQ_API_KEY to backend/.env file")
    exit(1)