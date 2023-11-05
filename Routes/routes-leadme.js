module.exports = (app) => {
    //Hosting the launcher
    app.get('/program-launcher-version', (req, res) => {
        res.send(`1.0.1 ${baseURL(req)} 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65`);
    });

    app.get('/program-launcher', (req, res) => {
        var file = __dirname + '/../applications/Launcher.zip';
        res.download(file);
    });

    //Hosting the nuc
    app.get('/program-nuc-version', (req, res) => {
        res.send(`1.1.4 ${baseURL(req)} 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65`);
    });

    app.get('/program-nuc', (req, res) => {
        var file = __dirname + '/../applications/NUC.zip';
        res.download(file);
    });

    //Hosting the NucDebugger
    app.get('/program-nucdebugger-version', (req, res) => {
        res.send(`1.0.1 ${baseURL(req)} 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65`);
    });

    app.get('/program-nucdebugger', (req, res) => {
        var file = __dirname + '/../applications/NucDebugger.zip';
        res.download(file);
    });

    //Hosting the station
    app.get('/program-station-version', (req, res) => {
        res.send(`1.1.3 ${baseURL(req)} 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65`);
    });

    app.get('/program-station', (req, res) => {
        var file = __dirname + '/../applications/Station.zip';
        res.download(file);
    });

    //Hosting steamCMD
    app.get('/program-steamcmd-version', (req, res) => {
        res.send(`1.0.1 ${baseURL(req)} 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65`);
    });

    app.get('/program-steamcmd', (req, res) => {
        var file = __dirname + '/../applications/steamcmd.zip';
        res.download(file);
    });

    //Hosting for SetVol
    app.get('/program-setvol-version', (req, res) => {
        res.send(`1.0.1 ${baseURL(req)} 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65`);
    });

    app.get('/program-setvol', (req, res) => {
        var file = __dirname + '/../applications/SetVol.zip';
        res.download(file);
    });
};

//Get the base URL of the current hosting site and return the program route (the queried minus the version string)
let baseURL = (req) => {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    return fullUrl.replace("-version", "");
}
