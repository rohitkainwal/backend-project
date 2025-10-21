
import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({

    videoFile: {
        type: String,// cloudnary
        requiredL:true
        
    },

      thumbnail: {
        type: String,// cloudnary
        requiredL:true
        
    },
    
      title: {
        type: String,
        requiredL:true
        
    },
    
      description: {
        type: String,
        requiredL:true
        
    },
      duration: {
        type: number, // cloudnary
        required:true
        
    },
    
      views: {
        type: number,
       default: 0
        
    },

      isPublished: {
       type:Boolean,
       default:true
        
    },
    
      owner: {
        type: Schema.Types.ObjectId,
        ref:"User",
        
    }
    
    

}, {timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model.Schema("Video", videoSchema)