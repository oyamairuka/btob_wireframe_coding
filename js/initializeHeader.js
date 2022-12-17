function initialize() {

    menuList.forEach(element => {
        var e = document.createElement('li');
        e.classList.add('header_menu');
        var link = document.createElement('a');
        link.href = element.path;
        link.text = element.name;
        link.classList.add('header_menu_link');
        e.appendChild(link);
        document.getElementById('header_nemu').appendChild(e);
    });
    document.getElementById('footer').innerText = "footer";
}

initialize();