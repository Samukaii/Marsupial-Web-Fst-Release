import { TweenMax } from "gsap";
import React, { useEffect } from "react";
import { CollapseForm } from "./styles";
import { HideFormButton } from "./styles";

export const CollapsibleForm = ({ receiveOpen, onClose, children }) => {
    let formReference;

    useEffect(() => {
        receiveOpen(open);
    }, [receiveOpen]);

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
