import { 
    Answer, 
    AnswersProps,
    ChildrenProps
} from "../types";

class Answers {
    private readonly _data: Answer[];
    private readonly _children: ChildrenProps;

    constructor({
        data,
        children
    }: AnswersProps) {
        this._data = data;
        this._children = children;
    }

    get data(): Answer[] {
        return this._data;
    }

    get children(): ChildrenProps {
        return this._children;
    }

    public render(): void {
        if(this.children) {
            for(let answer of this.data) {
                const {
                    id,
                    question,
                    response,
                    show
                } = answer;
    
                this.children.innerHTML += `
                    <li 
                        class="item"
                        data-id="${id}"
                    >
                        <div class="area-answer">
                            <span class="question">
                                ${question}
                            </span>
    
                            <img
                                src="assets/icon-arrow-down.svg"
                                alt="icon arrow down"
                            />
                        </div>
                        <div class="area-response">
                            <span class="response">
                                ${response}
                            </span>
                        </div>
                        <hr></hr>
                    </li>
                `
            }
        } else {
            throw "O elemento children é null";
        }
    }
}

export default Answers;