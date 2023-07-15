

var qoutes = [
    ` <p>"It's not what happens to you, but how you react to it that matters."</p>
    <p>--Epictetus</p>`,
    ` <p>Be yourself; everyone else is already taken."</p>
    <p>-- Oscar Wilde</p>`,
    ` <p>"So many books, so little time."</p>
    <p>--Frank Zappa</p>`,
    ` <p>"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."</p>
    <p>--Bernard M. Baruch</p>`,
    ` <p>"You know you're in love when you can't fall asleep because reality is finally better than your dreams"</p>
    <p>--Dr. Seuss</p>`,
    ` <p>"Be the change that you wish to see in the world."</p>
    <p>--Mahatma Gandhi</p>`,
    ` <p>"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."</p>
    <p>--Albert Einstein</p>`,
    ` <p>"If you tell the truth, you don't have to remember anything."</p>
    <p>--Mark Twain</p>`,
    ` <p>"A friend is someone who knows all about you and still loves you."</p>
    <p>-- Elbert Hubbard</p>`,
    ` <p>"Live as if you were to die tomorrow. Learn as if you were to live forever."</p>
    <p>--Mahatma Gandhi</p>`




]

// for(var i=0 ; i<3;i++){
//     console.log(qoutes[i]);
// }


function printqoutes() {
    var x = Math.ceil(Math.random() * 10);
    // console.log(x);
    document.getElementById('showQoutes').innerHTML = qoutes[x - 1];

}