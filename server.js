import app from './app.js';
import db from './src/config/db.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    db.connect()
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.error("Failed to connect to DB:", err);
    });
});

// gracefully shutdown server
const gracefulShutdown = async () => {
    console.log('Starting graceful shutdown...');
    try {
        await db.disconnect();
        console.log('Mongoose disconnected');
        app.close(() => {
            console.log('Server closed.');
            process.exit(0);
        });

        setTimeout(() => {
            console.error('Could not close connections in time, forcefully shutting down');
            process.exit(1);
        }, 5000);
    } catch (error) {
        console.error('Error disconnecting from Mongoose:', error);
        process.exit(1);
    }

};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);