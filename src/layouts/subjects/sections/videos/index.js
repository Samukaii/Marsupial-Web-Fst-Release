import React from "react";
import { Title, Base, ListVideos, VideoItem, BaseVideos } from "./styles";
import { VideoComponent } from "./components";

export default function Videos({ location }) {
    const { lesson } = location.state;
    return (
        <Base>
            <Title>{lesson.title}</Title>

            <BaseVideos>
                <VideoComponent src="https://www.youtube.com/watch?v=GNu3Tciucr0"></VideoComponent>
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
