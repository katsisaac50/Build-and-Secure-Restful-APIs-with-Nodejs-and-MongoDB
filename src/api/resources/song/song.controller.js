import * as Joi from 'joi';
import Song from './song.model';
export default{
  async create(req,res){
    try{
      const schema = Joi.object().keys({
      title: Joi.string().required(),
      url: Joi.string().required(),
      rating: Joi.number()
      .integer()
      .min(0)
      .max(5)
      .optional(),
    });
    const {value, error} = schema.validate(req.body);
    if(error && error.details){
      return res.status(400).json(error);
    }
    const song = await Song.create(value);
    return res.json(song);
    }catch(err){
      console.error(err);
      return res.status(500).send(err);
    }
    
  },
  async findAll(req, res){
    try{
      const{page, perPage} = req.query;
      const options = {
        page: parseInt(page, 10),
        limit: parseInt(perPage, 10),
      };
      const songs = await Song.paginate({}, options);
      return res.json(songs);
    }catch(err){
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async findOne(req, res){
    try{
      const{id} = req.params;
      const song = await Song.findById(id);
      if(!song){
        return res.status(404).json({err:'could not find song'});
      }
      return res.json(song);

    }catch(err){
      console.error(err);
      return res.status(500).send(err);
    }
  },
};
