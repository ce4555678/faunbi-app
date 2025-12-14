import wrap from "word-wrap";

export default function quebrarTexto(text: string) {
    return wrap(text, { trim: true, width: 100 });
}
