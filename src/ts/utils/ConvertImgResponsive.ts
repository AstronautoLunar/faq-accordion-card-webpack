import { ConvertImgResponsiveProps } from "../types";

function convertImgResponsive({
    element, 
    src,
    mediaQuerie
}: ConvertImgResponsiveProps): void {
    const mediaQuerieList = matchMedia(`(max-width: ${mediaQuerie}px)`);
    const oldSrc = element.getAttribute("src");

    function toggleImage() {
        if(mediaQuerieList.matches) {
            element.setAttribute("src", src);
        } else {
            if(oldSrc) {
                element.setAttribute("src", oldSrc);
            } else {
                throw "Não foi possivel pegar o endereço antigo da imagem";
            }
        }
    }

    mediaQuerieList.addEventListener("change", toggleImage);

    toggleImage();
}

export default convertImgResponsive;