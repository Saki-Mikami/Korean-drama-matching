# backend/main.py
from fastapi import FastAPI, Body
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from logic import calculate_match
from models import Answer

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "FastAPI 動いてるよ"}

@app.post("/match")
def match(answers: Answer):
    print("received answers:", answers)  # デバッグ用

    result, total_scores = calculate_match(answers.dict())

    return {
        "result": result,
        "scores": total_scores
    }
