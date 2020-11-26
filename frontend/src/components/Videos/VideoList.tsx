import React, { useEffect, useState } from 'react';
import { Video } from './Video';
import * as videoService from './VideoServices'
import videoItem from './VideoItem'
import VideoItem from './VideoItem';

const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res = await videoService.getVideos();

        const formatedVideos = res.data.map(video => {
            return {
                ...video, 
                //Aqui convierte el createdAt de string a Date
                createdAt: video.createdAt ? new Date(video.createdAt): new Date(),
                updateAt: video.updateAt ? new Date(video.updateAt): new Date(),
            }
            //Ordena los video en fecha de creacion
        }).sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());


        setVideos(formatedVideos);
    }

    useEffect(() => {
        loadVideos();
    }, [])

    return (
        <div className="row">
            {videos.map((video) => {
                return <VideoItem video={video} key={video._id} loadVideos = {loadVideos}/>
            })}
        </div>
    )
}

export default VideoList
