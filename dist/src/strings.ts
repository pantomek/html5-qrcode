/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * String translated to pl language.
 */


export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `Błąd parsowania kodu QR, błąd = ${exception}`;
    }
    public static errorGettingUserMedia(error: any): string {
        return `Błąd podczas uzyskiwania dostępu do kamery, błąd = ${error}`;
    }
    public static onlyDeviceSupportedError(): string {
        return "Urządzenie nie obsługuje navigator.mediaDevices, jedynie "
        + "obsługiwany parametr cameraIdOrConfig w tym przypadku to parametr deviceId "
        + "(string).";
    }
    public static cameraStreamingNotSupported(): string {
        return "Przeglądarka nie obsługuje strumieniowania z kamery.";
    }
    public static unableToQuerySupportedDevices(): string {
        return "Nie można zapytać o obsługiwane urządzenia, nieznany błąd.";
    }
    public static insecureContextCameraQueryError(): string {
        return "Dostęp do kamery jest obsługiwany tylko w bezpiecznym kontekście, takim jak https "
        + "lub localhost.";
    }
    public static scannerPaused(): string {
        return "Skaner wstrzymany";
    }
}
/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "Skanowanie";
    }
    public static idleStatus(): string {
        return "Bezczynny";
    }
    public static errorStatus(): string {
        return "Błąd";
    }
    public static permissionStatus(): string {
        return "Uprawnienia";
    }
    public static noCameraFoundErrorStatus(): string {
        return "Brak kamer";
    }
    public static lastMatch(decodedText: string): string {
        return `Ostatnie dopasowanie: ${decodedText}`;
    }
    public static codeScannerTitle(): string {
        return "Skaner kodów";
    }
    public static cameraPermissionTitle(): string {
        return "Prośba o uprawnienia do kamery";
    }
    public static cameraPermissionRequesting(): string {
        return "Prośba o uprawnienia do kamery...";
    }
    public static noCameraFound(): string {
        return "Nie znaleziono kamery";
    }
    public static scanButtonStopScanningText(): string {
        return "Zatrzymaj skanowanie";
    }
    public static scanButtonStartScanningText(): string {
        return "Rozpocznij skanowanie";
    }
    public static torchOnButton(): string {
        return "Włącz latarkę";
    }
    public static torchOffButton(): string {
        return "Wyłącz latarkę";
    }
    public static torchOnFailedMessage(): string {
        return "Nie udało się włączyć latarki";
    }
    public static torchOffFailedMessage(): string {
        return "Nie udało się wyłączyć latarki";
    }
    public static scanButtonScanningStarting(): string {
        return "Uruchamianie kamery...";
    }
    /**
     * Tekst do wyświetlenia, gdy wybrano skanowanie kamery.
     * 
     * Będzie to używane do przełączenia na skanowanie oparte na plikach.
     */
    public static textIfCameraScanSelected(): string {
        return "Skanuj plik obrazu";
    }
    /**
     * Tekst do wyświetlenia, gdy wybrano skanowanie oparte na plikach.
     * 
     * Będzie to używane do przełączenia na skanowanie oparte na kamerze.
     */
    public static textIfFileScanSelected(): string {
        return "Skanuj bezpośrednio za pomocą kamery";
    }
    public static selectCamera(): string {
        return "Wybierz kamerę";
    }
    public static fileSelectionChooseImage(): string {
        return "Wybierz obraz";
    }
    public static fileSelectionChooseAnother(): string {
        return "Wybierz inny";
    }
    public static fileSelectionNoImageSelected(): string {
        return "Nie wybrano obrazu";
    }
    /** Prefiks dla anonimowych kamer. */
    public static anonymousCameraPrefix(): string {
        return "Anonimowa kamera";
    }
    public static dragAndDropMessage(): string {
        return "Lub upuść obraz, aby go zeskanować";
    }
    public static dragAndDropMessageOnlyImages(): string {
        return "Lub upuść obraz, aby go zeskanować (inne pliki nie są obsługiwane)";
    }
    /** Wartość dla zoomu. */
    public static zoom(): string {
        return "powiększenie";
    }
    public static loadingImage(): string {
        return "Wczytywanie obrazu...";
    }
    public static cameraScanAltText(): string {
        return "Skanowanie oparte na kamerze";
    }
    public static fileScanAltText(): string {
        return "Skanowanie oparte na plikach";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static poweredBy(): string {
        return "Napędzane przez ";
    }
    public static reportIssues(): string {
        return "Zgłoś problemy";
    }
}
