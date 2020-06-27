import { TweenMax } from "gsap";
import React, { useEffect } from "react";
import { CollapseForm } from "./styles/index";
import { HideFormButton } from "./styles/index";

export const CollapsibleForm = ({ receiveOpen, onClose, children }) => {
    let formReference;

    useEffect(() => {
        receiveOpen(open);
    }, []);

    function open() {
        TweenMax.to(formReference, 0.3, {
            height: 200,
            scaleY: 1,
            marginTop: 10
        });
    }
    function close() {
        onClose();
        TweenMax.to(formReference, 0.3, {
            height: 0,
            scaleY: 0,
            marginTop: 0
        });
    }

    return (
        <CollapseForm ref={ref => (formReference = ref)}>
            <HideFormButton
                onClick={event => {
                    event.preventDefault();
                    close();
                }}
            />
            {children}
        </CollapseForm>
    );
};
