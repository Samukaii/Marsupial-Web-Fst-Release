import React, { useEffect } from "react";
import { Base } from "./styles";
import { useState } from "react";

export function VideoComponent({ source }) {
    const [embedLink, setEmbedLink] = useState("");
    useEffect(() => {
        getEmbedLink();
    }, [source]);
    function getEmbedLink() {
        if (!source) return;
        const matchUrl = source.match(/watch\?v=(\w*)/);
        const videoId = matchUrl ? matchUrl[1] : "";
        if (!matchUrl) return;
        setEmbedLink("https://www.youtube.com/embed/" + videoId);
    }
    return <Base src={embedLink} allowFullScreen></Base>;
}
