function initialize() {
    document.getElementById('catchphrase').textContent = catchphrase;
    document.getElementById('catchphraseEx').innerHTML = catchphraseEx;
    document.getElementById('contactButtonTop').textContent = contactButtonCaption;

    document.getElementById('feature_name').textContent = FEATURE.name;
    document.getElementById('feature_title').textContent = FEATURE.title;
    document.getElementById('feature_caption1').innerHTML = FEATURE.caption1;
    document.getElementById('feature_caption2').innerHTML = FEATURE.caption2;
    document.getElementById('feature_caption3').innerHTML = FEATURE.caption3;
    document.getElementById('featureButtonTop').textContent = FEATURE.buttonCaption;

    document.getElementById('home_function').innerText = "home_function";
}

initialize();