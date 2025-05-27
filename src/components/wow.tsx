"use client";

import {useEffect} from "react";

export default function Wow() {
    useEffect(() => {
        import('wowjs').then(WOW => {
            new WOW.WOW().init();
        });
    }, [])
    return null;
}