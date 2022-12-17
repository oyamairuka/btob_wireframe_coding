function initialize() {

    menuList.forEach(element => {
        var e = document.createElement('li');
        e.classList.add('header_menu_li');
        var link = document.createElement('a');
        link.href = element.path;
        link.text = element.name;
        link.classList.add('header_menu_link');
        e.appendChild(link);
        document.getElementById('header_menu').appendChild(e);
    });
    document.getElementById('footer').innerText = "footer";

    document.getElementById('header_phone_number').innerHTML = phoneNumber;
    document.getElementById('contactButtonHeader').textContent = headerContactButtonCaption;
}

initialize();