let but = document.getElementById('but1')
let forma = document.getElementById('form1')

forma.onsubmit = f1

function f1(){
    console.log(forma.elements)
    console.log(forma.elements.length)
    let stroka = ''
    let elems = forma.elements
    for (e in elems){
        if (elems[e].type=='checkbox' && elems[e].checked){
            stroka += elems[e].name
            stroka += '-- выбран' + '\n'
        }
        if (elems[e].type=='radio' && elems[e].checked){
            stroka += elems[e].name
            stroka += '--' + elems[e].value + '\n'
        }


        if (e==forma.elements.length-1){break}
        if (elems[e].name==''){continue}
        if (elems[e].value==undefined){continue}

        if (elems[e].type != 'checkbox' && elems[e].type != 'radio'){
        stroka += elems[e].name
        stroka += '--' + elems[e].value + '\n'
        }
    }
    console.log(stroka)
    // saveToPC(stroka)
    telegram(stroka)
    return false
}

// function saveToPC(str){
//     let blob = new Blob([str], {type: "text/plain"});
//     let link = document.createElement("a");
//     link.setAttribute("href", URL.createObjectURL(blob));
//     link.setAttribute("download", "123.txt");
//     link.click();
//  }

 bot = 't.me/nick74bot'
token = '5920448405:AAHq_oMr4_tQsWCsw02WtQPmURBoKyCxiB4'
chatid = '1092779112'

function telegram(str){
let z=$.ajax({
type: "POST",
url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
data: "parse_mode=HTML&text="+encodeURIComponent(str),
}).then(alert('отправили в тг') )
}