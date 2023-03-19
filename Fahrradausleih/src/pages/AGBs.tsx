import React from 'react';
import {useNavigate} from "react-router-dom";
import {Container} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import "./styles/AGBs.scss";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AGBs(props: any) {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
    <body> 
         <Header />
          <NavBar />
          <Footer />
        <div>
            <Container className="wholeContainer" sx={{
                pb: 6,
                position: "relative",
            }}>
                   
                <Container className="AGBContainer">
                    <Box>
                        <h1 className="text-white">Allgemeine Geschäftsbedingungen der Firma ToJo</h1>
                        <h2 className="text-white">§1 Geltung gegenüber Unternehmern und Begriffsdefinitionen</h2>
                        <p/>
                        <p className="text-white">(1) Die nachfolgenden Allgemeinen Geschäftsbedingungen gelten für alle Lieferungen zwischen
                            uns
                            und einem Verbraucher in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.</p>
                        <p/>
                        <p className="text-white">Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die
                            überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
                            zugerechnet
                            werden können (§ 13 BGB).</p>
                        <p/>
                        <h2 className="text-white">§2 Zustandekommen eines Vertrages, Speicherung des Vertragstextes</h2>
                        <p/>
                        <p className="text-white">(1) Die folgenden Regelungen über den Vertragsabschluss gelten für Bestellungen über unseren
                            online
                            Instrumentenverleih.</p>
                        <p/>
                        <p className="text-white">(2) Im Falle des Vertragsschlusses kommt der Vertrag mit</p>
                        <p/>
                        <Box className="mainNameBox" sx={{fontStyle: "italic"}}>
                            <p className="text-white">Jonas Haberditzl</p>
                            <p className="text-white">U6 1</p>
                            <p className="text-white">D-68161 Mannheim</p>
                            <p className="text-white">E-Mail: jonas.haberditzl@gmail.com</p>
                        </Box>
                        <p/>
                        <p className="text-white">zustande.</p>
                        <p/>
                        <h2 className="text-white">§4 Lieferung</h2>
                        <p/>
                        <p className="text-white">(1) Sofern wir dies in der Produktbeschreibung nicht deutlich anders angegeben haben, sind
                            alle
                            von uns angebotenen Artikel sofort versandfertig. Die Lieferung erfolgt hier spätesten
                            innerhalb
                            von 1 Werktagen. Dabei beginnt die Frist für die Lieferung im Falle der Zahlung per Vorkasse
                            am
                            Tag nach Zahlungsauftrag an die mit der Überweisung beauftragte Bank und bei allen anderen
                            Zahlungsarten am Tag nach Vertragsschluss zu laufen. Fällt das Fristende auf einen Samstag,
                            Sonntag oder gesetzlichen Feiertag am Lieferort, so endet die Frist am nächsten Werktag.</p>
                        <p/>
                        <p className="text-white">(2) Die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der verkauften
                            Sache
                            geht auch beim Versendungskauf erst mit der Übergabe der Sache an den Käufer auf diesen
                            über.</p>
                        <p/>
                        <h2 className="text-white">§5 Eigentumsvorbehalt</h2>
                        <p/>
                        <p className="text-white">Wir behalten uns das Eigentum an der Ware bis zur vollständigen Bezahlung des Kaufpreises
                            vor.</p>
                        <p/>
                        <p className="text-white">*********************************************************************************************************************************************************************</p>
                        <h2 className="text-white">§6 Widerrufsrecht des Kunden als Verbraucher</h2>
                        <p/>
                        <h3 className="text-white">Widerrufsrecht für Verbraucher</h3>
                        <p/>
                        <p className="text-white">Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei Verbraucher jede
                            natürliche Person ist, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder
                            ihrer
                            gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können:</p>
                        <p/>
                        <h3 className="text-white">Widerrufsbelehrung</h3>
                        <p/>
                        <p/>
                        <h4 className="text-white">Widerrufsrecht</h4>
                        <p/>
                        <p className="text-white">Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
                            widerrufen.</p>
                        <p className="text-white">Die Widerrufsfrist beträgt vierzehn Tage, ab dem Tag des Vertragsabschlusses.</p>
                        <p/>
                        <p className="text-white">Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
                        <Box className="mainNameBox" sx={{fontStyle: "italic"}}>
                            <p className="text-white">Jonas Haberditzl</p>
                            <p className="text-white">U6 1</p>
                            <p className="text-white">D-68161 Mannheim</p>
                            <p className="text-white">E-Mail: jonas.haberditzl@gmail.com</p>
                        </Box>
                        <p className="text-white">mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder
                            E-Mail)
                            über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das
                            beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
                        <p/>
                        <p className="text-white">Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
                            Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
                        <p/>
                        <h4 className="text-white">Widerrufsfolgen</h4>
                        <p/>
                        <p className="text-white">Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
                            erhalten
                            haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
                            daraus
                            ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste
                            Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem
                            Tag
                            zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
                            eingegangen
                            ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
                            ursprünglichen
                            Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes
                            vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
                        <p/>
                        <p className="text-white">Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen soll, so
                            haben
                            Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem
                            Sie
                            uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits
                            erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen
                            Dienstleistungen entspricht.</p>
                        <p/>
                        <p className="text-white">Ende der Widerrufsbelehrung</p>
                        <p/>
                        <p className="text-white">*********************************************************************************************************************************************************************</p>
                        <h2 className="text-white">§7 Widerrufsformular</h2>
                        <p/>
                        <p className="text-white">(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden
                            Sie
                            es zurück.)</p>
                        <p className="text-white">An:</p>
                        <Box className="mainNameBox" sx={{fontStyle: "italic"}}>
                            <p className="text-white">Jonas Haberditzl</p>
                            <p className="text-white">U6 1</p>
                            <p className="text-white">D-68161 Mannheim</p>
                            <p className="text-white">E-Mail: jonas.haberditzl@gmail.com</p>
                        </Box>
                        <p/>
                        <p/>
                        <p className="text-white">Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf
                            der
                            folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</p>
                        <p/>
                        <p className="text-white">_____________________________________________________</p>
                        <p/>
                        <p className="text-white">Bestellt am (*)/erhalten am (*)</p>
                        <p/>
                        <p className="text-white">_____________________________________________________</p>
                        <p/>
                        <p className="text-white">Name des/der Verbraucher(s)</p>
                        <p/>
                        <p className="text-white">_____________________________________________________</p>
                        <p/>
                        <p className="text-white">Anschrift des/der Verbraucher(s)</p>
                        <p/>
                        <p className="text-white">_____________________________________________________</p>
                        <p/>
                        <p className="text-white">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
                        <p/>
                        <p className="text-white">_____________________________________________________</p>
                        <p/>
                        <p className="text-white">Datum</p>
                        <p/>
                        <p className="text-white">_____________________________________________________</p>
                        <p/>
                        <p className="text-white">(*) Unzutreffendes streichen.</p>
                    </Box>
                    <Box>
                        <p className="text-white">*********************************************************************************************************************************************************************</p>
                        <h4 className="text-white">Wichtige Anmerkung:</h4>
                        <p className="text-white">Die oben angegebenen Allgemeinen Geschäftsbedingungen haben keine Rechtsgültigkeit im Bezug
                            auf den Verkauf/die Ausleihe eines
                            Instruments, o.Ä. auf der Webseite angebotene Produkt und dienen nur der Anschaulichkeit
                            sowie realitätsnahen
                            Nachahmung einer realen Webseite. Jegliche Zahlungen auf dieser Webseite werden als
                            eine Spende
                            für unser Team und unser Projekt angesehen und dementsprechend nicht zurückerstattet. Eine
                            Spende ist komplett
                            freiwillig und der Spender erhält keinerlei Gegenleistung dafür. Wenn Sie die
                            Bezahlen-Transaktion abschließen,
                            bestätigen Sie, dass Sie der Eigentümer der bei dieser Transaktion gespendeten Gelder sind
                            und diese nicht abgehoben
                            / zurückgebucht werden können. Spenden sind nicht erstattungsfähig.
                        </p>
                    </Box>
                </Container>
            </Container>
        </div>
        </body>     
    );
}

export default AGBs;