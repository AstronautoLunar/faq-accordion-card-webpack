import "../sass/main.sass"
import { Answers } from "./objects"
import data from "./data"
import { listOfFaq } from "./elements";

const answers = new Answers({
    data,
    children: listOfFaq
});

answers.render();