interface EditorProps {
    onSaveAction: (value: string) => void;
    initialValue: string;
}
export declare function Editor({ onSaveAction, initialValue }: EditorProps): import("react").JSX.Element;
export {};
