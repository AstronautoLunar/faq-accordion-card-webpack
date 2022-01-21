import "../sass/main.sass"
import { Answers } from "./objects"
import { 
    answer, 
    illustrations 
} from "./data"
import { listOfFaq } from "./elements";
import { convertImgResponsive } from "./utils";

const answers = new Answers({
    data: answer,
    children: listOfFaq
});

const MEDIAQUERIEILLUSTRATION = 910;

for(let illustration of illustrations) {
    const { 
        element, 
        src 
    } = illustration;

    convertImgResponsive({
        element,
        src,
        mediaQuerie: MEDIAQUERIEILLUSTRATION
    });
}

answers.render();