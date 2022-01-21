import { 
    Answer, 
    AnswersProps,
    ChildrenProps,
    ItemsProps,
    ArrowProps,
    QuestionProps
} from "../types";

class Answers {
    private readonly _data: Answer[];
    private readonly _children: ChildrenProps;
    private _items: ItemsProps = null;
    private _arrow: ArrowProps = null;
    private _question: QuestionProps = null;

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

    set items(value: ItemsProps) {
        this._items = value;
    }

    get items(): ItemsProps {
        return this._items;
    }

    set arrow(value: ArrowProps) {
        this._arrow = value;
    }

    get arrow(): ArrowProps {
        return this._arrow;
    }

    set question(value: QuestionProps) {
        this._question = value;
    }

    get question(): QuestionProps {
        return this._question
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
                                class="arrow-answer"
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

            this.items = window.document.querySelectorAll("li.item");
            this.arrow = window.document.querySelectorAll("img.arrow-answer");
            this.question = window.document.querySelectorAll(".question");

            this.setEventClick();
        } else {
            throw "O elemento children é null";
        }
    }

    private setEventClick() {
        if(this.items) {
            this.items.forEach(({ children }, index: number) => {
                const areaAnswer = children[0];
                const areaResponse = children[1] as HTMLDivElement;
                let active = true;

                areaAnswer.addEventListener("click", () => {
                    if(active) {
                        areaResponse.style.display = "block";
                        
                        if(this.arrow) {
                            this.arrow[index].style.transform = "rotate(180deg)"
                        }

                        if(this.question) {
                            this.question[index].style.fontWeight = "bold"
                        }
                        
                        active = false;
                    } else {
                        areaResponse.style.display = "none"
                        
                        if(this.arrow) {
                            this.arrow[index].style.transform = "rotate(0deg)"
                        }
                        
                        if(this.question) {
                            this.question[index].style.fontWeight = "normal"
                        }

                        active = true;
                    }
                })
            })
            
        } else {
            throw "Elementos de item não foram selecionados com sucesso"
        }
    }
}

export default Answers;