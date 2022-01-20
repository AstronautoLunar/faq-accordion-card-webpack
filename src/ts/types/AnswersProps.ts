export type Answer = {
    id: string;
    question: string;
    response: string;
    show: boolean;
}

export type ChildrenProps = Element | null;

export interface AnswersProps {
    data: Answer[];
    children: ChildrenProps
}