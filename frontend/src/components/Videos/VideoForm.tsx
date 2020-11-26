import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { Video } from './Video'
import * as videoServices from './VideoServices'
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom'

interface Params {
    id: string;
}

const VideoForm = () => {

    const history = useHistory();
    const params = useParams<Params>();


    const initialState = {
        title: "",
        description: "",
        url: "",
    }

    const [video, setVideo] = useState<Video>(initialState);
    //ChangeEvent registra cuando se hacen cambios a los atributos de los Input y en los text area
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //Hace una copia del video actual
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!params.id) {
            await videoServices.createVideos(video);
            toast.success('New video added');
            //Pone los input en blanco
            setVideo(initialState);
        } else {
            await videoServices.updateVideo(params.id, video)
        }

        history.push('/');
    }

    const getVideo = async (id: string) => {
        const res = await videoServices.getVideo(id);
        console.log(res);
        const { title, description, url } = res.data;
        setVideo({ title, description, url });
    }

    //Realizar consultas al backend
    useEffect(() => {
        if (params.id) getVideo(params.id);
    }, []);


    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card-body">
                    <h3>New Video</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="title" placeholder="Write a title for this video" className="form-control" onChange={handleInputChange} autoFocus />
                        </div>
                        <div className="form-group">
                            <input type="text" name="url" placeholder="https://somesite.com" className="form-control" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <textarea name="description" rows={3} className="form-control" placeholder="Write a description" onChange={handleInputChange} />
                        </div>

                        {
                            params.id ?
                                <button className="btn btn-info">Update Video</button>
                                :
                                <button className="btn btn-primary">Create Video</button>
                        }

                    </form>
                </div>
            </div>
        </div>
    )
}

export default VideoForm;
