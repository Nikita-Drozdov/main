let buttons=document.getElementsByTagName('button');
let answers=[];

let StartDiv=document.querySelector('#StartDiv');
let GameOverDiv=document.querySelector('#GameOverDiv');
let FinalDiv=document.querySelector('#FinalDiv');
let div1=document.querySelector('#div1');
let div2=document.querySelector('#div2');
let div11=document.querySelector('#div11');
let div12=document.querySelector('#div12');

let text1=`Константин только что прошёл зону КПП в порту и готов начать выполнять свои первые задачи: «Что ж, сегодня меня ждёт тяжёлый день, с чего бы мне начать?»`;
let text2=`Андрей Афанасьевич, подозвал поближе и начал рассказывать Константину, что такое порт и что он значит для прибрежного города:<br>
«Так вот, сынок, я уже здесь пятнадцатый год перегружаю груз, в основном это контейнеры, двадцатки* и сороковки*. А также генеральный груз, ящики, бочки, но они все хранятся отдельно в крытом складе.»<br>
Константин слушал слова мастера и вспоминал свою учёбу в морском университете. Он слышал и знал эту информацию ещё раньше, но теперь ему предстояло встретиться с ней на практике.<br>
Слушать Андрея Афанасьевича Константин больше не мог. Ему хотелось работать и получать полезный опыт. Как же поступить?<br>
(*Двадцатка - Двадцатифутовый эквивалент контейнера (TEU - twenty-foot equivalent unit). Основана на объёме 20-футового (6,1 метр) интермодального международного контейнера, металлической коробки стандартного размера, которая может транспортироваться различными видами транспорта: автомобильным, железнодорожным и морским.)<br>
(*Сороковка – 40-ка футовый контейнер. Имеет те же характеристики что и 20-ти футовый контейнер, только в два раза длиннее (один контейнер 40-ка футов = 2 TEU)).`;
let text3=`Константин поднимает свои глаза и ловит задумчивый взгляд Андрея Афанасьевича.<br>
- «Ты всё понял?»<br>
- «Так точно» - ответил Константин, как будто командиру военной части.<br>
- «Что ж, тогда отправляйся к контейнерному перегружателю и отмечай в журнале все его операции и их продолжительность» - отдал приказ Андрей Афанасьевич.<br>
Контейнерный перегружатель? Может это ричстакер или специальный кран, который стоит прямо у причальной стенки. Что же делать? Куда идти?`;

let NiceEff1=`Константин, проходя вдоль больших контейнерных площадок, пытается найти своего мастера: стивидора Андрея Афанасьевича, который как раз должен ожидать его недалеко от зоны погрузки/выгрузки контейнеров на терминал.<br>
Андрей Афанасьевич замечает нашего героя и подзывает его к себе: «Эй, парень, это ты ведь новенький? Костя, да?»<br>
«Да всё верно» - отвечает Костя.<br>
«Ну отлично, тогда слушай…»`;
let NiceEff2=`Удивительно, но ты сейчас прямо посередине портового перегрузочного терминала, мимо тебя проезжает ричстакер*, который как раз перемещает один 40-ка футовый контейнер в свою ячейку на открытом складе.<br>
Увлечённый работой ричстакера Константин погрузился в свои мысли и прослушал рассказ Андрея Афанасьевича.<br>
(*Ричстакер - погрузчик для работы с контейнерами. Он способен обрабатывать контейнеры и прицепы, а также производить погрузочно-разгрузочные работы в самых разнообразных условиях: от портов до тяжёлой промышленности).`;
let NiceEff3=`Вспомнив со студенческих лет, что же такое Контейнерный Перегружатель*, Константин отправился к причалу и в течении часа внимательно следил за его работой, занося все сведения в журнал.<br>
Позже Андрей Афанасьевич похвалил Константина за внимательность и выдал следующее задание.<br>
(*Контейнерный Перегружатель — это мостовые перегружатели по конструктивному исполнению близки к козловым кранам. От козловых кранов они отличаются большими пролётами и значительными скоростями передвижения тележек.)`;

let BadEff1=`Константин решил пойти на склад, ведь там, скорее всего, можно найти бригадиров и мастеров смены, которые смогут помочь новенькому. Однако, наш герой немного заблудился, так как был в этом порту впервые.<br>
Проходя вдоль больших контейнерных площадок, и пытаясь найти крытый склад, Константин обнаруживает стивидора Андрея Афанасьевича, который как раз ожидает новенького недалеко от зоны погрузки/выгрузки контейнеров на терминал.<br>
Андрей Афанасьевич замечает нашего героя и подзывает его к себе: «Эй, парень, это ты ведь новенький? Костя, да?»<br>
«Да, всё верно» - отвечает Костя.<br>
«Опоздание на 15 минут, надеюсь больше такого не повторится. Ну ладненько, слушай…»`;
let BadEff2=`Уже больше десяти минут ты слушаешь речь мастера, вспоминаешь студенческие годы, как было весело, сессии, общежитие и многое другое. Погрузившись в свои мысли, Константин перестал слушать рассказ Андрея Афанасьевича.`;
let BadEff3=`«Андрей Афанасьевич, а я вот не помню, что же такое контейнерный перегружатель?» - спросил я.<br>
«Интересный вы персонаж, Константин. Я говорил Вам об этом последние 10 минут. Постарайтесь впредь слушать меня внимательнее. А сейчас Вам лучше пройти в учебное помещение и повторить, что такое контейнерный перегружатель и зачем он вообще нужен!»`;

let GameOv1=`Задумавшись, Константин понимает, что порт это не его. Всё-таки на свете ещё так много профессий, а всю свою оставшуюся жизнь торчать в порту, смотря на бесконечно приходящие и уходящие суда, ему не хотелось.<br>
Он сказал про себя: «Всё, я ухожу, прощайте…» `;
let GameOv2=`Андрей Афанасьевич посмотрел на тебя и сказал: «Что ж дружок, я бы с радостью, но восьмидесятифутовых контейнеров и в помине не существует, так как они попросту будут ломаться пополам, а ты умник иди и учи мат. часть, возвращайся завтра, стажёр.»`;
let GameOv3=`Пытаясь вспомнить, что же такое контейнерный перегружатель в голову пришло только одно – ричстакер. Погрузчик для работы с контейнерами. Найдя его на терминале, Константин понял, что совершенно за ним не успевает, так как ричстакер двигается очень быстро, а приближаться к нему слишком опасно.<br>
Константин на протяжении нескольких часов бегал за ричстакером, мешая тем самым его работе, пока водитель не накричал на глупого и невнимательного стажёра. Водитель ричстакера позже нашёл Андрея Афанасьевича, и пожаловался на стажёра из-за нарушения техники безопасности. О продолжении работы в порту не могло идти и речи…`;

let Choice00=`Найти портового мастера и взять первые инструкции`;
let Choice01=`Не перебивая мастера, осмотреть локацию вокруг себя. Что же там такого интересного, кроме этих металлических контейнеров?`;
let Choice02=`Надо отправиться к причальной стенке контейнерного терминала, к этим большим перегрузочным механизмам.`;

let Choice10=`Пойти на склад и взять там первое поручение`;
let Choice11=`Поторопить мастера, чтобы приступить скорее к работе`;
let Choice12=`Переспросить мастера о том, что такое контейнерный перегружатель`;

let Choice20=`Передумать работать. «Похоже, работа в порту — это не моё»`;
let Choice21=`Сказать мастеру: "Я уже с этим работал и знаю, как работать даже с восьмидесятифутовым контейнером. Так что давайте уже начнём!"`;
let Choice22=`Всё-таки надо догнать ричстакер и отмечать все его действия в журнал`;

let Texts=[text1,text2,text3];
let Nices=[NiceEff1,NiceEff2,NiceEff3];
let Bads=[BadEff1,BadEff2,BadEff3];
let GameOvs=[GameOv1,GameOv2,GameOv3];
let Buttons0=[Choice00, Choice01, Choice02];
let Buttons1=[Choice10, Choice11, Choice12];
let Buttons2=[Choice20, Choice21, Choice22];

function addHidden(event){
    event.classList.add('hidden');
}
function removeHidden(event){
    event.classList.remove('hidden');
}

let m = 0;

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',
        function clickButton(event){
            event.preventDefault();

            if(buttons[i].className == "ButtonToStart"){
                addHidden(StartDiv);
                removeHidden(div1);
                document.getElementById('passage').innerHTML = Texts[m];
                document.getElementById('Button0').innerHTML = Buttons0[m];
                document.getElementById('Button1').innerHTML = Buttons1[m];
                document.getElementById('Button2').innerHTML = Buttons2[m];
            }
            else if(buttons[i].className == "ButtonToRestart"){
                addHidden(GameOverDiv);
                addHidden(FinalDiv);
                removeHidden(StartDiv);
                answers=[];
                m=0;
            }
            else if(buttons[i].className == "Button3" && m < 3){
                addHidden(div11);
                addHidden(div12);
                removeHidden(div1);
                document.getElementById('passage').innerHTML = Texts[m];
                document.getElementById('Button0').innerHTML = Buttons0[m];
                document.getElementById('Button1').innerHTML = Buttons1[m];
                document.getElementById('Button2').innerHTML = Buttons2[m];
            }
            else if(buttons[i].className == "Button3" && m == 3){
                addHidden(div11);
                addHidden(div12);
                removeHidden(FinalDiv);
                document.getElementById('result').innerHTML = `Демо версия игры подошла к концу. Ваши ответы (2 - отличный, 3 - удовлетворительный):\n` + answers;
            }
            else if(i==2){
                addHidden(div1);
                removeHidden(div11);
                document.getElementById('Nice').innerHTML = Nices[m];
                m++
                answers.push(i);
            }
            else if(i==3){
                addHidden(div1);
                removeHidden(div12);
                document.getElementById('Bad').innerHTML = Bads[m];
                m++
                answers.push(i);
            }
            else if(i==4){
                addHidden(div1);
                removeHidden(GameOverDiv);
                document.getElementById('GameOv').innerHTML = GameOvs[m];
            }
            
        }
    );

    
}
