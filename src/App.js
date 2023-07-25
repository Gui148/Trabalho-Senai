import React from 'react';
import InfoGrafico from './components/img/infografico.png';
import Video from 'https://youtu.be/MJk7wr8XUT8';
import Audio from '';

function App() {
  return (
    <div className="bg-[#253140] text-white p-6">
      <div id="infografico" className="flex justify-center flex-col items-center">
        <h1 className="font-bold text-center text-3xl mb-5 max-md:text-xl">INFOGRAFICO</h1>
        <img src="/img/infografico.png" className="w-[900px]  h-full" alt="InfoGrafico" title="InfoGrafico"/>
        <hr className=""/>
      </div>
      <div id="minivideo" className=" "></div>
      <div className="mt-28">
        <h1 className="text-center text-3xl font-bold mb-10 ">Video</h1>
        <div className="flex gap-10 mt-5 max-lg:flex-col max-lg:items-center">
          <p className="text-left text-sm max-md:text-xs">Nervosismo é algo comum a todos nós, principalmente em situações importantes, como entrevistas de emprego, apresentações e reuniões cruciais. No entanto, é essencial aprender a controlar essa ansiedade para transmitir confiança e segurança aos outros. Neste vídeo, compartilharemos técnicas práticas e eficazes para lidar com o nervosismo, desde exercícios de respiração até dicas para se preparar adequadamente e enfrentar o momento com tranquilidade.<br/>
            <br/>

          Além disso, abordaremos a importância da linguagem verbal e não verbal no ambiente de trabalho. A comunicação vai muito além das palavras que pronunciamos. Expressões faciais, postura, gestos e até mesmo o tom de voz têm um impacto significativo na forma como somos percebidos pelos colegas e superiores. Compreender como utilizar a linguagem corporal de forma positiva e alinhá-la à mensagem verbal pode fazer toda a diferença em nossas interações profissionais, contribuindo para construir relações mais harmoniosas e produtivas no ambiente de trabalho. <br/>
            <br/>

          Assista a este vídeo e descubra como desenvolver essas habilidades essenciais para o crescimento profissional. Você aprenderá a dominar o nervosismo e aprimorar sua comunicação não verbal, elevando sua confiança e impacto em qualquer contexto de trabalho. Venha conosco nessa jornada rumo ao sucesso no mundo profissional!
          </p>
          <video src={Video} width={720} height={1280} controls >
          </video>
        </div>
      </div>
      <div id="podcast" className=""></div>
      <div className="mt-28">
        <h1 className="text-center text-3xl font-bold">PodCast</h1>
        <div  className="flex gap-10 justify-center items-center mt-10 max-lg:flex-col ">
          <audio src={Audio} controls  className="max-lg:w-2/4 w-2/6"></audio>
          <a className="flex max-w-2xl max-lg:max-w-xl">
            Bem-vindos ao podcast Desafio no Palco! Se você já sentiu o coração acelerar antes de subir ao palco ou enfrentar uma plateia, este é o lugar certo para você.
            <br/>
            <br/>
            Neste podcast, vamos explorar um tema que é desafiador para muitos, mas essencial em diversas áreas da vida: a arte de fazer apresentações em público. Seja para uma palestra, uma reunião de negócios ou até mesmo um discurso em eventos sociais, todos nós enfrentamos momentos em que precisamos nos destacar e transmitir nossa mensagem com clareza e confiança.<br/>
            <br/>
            Compartilhando experiências pessoais e conhecimentos práticos, nossos especialistas irão fornecer dicas valiosas para que você aprimore suas habilidades de apresentação. Aprenda a superar o nervosismo, dominar o conteúdo, envolver o público e desenvolver uma linguagem corporal persuasiva.
            <br/>
            <br/>
            Além disso, vamos discutir técnicas para se conectar melhor com a audiência, entender suas necessidades e adaptar sua abordagem para garantir que sua mensagem seja compreendida e bem recebida.
            <br/>
            <br/>
            Se você é um estudante, profissional ou apenas alguém em busca de autoaperfeiçoamento, nossos episódios curtos e dinâmicos de dois minutos são perfeitos para se encaixar em sua rotina diária.
            <br/>
            <br/>
            Então, junte-se a nós no Desafio no Palco e descubra como se tornar um apresentador mais confiante e impactante. Vamos enfrentar esse desafio juntos!
            <br/>
            <br/>
            Prepare-se para brilhar no palco da vida!
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
