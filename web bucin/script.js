```javascript
/* =====================================
   PENGATURAN
===================================== */

// Ganti nama pasangan kamu
const nama = "princess";

// Ganti tanggal mulai hubungan
// Contoh:
// 17 Agustus 2025
// Tahun = 2025
// Bulan = 7
// Tanggal = 17

const tanggalJadian = new Date(2025, 7, 17);


/* =====================================
   PESAN PEMBUKA
===================================== */

const pesan =
`Aku mungkin nggak selalu pandai mengungkapkan perasaan,

tapi satu hal yang pasti...

aku bersyukur banget bisa mengenal kamu, ${nama}.

Dari sekian banyak orang di dunia ini,
entah kenapa hati aku memilih kamu. ❤️`;


const typing =
    document.getElementById("typing");


let index = 0;


/* =====================================
   EFEK MENGETIK
===================================== */

function typeText() {

    if (index < pesan.length) {

        const karakter =
            pesan.charAt(index);

        if (karakter === "\n") {

            typing.innerHTML += "<br>";

        } else {

            typing.innerHTML += karakter;

        }

        index++;

        setTimeout(typeText, 45);
    }
}


typeText();


/* =====================================
   COUNTER CINTA
===================================== */

function updateTimer() {

    const sekarang =
        new Date();

    const selisih =
        sekarang.getTime()
        - tanggalJadian.getTime();


    if (selisih < 0) {

        document.getElementById("timer")
            .innerHTML =
            "Kisah kita sebentar lagi dimulai ❤️";

        return;
    }


    const totalDetik =
        Math.floor(selisih / 1000);


    const hari =
        Math.floor(
            totalDetik / 86400
        );


    const jam =
        Math.floor(
            (totalDetik % 86400) / 3600
        );


    const menit =
        Math.floor(
            (totalDetik % 3600) / 60
        );


    const detik =
        totalDetik % 60;


    document.getElementById("timer")
        .innerHTML =
        `${hari} hari ${jam} jam ${menit} menit ${detik} detik ❤️`;
}


setInterval(updateTimer, 1000);

updateTimer();


/* =====================================
   PESAN RAHASIA
===================================== */

function showMessage() {

    const secret =
        document.getElementById("secret");


    if (secret.style.display === "block") {

        secret.style.display = "none";

    } else {

        secret.style.display = "block";

        loveExplosion();
    }
}


/* =====================================
   LEDAKAN HATI
===================================== */

function loveExplosion() {

    const emojis = [
        "❤️",
        "💖",
        "💗",
        "💕",
        "💓",
        "💘",
        "💝",
        "🥰"
    ];


    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");


        heart.className =
            "explosion-heart";


        heart.innerHTML =
            emojis[
                Math.floor(
                    Math.random()
                    * emojis.length
                )
            ];


        heart.style.left = "50%";

        heart.style.top = "50%";


        heart.style.setProperty(
            "--x",
            Math.random() * 500 - 250
        );


        heart.style.setProperty(
            "--y",
            Math.random() * 500 - 250
        );


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 1500);
    }
}


/* =====================================
   HATI TERBANG
===================================== */

const hearts =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");


    heart.className = "heart";

    heart.innerHTML = "♥";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        Math.random() * 30 + 15 + "px";


    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    hearts.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);
}


setInterval(createHeart, 350);


/* =====================================
   KLIK LAYAR = HATI
===================================== */

document.addEventListener(
    "click",
    function(event) {

        // Jangan muncul saat tombol diklik
        if (
            event.target.tagName === "BUTTON"
        ) {
            return;
        }


        const heart =
            document.createElement("div");


        heart.className =
            "explosion-heart";


        heart.innerHTML = "❤️";


        heart.style.left =
            event.clientX + "px";


        heart.style.top =
            event.clientY + "px";


        heart.style.setProperty(
            "--x",
            Math.random() * 150 - 75
        );


        heart.style.setProperty(
            "--y",
            Math.random() * 150 - 75
        );


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 1500);
    }
);
```
