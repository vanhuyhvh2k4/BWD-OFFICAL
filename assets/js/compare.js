import laptoplist from "./data.js";
import {
    svgData
} from './svgData.js';
document.addEventListener("DOMContentLoaded", () => {
    const arr = laptoplist.sort((a, b) => b.score - a.score);
    var commendBtns = document.querySelectorAll('.recommend__chart__btn');
    var root = sessionStorage.getItem('root');
    var dynamic = sessionStorage.getItem('dynamic');
    var cardList = document.querySelector('.card_list');
    var chart = document.querySelector('.recommend__chart__wrapper');
    var advantage = document.querySelector('.recommend__recommend');
    var specific = document.querySelector('.specific');
    var tbodyRoot = document.querySelector('#tbody_root');
    var tbodyDynamic = document.querySelector('#tbody_dynamic');
    var arrRoot = arr[root].store_price.sort((a, b) => a.price - b.price);
    var arrDynamic = laptoplist[dynamic].store_price.sort((a, b) => a.price - b.price);
    var titleTableRoot = document.querySelector('.price_comparison__group:first-child > h1');
    var titleTableDynamic = document.querySelector('.price_comparison__group:last-child > h1');
    var chartPoint = document.querySelector('.recommend__chart__points');

    console.log({
        root,
        dynamic
    });

    console.log(arr);

    // card item
    cardList.innerHTML = `
    <div class="card_item">
        <section class="card_item__img">
            <img src="./assets/images/${arr[root].imgUrl}.png" alt="">
            ${arr[root].score > arr[dynamic].score ? '<img class="card_item__img--winner" src="./assets/images/winner.png" alt="">': ""}
        </section>
        <article class="card_item__text">
            <div class="card_item__text__group">
                <img src="./assets/images/company.png" alt="">
                <h1>${arr[root].company}</h1>
            </div>
            <div class="card_item__text__group">
                <img src="./assets/images/name.png" alt="">
                <h1>${arr[root].name}</h1>
            </div>
            <div class="card_item__text__group">
                <img src="./assets/images/price-tag.png" alt="">
                <h1>${arr[root].price}</h1>
            </div>
        </article>
    </div>
    <img src="./assets/images/vs-colorful.png" alt="">
    <div class="card_item">
        <section class="card_item__img">
            <img src="./assets/images/${arr[dynamic].imgUrl}.png" alt="">
            ${arr[root].score < arr[dynamic].score ? '<img class="card_item__img--winner" src="./assets/images/winner.png" alt="">': ""}
        </section>
        <article class="card_item__text">
            <div class="card_item__text__group">
                <img src="./assets/images/company.png" alt="">
                <h1>${arr[dynamic].company}</h1>
            </div>
            <div class="card_item__text__group">
                <img src="./assets/images/name.png" alt="">
                <h1>${arr[dynamic].name}</h1>
            </div>
            <div class="card_item__text__group">
                <img src="./assets/images/price-tag.png" alt="">
                <h1>${arr[dynamic].price}</h1>
            </div>
        </article>
    </div>
`;

    //recommend chart
    chart.innerHTML = svgData[root].svg;

    //recommend recommend
    advantage.innerHTML = `
    <h1>Why ${arr[root].score > arr[dynamic].score ? arr[root].name : arr[dynamic].name} better than ${arr[root].score < arr[dynamic].score ? arr[root].name : arr[dynamic].name}</h1>
    <div class="recommend__recommend__text">
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Weight: ${Math.abs((arr[root].weight - arr[dynamic].weight) * 1000)}g lighter</h2>
                <article>
                    <b>${arr[root].score > arr[dynamic].score ? arr[root].weight : arr[dynamic].weight} kg</b>
                    <span>vs ${arr[root].score > arr[dynamic].score ? arr[dynamic].weight : arr[root].weight} kg</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Thickness: ${Math.abs(arr[root].thickness - arr[dynamic].thickness).toFixed(1)} mm thinner</h2>
                <article>
                    <b>${arr[root].score > arr[dynamic].score ? arr[root].thickness : arr[dynamic].thickness} mm</b>
                    <span>vs ${arr[root].score > arr[dynamic].score ? arr[dynamic].thickness : arr[root].thickness} mm</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Resolution higher</h2>
                <article>
                    <b>${arr[root].score > arr[dynamic].score ? arr[root].resolution : arr[dynamic].resolution}</b>
                    <span>vs ${arr[root].score > arr[dynamic].score ? arr[dynamic].resolution : arr[root].resolution}</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>CPU speed: ${Math.abs(arr[root].core - arr[dynamic].core).toFixed(1)} GHz faster</h2>
                <article>
                    <b>${arr[root].score > arr[dynamic].score ? arr[root].core : arr[dynamic].core} Ghz</b>
                    <span>vs ${arr[root].score > arr[dynamic].score ? arr[dynamic].core : arr[root].core} GHz</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Numbers of port: ${Math.abs(arr[root].connect - arr[dynamic].connect)} more USB 2.0 ports</h2>
                <article>
                    <b>${arr[root].score > arr[dynamic].score ? arr[root].connect : arr[dynamic].connect} port</b>
                    <span>vs ${arr[root].score > arr[dynamic].score ? arr[dynamic].connect : arr[root].connect} port</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>Battery: ${Math.abs(arr[root].battery - arr[dynamic].battery)} mAh more</h2>
                <article>
                    <b>${arr[root].score > arr[dynamic].score ? arr[root].battery : arr[dynamic].battery} mAh</b>
                    <span>vs ${arr[root].score > arr[dynamic].score ? arr[dynamic].battery : arr[root].battery} mAh</span>
                </article>
            </div>
        </article>
        <article class="recommend__recommend__group">
            <img src="./assets/images/checked.png" alt="">
            <div>
                <h2>RAM: ${Math.abs(arr[root].ram - arr[dynamic].ram)} Gb more</h2>
                <article>
                    <b>${arr[root].score > arr[dynamic].score ? arr[root].ram : arr[dynamic].ram} Gb</b>
                    <span>vs ${arr[root].score > arr[dynamic].score ? arr[dynamic].ram : arr[root].ram} Gb</span>
                </article>
            </div>
        </article>
    </div>
</div>
    `;

    //chart point
    chartPoint.innerHTML = `<section>
                                <h3>${arr[root].score * 10}</h3>
                                <p>Points</p>
                            </section>
                            <section>
                                <h3>${arr[dynamic].score * 10}</h3>
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
                    <p>${arr[root].width} mm</p>
                    <div>
                        <div style="width: ${((arr[root].width) / 500) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].width} mm</p>
                    <div>
                        <div style="width: ${((arr[dynamic].width) / 500) * 100}%;"></div>
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
                    <p>${arr[root].weight} kg</p>
                    <div>
                        <div style="width: ${((arr[root].weight) / 5) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].weight} kg</p>
                    <div>
                        <div style="width: ${((arr[dynamic].weight) / 5) * 100}%;"></div>
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
                    <p>${arr[root].thickness} mm</p>
                    <div>
                        <div style="width: ${((arr[root].thickness) / 50) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].thickness} mm</p>
                    <div>
                        <div style="width: ${((arr[dynamic].thickness) / 50) * 100}%;"></div>
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
                    <p>${arr[root].resolution} px</p>
                    <div>
                        <div style="width: 100%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].resolution} px</p>
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
                    <p>${arr[root].frequency} Hz</p>
                    <div>
                        <div style="width: ${((arr[root].frequency) / 120) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].frequency} Hz</p>
                    <div>
                        <div style="width: ${((arr[dynamic].frequency) / 120) * 100}%;"></div>
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
                    <p>${arr[root].screen_type}</p>
                    <div>
                        <div style="width: 100%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].screen_type}</p>
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
                    <p>${arr[root].core} GHz</p>
                    <div>
                        <div style="width: ${((arr[root].core) / 5) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].core} GHz</p>
                    <div>
                        <div style="width: ${((arr[dynamic].core) / 5) * 100}%;"></div>
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
                    <p>${arr[root].ram} Gb</p>
                    <div>
                        <div style="width: ${((arr[root].ram) / 120) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].ram} Gb</p>
                    <div>
                        <div style="width: ${((arr[dynamic].ram) / 120) * 100}%;"></div>
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
                    <p>${arr[root].disk} Gb</p>
                    <div>
                        <div style="width: ${((arr[root].disk) / 5120) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].disk} Gb</p>
                    <div>
                        <div style="width: ${((arr[dynamic].disk) / 5120) * 100}%;"></div>
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
                    <p>${arr[root].graphic} px</p>
                    <div>
                        <div style="width: 100%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].graphic}</p>
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
                    <p>${arr[root].graphic_memory} Gb</p>
                    <div>
                        <div style="width: ${((arr[root].graphic_memory) / 120) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].graphic_memory} Gb</p>
                    <div>
                        <div style="width: ${((arr[dynamic].graphic_memory) / 120) * 100}%;"></div>
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
                    <p>${arr[root].base_clock} MHz</p>
                    <div>
                        <div style="width: ${((arr[root].base_clock) / 3) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].base_clock} MHz</p>
                    <div>
                        <div style="width: ${((arr[dynamic].base_clock) / 3) * 100}%;"></div>
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
                    <p>${arr[root].connect} ports</p>
                    <div>
                        <div style="width: ${((arr[root].connect) / 5) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].connect} ports</p>
                    <div>
                        <div style="width: ${((arr[dynamic].connect) / 5) * 100}%;"></div>
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
                    <p>${arr[root].lan} ports</p>
                    <div>
                        <div style="width: ${((arr[root].lan) / 5) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].lan} ports</p>
                    <div>
                        <div style="width: ${((arr[dynamic].lan) / 5) * 100}%;"></div>
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
                    <p>${arr[root].external_memory} slot</p>
                    <div>
                        <div style="width: ${((arr[root].external_memory) / 2) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].external_memory} slot</p>
                    <div>
                        <div style="width: ${((arr[dynamic].external_memory) / 2) * 100}%;"></div>
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
                    <p>${arr[root].battery} mAh</p>
                    <div>
                        <div style="width: ${((arr[root].battery) / 10000) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].battery} mAh</p>
                    <div>
                        <div style="width: ${((arr[dynamic].battery) / 10000) * 100}%;"></div>
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
                    <p>${arr[root].battery_slot} slots</p>
                    <div>
                        <div style="width: ${((arr[root].battery_slot) / 2) * 100}%;"></div>
                    </div>
                </div>
                <div id="second" class="specific__group__item__process">
                    <p>${arr[dynamic].battery_slot} slots</p>
                    <div>
                        <div style="width: ${((arr[dynamic].battery_slot) / 2) * 100}%;"></div>
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
    titleTableRoot.innerHTML = arr[root].name;
    titleTableDynamic.innerHTML = arr[dynamic].name;
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
