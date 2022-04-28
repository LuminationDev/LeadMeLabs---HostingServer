module.exports = (app) => {
    //Hosting the nuc
    app.get('/program-nuc-version', (req, res) => {
        res.send('1.0.0 https://learninglablauncher.herokuapp.com/program-nuc 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65');
    });

    app.get('/program-nuc', (req, res) => {
        var file = __dirname + '/applications/NUC.zip';
        res.download(file);
    });

    //Hosting the station
    app.get('/program-station-version', (req, res) => {
        res.send('1.0.1 https://learninglablauncher.herokuapp.com/program-station 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65');
    });

    app.get('/program-station', (req, res) => {
        var file = __dirname + '/applications/Station.zip';
        res.download(file);
    });

    //Hosting steamCMD
    app.get('/program-steamcmd-version', (req, res) => {
        res.send('1.0.0 https://learninglablauncher.herokuapp.com/program-steamcmd 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65');
    });

    app.get('/program-steamcmd', (req, res) => {
        var file = __dirname + '/applications/steamcmd.zip';
        res.download(file);
    });

    //Hosting for SetVol
    app.get('/program-setvol-version', (req, res) => {
        res.send('1.0.0 https://learninglablauncher.herokuapp.com/program-setvol 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65');
    });

    app.get('/program-setvol', (req, res) => {
        var file = __dirname + '/applications/SetVol.zip';
        res.download(file);
    });
};