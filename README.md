# First LLM API Call

A beginner-to-intermediate project demonstrating how to integrate a local Large Language Model (LLM) with a TypeScript and Node.js application using Ollama.

This project was created as the first practical step toward understanding LLM applications and Agentic AI.

## Tech Stack

- TypeScript
- Node.js
- Ollama
- Llama 3.2
- Readline
- npm

## What I Implemented

### 1. First LLM Call

Connected a TypeScript application with a local LLM using Ollama.

The application sends a user message to the LLM and receives a generated response.

Flow:

User Input → TypeScript → Ollama → LLM → Response

---

### 2. System Message

Implemented a system message to control the behavior of the assistant.

Example:

```text
You are a helpful assistant.
You can answer in maximum 2 sentences.
If you don't know the answer, say "I don't know".

### 3. Message Roles

System
   ↓
User
   ↓
Assistant

### 4. Continuous Chat Loop

You: message
        ↓
LLM response
        ↓
You: message
        ↓
LLM response
        ↓
       ...


### 5. Conversation History

System
User: My name is Ayush.
Assistant: Nice to meet you, Ayush.
User: What is my name?
Assistant: Your name is Ayush.


### 6. Context Awareness

User: My favorite programming language is TypeScript.

User: Which language do I like?

Assistant: You mentioned that your favorite programming language is TypeScript.

### 7. Async/Await

User Input
    ↓
Async LLM Request
    ↓
Wait for Response
    ↓
Display Response

---

# Project Architecture

User
  ↓
readline
  ↓
userInput
  ↓
messages.push(user message)
  ↓
Ollama Chat API
  ↓
Llama 3.2
  ↓
Assistant Response
  ↓
messages.push(assistant response)
  ↓
Console Output
  ↓
Next User Input
 
---

# Conversation History Flow

                    ┌──────────────┐
                    │   System     │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │    User      │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │  Assistant   │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │    User      │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │  Assistant   │
                    └──────┬───────┘
                           ↓
                     Conversation
                        History


---

Running the Project

- 1. Install dependencies
npm install

-2. Make sure Ollama is installed
ollama pull llama3.2

-3. Run the application
npx tsx src/index.ts

#Project Goal

The goal of this project is to understand the fundamentals of building an LLM-powered application before moving toward more advanced Agentic AI concepts.