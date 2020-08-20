import React, { useEffect } from "react";
import { Base } from "./styles";
import { useState } from "react";

export function VideoComponent({ src }) {
    const [embedLink, setEmbedLink] = useState();
    useEffect(() => {
        getEmbedLink();
    }, [])
    function getEmbedLink() {
        const videoId = src.match(/watch\?v=(\w*)/)[1];
        setEmbedLink("https://www.youtube.com/embed/" + videoId);
    }
    return <Base src={embedLink} allowFullScreen></Base>;
}
