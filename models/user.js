import mongoose from 'mongoose';

const UserSchema  = new mongoose.Schema({
    first_name: {type: String, require: true},
    last_name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    age: {type: Number, require: true},
    password: {type: String, require: true},
    role: {
        type: String,
        enum: ['admin', 'usuario'],
        default: 'usuario',
      },
    

}, { timestamps: true });

export default mongoose.model('User', UserSchema);