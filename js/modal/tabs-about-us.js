const advantageButtons = document.querySelectorAll('.advantage__button');
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');

advantageButtons.forEach((advantageButton, i) => {
    advantageButton.addEventListener('click', () => {
        advantageItemsContent.forEach((advantageItemContent, j) => {
            if (i === j) {
                advantageButtons[j].classList.add('advantage__button--active');
                advantageItemsContent[j].classList.add('advantage__item-content--active')
            } else {
                advantageButtons[j].classList.remove('advantage__button--active');
                advantageItemsContent[j].classList.remove('advantage__item-content--active')
            }
        })
    })
})