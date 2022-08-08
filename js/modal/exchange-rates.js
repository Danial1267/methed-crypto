const exchangeRatesList = document.querySelector('.exchange-rates__list');

const renderExchange = (wrapper, data) => {
    const {from, to, rate, change} = JSON.parse(data);

    const listItem = document.createElement('li');
    listItem.classList.add(
        'exchange-rates__item',
        change === 1 ? 'exchange-rates__item--up' : 'exchange-rates__item--down',
    );

    const currency = document.createElement('span');
    currency.classList.add('exchange-rates__currency');
    currency.textContent = `${from}/${to}`

    const value = document.createElement('span');
    value.classList.add('exchange-rates__value');
    value.textContent = rate;

    listItem.append(currency, value);
    wrapper.prepend(listItem);

    if (wrapper.children.length > 4) {
        wrapper.children[4].remove();
    }
}

const socket = new WebSocket('ws://web-socket-current.herokuapp.com');

socket.addEventListener('message', event  => {
    renderExchange(exchangeRatesList, event.data);
});

socket.addEventListener('error', err => {
    console.log(err);
});