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
        text={"Depois de cursar Técnico em Informática no SENAC, percebi que queria seguir carreira como programador. Foi então que descobri o curso que faço hoje, e aquilo realmente me fez brilhar os meus olhos. Prestei o vestibular duas vezes, mas não consegui a aprovação. Na terceira tentativa, enfrentei um novo desafio: não tinha dinheiro para pagar a inscrição. Para resolver esse problema decidi vender capas de celular com um vendedor próximo de casa e, após algumas conversas, ele acreditou em mim e comprou as capas pelo valor necessário para que eu pudesse pagar o vestibular. Quando finalmente fui aprovado, a sensação foi indescritível. Foi um momento de muita felicidade e a confirmação de que todo esforço valeu a pena."}
        avatar={"/phases/college.png"}
        />

        <HistoryLine text={"Primeiro emprego..."}/>

        <HistoryCard
        subtitle="2023 - 2024..."
        text={"Depois de diversos projetos de software pessoais finalizados e minha curiosidade alimentada me senti preparado para trabalhar. E o meu primeiro emprego como back-end foi um divisor de águas. Senti um frio na barriga ao ver meu código sendo usado em sistemas reais de RH. Aprendi que programar é, acima de tudo, ouvir as pessoas e transformar necessidades em soluções que facilitem a vida delas."}
        avatar={"/phases/first-programming-job.png"}
        />

        <HistoryLine text={"Experiência com estágio..."}/>

        <HistoryCard
        subtitle="2024 - 2025..."
        text={"Ingressei no meu primeiro estágio. Lá eu entendi o peso da responsabilidade ao lidar com sistemas usados por milhares de pessoas. Foi um período de muito crescimento técnico com Linux e Docker, mas também de aprender a ouvir feedbacks com humildade e foco total em quem está do outro lado da tela."}
        avatar={"/phases/interning.png"}
        />

        <HistoryLine text="Evolução constante..."/>

        <HistoryCard
        subtitle="2025 - 2026..."
        text={"Atualmente trabalho com desenvolvimento de software como autônomo, resolvendo problemas reais de clientes. Isso me motiva bastante, pois consigo ver o resultado direto do meu trabalho: os clientes ficam satisfeitos e as soluções que desenvolvo realmente fazem diferença para eles. Uma área com a qual tenho bastante contato é a de pagamentos. Já trabalhei com diferentes gateways e checkouts, como Vindi, Safra, Asaas e Stripe, o que me proporcionou uma boa vivência prática nesse tipo de solução. Atualmente, no projeto em que estou atuando, trabalho diretamente com o checkout de um sistema de assinaturas de um cliente. Esse ponto é bastante relevante na minha trajetória. Antes da minha entrada, o checkout apresentava diversos problemas de performance. Era lento, não escalava bem e tinha dificuldade para processar um volume maior de assinaturas. Ele estava entrando problemas com a plataforma provedora. Após minha atuação e as melhorias implementadas, consegui aumentar a performance entre 40% e 60%. Isso gerou um impacto direto no negócio, pois hoje o sistema consegue processar mais de 60 mil assinaturas por mês de forma muito mais eficiente."}
        avatar={"/phases/final-expression.png"}
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

            <p className="font-bold text-center">Neste ano, eu sei qual é meu próximo passo!</p>

        </div>



      </div>
  );
}
