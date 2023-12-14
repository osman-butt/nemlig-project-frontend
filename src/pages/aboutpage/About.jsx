import aboutimage from "../../assets/about.jpg";

export default function About() {
  return (
    <div className="max-w-[1240px] mx-auto px-2">
      <img className="py-4 rounded-3xl" src={aboutimage} alt="aboutimage" />
      <div className="flex flex-col py-6 mb-6 bg-white rounded-lg">
        <h1 className="text-3xl text-center font-bold text-[#d4793a]">Om os</h1>
        <p className="px-4 py-2 text-left ">
          Vi er en virksomhed, der arbejder ud fra ambitiøse mål og et brændende
          engagement. Vi har et stort fokus på at gøre en forskel i vores
          kunders hverdagsliv. Derfor ønsker vi at levere gode løsninger, som
          kommer vores kunde til gode. <br /> <br /> Vi har en uformel kultur
          med højt til loftet og en holdning til, at udfordringer løses bedst
          tættest på stedet, hvor de opstår. Det betyder også, at der hos os
          ikke er langt fra tanke til handling. Vi er gode til at tage hurtige
          beslutninger, og de gode ideer kan komme fra alle, uanset om man er
          studentermedhjælper, IT-specialist eller områdedirektør. Virksomheden
          drives af høj energi, og der er aldrig to dage, der er ens. <br />{" "}
          <br /> Vores kultur er præget af et godt socialt samarbejde og
          kollegaskab. Vi har en uformel og åbenhjertig omgangstone, og vi tror
          på, at man med åbenhed og ærlighed kan løse selv de sværeste
          udfordringer. <br /> <br /> Vi har fire værdier, som danner grundlag
          for vores arbejde:{" "}
          <span className="text-lg font-bold">
            {" "}
            Sund fornuft, Fokus, Service{" "}
          </span>
          og
          <span className="text-lg font-bold"> Tryghed.</span> Vi bruger
          nøgleordet sund fornuft i alle daglige arbejdsprocesser. Det hjælper
          os til at tænke logisk i forhold til de udfordringer, som vi møder i
          vores arbejdsdag. Vi sætter fokus på kunden og yder en service, der
          giver plads til vores kunders individuelle behov. Herved opnås
          grundlaget for et godt samarbejde i organisationen, som skaber tryghed
          for både vores kolleger og kunder.
        </p>
      </div>
    </div>
  );
}
