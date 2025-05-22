    function playRadio(url, stationName) {
        var audioPlayer = document.getElementById('audioPlayer');
        var audioSource = document.getElementById('audioSource');
        var radioTitle = document.getElementById('radioTitle');
        
        // Zmiana źródła audio
        audioSource.src = url;
        audioPlayer.load();
        audioPlayer.play();
        
        // Zmiana tytułu na nazwę stacji
        radioTitle.innerText = stationName;
    }
