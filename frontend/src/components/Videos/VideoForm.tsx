import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Video } from './Video'
import * as videoServices from './VideoServices'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'


const VideoForm = () => {

    const history = useHistory();

    const initialState = {
        title: '',
        description: '',
        url: '',
    }

    const [video, setvideo] = useState<Video>(initialState);
    //ChangeEvent registra cuando se hacen cambios a los atributos de los Input y en los text area
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //Hace una copia del video actual
        setvideo({ ...video, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await videoServices.createVideos(video);
        toast.success('New video added');
        //Pone los input en blanco
        setvideo(initialState);
        history.push('/');
    }

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
                        <button className="btn btn-primary">Create Video</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VideoForm
