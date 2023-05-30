
function cData(id, question, answer) {
    this.id = id;
    this.question = question;
    this.answer = answer;
}
export default class CardData {



    constructor() {
        this.arrayOfMaps = [];
    }

    pushToArray(question, answer) {
        this.arrayOfMaps.push(this.createData(this.arrayOfMaps.length, question, answer));

    }

    createData(id, question, answer) {
        let x = new cData(id, question, answer);
        return x;
    }

    clearArray() {
        this.arrayOfMaps = [];
    }
    /*
    {
        id: 1,
        question: "yamom",
        answer: "xd"
    },
    {
        id: 2,
        question: "asdf",
        answer: "qwerty"
    }
    */
}