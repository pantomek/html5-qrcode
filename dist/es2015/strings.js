export class Html5QrcodeStrings {
    static codeParseError(exception) {
        return `Błąd parsowania kodu QR, błąd = ${exception}`;
    }
    static errorGettingUserMedia(error) {
        return `Błąd podczas uzyskiwania dostępu do kamery, błąd = ${error}`;
    }
    static onlyDeviceSupportedError() {
        return "Urządzenie nie obsługuje navigator.mediaDevices, jedynie "
            + "obsługiwany parametr cameraIdOrConfig w tym przypadku to parametr deviceId "
            + "(string).";
    }
    static cameraStreamingNotSupported() {
        return "Przeglądarka nie obsługuje strumieniowania z kamery.";
    }
    static unableToQuerySupportedDevices() {
        return "Nie można zapytać o obsługiwane urządzenia, nieznany błąd.";
    }
    static insecureContextCameraQueryError() {
        return "Dostęp do kamery jest obsługiwany tylko w bezpiecznym kontekście, takim jak https "
            + "lub localhost.";
    }
    static scannerPaused() {
        return "Skaner wstrzymany";
    }
}
export class Html5QrcodeScannerStrings {
    static scanningStatus() {
        return "Skanowanie";
    }
    static idleStatus() {
        return "Bezczynny";
    }
    static errorStatus() {
        return "Błąd";
    }
    static permissionStatus() {
        return "Uprawnienia";
    }
    static noCameraFoundErrorStatus() {
        return "Brak kamer";
    }
    static lastMatch(decodedText) {
        return `Ostatnie dopasowanie: ${decodedText}`;
    }
    static codeScannerTitle() {
        return "Skaner kodów";
    }
    static cameraPermissionTitle() {
        return "Prośba o uprawnienia do kamery";
    }
    static cameraPermissionRequesting() {
        return "Prośba o uprawnienia do kamery...";
    }
    static noCameraFound() {
        return "Nie znaleziono kamery";
    }
    static scanButtonStopScanningText() {
        return "Zatrzymaj skanowanie";
    }
    static scanButtonStartScanningText() {
        return "Rozpocznij skanowanie";
    }
    static torchOnButton() {
        return "Włącz latarkę";
    }
    static torchOffButton() {
        return "Wyłącz latarkę";
    }
    static torchOnFailedMessage() {
        return "Nie udało się włączyć latarki";
    }
    static torchOffFailedMessage() {
        return "Nie udało się wyłączyć latarki";
    }
    static scanButtonScanningStarting() {
        return "Uruchamianie kamery...";
    }
    static textIfCameraScanSelected() {
        return "Skanuj plik obrazu";
    }
    static textIfFileScanSelected() {
        return "Skanuj bezpośrednio za pomocą kamery";
    }
    static selectCamera() {
        return "Wybierz kamerę";
    }
    static fileSelectionChooseImage() {
        return "Wybierz obraz";
    }
    static fileSelectionChooseAnother() {
        return "Wybierz inny";
    }
    static fileSelectionNoImageSelected() {
        return "Nie wybrano obrazu";
    }
    static anonymousCameraPrefix() {
        return "Anonimowa kamera";
    }
    static dragAndDropMessage() {
        return "Lub upuść obraz, aby go zeskanować";
    }
    static dragAndDropMessageOnlyImages() {
        return "Lub upuść obraz, aby go zeskanować (inne pliki nie są obsługiwane)";
    }
    static zoom() {
        return "powiększenie";
    }
    static loadingImage() {
        return "Wczytywanie obrazu...";
    }
    static cameraScanAltText() {
        return "Skanowanie oparte na kamerze";
    }
    static fileScanAltText() {
        return "Skanowanie oparte na plikach";
    }
}
export class LibraryInfoStrings {
    static poweredBy() {
        return "Napędzane przez ";
    }
    static reportIssues() {
        return "Zgłoś problemy";
    }
}
//# sourceMappingURL=strings.js.map