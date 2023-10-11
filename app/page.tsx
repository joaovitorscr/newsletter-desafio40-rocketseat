import newsIcon from 'public/images/newsIcon.png'
import reviewsIcon from 'public/images/reviewsIcon.png'
import tipsIcon from 'public/images/tipsIcon.png'
import salesIcon from 'public/images/salesIcon.png'
import Image from 'next/image'
import setups from 'public/images/setups.png'
import arrowIcon from 'public/images/arrow.png'

export default function Home() {
  return (
    <main className="relative bg-black h-screen text-white">
      <div className="absolute top-0 right-0">
        <Image className="w-[704px] h-[100vh]" src={setups} alt="setups" />
      </div>
      <div className="py-[160px] px-[112px]">
        <div className="w-[1216px] m-auto">
          <section className="max-w-[482px]">
            <h3 className="tagline uppercase">Newsletter exclusiva</h3>
            <h1 className="heading-h1 mt-4">Workspace inspiration</h1>
            <h2 className="paragraph-18 mt-8 max-w-[445px] text-xl text-gray">
              Assine nossa newsletter e transforme seu espaço de trabalho em um
              oásis de produtividade!
            </h2>
            <form className="mt-8 flex">
              <input
                className="w-[291px] h-[58px] p-4 border-double border-transparent border-2 mr-2 bg-[#202024] rounded-md outline-none focus:input-border"
                type="text"
                placeholder="Digite seu e-mail"
              />
              <button
                className="purple-linear rounded-md h-[58px] p-4 text-black text-sm font-bold uppercase"
                type="submit"
              >
                <span className="flex items-center">
                  Quero Receber
                  <Image className="w-2 h-3 ml-3" src={arrowIcon} alt="" />
                </span>
              </button>
            </form>
          </section>
          <section className="flex justify-between items-center mt-40">
            <div className="mr-5">
              <Image src={newsIcon} width={48} height={48} alt="News" />
              <h2 className="mt-4 font-bold">As últimas inovações</h2>
              <p className="text-gray paragraph-14">
                Mantenha-se atualizado com as mais recentes tecnologias e
                acessórios que vão revolucionar a forma como você trabalha.
              </p>
            </div>
            <div className="mr-5">
              <Image src={reviewsIcon} width={48} height={48} alt="Reviews" />
              <h2 className="mt-4 font-bold">Reviews detalhadas</h2>
              <p className="text-gray paragraph-14">
                Analisamos os produtos mais populares do mercado para que você
                possa fazer as escolhas certas.
              </p>
            </div>
            <div className="mr-5 z-10">
              <Image src={tipsIcon} width={48} height={48} alt="Tips" />
              <h2 className="mt-4 font-bold">Dicas de organização</h2>
              <p className="text-gray paragraph-14 ">
                Aumente sua eficiência e proteja sua saúde com conselhos
                especializados sobre ergonomia e organização.
              </p>
            </div>
            <div className="mr-5 z-10">
              <Image src={salesIcon} width={48} height={48} alt="Sales" />
              <h2 className="mt-4 font-bold">Ofertas exclusivas</h2>
              <p className="text-gray paragraph-14">
                Como membro da nossa comunidade, você terá acesso a descontos e
                promoções especiais em produtos selecionados.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
