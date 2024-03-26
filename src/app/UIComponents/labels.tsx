import { Gradient_Text, Label_1, Label_2, Label_3, Label_4, Label_5, Message_btg_sports_text_color_7, Message_btg_sports_text_color_white, OutputLabel_form } from "../styled";

export function MsjBTGStxtc7({ children, id, htmlFor }: { children: React.ReactNode, id: string, htmlFor: string }) {
    return (
        <Message_btg_sports_text_color_7 id={id} htmlFor={htmlFor}>
            {children}
        </Message_btg_sports_text_color_7>
    );
}

export function MsjBTGStxtcw({ children, id, htmlFor }: { children: React.ReactNode, id: string, htmlFor: string }) {
    return (
        <Message_btg_sports_text_color_white id={id} htmlFor={htmlFor}>
            {children}
        </Message_btg_sports_text_color_white>
    );
}

export function Label1({ children, id, htmlFor }: { children: React.ReactNode, id: string, htmlFor?: string }) {
    return (
        <Label_1 id={id} htmlFor={htmlFor}>
            {children}
        </Label_1>
    );
}

export function Label2({ children, id, htmlFor }: { children: React.ReactNode, id: string, htmlFor?: string }) {
    return (
        <Label_2 id={id} htmlFor={htmlFor}>
            {children}
        </Label_2>
    );
}

export function Label3({ children, id, htmlFor }: { children: React.ReactNode, id: string, htmlFor?: string }) {
    return (
        <Label_3 id={id} htmlFor={htmlFor}>
            {children}
        </Label_3>
    );
}

export function Label4({ children, id, htmlFor }: { children: React.ReactNode, id: string, htmlFor?: string }) {
    return (
        <Label_4 id={id} htmlFor={htmlFor}>
            {children}
        </Label_4>
    );
}

export function Label5({ children, id, htmlFor }: { children: React.ReactNode, id: string, htmlFor?: string }) {
    return (
        <Label_5 id={id} htmlFor={htmlFor}>
            {children}
        </Label_5>
    );
}

export function GradientTextLabel({ children, id}: { children: React.ReactNode, id: string }) {
    return (
        <Gradient_Text id={id}>
            {children}
        </Gradient_Text>
    );
}

export function OutputLabelForm({ children, id, className }: { children: React.ReactNode, id: string, className?:string }) {
    return (
        <OutputLabel_form id={id}>
            {children}
        </OutputLabel_form>
    );
}
