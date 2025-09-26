import React from 'react';

// Ícones SVG para manter o componente autocontido
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-3 text-cyan-400">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const ScalpelIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 inline-block">
        <path d="M21.17 2.83a2.82 2.82 0 0 0-4-4L2.83 17.17a2.82 2.82 0 0 0 0 4l4.17 4.17a2.82 2.82 0 0 0 4 0L21.17 2.83z"/>
        <path d="m18 11-1.5-1.5"/>
        <path d="m15 8-1.5-1.5"/>
    </svg>
);


export default function SalesPage() {
    return (
        <div className="bg-[#0a0a0a] text-gray-300 font-sans">
            {/* Seção Hero */}
            <header className="relative min-h-screen flex items-center justify-center text-center overflow-hidden p-4">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop" 
                    alt="Ferramentas cirúrgicas em um fundo escuro"
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="relative z-20 max-w-4xl mx-auto container-glow bg-black/50 backdrop-blur-sm p-8 rounded-lg">
                    <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 text-cyan-glow leading-tight">
                        “Seu produto está respirando por aparelhos de hype barato. Eu sou o bisturi que corta a mentira e devolve vendas em até 72 horas.”
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        PainHunter™: o mentor maquiavélico que transforma promessas covardes em cicatrizes lucrativas, usando dor real como bisturi e promessa específica como sutura.
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-20">
                
                {/* Seção de Agitação da Dor */}
                <section>
                    <p className="text-xl leading-relaxed">
                        Seu produto está respirando por aparelhos de hype barato. O mercado olha para sua promessa e sente o mesmo que diante de um remédio homeopático em UTI: esperança frágil, sem resultado, sem vida.
                    </p>
                    <p className="mt-6 text-lg leading-relaxed text-gray-400">
                        Você já sentiu isso? Apresenta sua ideia e só recebe um “legal, mas não é pra mim”. Gasta horas escrevendo copy e tudo o que colhe são cliques vazios. Seu pitch soa igual ao de todos os outros, genérico, fraco, invisível. É como se você falasse em um corredor lotado e ninguém virasse o rosto. <span className="text-red-400 font-bold">Sua copy não está doente — ela já entrou em estado vegetativo.</span>
                    </p>
                     <p className="mt-6 text-lg leading-relaxed text-gray-400">
                        E ainda assim, você insiste. Contrata designers, muda o visual, investe em anúncios, mas a sensação é sempre a mesma: anúncios que acumulam cliques sem transação, vendas mortas em silêncio, promessa covarde que não passa do papel.
                    </p>
                    <p className="mt-8 text-xl leading-relaxed bg-gray-900/50 p-6 rounded-md border border-red-500/30">
                        Eu sei exatamente o que isso significa: seu produto não está morto, mas está em <span className="text-red-400 font-bold text-cyan-glow">coma induzido</span>. E se você não operar agora, vai apodrecer em silêncio, sufocado por promessas genéricas que nunca chegam a cicatrizar.
                    </p>
                </section>
                
                {/* Introdução do PainHunter */}
                <section className="text-center container-glow p-8 rounded-lg">
                     <img 
                        src="https://images.unsplash.com/photo-1618939304344-8034237b5d56?q=80&w=1944&auto=format&fit=crop" 
                        alt="Raio-X de um crânio"
                        className="w-full h-64 object-cover rounded-lg mb-8 opacity-70" 
                    />
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-cyan-glow">Eu sou o PainHunter™.</h2>
                    <p className="mt-4 text-xl leading-relaxed">
                        Não sou mais um copywriter motivacional. Sou o raio-X que revela o tumor de generalidades crescendo no seu pitch. Não coloco curativo em ferida aberta. <span className="font-bold">Eu corto até o osso.</span> Porque só depois do corte vem a cicatriz vendável.
                    </p>
                </section>

                {/* Como Funciona */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">O Procedimento: Simples e Brutal</h2>
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed">O que eu faço é simples — e brutal. Primeiro, abro a ferida. Nomeio a dor invisível que você tenta esconder até de si mesmo. Depois, conecto essa dor a frameworks que o mercado respeita: Schwartz, JTBD, Cialdini, Value Proposition Canvas. Em seguida, reescrevo sua promessa. Tiro a abstração, insiro carne, ossos e prazo. Headline, bullets, CTA — tudo ganha vida mensurável. Por fim, entrego prescrição prática em até 72h: táticas claras, teste A/B, oferta mínima, KPIs. Não é poesia, é bisturi.</p>
                        <p className="mt-6 text-xl text-center font-bold text-cyan-400 p-6 bg-gray-900/50 rounded-lg border border-cyan-700/50">
                            E aqui está a verdade que ninguém te disse: clientes não compram soluções. Eles compram o fim da dor que escondem em silêncio. Quando sua promessa é genérica, ela soa como anestesia fraca — não alcança o nervo. Quando sua promessa é específica, ela vira o corte exato que o cliente implora para pagar. É nesse ponto que eu entro.
                        </p>
                    </div>
                </section>

                {/* Resultados */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">Resultados Pós-Cirúrgicos</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700"><CheckIcon /> <h3 className="text-xl font-bold mb-2">Clareza Imediata</h3><p>Você entende exatamente por que não vendia.</p></div>
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700"><CheckIcon /> <h3 className="text-xl font-bold mb-2">Promessa Irresistível</h3><p>Específica, mensurável, testável.</p></div>
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700"><CheckIcon /> <h3 className="text-xl font-bold mb-2">Conversão Acelerada</h3><p>Leads e vendas sobem porque a promessa deixa de ser placebo.</p></div>
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700"><CheckIcon /> <h3 className="text-xl font-bold mb-2">Status Brutal</h3><p>Você deixa de ser mais um e passa a ser o especialista que sangra autoridade.</p></div>
                    </div>
                </section>

                {/* Testemunhos */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">Cortes Anteriores</h2>
                    <div className="space-y-8">
                        <div className="bg-black/30 p-6 rounded-lg border border-cyan-900 text-center italic">
                            <p className="text-xl">“Em 7 dias, reformulamos nossa promessa e fechamos R$18k em novos contratos.”</p>
                            <p className="mt-4 font-bold text-cyan-400">— João, SaaS B2B</p>
                        </div>
                        <div className="bg-black/30 p-6 rounded-lg border border-cyan-900 text-center italic">
                            <p className="text-xl">“Minha oferta saiu do estado vegetativo e começou a vender em 10 dias.”</p>
                            <p className="mt-4 font-bold text-cyan-400">— Carla, Consultoria Online</p>
                        </div>
                    </div>
                </section>
                
                {/* Oferta/Planos */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">Níveis de Intervenção Cirúrgica</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="container-glow bg-[#111111] p-8 rounded-lg flex flex-col">
                            <h3 className="text-2xl font-bold text-cyan-400">Diagnóstico Rápido</h3>
                            <p className="text-gray-400 mt-2">72 horas</p>
                            <p className="mt-4 flex-grow">Raio-X da promessa, nova headline e bullets que respiram vendas, e um plano de teste A/B.</p>
                            <button className="mt-6 w-full btn-primary py-2 rounded-md">Agendar Diagnóstico</button>
                        </div>
                        <div className="container-glow bg-[#111111] p-8 rounded-lg flex flex-col border-2 border-cyan-400 shadow-lg shadow-cyan-400/20">
                             <p className="text-center font-bold text-cyan-300 mb-2">MAIS REQUISITADO</p>
                            <h3 className="text-2xl font-bold text-cyan-300">Cirurgia Completa</h3>
                            <p className="text-gray-400 mt-2">14 dias</p>
                            <p className="mt-4 flex-grow">Entrevistas JTBD, reescrita da sua landing page e anúncios prontos para tráfego.</p>
                             <button className="mt-6 w-full btn-primary py-2 rounded-md bg-cyan-500 hover:bg-cyan-400">Iniciar Cirurgia</button>
                        </div>
                        <div className="container-glow bg-[#111111] p-8 rounded-lg flex flex-col">
                            <h3 className="text-2xl font-bold text-cyan-400">UTI Comercial</h3>
                            <p className="text-gray-400 mt-2">30 dias</p>
                            <p className="mt-4 flex-grow">Acompanhamento semanal, sequências de e-mails, roteiro de objeções e ajuste fino da oferta.</p>
                             <button className="mt-6 w-full btn-primary py-2 rounded-md">Requisitar UTI</button>
                        </div>
                    </div>
                </section>

                {/* Garantia */}
                <section className="text-center p-8 bg-gray-900/50 rounded-lg border border-gray-700">
                    <h3 className="text-2xl font-bold">Garantia de Cicatriz</h3>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">E se, mesmo após a cirurgia, sua promessa continuar genérica, eu reescrevo sem custo. Porque promessa sem cicatriz é fraude.</p>
                </section>

                {/* CTA Final */}
                <section className="text-center container-glow p-10 rounded-lg">
                    <h2 className="text-3xl font-bold">A decisão está na sua mesa cirúrgica.</h2>
                    <p className="mt-4 text-lg">O bisturi está pronto, a sala já está iluminada, e só restam <span className="text-cyan-400 font-bold">cinco vagas</span> de diagnóstico por mês. Você pode continuar fingindo que sua oferta vai se curar sozinha, ou pode escolher a cicatriz que vai transformar seu produto em uma arma irresistível de venda.</p>
                    <button className="mt-8 btn-primary text-xl font-bold px-10 py-4 rounded-md animate-pulse">
                        <ScalpelIcon /> Agende agora seu diagnóstico com o PainHunter™.
                    </button>
                    <p className="mt-6 font-bold text-red-400">Ou você cauteriza essa ferida hoje, ou assiste a necrose se espalhar amanhã.</p>
                </section>
            </main>
        </div>
    );
}
