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

export type ItemsProps = NodeListOf<HTMLLIElement> | null;

export type ArrowProps = NodeListOf<HTMLImageElement> | null;