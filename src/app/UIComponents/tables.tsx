import { DBTGS_tbody, Dialog_btg_sports_1 } from "../styled";

export function DialogBtgSports1({ children, id, type }: { children: React.ReactNode, id?: string, type?: string }) {
    return (
        <Dialog_btg_sports_1 id={id}>
            {children}
        </Dialog_btg_sports_1>
    );
}

export function DbtgTBody({ children, id, type }: { children: React.ReactNode, id?: string, type?: string }) {
    return (
        <DBTGS_tbody>
            {children} 
        </DBTGS_tbody>
    );
}
