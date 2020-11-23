import {Router} from 'express';
import * as videoCtrl from './videos.controller';
const router = Router();

//Get all videos
router.get('/videos', videoCtrl.getVideos);

//Get one video
router.get('/videos/:id', videoCtrl.getVideo);

//Create one video
router.post('/videos', videoCtrl.createVideos);

//Delete one video
router.delete('/videos/:id', videoCtrl.deleteVideo);

//Update one video
router.put('/videos/:id', videoCtrl.updateVideo);

export default router;








