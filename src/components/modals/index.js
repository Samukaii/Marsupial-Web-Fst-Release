import { Base, Button, Message } from "./styles";
import { TweenMax } from "gsap";
import React, { useState, useRef } from "react";
import { useEffect } from "react";

export const HiddenMessage = ({
    children,
    onClick,
    receiveShow = () => {}
}) => {
    const styleRef = useRef(null);

    useEffect(() => {
        receiveShow(show);
    }, [receiveShow]);

    function show() {
        TweenMax.to(styleRef.current, 0.2, {
            scaleY: 1
        });
    }

    function hide(event) {
        event.preventDefault();
        TweenMax.to(styleRef.current, 0.2, {
            scaleY: 0
        });
    }
    return (
        <Base ref={styleRef}>
            <Message>{children}</Message>
            <Button onClick={hide}>&times;</Button>
        </Base>
    );
};
