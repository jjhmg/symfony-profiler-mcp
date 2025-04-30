// index.ts
process.stdin.setEncoding('utf8');

console.log('{"status":"ready"}'); // Mensaje opcional para saber que el MCP está listo

process.stdin.on('data', (data) => {
    try {
        // Convertir el Buffer a string antes de parsearlo
        const input = JSON.parse(data.toString());
        // Aquí procesarás las peticiones del LLM
        // Por ahora, simplemente responde con un eco
        const response = {
            echo: input,
            message: "¡MCP funcionando!"
        };
        process.stdout.write(JSON.stringify(response) + '\n');
    } catch (e) {
        process.stdout.write(JSON.stringify({ error: "JSON inválido" }) + '\n');
    }
});
