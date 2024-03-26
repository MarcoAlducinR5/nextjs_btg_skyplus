import { Botton_imagen, Btn_btg_sports_1, Btn_btg_sports_2, Btn_btg_sports_3, Btn_btg_sports_4, Btn_btg_sports_5, Btn_btg_sports_6, Cambiar_metodo_pago } from "../styled";

export function BtnBtgSports1({ children, name }: { children: React.ReactNode, name?: string }) {
    return (
        <Btn_btg_sports_1 name={name}>
            {children}
        </Btn_btg_sports_1>
    );
}

export function BtnBtgSports2({ children, name }: { children: React.ReactNode, name?: string }) {
    return (
        <Btn_btg_sports_2 name={name}>
            {children}
        </Btn_btg_sports_2>
    );
}

export function BtnBtgSports3({ children, name, className }: { children: React.ReactNode, name?: string, className?: string }) {
    return (
        <Btn_btg_sports_3 name={name} className={className}>
            {children}
        </Btn_btg_sports_3>
    );
}

export function BtnBtgSports4({ children, name }: { children: React.ReactNode, name?: string }) {
    return (
        <Btn_btg_sports_4 name={name}>
            {children}
        </Btn_btg_sports_4>
    );
}

export function BtnBtgSports5({ children, name }: { children: React.ReactNode, name?: string }) {
    return (
        <Btn_btg_sports_5 name={name}>
            {children}
        </Btn_btg_sports_5>
    );
}

export function BtnBtgSports6({ children, name, className }: { children: React.ReactNode, name?: string, className?: string }) {
    return (
        <Btn_btg_sports_6 name={name} className={className}>
            {children}
        </Btn_btg_sports_6>
    );
}

export function BtnCambiarMetodoPago({ children, name }: { children: React.ReactNode, name?: string }) {
    return (
        <Cambiar_metodo_pago name={name}>
            {children}
        </Cambiar_metodo_pago>
    );
}

export function BottonImagen({ children, right, height  }: { children: React.ReactNode, right:string, height?:string }) {
    return (
        <Botton_imagen $right={right} $height={height}>
            {children}
        </Botton_imagen>
    );
}
