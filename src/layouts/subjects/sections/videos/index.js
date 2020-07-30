import React from "react";
import { Title, Base, ListVideos, VideoItem } from "./styles";
import { VideoComponent } from "./components";

export default function Videos({ location }) {
    const { lesson } = location.state;
    return (
        <Base>
            <Title>{lesson.title}</Title>
            <VideoComponent></VideoComponent>
            <ListVideos>
                <VideoItem>Algum Video</VideoItem>
                <VideoItem>Outro Video</VideoItem>
                <VideoItem>Assista mais esse vídeo</VideoItem>
                <VideoItem>Olha um video Aqui</VideoItem>
                <VideoItem>Já chega de Video</VideoItem>
            </ListVideos>
        </Base>
    );
}
