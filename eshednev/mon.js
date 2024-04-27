function fan1 () {

    let content = document.getElementById('content');
    content.style.display = "none";
    let content1 = document.getElementById('content1');
    content1.style.display = "none";
    let content2 = document.getElementById('content2');
    content2.style.display = "none";
    let content3 = document.getElementById('content3');
    content3.style.display = "none";
    let content4 = document.getElementById('content4');
    content4.style.display = "none";
    let content5 = document.getElementById('content5');
    content5.style.display = "none";
    let content6 = document.getElementById('content6');
    content6.style.display = "none";

}
fan1();

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

fanMenu();
function fanMenu() {
    let conteinerForm = document.getElementsByClassName('menu');

    for (let i = 0; i < conteinerForm.length; i++) {
        conteinerForm[i].addEventListener("click", function () {
            this.classList.toggle("active");


            let form = this.closest('.conteiner');
            let menu = form.querySelector('.content');
            if (menu.style.display === "block") {
                menu.style.display = "none";
                this.textContent = '✎';
            } else {
                menu.style.display = "block";
                this.textContent = '↑';
            }
        });
    }
}

fanRead();
function fanRead() {
    const a = document.querySelectorAll('.b')
    a.forEach(b => {
        const input = b.querySelector('input')
        const button = b.querySelector('.button')
        const content = b.querySelector('div')
        const textArea = b.querySelector('.text1')
        const date = b.querySelector('.date');

        button.onclick = () => {
            if (input.value != 0) {
                function zero_first_format(value) {
                    if (value < 10) {
                        value = '0' + value;
                    }
                    return value;
                }
                function date_time() {
                    let current_datetime = new Date();
                    let day = zero_first_format(current_datetime.getDate());
                    let month = zero_first_format(current_datetime.getMonth() + 1);
                    let year = current_datetime.getFullYear();

                    return year + "-" + month + "-" + day
                }
                if (date.value >= date_time()) {

                    content.insertAdjacentHTML('beforeend',
                        `<div class="item">
              <div>${input.value}</div>
              <div>${textArea.value}</div>
              <div>Выполнить до ${date.value}</div>
            </div>`)
                    let item = document.querySelectorAll('.item');
                    for (let i = 0; i < item.length; i++) {
                        item[i].style.backgroundColor = '#4444';
                        item[i].style.margin = '10px';
                        item[i].style.borderRadius = '5px';
                    }

                    input.value = '';
                    textArea.value = '';
                    date.value = '';


                    local();
                } else {
                    let modalDate = document.querySelector('.modalDate');
                    let close = document.querySelector('.closeDate');
                    modalDate.style.display = "block";
                    close.onclick = function () {
                        modalDate.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modalDate) {
                            modalDate.style.display = "none";
                        }
                    }
                }
            } else {
                let modal = document.getElementById('Madal');
                let span = document.getElementById('span');
                modal.style.display = "block";
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }
    })
}
fanDel();
function fanDel() {
    let conteinerForm = document.getElementsByClassName('del');

    for (let i = 0; i < conteinerForm.length; i++) {
        conteinerForm[i].addEventListener("click", function () {
            let a = document.querySelectorAll('.out');
            for (let i = 0; i < a.length; i++) {
                a[i].innerHTML = '';
            }
        });
    }
}

function local() {
    const out = document.querySelectorAll('.out');
    for (let i = 0; i < out.length; i++) {
        localStorage.setItem('tasks', JSON.stringify(out[i]))
    }
}
local();