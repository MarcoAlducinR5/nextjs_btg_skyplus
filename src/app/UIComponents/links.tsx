import { Lnk_, Btn_link_btg_sports } from "../styled";

export function Link({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <Lnk_ href={href}>
            {children}
        </Lnk_>
    );
}

export function BtnLinkBtgSports({ children, id, href, target, type, className }: { children: React.ReactNode, id:string, href: string, target?:string, type?:string, className?:string }) {
    return (
        <Btn_link_btg_sports href={href} target={target} type={type} className={className}>
            {children}
        </Btn_link_btg_sports>
    );
}
