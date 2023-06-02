import data from "./data.js";

document.addEventListener("DOMContentLoaded", () => {

    var mostSearchedList = document.querySelector('.most_searched__list');
    var btnSeeMore = document.querySelector('.btn_see_more');
    var btnSeeLess = document.querySelector('.btn_see_less');

    btnSeeMore.addEventListener('click', () => {
        mostSearchedList.classList.add('see_full');
        btnSeeMore.setAttribute('hidden', true);
        btnSeeLess.removeAttribute('hidden', true);
    })

    btnSeeLess.addEventListener('click', () => {
        mostSearchedList.classList.remove('see_full');
        btnSeeLess.setAttribute('hidden', true);
        btnSeeMore.removeAttribute('hidden', true);
    })

    //render most searched items
    mostSearchedList.innerHTML = data.slice(0, 6).map((item, index) => {
        return `<div class="col-lg-4">
        <li class="most_searched__item">
            <div class="most_searched__item__up">
                <div class="most_searched__item__up__info">
                    <section>
                        <img src="./assets/images/${item.info.image.main}.png" alt="">
                    </section>
                    <section>
                        <figure>
                            <div>
                                <label for="">CPU</label>
                                <p>
                                    <span>${item.chip.name}</span>
                                </p>
                            </div>
                            <div>
                                <label for="">Battery</label>
                                <p>
                                    <span>${item.battery.capacity} Mah</span>
                                </p>
                            </div>
                        </figure>
                        <figure>
                            <div>
                                <label for="">Price</label>
                                <p>
                                    <span>$${(item.store_price.sort((a, b) => a.price - b.price))[0].price} ~ $${(item.store_price.sort((a, b) => a.price - b.price))[item.store_price.length - 1].price}</span>
                                </p>
                            </div>
                            <div>
                                <label for="">Rating</label>
                                <p>
                                    <span>${item.rating.num_of_rating}</span>
                                </p>
                            </div>
                        </figure>

                    </section>
                </div>
                <h1>
                    ${index <= 2 ? `<img src="./assets/images/${(index === 0 && `gold`) || (index === 1 && 'silver') || (index === 2 && `bronze`)}-medal.png" alt=""></img>` : ''}
                    ${item.info.name}
                </h1>
                <div class="most_searched__item__up__overlay">
                <section>
                        <span>Company: </span>
                        <span>${item.info.company}</span>
                    </section>
                    <section>
                        <span>Name: </span>
                        <span>${item.info.name}</span>
                    </section>
                    <section>
                        <span>Screen: </span>
                        <span>${item.screen.resolution} px</span>
                    </section>
                    <section>
                        <span>Chip: </span>
                        <span>${item.chip.name}</span>
                    </section>
                    <section>
                        <span>Graphic Card: </span>
                        <span>${item.graphic.name}</span>
                    </section>
                    <section>
                        <span>Hard Disk: </span>
                        <span>${item.disk.capacity} Gb</span>
                    </section>
                    <section>
                        <span>RAM: </span>
                        <span>${item.ram.capacity} Gb</span>
                    </section>
                    <section>
                        <span>Fan: </span>
                        <span>Macbook Pro</span>
                    </section>
                    <section>
                        <span>Battery: </span>
                        <span>${item.battery.capacity} mAh</span>
                    </section>
                    <section>
                        <span>Price: </span>
                        <span>$${(item.store_price.sort((a, b) => a.price - b.price))[0].price} ~ $${(item.store_price.sort((a, b) => a.price - b.price))[item.store_price.length - 1].price}</span>
                    </section>
                </div>
            </div>
            <button class="most_searched__item__down">
                Details
            </button>
        </li>
    </div>`
    }).join('');

    var mostSearchItems = document.querySelectorAll('.most_searched__item__up__info');
    var mostSearchItemsOverlay = document.querySelectorAll('.most_searched__item__up__overlay');
    var btnDetails = document.querySelectorAll('.most_searched__item__down');

    btnDetails.forEach((item, index) => {
        item.addEventListener('click', () => {
            sessionStorage.setItem('root', index);
            window.location.assign('../detail.html');
        })
    })

    mostSearchItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            mostSearchItemsOverlay[index].classList.add('display_block');
            mostSearchItemsOverlay[index].classList.remove('hide');
            mostSearchItemsOverlay[index].classList.add('appear')
        });
    });

    mostSearchItemsOverlay.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.remove('appear');
            item.classList.add('hide');
        });
    });
}, false)