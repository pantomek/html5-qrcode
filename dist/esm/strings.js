var Html5QrcodeStrings = (function () {
    function Html5QrcodeStrings() {
    }
    Html5QrcodeStrings.codeParseError = function (exception) {
        return "B\u0142\u0105d parsowania kodu QR, b\u0142\u0105d = ".concat(exception);
    };
    Html5QrcodeStrings.errorGettingUserMedia = function (error) {
        return "B\u0142\u0105d podczas uzyskiwania dost\u0119pu do kamery, b\u0142\u0105d = ".concat(error);
    };
    Html5QrcodeStrings.onlyDeviceSupportedError = function () {
        return "Urządzenie nie obsługuje navigator.mediaDevices, jedynie "
            + "obsługiwany parametr cameraIdOrConfig w tym przypadku to parametr deviceId "
            + "(string).";
    };
    Html5QrcodeStrings.cameraStreamingNotSupported = function () {
        return "Przeglądarka nie obsługuje strumieniowania z kamery.";
    };
    Html5QrcodeStrings.unableToQuerySupportedDevices = function () {
        return "Nie można zapytać o obsługiwane urządzenia, nieznany błąd.";
    };
    Html5QrcodeStrings.insecureContextCameraQueryError = function () {
        return "Dostęp do kamery jest obsługiwany tylko w bezpiecznym kontekście, takim jak https "
            + "lub localhost.";
    };
    Html5QrcodeStrings.scannerPaused = function () {
        return "Skaner wstrzymany";
    };
    return Html5QrcodeStrings;
}());
export { Html5QrcodeStrings };
var Html5QrcodeScannerStrings = (function () {
    function Html5QrcodeScannerStrings() {
    }
    Html5QrcodeScannerStrings.scanningStatus = function () {
        return "Skanowanie";
    };
    Html5QrcodeScannerStrings.idleStatus = function () {
        return "Bezczynny";
    };
    Html5QrcodeScannerStrings.errorStatus = function () {
        return "Błąd";
    };
    Html5QrcodeScannerStrings.permissionStatus = function () {
        return "Uprawnienia";
    };
    Html5QrcodeScannerStrings.noCameraFoundErrorStatus = function () {
        return "Brak kamer";
    };
    Html5QrcodeScannerStrings.lastMatch = function (decodedText) {
        return "Ostatnie dopasowanie: ".concat(decodedText);
    };
    Html5QrcodeScannerStrings.codeScannerTitle = function () {
        return "Skaner kodów";
    };
    Html5QrcodeScannerStrings.cameraPermissionTitle = function () {
        return "Prośba o uprawnienia do kamery";
    };
    Html5QrcodeScannerStrings.cameraPermissionRequesting = function () {
        return "Prośba o uprawnienia do kamery...";
    };
    Html5QrcodeScannerStrings.noCameraFound = function () {
        return "Nie znaleziono kamery";
    };
    Html5QrcodeScannerStrings.scanButtonStopScanningText = function () {
        return "Zatrzymaj skanowanie";
    };
    Html5QrcodeScannerStrings.scanButtonStartScanningText = function () {
        return "Rozpocznij skanowanie";
    };
    Html5QrcodeScannerStrings.torchOnButton = function () {
        return "Włącz latarkę";
    };
    Html5QrcodeScannerStrings.torchOffButton = function () {
        return "Wyłącz latarkę";
    };
    Html5QrcodeScannerStrings.torchOnFailedMessage = function () {
        return "Nie udało się włączyć latarki";
    };
    Html5QrcodeScannerStrings.torchOffFailedMessage = function () {
        return "Nie udało się wyłączyć latarki";
    };
    Html5QrcodeScannerStrings.scanButtonScanningStarting = function () {
        return "Uruchamianie kamery...";
    };
    Html5QrcodeScannerStrings.textIfCameraScanSelected = function () {
        return "Skanuj plik obrazu";
    };
    Html5QrcodeScannerStrings.textIfFileScanSelected = function () {
        return "Skanuj bezpośrednio za pomocą kamery";
    };
    Html5QrcodeScannerStrings.selectCamera = function () {
        return "Wybierz kamerę";
    };
    Html5QrcodeScannerStrings.fileSelectionChooseImage = function () {
        return "Wybierz obraz";
    };
    Html5QrcodeScannerStrings.fileSelectionChooseAnother = function () {
        return "Wybierz inny";
    };
    Html5QrcodeScannerStrings.fileSelectionNoImageSelected = function () {
        return "Nie wybrano obrazu";
    };
    Html5QrcodeScannerStrings.anonymousCameraPrefix = function () {
        return "Anonimowa kamera";
    };
    Html5QrcodeScannerStrings.dragAndDropMessage = function () {
        return "Lub upuść obraz, aby go zeskanować";
    };
    Html5QrcodeScannerStrings.dragAndDropMessageOnlyImages = function () {
        return "Lub upuść obraz, aby go zeskanować (inne pliki nie są obsługiwane)";
    };
    Html5QrcodeScannerStrings.zoom = function () {
        return "powiększenie";
    };
    Html5QrcodeScannerStrings.loadingImage = function () {
        return "Wczytywanie obrazu...";
    };
    Html5QrcodeScannerStrings.cameraScanAltText = function () {
        return "Skanowanie oparte na kamerze";
    };
    Html5QrcodeScannerStrings.fileScanAltText = function () {
        return "Skanowanie oparte na plikach";
    };
    return Html5QrcodeScannerStrings;
}());
export { Html5QrcodeScannerStrings };
var LibraryInfoStrings = (function () {
    function LibraryInfoStrings() {
    }
    LibraryInfoStrings.poweredBy = function () {
        return "Napędzane przez ";
    };
    LibraryInfoStrings.reportIssues = function () {
        return "Zgłoś problemy";
    };
    return LibraryInfoStrings;
}());
export { LibraryInfoStrings };
//# sourceMappingURL=strings.js.map