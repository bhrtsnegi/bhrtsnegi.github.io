let itemsContainerElement = document.querySelector('.items-container');

itemsContainerElement.innerHTML =`
    <div class="item-container">
    <img class="item-image" src="images/1.jpg" alt="item one">
    <div class="rating">
        4.5⭐ | 1.4k
    </div>
    <div class="company-name">Cartlon London</div>
    <div class="item-name">Rhodium-Plated Studs</div>
    <div class="price">
        <span class="current-price">Rs 606</span>
        <span class="original-price">Rs 1045</span>
        <span class="discount">(42% OFF)</span>
    </div>
    <button class="btn-add-bag">Add to Bag</button>
    </div>
    `;

    let item = document.querySelector('.item-container');
    let itemImage;