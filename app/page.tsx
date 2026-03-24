'use client'

import { useTheme } from "@/component/ThemeContext";
import HistoryCard from "@/component/HistoryCard";
import HistoryLine from "@/component/HistoryLine";
import Introduction from "@/component/Introduction";

export default function Home() {

  const {companyImg, companyImgWidth, companyImgHeight} = useTheme();

  return (
      <div className="flex justify-center items-center m-5 flex-col">

        <Introduction/>

        <HistoryCard 
        subtitle="2012 - 2016..."
        text={"Minha curiosidade pela tecnologia começou cedo. Lembro da satisfação que sentia ao resolver um problema no computador da família ou instalar um mod novo em um jogo. Aquela facilidade natural com o digital me deu a certeza, ainda criança, de que esse era o meu mundo."} 
        avatar={"/phases/children.png"}/>

        <HistoryLine text={"Na minha adolescência..."}/>

        <HistoryCard
        subtitle="2017 - 2019..."
        text={"Na adolescência, essa curiosidade virou estudo. Ganhei meu primeiro desktop e, em vez de apenas usar, eu queria entender como ele funcionava por dentro. Montar e desmontar aquele PC foi minha primeira grande escola de lógica e paciência."}
        avatar={"/phases/teenager.png"}
        />

        <HistoryLine text={"O sonho da faculdade..."}/>

        <HistoryCard
        subtitle="2020 - 2023..."
        text={"Depois de cursar Técnico em Informática no SENAC, percebi que queria seguir carreira como programador. Foi então que descobri o curso que faço hoje, e aquilo realmente me brilhou os olhos. Prestei o vestibular duas vezes, mas não consegui a aprovação. Na terceira tentativa, enfrentei um novo desafio: não tinha dinheiro para pagar a inscrição. Decidi então agir. Passei a vender capas de celular com um vendedor próximo de casa e, após algumas conversas, ele acreditou em mim e comprou as capas pelo valor necessário para que eu pudesse pagar o vestibular. Quando finalmente fui aprovado, a sensação foi indescritível. Foi um momento de muita felicidade e a confirmação de que todo esforço valeu a pena."}
        avatar={"/phases/college.png"}
        />

        <HistoryLine text={"Primeiro emprego..."}/>

        <HistoryCard
        subtitle="2023 - 2024..."
        text={"Meu primeiro emprego como Back-end foi um divisor de águas. Senti um frio na barriga ao ver meu código sendo usado em sistemas reais de RH. Aprendi que programar é, acima de tudo, ouvir as pessoas e transformar necessidades em soluções que facilitem a vida delas."}
        avatar={"/phases/first-programming-job.png"}
        />

        <HistoryLine text={"Experiência com estágio..."}/>

        <HistoryCard
        subtitle="2024 - 2025..."
        text={"Depois disso ingressei no meu primeiro estágio. Lá eu entendi o peso da responsabilidade ao lidar com sistemas usados por milhares de pessoas. Foi um período de muito crescimento técnico com Linux e Docker, mas também de aprender a ouvir feedbacks com humildade e foco total em quem está do outro lado da tela."}
        avatar={"/phases/interning.png"}
        />

        <HistoryLine text={"E agora..."}/>

        <div className="flex flex-col items-center justify-center">

            <img
              src={companyImg}
              alt={"Imagem da empresa"}
              width={companyImgWidth}
              height={companyImgHeight}
              className="m-5"
            />

            <p>Neste ano, eu sei qual é meu próximo passo!</p>

        </div>



      </div>
  );
}
