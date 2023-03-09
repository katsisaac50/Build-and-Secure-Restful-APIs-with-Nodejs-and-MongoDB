import mongoose from 'mongoose';
import mongoosePaginate from'mongoose-paginate';

const songSchema = new Schema({
  title: {
    type: String,
    required:[true,'Song must have title'],
  },
  url:{
    type:String,
    required:[true, 'Song must have url'],
  },
  rating:{
    type:Number,
    default:0,
    max:5,
  },
});

songSchema.plugin(mongoosePaginate);

export default mongoose.model('Song',songSchema);