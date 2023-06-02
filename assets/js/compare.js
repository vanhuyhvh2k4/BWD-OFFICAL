import {
    svgData
} from './svgData.js';
import data from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
    var commendBtns = document.querySelectorAll('.recommend__chart__btn');
    var root = sessionStorage.getItem('root');
    var dynamic = sessionStorage.getItem('dynamic');
    var cardList = document.querySelector('.card_list');
    var chart = document.querySelector('.recommend__chart__wrapper');
    var advantage = document.querySelector('.recommend__recommend');
    var specific = document.querySelector('.specific');
    var tbodyRoot = document.querySelector('#tbody_root');
    var tbodyDynamic = document.querySelector('#tbody_dynamic');
    var arrRoot = data[root].store_price.sort((a, b) => a.price - b.price);
    var arrDynamic = data[dynamic].store_price.sort((a, b) => a.price - b.price);
    var titleTableRoot = document.querySelector('.price_comparison__group:first-child > h1');
    var titleTableDynamic = document.querySelector('.price_comparison__group:last-child > h1');
    var chartPoint = document.querySelector('.recommend__chart__points');
    let firstNote = document.querySelector('.recommend__chart__note-item-first');
    let secondNote = document.querySelector('.recommend__chart__note-item-second');

    firstNote.innerHTML = data[root].info.name;
    secondNote.innerHTML = data[dynamic].info.name;

    // card item
    cardList.innerHTML = `
    <div class="card_item">
        <section class="card_item__img">
            <img src="./assets/images/${data[root].info.image.main}.png" alt="">
            ${data[root].score > data[dynamic].score ? '<img class="card_item__img--winner" src="./assets/images/winner.png" alt="">': ""}
        </section>
        <article class="card_item__text">
            <div class="card_item__text__group">
                <h1>Company:</h1>
                <h1>${data[root].info.company}</h1>
            </div>
            <div class="card_item__text__group">
                <h1>Name:</h1>
                <h1>${data[root].info.name}</h1>
            </div>
            <div class="card_item__text__group">
                <h1>Price:</h1>
                <h1>${(data[root].store_price.sort((a, b) => a.price - b.price))[0].price} ~ $${(data[root].store_price.sort((a, b) => a.price - b.price))[data[root].store_price.length - 1].price}</h1>
            </div>
        </article>
    </div>
    <img src="./assets/images/vs-colorful.png" alt="">
    <div class="card_item">
        <section class="card_item__img">
            <img src="./assets/images/${data[dynamic].info.image.main}.png" alt="">
            ${data[dynamic].score > data[dynamic].score ? '<img class="card_item__img--winner" src="./assets/images/winner.png" alt="">': ""}
        </section>
        <article class="card_item__text">
            <div class="card_item__text__group">
                <h1>Company:</h1>
                <h1>${data[dynamic].info.company}</h1>
            </div>
            <div class="card_item__text__group">
                <h1>Name:</h1>
                <h1>${data[dynamic].info.name}</h1>
            </div>
            <div class="card_item__text__group">
                <h1>Price:</h1>
                <h1>${(data[dynamic].store_price.sort((a, b) => a.price - b.price))[0].price} ~ $${(data[dynamic].store_price.sort((a, b) => a.price - b.price))[data[dynamic].store_price.length - 1].price}</h1>
            </div>
        </article>
    </div>
`;

    //recommend chart
    chart.innerHTML = svgData[root].svg;

    //recommend recommend
    advantage.innerHTML = `
    <h1>Why ${data[root].score > data[dynamic].score ? data[root].info.name : data[dynamic].info.name} better than ${data[root].score < data[dynamic].score ? data[root].info.name : data[dynamic].info.name}</h1>
    <div class="recommend__recommend__text">
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Weight: ${Math.abs((data[root].design.weight - data[dynamic].design.weight) * 1000).toFixed(1)}g lighter</h2>
                <article>
                    <b>${data[root].score > data[dynamic].score ? data[root].design.weight : data[dynamic].design.weight} kg</b>
                    <span>vs ${data[root].score > data[dynamic].score ? data[dynamic].design.weight : data[root].design.weight} kg</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Thickness: ${Math.abs(data[root].design.thickness - data[dynamic].design.thickness).toFixed(1)} mm thinner</h2>
                <article>
                    <b>${data[root].score > data[dynamic].score ? data[root].design.thickness : data[dynamic].design.thickness} mm</b>
                    <span>vs ${data[root].score > data[dynamic].score ? data[dynamic].design.thickness : data[root].design.thickness} mm</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Resolution higher</h2>
                <article>
                    <b>${data[root].score > data[dynamic].score ? data[root].screen.resolution : data[dynamic].screen.resolution}</b>
                    <span>vs ${data[root].score > data[dynamic].score ? data[dynamic].screen.resolution : data[root].screen.resolution}</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>CPU speed: ${Math.abs(data[root].chip.core_speed - data[dynamic].chip.core_speed).toFixed(1)} GHz faster</h2>
                <article>
                    <b>${data[root].score > data[dynamic].score ? data[root].chip.core_speed : data[dynamic].chip.core_speed} Ghz</b>
                    <span>vs ${data[root].score > data[dynamic].score ? data[dynamic].chip.core_speed : data[root].chip.core_speed} GHz</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Numbers of port: ${Math.abs(data[root].connect.USB - data[dynamic].connect.USB)} more USB 2.0 ports</h2>
                <article>
                    <b>${data[root].score > data[dynamic].score ? data[root].connect.USB : data[dynamic].connect.USB} port</b>
                    <span>vs ${data[root].score > data[dynamic].score ? data[dynamic].connect.USB : data[root].connect.USB} port</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Battery: ${Math.abs(data[root].battery.capacity - data[dynamic].battery.capacity)} mAh more</h2>
                <article>
                    <b>${data[root].score > data[dynamic].score ? data[root].battery.capacity : data[dynamic].battery.capacity} mAh</b>
                    <span>vs ${data[root].score > data[dynamic].score ? data[dynamic].battery.capacity : data[root].battery.capacity} mAh</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>RAM: ${Math.abs(data[root].ram.capacity - data[dynamic].ram.capacity)} Gb more</h2>
                <article>
                    <b>${data[root].score > data[dynamic].score ? data[root].ram.capacity : data[dynamic].ram.capacity} Gb</b>
                    <span>vs ${data[root].score > data[dynamic].score ? data[dynamic].ram.capacity : data[root].ram.capacity} Gb</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Disk: ${Math.abs(data[root].disk.capacity - data[dynamic].disk.capacity)} Gb more</h2>
                <article>
                    <b>${data[root].score > data[dynamic].score ? data[root].disk.capacity : data[dynamic].disk.capacity} Gb</b>
                    <span>vs ${data[root].score > data[dynamic].score ? data[dynamic].disk.capacity : data[root].disk.capacity} Gb</span>
                </article>
            </div>
        </article>
    </div>
</div>
    `;

    //chart point
    chartPoint.innerHTML = `<section>
                                <h3>${data[root].score * 10}</h3>
                                <p>Points</p>
                            </section>
                            <section>
                                <h3>${data[dynamic].score * 10}</h3>
                                <p>Points</p>
                            </section>`;

    //specific
    specific.innerHTML = `
    <div class="specific__group">
    <article class="specific__group__title">
        <img src="./assets/images/laptop-btn-white.png" alt="">
        <h1>Design</h1>
    </article>
    <div class="row">
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>width</h2>
                    <span>(the width of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].design.width} mm</p>
                    <div>
                        <div style="width: ${((data[root].design.width) / 500) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].design.width} mm</p>
                    <div>
                        <div style="width: ${((data[dynamic].design.width) / 500) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>weight</h2>
                    <span>(the weight of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].design.weight} kg</p>
                    <div>
                        <div style="width: ${((data[root].design.weight) / 5) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].design.weight} kg</p>
                    <div>
                        <div style="width: ${((data[dynamic].design.weight) / 5) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>Thickness</h2>
                    <span>(the thickness of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].design.thickness} mm</p>
                    <div>
                        <div style="width: ${((data[root].design.thickness) / 50) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].design.thickness} mm</p>
                    <div>
                        <div style="width: ${((data[dynamic].design.thickness) / 50) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="specific__group">
    <article class="specific__group__title">
        <img src="./assets/images/image-white.png" alt="">
        <h1>Display</h1>
    </article>
    <div class="row">
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>Resolusion</h2>
                    <span>(the resolution of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].screen.resolution} px</p>
                    <div>
                        <div style="width: 100%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].screen.resolution} px</p>
                    <div>
                        <div style="width: 100%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>frequency</h2>
                    <span>(sweep frequency of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].screen.frequency} Hz</p>
                    <div>
                        <div style="width: ${((data[root].screen.frequency) / 200) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].screen.frequency} Hz</p>
                    <div>
                        <div style="width: ${((data[dynamic].screen.frequency) / 200) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>type</h2>
                    <span>(the type of screen)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].screen.type}</p>
                    <div>
                        <div style="width: 100%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].screen.type}</p>
                    <div>
                        <div style="width: 100%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="specific__group">
    <article class="specific__group__title">
        <img src="./assets/images/speedometer-white.png" alt="">
        <h1>Performance</h1>
    </article>
    <div class="row">
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>core speed</h2>
                    <span>(the core of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].chip.core_speed} GHz</p>
                    <div>
                        <div style="width: ${((data[root].chip.core_speed) / 5) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].chip.core_speed} GHz</p>
                    <div>
                        <div style="width: ${((data[dynamic].chip.core_speed) / 5) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>ram</h2>
                    <span>(the ram of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].ram.capacity} Gb</p>
                    <div>
                        <div style="width: ${((data[root].ram.capacity) / 120) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].ram.capacity} Gb</p>
                    <div>
                        <div style="width: ${((data[dynamic].ram.capacity) / 120) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>disk storage</h2>
                    <span>(the disk of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].disk.capacity} Gb</p>
                    <div>
                        <div style="width: ${((data[root].disk.capacity) / 5120) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].disk.capacity} Gb</p>
                    <div>
                        <div style="width: ${((data[dynamic].disk.capacity) / 5120) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>Graphic</h2>
                    <span>(the graphic of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].graphic.company} ${data[root].graphic.name} ${data[root].graphic.type}</p>
                    <div>
                        <div style="width: 100%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].graphic.company} ${data[dynamic].graphic.name} ${data[dynamic].graphic.type}</p>
                    <div>
                        <div style="width: 100%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>Graphic Memory</h2>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].graphic.capacity} Gb</p>
                    <div>
                        <div style="width: ${((data[root].graphic.capacity) / 120) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].graphic.capacity} Gb</p>
                    <div>
                        <div style="width: ${((data[dynamic].graphic.capacity) / 120) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>Graphic base clock</h2>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].outstanding.graphic.core_clock} MHz</p>
                    <div>
                        <div style="width: ${((data[root].outstanding.graphic.core_clock) / 5000) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].outstanding.graphic.core_clock} MHz</p>
                    <div>
                        <div style="width: ${((data[dynamic].outstanding.graphic.core_clock) / 5000) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="specific__group">
    <article class="specific__group__title">
        <img src="./assets/images/antenna-white.png" alt="">
        <h1>Connectivity</h1>
    </article>
    <div class="row">
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>USB</h2>
                    <span>(the usb port of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].connect.USB} ports</p>
                    <div>
                        <div style="width: ${((data[root].connect.USB) / 5) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].connect.USB} ports</p>
                    <div>
                        <div style="width: ${((data[dynamic].connect.USB) / 5) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>LAN</h2>
                    <span>(the Lan port of laptop)</span>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].connect.LAN} ports</p>
                    <div>
                        <div style="width: ${((data[root].connect.LAN) / 5) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].connect.LAN} ports</p>
                    <div>
                        <div style="width: ${((data[dynamic].connect.LAN) / 5) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>external memory slot</h2>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].connect.external_memory} slot</p>
                    <div>
                        <div style="width: ${((data[root].connect.external_memory) / 4) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].connect.external_memory} slot</p>
                    <div>
                        <div style="width: ${((data[dynamic].connect.external_memory) / 4) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="specific__group">
    <article class="specific__group__title">
        <img src="./assets/images/half-battery-white.png" alt="">
        <h1>Battery</h1>
    </article>
    <div class="row">
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>battery capacity</h2>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].battery.capacity} mAh</p>
                    <div>
                        <div style="width: ${((data[root].battery.capacity) / 10000) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].battery.capacity} mAh</p>
                    <div>
                        <div style="width: ${((data[dynamic].battery.capacity) / 10000) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="specific__group__item">
                <figcaption>
                    <h2>numbers of slot</h2>
                </figcaption>
                <div id="first" class="specific__group__item__process">
                    <p>${data[root].battery.slot} slots</p>
                    <div>
                        <div style="width: ${((data[root].battery.slot) / 4) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${data[dynamic].battery.slot} slots</p>
                    <div>
                        <div style="width: ${((data[dynamic].battery.slot) / 4) * 100}%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    commendBtns.forEach((item, index) => {
        item.addEventListener('click', () => {
            commendBtns.forEach(item => {
                item.classList.remove('active');
            })
            item.classList.add('active');
        });
    });
    //price compare
    titleTableRoot.innerHTML = data[root].info.name;
    titleTableDynamic.innerHTML = data[dynamic].info.name;
    tbodyRoot.innerHTML = arrRoot.map((item, index) => {
        return `
                <tr class="table_row">
                    <td class="table__name">${item.name}</td>
                    <td class="table_image" >
                        <img src="./assets/images/${item.img}.png" alt="">
                    </td>
                    <td class="table_price ${index === 0 ? 'active' : ''}">
                        <span>$${item.price}</span>
                    </td>
                    </tr>
                `;
    }).join('');

    tbodyDynamic.innerHTML = arrDynamic.map((item, index) => {
        return `
                <tr class="table_row">
                    <td class="table__name">${item.name}</td>
                    <td class="table_image" >
                        <img src="./assets/images/${item.img}.png" alt="">
                    </td>
                    <td class="table_price ${index === 0 ? 'active' : ''}">
                        <span>$${item.price}</span>
                    </td>
                    </tr>
                `;
    }).join('');

}, false)