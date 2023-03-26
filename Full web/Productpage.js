if (document.readState == 'loading') {
    document.addEventListener('DOMContentLoaded', readypage)
} else {
    readypage()
}

/*add to cart and remove from cart*/
function readypage() {
    var removeCartItemButtons = document.getElementsByClassName('button-remove')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeitemfromcart)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change',addingtotal)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addingitemtocart)
    }

    document.getElementsByClassName('button-purchase')[0].addEventListener('click', purchaseClicked)
    
}



/*redirect to personal details page when "purchase" is clicked new*/

function purchaseClicked() {
	createConfirmMsg()
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
   updateCart()
	
    
}



 /*confirmation message in purchase*/
 function createConfirmMsg(){	
	var msg= "Thank you for shopping with us. \nHere's the summary of your order. \n"
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
	for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
		var item = cartRow.getElementsByClassName('cart-item')[0].innerText
		var price = parseFloat(cartRow.getElementsByClassName('cart-price')[0].innerText.replace('$', ''))
        var quantity =  cartRow.getElementsByClassName('cart-quantity-input')[0].value
		msg=msg+quantity+ " item(s) of "+item+" costs "+price+ ".\n"
    }
	var cartTotal =document.getElementsByClassName('cart-total-price')[0].innerText;
	msg= msg+"Total Amount of the order is "+cartTotal+". \nHave a good day!"
	localStorage.setItem("msg",msg );
 }



/*remove item from cart*/
function removeitemfromcart(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
   updateCart()
}

/*adding the total*/
function addingtotal(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
   updateCart()
}

/*adding items to the cart*/
function addingitemtocart(event) {
    var button = event.target
    var shopItem = button.parentElement
    var name = shopItem.getElementsByClassName('shop-item-name')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
   
   
    addingItemsToCart(name, price, imageSrc)
   updateCart()
}

/*contents in the cart*/
function addingItemsToCart(name, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-name')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == name) {
            alert('This item is alreadpage added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-name">${name}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="button button-remove" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('button-remove')[0].addEventListener('click', removeitemfromcart)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',addingtotal)
}

/*checking quantity and total price*/
function updateCart() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

