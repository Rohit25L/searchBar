import mongoose from 'mongoose';

let dbConnection = null

const connect = async () => {
    if (dbConnection) {
        return dbConnection;
    }

    try {
        dbConnection = await mongoose.connect(process.env.DB_URL);
        return dbConnection;
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        throw err;
    }
};

const disconnect = async () => {
    if (dbConnection) {
        try {
            await mongoose.disconnect();
            console.log('MongoDB Disconnected');
            dbConnection = null;
        } catch (err) {
            console.error('MongoDB Disconnection Error:', err);
            throw err;
        }
    }
};

export default { connect, disconnect };