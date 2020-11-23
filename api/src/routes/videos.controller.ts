import { RequestHandler } from 'express';
import Video from './Video'

// Create a new video
export const createVideos: RequestHandler = async (req, res) => {
    //Busque si la url ya existe 
    const videoFound = await Video.findOne({ url: req.body.url })
    if (videoFound) {
        return res.status(301).json({ message: 'The URL already exists' });
    }
    //Guardo los datos en un objeto
    const video = new Video(req.body);
    //Guardo el objeto en la base de datos
    const savedVideo = await video.save();
    //Lo envio al cliente para que vea el objeto guardado
    res.json(savedVideo);
}

// Get all the videos
export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        return res.json(videos);
    } catch (error) {
        res.json(error)
    }
}

// Get one video
export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id);
    if(!videoFound) return res.status(204).json();
    return res.json(videoFound);
}

// Update one video
export const updateVideo: RequestHandler = async (req, res) => {
    //New lo que hace es que devuelve el objeto actualizado
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body , { new: true});
    if(!videoUpdated) return res.status(204).json();
    res.json(videoUpdated);
}

// Delete one video
export const deleteVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);
    if(!videoFound) return res.status(204).json();
    return res.json({message: "Video deleted"});
}
