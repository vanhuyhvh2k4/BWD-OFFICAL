import data from "./data.js";

document.addEventListener('DOMContentLoaded', () => {
    const root = sessionStorage.getItem('root');
    let infoLeft = document.querySelector('.info__left');
    let subInfoLeft = document.querySelector('.subInfo__left');
    let infoRightDetail = document.querySelector('.info__right-detail');
    let carousel = document.querySelector('.carousel-inner');
    let smallImage = document.querySelector('.info__left-list_images');
    let infoRightDetailPrice = document.querySelector('.info__right-price > h1:last-child');
    let table = document.querySelector('.table-wrapper');
    let title = document.querySelector('.title');
    let outstandingFeatures = document.querySelector('.features');
    let popup = document.querySelector('.poppup_compare_modal');
    let compareBtn = document.querySelector('.info_right-group_button > button:last-child');
    let closeBtn = document.querySelector('.btn_close');
    let itemRoot = document.querySelector('.poppup_compare_form__item.root');
    let btnSelect = document.querySelector('.btn_select');
    let formItemPoppup = document.querySelector('.poppup_compare_form__item.dynamic');
    let poppupSelectItems = document.querySelectorAll('.poppup_select__item');
    let poppupSelect = document.querySelector('.poppup_select');
    let btnPoppupClose = document.querySelector('.poppup_select_close');
    let compareBtnForm = document.querySelector('.compare_btn');
    let dynamicItem;

    //popup
    compareBtn.addEventListener('click', () => {
        popup.hidden = false;
    });

    closeBtn.addEventListener('click', () => {
        popup.hidden = true;
    })

    btnSelect.addEventListener('click', () => {
        poppupSelect.removeAttribute('hidden', true);
        btnSelect.setAttribute('hidden', true)
    })

    btnPoppupClose.addEventListener('click', () => {
        btnSelect.removeAttribute('hidden', true)
        poppupSelect.setAttribute('hidden', true);
    })

    itemRoot.innerHTML = 
    `
    <div  class="poppup_compare_form__item__img">
        <img src="./assets/images/${data[root].info.image.main}.png" alt="">
    </div>
    <article class="poppup_compare_form__item__text">
        <div>
            <span>Company: </span>
            <span>${data[root].info.company}</span>
        </div>
        <div>
            <span>Name: </span>
            <span>${data[root].info.name}</span>
        </div>
        <div>
            <span>Price: </span>
            <span>${(data[root].store_price.sort((a, b) => a.price - b.price))[0].price} ~ $${(data[root].store_price.sort((a, b) => a.price - b.price))[data[root].store_price.length - 1].price}</span>
        </div>
    `;

    poppupSelectItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            dynamicItem = index;
            formItemPoppup.innerHTML = `
            <div  class="poppup_compare_form__item__img">
                <img src="./assets/images/${data[index].info.image.main}.png" alt="">
            </div>
            <article class="poppup_compare_form__item__text">
                <div>
                    <span>Company: </span>
                    <span>${data[index].info.company}</span>
                </div>
                <div>
                    <span>Name: </span>
                    <span>${data[index].info.name}</span>
                </div>
                <div>
                    <span>Price: </span>
                    <span>${(data[index].store_price.sort((a, b) => a.price - b.price))[0].price} ~ $${(data[index].store_price.sort((a, b) => a.price - b.price))[data[index].store_price.length - 1].price}</span>
                </div>
                `;
        });
    })

    compareBtnForm.addEventListener('click', () => {
        sessionStorage.setItem('dynamic', dynamicItem);
        window.location.assign('../compare.html');
    })

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 200 && window.pageYOffset <= 1300) {
            infoLeft.classList.add('fixed');
            subInfoLeft.hidden = false;
        } else {
            infoLeft.classList.remove('fixed');
            subInfoLeft.hidden = true;
        }
    })

    //title
    title.innerHTML = `Laptop ${data[root].info.name}/${data[root].graphic.company} ${data[root].graphic.name} ${data[root].graphic.capacity} GB/${data[root].disk.capacity} GB/${data[root].screen.inch} inch ${data[root].screen.type}/${data[root].design.os}`;

    // Carousel
    carousel.innerHTML = `
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src="./assets/images/${data[root].info.image.slider[0]}.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="./assets/images/${data[root].info.image.slider[1]}.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="./assets/images/${data[root].info.image.slider[2]}.jpg" class="d-block w-100" alt="...">
                    </div>
                    `;

    //small image
    smallImage.innerHTML = data[root].info.image.small.map(item => {
        return `<li class="col-3">
        <img src="./assets/images/${item}.jpg" alt="">
    </li>`
    }).join(" ");

    // price
    infoRightDetailPrice.innerHTML = `${(data[root].store_price.sort((a, b) => a.price - b.price))[0].price} ~ $${(data[root].store_price.sort((a, b) => a.price - b.price))[data[root].store_price.length - 1].price}`

    //info right detail
    infoRightDetail.innerHTML = `
                                <li>
                                    <i class="fa-solid fa-display"></i>
                                    <h3>${parseFloat(data[root].screen.inch).toFixed(1)} inch, ${data[root].screen.resolution} Pixels, ${data[root].screen.type}, ${data[root].screen.frequency} Hz</h3>
                                </li>
                                <li>
                                    <i class="fa-solid fa-microchip"></i>
                                    <h3>${data[root].chip.company}, ${data[root].chip.name}, ${data[root].chip.type}</h3>
                                </li>
                                <li>
                                    <i class="fa-solid fa-memory"></i>
                                    <h3>${data[root].ram.capacity} GB, ${data[root].ram.type}, ${data[root].ram.speed} MHz</h3>
                                </li>
                                <li>
                                    <i class="fa-solid fa-hard-drive"></i>
                                    <h3>${data[root].disk.type} ${data[root].disk.capacity} GB</h3>
                                </li>
                                <li>
                                    <i class="fa-solid fa-battery-full"></i>
                                    <h3>${data[root].battery.capacity}MhA</h3>
                                </li>
                                <li class="info__right-detail-more">
                                    <small>>>> See more detail</small>
                                </li>
    `;

    //table
    table.innerHTML = `
                        <table class="table table-dark table-striped table-hover">
                            <tr>
                                <td>Operating System</td>
                                <td>${data[root].design.os}</td>
                            </tr>
                            <tr>
                                <td>Screen</td>
                                <td>${parseFloat(data[root].screen.inch).toFixed(1)} inch, ${data[root].screen.resolution} Pixels, ${data[root].screen.type}, ${data[root].screen.frequency} Hz</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>${data[root].chip.company}, ${data[root].chip.name}, ${data[root].chip.type}</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>${data[root].ram.capacity} GB, ${data[root].ram.type}, ${data[root].ram.speed} MHz</td>
                            </tr>
                            <tr>
                                <td>Disk</td>
                                <td>${data[root].disk.type} ${data[root].disk.capacity} GB</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>${data[root].design.weight} kg</td>
                            </tr>
                            <tr>
                                <td>Graphic</td>
                                <td>${data[root].graphic.company}, ${data[root].graphic.name}, ${data[root].graphic.type}, ${data[root].graphic.capacity} GB</td>
                            </tr>
                            <tr>
                                <td>Battery</td>
                                <td>${data[root].battery.capacity} MAh</td>
                            </tr>
                            <tr>
                                <td>Made In</td>
                                <td>${data[root].info.madeIn}</td>
                            </tr>
                        </table>
    `;

    //Features
    outstandingFeatures.innerHTML = 
    `
    <h1>Outstanding Features</h1>
    <li id="features__item_1" class="features__item">
        <section class="features__item-img">
            <img src="./assets/images/${data[root].outstanding.cpu.image}.png" alt="">
        </section>
        <section class="features__item-text">
            <h2>${data[root].outstanding.cpu.name}</h2>
            <ul class="row">
               <li class="col-6">
                <span>Core:</span>
                <span>${data[root].outstanding.cpu.core}</span>
               </li> 
               <li class="col-6">
                <span>Thread:</span>
                <span>${data[root].outstanding.cpu.thread}</span>
               </li> 
               <li class="col-6">
                <span>Clock Speed:</span>
                <span>${data[root].outstanding.cpu.clock_speed} GHz</span>
               </li> 
               <li class="col-6">
                <span>Turbo Speed:</span>
                <span>${data[root].outstanding.cpu.turbo_speed} GHz</span>
               </li> 
               <li class="col-6">
                <span>TCP down:</span>
                <span>${data[root].outstanding.cpu.TDP_down} W</span>
               </li> 
               <li class="col-6">
                <span>Typical TCP:</span>
                <span>${data[root].outstanding.cpu.typical_TDP} W</span>
               </li> 
            </ul>
        </section>
    </li>
    <li id="features__item_2" class="features__item">
        <section class="features__item-img">
            <img src="./assets/images/${data[root].outstanding.graphic.image}.png" alt="">
        </section>
        <section class="features__item-text">
            <h2>${data[root].outstanding.graphic.name}</h2>
            <ul class="row">
                <li class="col-6">
                 <span>Memory:</span>
                 <span>${data[root].outstanding.graphic.memory} GB</span>
                </li> 
                <li class="col-6">
                 <span>Core Clock:</span>
                 <span>${data[root].outstanding.graphic.core_clock} GHz</span>
                </li> 
                <li class="col-6">
                 <span>Memory Clock:</span>
                 <span>${data[root].outstanding.graphic.memory_clock} GHz</span>
                </li> 
                <li class="col-6">
                 <span>DirectX:</span>
                 <span>${data[root].outstanding.graphic.directX}</span>
                </li> 
                <li class="col-6">
                 <span>OpenGL:</span>
                 <span>${data[root].outstanding.graphic.openGL}</span>
                </li> 
                <li class="col-6">
                 <span>Max TCP:</span>
                 <span>${data[root].outstanding.graphic.max_TCP} W</span>
                </li> 
             </ul>
        </section>
    </li>
    `;
}, false);