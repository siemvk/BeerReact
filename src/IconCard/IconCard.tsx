import React, { type HTMLAttributes } from "react";
import { Flex } from "../Navs/Flex/Flex"


/**
 * @deprecated Just make your own with a Card, a nav and a `StyledIcon` component.
 */
export interface IconCardProps extends HTMLAttributes<HTMLElement> {
    icon: string;
    text: string;
}

/**
 * @deprecated Just make your own with a Card, a nav and a `StyledIcon` component.
 */
export function IconCard({
    icon,
    text,
    className = "",
    ...props
}: IconCardProps) {
    return (
        <article className={`no-padding border center-align ${className}`} {...props}>
            <div className="padding">
                <Flex align="center-align" className="primary-container small-padding min square">
                    <i className="extra fill">
                        {icon}
                    </i>
                </Flex>

                <h3>{text}</h3>
            </div>
        </article>
    );
}

export default IconCard;