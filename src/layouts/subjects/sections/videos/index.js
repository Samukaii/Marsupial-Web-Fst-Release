import React, { useState, useEffect } from "react";
import { Title, Base, ListVideos, VideoItem, BaseVideos } from "./styles";
import { VideoComponent } from "./components";
import { Api } from "../services";

export default function Videos({ location }) {
    const { lesson } = location.state;
    const [videos, setVideos] = useState(["cachorro"]);
    const [currentVideo, setCurrentVideo] = useState({ linkVideo: "" });

    useEffect(() => {
        getAllVideos();
    }, []);
    useEffect(() => {
        chooseCurrentVideo();
    }, [videos]);

    async function getAllVideos() {
        const { data } = await Api.get(`admin/videos?lesson=${lesson._id}`);
        setVideos(data.docs);
    }

    function chooseCurrentVideo(index = 0) {
        setCurrentVideo(videos[index]);
    }

    return (
        <Base>
            <Title>{lesson.title}</Title>

            <BaseVideos>
                <VideoComponent
                    source={currentVideo.linkVideo ?? ""}
                ></VideoComponent>
                <ListVideos>
                    <VideoItem>Algum Samuka</VideoItem>
                    <VideoItem>Outro Video</VideoItem>
                    <VideoItem>Assista mais esse vídeo</VideoItem>
                    <VideoItem>Olha um video Aqui</VideoItem>
                    <VideoItem>Já chega de Video</VideoItem>
                </ListVideos>
            </BaseVideos>
        </Base>
    );
}
