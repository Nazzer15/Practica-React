import React, { useEffect, useState } from 'react';
import { Video } from './Video';
import * as videoService from './VideoServices'
import videoItem from './VideoItem'
import VideoItem from './VideoItem';

const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res = await videoService.getVideos();
        setVideos(res.data);
    }

    useEffect(() => {
        loadVideos();
    }, [])

    return (
        <div>
            {videos.map((video) => {
                return <VideoItem video={video} />
            })}
        </div>
    )
}

export default VideoList
