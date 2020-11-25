import axios from 'axios';
import { Video } from './Video';

const API = 'http://localhost:4000';
//Pide cosas al  backend
export const getVideos = async () => {
    return await axios.get('http://localhost:4000/videos');
       
}

export const createVideos = async (video: Video) => {
    return await axios.post('http://localhost:4000/videos', video);
       
}

