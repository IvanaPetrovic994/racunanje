var a = alert (' Dobro dosli u program za racunajne!');
var x = parseFloat (prompt ('Unesite prvi broj'));
var z = prompt ('Unesite racunsku operaciju:\n Za sabiranje unesite znak (+)\n Za oduzimanje unesite znak (-)\n Za mnozenje unesite znak (*)\n Za deljenje unesite znak (/)');
var y = parseFloat (prompt ('Unesite drugi broj'));
switch (z){
    case '+':
        alert (x + y);
        break;
    case '-':
        alert (x - y);
        break;
    case '*':
        alert (x * y);
        break;
    case '/':
        alert (x / y);
        break;
    default:
        alert ('Uneli ste pogresnu racunsku operaciju');
        break;
}