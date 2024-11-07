import { connect } from 'mongoose';

export default async () => {
	try {
		await connect(process.env.MONGODB_CONNECTION_STRING);
		console.log('🌱 DB connected successfully');
	} catch (error) {
		console.log(`💀 DB ERROR : ${error.message}`);
	}
};
