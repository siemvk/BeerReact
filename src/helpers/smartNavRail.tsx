import React, { useEffect, useMemo, useState } from "react";
import { NavRail, NavProps } from "../Navs/NavRail/NavRail";


export interface AutoNavRailProps extends React.HTMLAttributes<HTMLElement> {
    navConfig: NavProps
}


export const AutoNavRail = ({
    navConfig,
    children,
}: AutoNavRailProps) => {
    const [isLeftOrOther, setIsLeftOrOther] = useState(navConfig.pos !== "right");
    useMemo(() => {
        setIsLeftOrOther(navConfig.pos !== "right")
    }, [navConfig])
    return <>
        {isLeftOrOther && <NavRail {...navConfig}></NavRail>}
        {children}
        {!isLeftOrOther && <NavRail {...navConfig}></NavRail>}


    </>
};

export default AutoNavRail;