window.addEventListener('load', function () {
    var n1 = document.getElementById('1');
    var n2 = document.getElementById('2');
    var n3 = document.getElementById('3');
    var n4 = document.getElementById('4');
    var n5 = document.getElementById('5');
    var n6 = document.getElementById('6');
    var n7 = document.getElementById('7');
    var n8 = document.getElementById('8');
    var n9 = document.getElementById('9');
    var A, B, SIGNO, BACK;
    var display = document.getElementById('display');
    var teclado = document.getElementsByClassName('teclado')[0];

    teclado.addEventListener('click', () => operar(event));

    function displayFunction(con) {
        if (display.innerHTML.length < 9) {
            if (con == '.') {
                display.innerHTML = display.innerHTML + con;
            } else {
                if (display.innerHTML.length == 1 && display.innerHTML[0] == '0') {
                    display.innerHTML = con;
                } else {
                    display.innerHTML = display.innerHTML + con;
                }
            }
        }
    }
    function beginAgain() {
        display.innerHTML = "0";
    }
    function sumar(a) {
        A = a;
        beginAgain();
    }
    function restar(a) {
        A = a;
        beginAgain();
    }
    function multiplicar(a) {
        A = a;
        beginAgain();
    }
    function dividir(a) {
        A = a;
        beginAgain();
    }
    function comprobarLargo(largo) {
        BACK = "";
        if (largo.length > 9) {
            for (var i = 0; i <= 8; i++) {
                BACK = BACK + largo[i];
            }
        } else {
            BACK = largo;
        }
        return BACK;
    }
    function igual(b) {
        B = b;
        console.log(SIGNO);
        switch (SIGNO) {
            case '+': {
                display.innerHTML = comprobarLargo(String(parseFloat(A) + parseFloat(B)));
                break;
            }
            case '-': {
                display.innerHTML = comprobarLargo(String(parseFloat(A) - parseFloat(B)));
                break;
            }
            case '*': {
                display.innerHTML = comprobarLargo(String(parseFloat(A) * parseFloat(B)));
                break;
            }
            case '/': {
                display.innerHTML = comprobarLargo(String(parseFloat(A) / parseFloat(B)));
                break;
            }
        }

    }

    function operar(e) {
        switch (e.target.id) {
            case '1':
                displayFunction('1')
                break;
            case '2':
                displayFunction('2');
                break;
            case '3':
                displayFunction('3');
                break;
            case '4':
                displayFunction('4');
                break;
            case '5':
                displayFunction('5');
                break;
            case '6':
                displayFunction('6');
                break;
            case '7':
                displayFunction('7');
                break;
            case '8':
                displayFunction('8');
                break;
            case '9':
                displayFunction('9');
                break;
            case '0':
                displayFunction('0');
                break;
            case 'punto':
                displayFunction('.');
                break;
            case 'on':
                beginAgain();
                break;
            case 'mas':
                SIGNO = '+';
                sumar(display.innerHTML);
                break;
            case 'menos':
                SIGNO = '-';
                restar(display.innerHTML);
                break;
            case 'por':
                SIGNO = '*';
                multiplicar(display.innerHTML);
                break;
            case 'dividido':
                SIGNO = '/';
                dividir(display.innerHTML);
                break;
            case 'igual':
                igual(display.innerHTML);
                break;
        }
    }
})