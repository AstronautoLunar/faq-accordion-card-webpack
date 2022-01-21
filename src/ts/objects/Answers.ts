import { 
    Answer, 
    AnswersProps,
    ChildrenProps,
    ItemsProps,
    ArrowProps
} from "../types";

class Answers {
    private readonly _data: Answer[];
    private readonly _children: ChildrenProps;
    private _items: ItemsProps = null;
    private _arrow: ArrowProps = null;

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

            this.setEventClick();
        } else {
            throw "O elemento children é null";
        }
    }

    private setEventClick() {
        if(this.items) {
            this.items.forEach(({ children }, index: number) => {
                const answer = children[0];
                const response = children[1] as HTMLDivElement;
                let active = true;

                answer.addEventListener("click", () => {
                    if(active) {
                        response.style.display = "block";
                        
                        if(this.arrow) {
                            this.arrow[index].style.transform = "rotate(180deg)"
                        }
                        
                        active = false;
                    } else {
                        response.style.display = "none"

                        if(this.arrow) {
                            this.arrow[index].style.transform = "rotate(0deg)"
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