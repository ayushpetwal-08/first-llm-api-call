import ollama from "ollama";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const messages = [
    {
        role: "system",
        content: "You are a helpful assistant. You can answer in maximum 2 sentences. If you don't know the answer, say 'I don't know'."
    }
];

async function main(userInput: string) {
    messages.push({
        role: "user",
        content: userInput
    });
    const response = await ollama.chat({
        model: "llama3.2",
        messages: messages,
    });
    messages.push({
        role: "assistant",
        content: response.message.content
    });
    console.log("Assistant:", response.message.content);
};

function askQuestion(): void {
    rl.question("You: ", async (input: string) => {
        const userInput = input.trim();
        await main(userInput).catch((error) => {
            console.error("Error:", error);
        });
        askQuestion();
    });
    
}

askQuestion();