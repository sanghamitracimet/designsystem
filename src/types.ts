export interface todoProps{
    id: Number,
    task: string,
    isComplete: Boolean
    isEditing: Boolean
}

export interface ActionBtnProps{
    icon: React.ElementType,
    heading: string
    onClick?: ()=>void;
}

export interface ListProps{
    isActionButtonClicked?: ()=>Boolean
}