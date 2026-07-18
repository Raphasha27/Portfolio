import http from 'http';
import fs from 'fs';
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            console.log("RECEIVED ERROR:", body);
            fs.appendFileSync('client_errors.log', body + '\n');
            res.end('ok');
            process.exit(0);
        });
    } else {
        res.end('ok');
    }
});
server.listen(9999, () => console.log('Error server listening on 9999'));