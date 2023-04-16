import React from 'react';
import {useNavigate} from "react-router-dom";
import {Container} from "@mui/material";
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
                        <p className="text-white">(1) Die nachfolgenden Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen
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
                        <p className="text-white">(1) Die folgenden Regelungen über den Vertragsabschluss gelten für Verträge über unseren
                            online
                            Fahrradverleih.</p>
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
                        <h2 className="text-white">§3 Mietdauer</h2>
                        <p/>
                        <p className="text-white">(1) Die Mietdauer beginnt und endet zu den im Mietvertrag vereinbarten Zeiten. Falls der Mieter das Fahrrad später als vereinbart zurückbringt, wird eine zusätzliche Gebühr pro Stunde fällig. Bei verspäteter Rückgabe von mehr als 24 Stunden wird ein Tagessatz fällig.</p>
                        <p/>
                        <p/>
                        <h2 className="text-white">§4 Sicherheit</h2>
                        <p/>
                        <p className="text-white">
                        Der Mieter ist dafür verantwortlich, das Elektrofahrrad und das Zubehör sicher aufzubewahren und gegen Diebstahl und Beschädigung zu schützen. Der Mieter sollte das Fahrrad nicht unbeaufsichtigt lassen, wenn es nicht ordnungsgemäß gesichert ist. Der Mieter sollte das Fahrrad auch nur für den vorgesehenen Zweck verwenden und sollte keine Änderungen am Fahrrad vornehmen.</p>
                        <p/>
                        <p className="text-white">*********************************************************************************************************************************************************************</p>
                        <p/>
                        <h2 className="text-white">§5 Haftung</h2>
                        <p/>
                        <p className="text-white">Der Mieter ist für alle Schäden verantwortlich, die während der Mietdauer am Fahrrad oder Zubehör entstehen. Der Mieter haftet auch für Schäden, die durch unsachgemäße Verwendung oder Missachtung der Verkehrsregeln verursacht werden. Der Mieter sollte eine eigene Haftpflichtversicherung abschließen, um Schäden zu decken, die durch seine Fahrlässigkeit entstehen.</p>
                        <p/> 
                        <h2 className="text-white">§6 Rückgabe</h2>
                        <p/>
                        <p className="text-white">Das Elektrofahrrad und das Zubehör müssen bei Rückgabe in dem Zustand zurückgegeben werden, in dem sie ausgegeben wurden. Bei Beschädigung oder Verlust von Fahrrad oder Zubehör wird der Mieter für die Reparatur- oder Ersatzkosten haftbar gemacht.</p>
                        <p/>
                        <h2 className="text-white">§7 Stornierungsbedingung</h2>
                        <p/>
                        <p className="text-white">Eine Stornierung der Reservierung muss mindestens 24 Stunden vor dem geplanten Mietbeginn erfolgen, um eine volle Rückerstattung des Mietpreises zu erhalten. Bei einer Stornierung innerhalb von 24 Stunden vor dem Mietbeginn wird eine Stornogebühr fällig.</p>
                        <p/>
                        <h2 className="text-white">§8 Datenschutz</h2>
                        <p/>
                        <p className="text-white">Der Verleih stellt sicher, dass alle persönlichen Informationen der Kunden vertraulich behandelt werden und nicht an Dritte weitergegeben werden.</p>
                        <p/>
                        
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