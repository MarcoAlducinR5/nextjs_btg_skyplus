import { Input_text_btg_sports, Select_btg_sports } from "../styled";

export function InputTextBtgSports({ name, required, value, placeholder, maxLength, disabled, autoComplete, type }: { name:string, required?:boolean, value?: string, placeholder?:string, maxLength?:number, disabled?:boolean, autoComplete?:string, type:string }) {
    return (
        <Input_text_btg_sports name={name} required={required} value={value} placeholder={placeholder} maxLength={maxLength} disabled={disabled} autoComplete={autoComplete} type={type} />
    );
}

export function SelectBtgSports({ children, name, value, disabled, onChange }: { children: React.ReactNode, name:string, value?: string, disabled?:boolean, onChange?: React.ChangeEventHandler}) {
    return (
        <Select_btg_sports name={name} value={value} disabled={disabled} onChange={onChange} >
            {children}
        </Select_btg_sports>
    );
}

export function SelectInternal({ children, name, value, disabled, onChange }: { children: React.ReactNode, name:string, value?: string, disabled?:boolean, onChange?: React.ChangeEventHandler}) {
    return (
        <Select_btg_sports name={name} value={value} disabled={disabled} onChange={onChange} >
            {children}
        </Select_btg_sports>
    );
}
