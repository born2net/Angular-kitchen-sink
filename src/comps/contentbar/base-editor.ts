
export abstract class BaseEditor {
    constructor(private privateEditorName: string, public isSelected: boolean = false) {

    }
    get editorName(): string {
        return this.privateEditorName;
    }
    public value: string;
}